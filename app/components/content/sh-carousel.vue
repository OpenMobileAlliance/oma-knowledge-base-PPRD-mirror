<template>
  <div :class="ui.wrapper">
    <div v-if="title">
      <MDC :class="ui.title" :value="title" />
    </div>
    <div v-if="subtitle">
      <MDC :class="ui.subtitle" :value="subtitle" />
    </div>
    <div :class="ui.inner">
      <div :class="ui.track">
        <div v-for="(group, index) in slides" :key="index" :class="[ui.group, layout.group]"
          :style="slideStyle(index)">
          <div v-for="(child, idx) in group" :key="idx"
            :class="[ui.item.wrapper, slidesPerView === 1 ? layout.item.single : layout.item.multiple]">
            <component :is="child" />
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation dots -->
    <div v-if="props.navigationVisible===true" :class="[ui.navigation.wrapper, layout.navigation.wrapper]">
      <button v-for="(_, index) in totalSlides" :key="index" @click="goToSlide(index)" :class="[
        ui.navigation.inner,
        layout.navigation.inner,
        currentSlide === index ? ui.navigation.active : ui.navigation.inactive
      ]" />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  /** Outermost container of the carousel. */
  wrapper: "relative w-full",
  /** Styles applied to the title text (e.g. font size, color). */
  title: "title text-center text-[24px] font-semibold break-words",
  /** Styles applied to the subtitle text (e.g. font size, color). */
  subtitle: "subtitle text-center text-[20px] font-semibold text-neutral-600 dark:text-neutral-300 -mt-5 break-words",
  /** Defines the styling for the inner sliding container. */
  inner: "overflow-hidden",
  /** Styles for the grid that stacks every slide in the same cell, so the carousel is as tall as its tallest slide. */
  track: "grid grid-cols-1",
  /** Styles applied to each slide group (the set of components shown together in one view). */
  group: "col-start-1 row-start-1 flex justify-center gap-4",
  /** Styles applied to each individual slide. */
  item: {
    wrapper: "w-full",
  },
  /** Styles for the navigation dots (pagination dots). They sit inside the carousel wrapper rather than below it. */
  navigation: {
    /** Container of the navigation dots. */
    wrapper: "absolute z-10 flex gap-2",
    /** A single navigation dot. */
    inner: "rounded-full",
    /** The dot of the slide currently shown. */
    active: "bg-golden",
    /** The dots of the other slides. */
    inactive: "bg-neutral-300 dark:bg-neutral-600",
  },
  /** Classes applied when the carousel direction is `horizontal`. */
  horizontal: {
    /** Slide group in a horizontal carousel. */
    group: "px-4",
    /** Slide width in a horizontal carousel: `single` when one slide is shown at a time, `multiple` when several are. */
    item: {
      single: "max-w-md",
      multiple: "max-w-sm",
    },
    /** Navigation dots of a horizontal carousel, placed at the bottom center. */
    navigation: {
      wrapper: "left-1/2 transform -translate-x-1/2 bottom-2",
      inner: "w-3 h-3",
    },
  },
  /** Classes applied when the carousel direction is `vertical`. */
  vertical: {
    /** Slide group in a vertical carousel. */
    group: "items-center px-12",
    /** Slide width in a vertical carousel: `single` when one slide is shown at a time, `multiple` when several are. */
    item: {
      single: "max-w-full",
      multiple: "max-w-sm",
    },
    /** Navigation dots of a vertical carousel, placed at the left side. */
    navigation: {
      wrapper: "left-4 top-1/2 transform -translate-y-1/2 flex-col",
      inner: "w-2 h-2",
    },
  },
}

const props = withDefaults(
  defineProps<{
    /** Number of slides to show at once; determines how many components are displayed in one view. */
    slides?: number
    /** Interval in seconds for automatic slide transitions. Set to `0` to disable auto-transition. */
    timer?: number
    /** Optional title text displayed above the carousel. Styled via `ui.title`. */
    title?: string
    /** Optional subtitle text shown below the title. Styled via `ui.subtitle`. */
    subtitle?: string
    /** Controls whether the navigation dots (pagination dots) are displayed below/inside the carousel. */
    navigationVisible?: boolean
    /** Axis the slides travel along. Use `horizontal` to slide sideways, or `vertical` to slide upwards. */
    direction?: 'horizontal' | 'vertical'
    description?: string
    ui?: Record<string, any>
  }>(),
  {
    ui: undefined,
    slides: 1, // Number of slides to show at once
    timer: 2, // in seconds
    title: '',
    subtitle: '',
    navigationVisible: true,
    direction: 'horizontal', // Axis the slides travel along
    description: ''
  }
)

const ui = computed(() => mergeUi(config, props.ui))

// The half of the config that depends on which way the slides travel. Picking
// it here keeps the axis out of the pages using the carousel: they set
// `direction` and get the matching layout, navigation included.
const layout = computed(() => props.direction === 'vertical' ? ui.value.vertical : ui.value.horizontal)

const slots = useSlots()
const isTransitioning = ref(true)
const currentSlide = ref(0)
let interval: ReturnType<typeof setInterval> | undefined

const allChildren = computed(() => slots.default?.() ?? [])
const slidesPerView = computed(() => props.slides)
const totalSlides = computed(() =>
  slidesPerView.value > 0 ? Math.ceil(allChildren.value.length / slidesPerView.value) : 1
)

// Group the slides into chunks
const slides = computed(() => {
  const chunked = []
  for (let i = 0; i < allChildren.value.length; i += slidesPerView.value) {
    chunked.push(allChildren.value.slice(i, i + slidesPerView.value))
  }
  return chunked
})

function goToSlide(index: number) {
  isTransitioning.value = true
  currentSlide.value = index
}

// Automatic slide transition: only create an interval if timer > 0
onMounted(() => {
  if (props.timer > 0) {
    interval = setInterval(() => {
      if (currentSlide.value < totalSlides.value - 1) {
        // Regular transition
        isTransitioning.value = true
        currentSlide.value++
      } else {
        // Smooth transition to the first slide after reaching the end
        isTransitioning.value = true
        currentSlide.value++
        setTimeout(() => {
          isTransitioning.value = false
          currentSlide.value = 0 // Go back to the first slide
        }, 500) // Match the transition duration
      }
    }, props.timer * 1000) // Multiply seconds by 1000 to convert to milliseconds
  }
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})

function slideStyle(index: number) {
  const offset = (index - currentSlide.value) * 100
  return {
    transform: props.direction === 'vertical'
      ? `translateY(${offset}%)`
      : `translateX(${offset}%)`,
    transition: isTransitioning.value ? 'transform 0.5s ease-in-out' : 'none'
  }
}
</script>
