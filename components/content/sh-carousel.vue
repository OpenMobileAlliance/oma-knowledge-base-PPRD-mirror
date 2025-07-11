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
        <div v-for="(group, slideIndex) in slidesWithClone" :key="slideIndex"
          class="flex-shrink-0 w-full flex justify-center gap-4 px-4">
          <component v-for="(child, idx) in group" :key="idx" :is="child.type" v-bind="child.props" class="w-full"
            :class="{
              'max-w-md': slidesPerView === 1,
              'max-w-sm': slidesPerView > 1
            }"
            @videoPlayed="handleVideoPlayed"
            @videoEnded="handleVideoEnded"
          />
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

// In template, clone the first slide at the end for seamless loop
const slidesWithClone = computed(() => {
  // Only clone the first group at the end for seamless loop
  return [...slides.value, slides.value[0]]
})

const carouselStyle = computed(() => {
  // Always use transition except for instant jump
  let slide = currentSlide.value
  let transition = transitioning.value ? "transform 0.5s ease-in-out" : "none"
  return {
    transform: `translateX(-${slide * 100}%)`,
    transition,
  }
})

const transitioning = ref(true)

function handleTimeout() {
  // If at last real slide, animate to clone (last+1)
  if (currentSlide.value === totalSlides.value - 1) {
    transitioning.value = true
    currentSlide.value++
    // After transition, jump instantly (no transition) to real first slide
    setTimeout(() => {
      transitioning.value = false
      currentSlide.value = 0
    }, 500) // match transition duration
  } else {
    transitioning.value = true
    currentSlide.value++
  }
}

function goToSlide(idx: number) {
  transitioning.value = true
  currentSlide.value = idx
}

const handleVideoInteraction = () => {
  if (interval) {
    clearInterval(interval)
    interval = undefined
  }
}

const handleVideoPlayed = () => {
  if (interval) {
    clearInterval(interval)
    interval = undefined
  }
}

const handleVideoEnded = () => {
  if (!interval && props.timer! > 0) {
    interval = setInterval(() => {
      handleTimeout()
    }, props.timer! * 1000)
  }
}

// always use timer if set
onMounted(() => {
  if (props.timer! > 0) {
    interval = setInterval(() => {
      handleTimeout()
    }, props.timer! * 1000)
  }
})
onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>
