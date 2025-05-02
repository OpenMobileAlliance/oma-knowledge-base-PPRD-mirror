<template>
  <div :class="ui.wrapper">
    <div v-if="title">
      <MDC :class="ui.title" :value="title" />
    </div>
    <div v-if="subtitle">
      <MDC :class="ui.subtitle" :value="subtitle" />
    </div>

    <div class="relative overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out" :style="carouselStyle">
        <div v-for="(group, slideIndex) in slides" :key="slideIndex"
          class="flex-shrink-0 w-full flex justify-center gap-4 px-4">
          <component v-for="(child, idx) in group" :key="idx" :is="child.type" v-bind="child.props"
            :shouldPlay="isVideo(child) && slideIndex === currentSlide" @video-ended="handleVideoEnded" class="w-full"
            :class="{
              'max-w-md': slidesPerView === 1,
              'max-w-sm': slidesPerView > 1
            }" />
        </div>
      </div>
    </div>

    <!-- dots -->
    <div :class="ui.navigation.wrapper">
      <button v-for="(_, idx) in totalSlides" :key="idx" @click="goToSlide(idx)" :class="[
        ui.navigation.inner,
        currentSlide === idx
          ? ui.navigation.active
          : ui.navigation.inactive
      ]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { carousel as config } from "@/ui.config"
import {
  ref,
  computed,
  toRef,
  onMounted,
  onBeforeUnmount,
  useSlots,
} from "vue"

const props = withDefaults(
  defineProps<{
    slides?: number
    timer?: number
    title?: string
    subtitle?: string
    ui?: Partial<typeof config>
  }>(),
  {
    ui: () => ({}),
    slides: 1,
    timer: 0,
    title: "",
    subtitle: "",
  }
)

const { ui } = useUI("sh-carousel", toRef(props, "ui"), config)
const slots = useSlots()

const currentSlide = ref(0)
let interval: NodeJS.Timeout | undefined = undefined

// grab raw VNodes + props
const allChildren = computed(() => slots.default?.() ?? [])
const slidesPerView = computed(() => props.slides!)
const slides = computed(() => {
  const arr = []
  for (let i = 0; i < allChildren.value.length; i += slidesPerView.value) {
    arr.push(allChildren.value.slice(i, i + slidesPerView.value))
  }
  return arr
})
const totalSlides = computed(() => slides.value.length)

// compute transform
const carouselStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
  transition: "transform 0.5s ease-in-out",
}))

function isVideo(child: any) {
  return (
    child.type?.name === "ShVideo" ||
    child.props?.src?.includes("youtube")
  )
}

function handleVideoEnded() {
  // move to next, loop at end
  const next = currentSlide.value + 1
  currentSlide.value = next < totalSlides.value ? next : 0
}

function goToSlide(idx: number) {
  currentSlide.value = idx
}

// optional timer fallback if no videos
onMounted(() => {
  const hasVideo = allChildren.value.some(isVideo)
  if (props.timer! > 0 && !hasVideo) {
    interval = setInterval(() => {
      handleVideoEnded()
    }, props.timer! * 1000)
  }
})
onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>
