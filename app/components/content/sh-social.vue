<template>
    <div :class="ui.wrapper">
        <div v-if="isFacebook">
            <iframe
                :class="ui.facebook"
                :src="src"
                :width="width"
                :height="410"
                style="overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
        <div v-else-if="isLinkedin">
            <!-- The iframe is cross-origin, so its scrollbar can't be styled: widen it by the scrollbar width and clip the overflow. -->
            <div :class="ui.linkedinWrapper" :style="{ width: `${Number(width)}px`, maxWidth: '100%' }">
                <iframe
                    :class="ui.linkedin"
                    :src="src"
                    :width="Number(width) + scrollbarWidth"
                    :height="650"
                    :style="{ colorScheme: 'light' }"
                    frameborder="0"
                    allowfullscreen="true"
                    title="Embedded post"
                ></iframe>
            </div>
        </div>
        <div v-else-if="isTwitter">
            <!-- NuxtTweet came from nuxt-testimonial (dropped), so use X's own embed -->
            <iframe
                ref="twitterFrame"
                :class="ui.twitter"
                :src="`https://platform.twitter.com/embed/Tweet.html?id=${src}&theme=${colorMode.value === 'dark' ? 'dark' : 'light'}`"
                :width="width"
                :height="twitterHeight"
                :style="{ colorScheme: colorMode.value === 'dark' ? 'dark' : 'light' }"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true"
                title="Embedded post"
            ></iframe>
        </div>
        <div v-else>No supported social media found.</div>
    </div>
</template>

<script setup lang="ts">
const config = {
    /** Defines the overall styling for the container that holds all the elements of the Social Media post. The attribute `shadow-xl` is used to provide a shadow effect around the wrapper. */
    wrapper: "flex p-4 justify-center",
    /** Additional styling for Facebook posts. */
    facebook: "bg-white dark:bg-white rounded-md border border-neutral-300",
    /** Additional styling for LinkedIn posts. */
    linkedin: "max-w-none",
    /** Clips the LinkedIn iframe to rounded corners and hides its scrollbar. */
    linkedinWrapper: "overflow-hidden rounded-[14px] bg-white",
    /** Additional styling for X (Twitter) posts. */
    twitter: "rounded-[14px]",
}

const props = withDefaults(
    defineProps<{
        description?: string;
        /** The source URL of the Social Media post; Facebook, LinkedIn, X (formally Twitter) to be displayed. */
        src?: string;
        /** The width of the embedded Facebook or LinkedIn iframe. */
        width?: string;
        /** The height of the embedded post. Initial height for X posts, which then auto-resize to fit the post. Facebook and LinkedIn iframes use fixed heights (410 and 650) regardless of this value. */
        height?: string;
        ui?: Record<string, any>;
    }>(),
    {
        ui: undefined,
        description: "",
        src: "",
        width: "500",
        height: "",
    }
);

const colorMode = useColorMode();
const ui = computed(() => mergeUi(config, props.ui));

// Computed properties to determine social media type
const isFacebook = computed(() => /facebook/i.test(props.src));
const isLinkedin = computed(() => /linkedin/i.test(props.src));
const isTwitter = computed(() => /^\d+$/.test(props.src));

// X's embed reports its content height via postMessage; follow it so the iframe fits the post.
const twitterFrame = ref<HTMLIFrameElement | null>(null);
const twitterHeight = ref(props.height || 650);

function onTwitterMessage(event: MessageEvent) {
    if (!twitterFrame.value || event.source !== twitterFrame.value.contentWindow) return;
    let data: any = event.data;
    if (typeof data === "string") {
        try {
            data = JSON.parse(data);
        } catch {
            return;
        }
    }
    const msg = data?.["twttr.embed"];
    if (msg?.method !== "twttr.private.resize") return;
    const height = Number(msg.params?.[0]?.height);
    if (height > 0) twitterHeight.value = Math.ceil(height);
}

// Width of the browser's classic scrollbar (0 for overlay scrollbars), used to push the LinkedIn iframe's scrollbar out of view.
const scrollbarWidth = ref(0);

onMounted(() => {
    window.addEventListener("message", onTwitterMessage);
    const probe = document.createElement("div");
    probe.style.cssText = "position:absolute;visibility:hidden;width:100px;height:100px;overflow:scroll";
    document.body.appendChild(probe);
    scrollbarWidth.value = probe.offsetWidth - probe.clientWidth;
    probe.remove();
});
onBeforeUnmount(() => window.removeEventListener("message", onTwitterMessage));
</script>
