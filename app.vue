<template>
  <div class="flex flex-col w-full dark:bg-[#19191a] " :style="{ fontFamily: main.font.type }">
    <AppHeader v-if="route.path !== '/'" class="flex py-4" title="OMA">
      <template v-slot:logo>
        <img :src="computedLogoSrc" alt="Logo" />
      </template>
    </AppHeader>
    <UContainer :ui="{ constrained: '', padding: route.path === '/' ? '' : 'px-4 sm:px-6 lg:px-8' }"
      :class="route.path === '/' ? 'w-full h-screen' : 'w-full'">
      <NuxtPage />
    </UContainer>
    <AppFooter v-if="route.path !== '/' && route" />
  </div>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';

const main = useAppConfig().main;
const route = useRoute();

const theme = useColorMode();

const computedLogoSrc = computed(() => {
  return theme.value === 'dark' ? '/logo-dark.png' : '/logo-light.png';
});
// Use onMounted to ensure the code runs only on the client side
onMounted(() => {
  for (let i = 1; i <= 7; i++) {
    document.documentElement.style.setProperty(`--h${i}-font-type`, main[`h${i}`].font.type);
    document.documentElement.style.setProperty(`--h${i}-font-size`, main[`h${i}`].font.size);
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const el = document.querySelector(`a[id="toc-${id}"]`)
      if (entry.intersectionRatio > 0) {
        if (el) {
          el.classList.add('bg-primary-100');
          el.classList.add('rounded-lg');
          el.classList.add('dark:bg-neutral-500');
        }
      } else {
        if (el) {
          el.classList.remove('bg-primary-100');
          el.classList.remove('rounded-lg');
          el.classList.remove('dark:bg-neutral-500');
        }
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('h2, h3').forEach((section) => {
    observer.observe(section);
  });

});
</script>

<style>
html {
  scroll-behavior: smooth !important;
  scroll-padding-top: 16rem;
}

h1 {
  font-size: var(--h1-font-size);
  font-family: var(--h1-font-type);
}

h2 {
  font-size: var(--h2-font-size);
  font-family: var(--h2-font-type);
}

h3 {
  font-size: var(--h3-font-size);
  font-family: var(--h3-font-type);
}

h4 {
  font-size: var(--h4-font-size);
  font-family: var(--h4-font-type);
}

h5 {
  font-size: var(--h5-font-size);
  font-family: var(--h5-font-type);
}

h6 {
  font-size: var(--h6-font-size);
  font-family: var(--h6-font-type);
}

h7 {
  font-size: var(--h7-font-size);
  font-family: var(--h7-font-type);
}

.dark code,
.dark a,
.dark p,
.dark strong,
.dark em,
.dark ul,
.dark ol,
.dark td,
.dark th,
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6 {
  color: #E7D6C2;
}
</style>
