<template>
    <div :class="ui.wrapper">
        <div v-if="isYouTube" class="flex justify-center">
            <iframe ref="iframeEl" class="rounded-lg" :src="youTubeEmbedUrl" width="560" height="315" frameborder="0"
                allow="encrypted-media" allowfullscreen @load="setupYouTubeListener"></iframe>
        </div>

        <video v-else ref="videoEl" class="w-full h-auto object-cover rounded-lg" :src="src" :poster="poster"
            playsinline muted @play="emitVideoPlayed" @click="playVideoOnClick" @ended="emitVideoEnded"></video>
    </div>
</template>

<script setup lang="ts">
import { video as config } from "@/ui.config"

const props = withDefaults(
    defineProps<{
        description?: string
        src: string
        poster?: string
        ui?: Partial<typeof config>
    }>(),
    {
        ui: () => ({}),
        src: "",
        poster: "",
        description: "",
    }
)

const { ui } = useUI("sh-video", toRef(props, "ui"), config)


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

function emitVideoEnded() {
    emit("videoEnded")
}

const emit = defineEmits(["videoPlayed", "videoEnded"])

function emitVideoPlayed() {
    emit("videoPlayed")
}

function playVideoOnClick() {
    if (videoEl.value && videoEl.value.paused) {
        videoEl.value.play()
    }
    emitVideoPlayed()
}

function setupYouTubeListener() {
    if (!iframeEl.value) return
    window.addEventListener("message", handleYouTubeMessage)
}

function handleYouTubeMessage(event: MessageEvent) {
    if (!iframeEl.value) return
    if (event.source !== iframeEl.value.contentWindow) return
    try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data
        if (data?.event === "onStateChange") {
            if (data?.info === 1) { // 1 = playing
                emitVideoPlayed()
            } else if (data?.info === 0) { // 0 = ended
                emitVideoEnded()
            }
        }
    } catch (e) { }
}

onMounted(() => {
    // If YouTube, inject API enablement
    if (isYouTube.value && iframeEl.value) {
        // Post message to enable API (should already be enabled by embed URL)
    }
})

onBeforeUnmount(() => {
    window.removeEventListener("message", handleYouTubeMessage)
})
</script>
