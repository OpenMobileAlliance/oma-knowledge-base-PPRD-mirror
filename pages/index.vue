<template>
  <div class="relative flex flex-col h-full items-center w-screen bg-gradient-to-t from-neutral-200">
    <div :class="['mt-44 transition-all duration-1000 ease-in-out', { 'translate-y-6': !isTextVisible }]">
      <div
        :class="['relative w-[300px] h-[300px]', { 'opacity-0': !isLogoVisible, 'opacity-100': isLogoVisible, 'transition-opacity duration-[700ms] ease-in-out': true }]">
        <img src="/logo.png" alt="OMA Logo"
          class="absolute inset-0 w-full h-full transition-filter duration-1000 ease-in-out"
          :class="{'filter grayscale': isGrayscale, 'filter grayscale-0': !isGrayscale}" />
      </div>
    </div>

    <div v-if="isTextVisible"
      class="text-center font-serif text-6xl mt-16 text-neutral-700 dark:text-[#333333] transition-opacity duration-[2000ms] opacity-100 ease-in">
      Welcome to OMA KnowledgeBase
    </div>

    <div
      :class="['content-center mt-[15%] ml-[120%] w-[20%] h-[10%] bg-neutral-400 dark:bg-neutral-600 rounded-l-full hover:scale-105 duration-700 delay-0', { 'transition-all -translate-x-full duration-1000 ease-in-out transform-gpu': isTextVisible }]">
      <NuxtLink to="/omaspecworks/about/" class="not-prose flex items-center">
        <img src="/logo-dark.png" alt="OMA Logo" class="mx-auto" />
        <UIcon name="i-line-md:home-twotone" dynamic class="text-4xl text-oma-blue-500 mr-6 mb-2 hover:contrast-125" />
      </NuxtLink>
    </div>

    <div class="flex justify-center">
      <UIcon name="i-iconoir:mouse-scroll-wheel" dynamic class="text-6xl text-neutral-700 animate-bounce rounded-full hover:cursor-none" />
    </div>
  </div>

  <div class="h-[20%] bg-oma-blue-500 dark:bg-oma-blue-800 text-xl text-white p-44 text-center">
    <p>Welcome to OMA KnowledgeBase website, where all of our sites will be combined into one place.</p>
  </div>

  <div class="h-screen bg-gradient-to-t from-oma-blue-500 p-16">
    <ContentDoc />
    <img src="/logo-dark.png" alt="OMA Logo" class="mx-auto mt-12 contrast-125" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const isLogoVisible = ref(false);
const isGrayscale = ref(true);
const isTextVisible = ref(false);

onMounted(() => {
  // Start with grayscale
  setTimeout(() => {
    // Transition from grayscale to color
    isGrayscale.value = false;
  }, 700); // Delay for grayscale to color transition

  nextTick();
  setTimeout(() => {
    isTextVisible.value = true;
  }, 1700); // Delay to show text

  setTimeout(() => {
    isLogoVisible.value = true;
  }, 700); // Delay to show logo
});
</script>

<style>
body,
html {
  height: 100%;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
