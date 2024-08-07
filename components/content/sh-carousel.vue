<template>
  <div :class="ui.wrapper">
    <div class="p-16">
      <div class="overflow-hidden">
        <div :class="ui.title">
          <MDC :value="title" />
        </div>
        <div :class="ui.subtitle">
          <MDC :value="subtitle" />
        </div>
        <div :class="ui.inner" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
          <div v-for="(item, index) in allItems" :key="index" class="min-w-full transition-opacity duration-500 ease-in-out">
            <component v-if="item.component" :is="item.component" v-bind="item.props" />
            <img v-else-if="item.urlImage" :src="item.urlImage" :alt="item.altImage" :class="ui.image" />
          </div>
        </div>
        <div :class="ui.indicators">
          <span v-for="(item, index) in allItems" :key="index" class="indicator" :class="{ active: index === activeIndex }" @click="goToSlide(index)"></span>
        </div>
      </div>
    </div>
      <button class="col-start-1 cols-span-1 absolute top-1/2 left-2 transform -translate-y-1/2 text-4xl cursor-pointer" @click="prevSlide">
        <UIcon name="i-mdi:chevron-left-circle" dynamic :class="ui.icon" />
      </button>
      <button class="col-start-3 cols-span-1 absolute top-1/2 right-2 transform -translate-y-1/2 text-4xl cursor-pointer" @click="nextSlide">
        <UIcon name="i-mdi:chevron-right-circle" dynamic :class="ui.icon" />
      </button>
  </div>
</template>
  
  <script setup lang="ts">
  import { carousel as config } from '@/ui.config';
  
  interface CarouselItem {
    component?: any;
    props?: Record<string, any>;
    urlImage?: string;
    altImage?: string;
    description?: string;
  }
  
  const props = defineProps<{
    items?: CarouselItem[];
    ui?: Partial<typeof config>;
    title: string;
    subtitle: string;
    urlImage?: string;
    altImage?: string;
    description?: string;    
  }>();
  
  const { ui } = useUI(
    "sh-carousel",
    toRef(props, "ui"),
    config,
  );
  
  const activeIndex = ref(0);
  let interval: number | null = null;
  
  const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % allItems.value.length;
  };
  
  const prevSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + allItems.value.length) % allItems.value.length;
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
  
const allItems = computed(() => {
    const itemsList = [];
    if (props.items) {
        itemsList.push(...props.items);
    }
    if (props.urlImage) {
        itemsList.push({ urlImage: props.urlImage, altImage: props.altImage });
    }
    return itemsList.length ? itemsList : [];
});
  
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