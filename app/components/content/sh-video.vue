<template>
    <div :class="ui.wrapper">
        <video v-if="!isYouTubeVideo" controls class="my-[2em]">
            <source :src="videoSource" :type="videoType" />
            Your browser does not support the video tag.
        </video>
        <iframe v-else :src="videoSource" frameborder="0" allowfullscreen width="100%" height="700"></iframe>
    </div>
</template>

<script setup lang="ts">
const config = {
    /** Defines the overall styling for the container that holds the video. */
    wrapper: "mx-5 ring-1 ring-neutral-300 dark:ring-neutral-700",
}

const props = withDefaults(
    defineProps<{
        description?: string;
        /** The source URL of the video to be embedded. This property is mandatory. */
        src: string;
        ui?: Record<string, any>;
    }>(),
    {
        ui: undefined,
        src: "",
        description: "",
    });

const ui = computed(() => mergeUi(config, props.ui));

const isYouTubeVideo = computed(() => isYouTubeVideoCheck(props.src));
const videoType = ref("");
const videoSource = computed(() => {
    if (isYouTubeVideo.value) {
        videoType.value = "text/html";
        return `https://www.youtube.com/embed/${getYouTubeVideoId(props.src)}`;
    } else {
        videoType.value = "video/mp4"; // Update with appropriate MIME type
        return props.src;
    }
});

const isYouTubeVideoCheck = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
};

const getYouTubeVideoId = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    return match ? match[1] : null;
};
</script>
