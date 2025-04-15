<template>
    <div class="relative w-full overflow-hidden">
        <!-- Carousel track -->
        <div class="flex transition-transform duration-500 ease-in-out" :style="carouselStyle"
            :class="`w-[${slides.length * 100}%]`">
            <div v-for="(group, index) in slides" :key="index" class="w-full flex shrink-0 justify-center gap-4 px-4">
                <div v-for="(child, idx) in group" :key="idx" class="w-full" :class="{
                    'max-w-md': slidesPerView === 1,
                    'max-w-sm': slidesPerView > 1
                }">
                    <component :is="child" />
                </div>
            </div>
        </div>

        <!-- Navigation dots -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button v-for="(_, index) in slides.length" :key="index" @click="currentSlide = index" :class="[
                'w-3 h-3 rounded-full',
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            ]" />
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref, computed, useSlots, watch } from 'vue'

const props = defineProps<{
    slides?: number
}>()

const slidesPerView = computed(() => props.slides ?? 1)

const slots = useSlots()
const allChildren = computed(() => slots.default?.() ?? [])
const totalItems = computed(() => allChildren.value.length)

// Divide children into chunks of `slidesPerView`
const slides = computed(() => {
    const chunked = []
    for (let i = 0; i < allChildren.value.length; i += slidesPerView.value) {
        chunked.push(allChildren.value.slice(i, i + slidesPerView.value))
    }
    return chunked
})


const currentSlide = ref(0)

const carouselStyle = computed(() => ({
    transform: `translateX(-${currentSlide.value * 100}%)`,
}))
</script>

