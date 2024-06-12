<template>
    <UCarousel v-slot="{ item }" :items="items"
        :ui="{ item: 'basis-full gap-4 my-12 mx-auto p-3' }"
        class="rounded-lg overflow-hidden px-16" 
        ref="carousel"
        indicators
        arrows>
        <div>{{ items.length }}</div>
        <slot />
    </UCarousel>
</template>

<script setup lang="ts">

const items = ['']

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }
        carouselRef.value.next()
    }, 3000)
})
</script>