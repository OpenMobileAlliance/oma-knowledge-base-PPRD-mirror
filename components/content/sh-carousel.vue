<template>
    <div :class="ui.wrapper">
        <div>
            <div :class="ui.inner" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
                <div v-for="(item, index) in items" :key="index" class="min-w-full transition-opacity duration-500 ease-in-out">
                    <component :is="item.component" v-bind="item.props" />
                </div>
            </div>
            <div :class="ui.indicators">
                <span v-for="(item, index) in items" :key="index" class="indicator" :class="{ active: index === activeIndex }" @click="goToSlide(index)"></span>
            </div>
        </div>
        <button class="absolute top-1/2 left-2 transform -translate-y-1/2 text-4xl cursor-pointer" @click="prevSlide">
            <UIcon name="i-mdi:chevron-left-circle" dynamic :class="ui.icon"/>
        </button>
        <button class="absolute top-1/2 right-2 transform -translate-y-1/2 text-4xl cursor-pointer" @click="nextSlide">
            <UIcon name="i-mdi:chevron-right-circle" dynamic :class="ui.icon"/>
        </button>
    </div>
</template>

<script setup lang="ts">
import {carousel as config } from "@/ui.config"

interface CarouselItem {
    component: any;
    props: Record<string, any>;
}

const props = defineProps<{
    items: CarouselItem[];
    ui?: Partial<typeof config>;
}>();

const { ui, attrs } = useUI(
  "sh-carousel",
  toRef(props, "ui"),
  config,
)

const activeIndex = ref(0);
let interval: number | null = null;

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % props.items.length;
};

const prevSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + props.items.length) % props.items.length;
};

const goToSlide = (index: number) => {
    activeIndex.value = index;
};

const startAutoSlide = () => {
    interval = window.setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
    if (interval) {
        clearInterval(interval);
    }
};

onMounted(() => {
    startAutoSlide();
});

onUnmounted(() => {
    stopAutoSlide();
});
</script>

<style scoped>
.indicator {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
  }

.indicator.active {
    background-color: #333;
}

.dark .indicator.active {
    background-color: #BC3C38;
}
</style>