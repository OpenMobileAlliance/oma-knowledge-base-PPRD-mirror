<template>
    <div class="w-full h-full aspect-video">
        <video v-if="!isYouTube" ref="videoEl" class="w-full h-full object-cover" :src="src" :poster="poster"
            playsinline muted @ended="onNativeEnded" />

        <iframe v-else ref="iframeEl" class="w-full h-full" :src="youTubeEmbedUrl" frameborder="0"
            allow="autoplay; encrypted-media" allowfullscreen />
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    src: string
    poster?: string
    shouldPlay?: boolean
}>()

const emit = defineEmits(['video-ended'])


const videoEl = ref<HTMLVideoElement | null>(null)
const iframeEl = ref<HTMLIFrameElement | null>(null)

const isYouTube = computed(() =>
    props.src.includes("youtube") || props.src.includes("youtu.be")
)

const youTubeEmbedUrl = computed(() => {
    if (!isYouTube.value) return ""
    const id = props.src.includes("youtube.com")
        ? new URL(props.src).searchParams.get("v")
        : props.src.split("/").pop()
    // no autoplay flag here—control via postMessage
    return `https://www.youtube.com/embed/${id}?enablejsapi=1&mute=1`
})

// native video end
function onNativeEnded() {
    emit("video-ended")
}

// watch shouldPlay to play/pause
watch(
    () => props.shouldPlay,
    (play) => {
        if (!isYouTube.value && videoEl.value) {
            play ? videoEl.value.play().catch(() => { }) : videoEl.value.pause()
        }
        if (isYouTube.value && iframeEl.value?.contentWindow) {
            iframeEl.value.contentWindow.postMessage(
                JSON.stringify({
                    event: "command",
                    func: play ? "playVideo" : "pauseVideo",
                    args: [],
                }),
                "*"
            )
        }
    }
)

// listen for YT stateChange → ended
function onMessage(event: MessageEvent) {
    // YouTube posts plain strings with event/info
    const data = typeof event.data === "string" ? event.data : JSON.stringify(event.data)
    if (
        data.includes('"event":"onStateChange"') &&
        data.includes('"info":0')
    ) {
        emit("video-ended")
    }
}

onMounted(() => {
    if (isYouTube.value) {
        window.addEventListener("message", onMessage)
    }
})

onBeforeUnmount(() => {
    if (isYouTube.value) {
        window.removeEventListener("message", onMessage)
    }
})
</script>
