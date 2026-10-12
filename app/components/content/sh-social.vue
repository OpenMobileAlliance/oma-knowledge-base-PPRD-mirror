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
            <iframe
                :class="ui.linkedin"
                :src="src"
                :width="width"
                :height="650"
                frameborder="0"
                allowfullscreen="true"
                title="Embedded post"
            ></iframe>
        </div>
        <div v-else-if="isTwitter">
            <!-- NuxtTweet came from nuxt-testimonial (dropped), so use X's own embed -->
            <iframe
                :class="ui.twitter"
                :src="`https://platform.twitter.com/embed/Tweet.html?id=${src}&theme=${colorMode.value === 'dark' ? 'dark' : 'light'}`"
                :width="width"
                :height="650"
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
    linkedin: "",
    /** Additional styling for X (Twitter) posts. */
    twitter: "rounded-md",
}

const props = withDefaults(
    defineProps<{
        description?: string;
        /** The source URL of the Social Media post; Facebook, LinkedIn, X (formally Twitter) to be displayed. */
        src?: string;
        /** The width of the embedded Facebook or LinkedIn iframe. */
        width?: string;
        /** The height of the embedded post. Note the Facebook and LinkedIn iframes use fixed heights (410 and 650) regardless of this value. */
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
</script>
