<template>
    <div class="relative w-full">
        <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out" :style="carouselStyle"
                :class="`w-[${slides.length * 100}%]`">
                <div v-for="(group, index) in slides" :key="index"
                    class="w-full flex shrink-0 justify-center gap-4 px-4">
                    <div v-for="(child, idx) in group" :key="idx" class="w-full" :class="{
                        'max-w-md': slidesPerView === 1,
                        'max-w-sm': slidesPerView > 1
                    }">
                        <component :is="child" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation dots -->
        <div class="absolute left-1/2 transform -translate-x-1/2 flex gap-2 mt-2" style="bottom: -1.5rem;">
            <button v-for="(_, index) in totalSlides" :key="index" @click="goToSlide(index)" :class="[
                'w-3 h-3 rounded-full',
                currentSlide === index ? 'bg-golden saturate-[300%]' : 'bg-gray-500'
            ]" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    slides: {
        type: Number,
        default: 1
    },
    timer: {
        type: Number,
        default: 2
    }
})

const slots = useSlots()
const isTransitioning = ref(true)
const currentSlide = ref(0)
let interval: NodeJS.Timeout | undefined

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

const carouselStyle = computed(() => ({
    transform: `translateX(-${currentSlide.value * 100}%)`,
    transition: isTransitioning.value ? 'transform 0.5s ease-in-out' : 'none'
}))
</script>

