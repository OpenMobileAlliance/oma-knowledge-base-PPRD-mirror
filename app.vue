<template>
  <div class="flex flex-col w-full dark:bg-[#19191a]" :style="{ fontFamily: main.font.type }">
    <AppHeader v-if="route.path !== '/'" class="flex py-4" title="OMA">
      <template v-slot:logo>
        <img :src="computedLogoSrc" alt="Logo" />
      </template>
    </AppHeader>
    <UContainer :ui="{ constrained: '', padding: route.path === '/' ? '' : 'px-4 sm:px-6 lg:px-8' }"
      :class="route.path === '/' ? 'w-full h-screen' : 'w-full'" class="pb-24 pt-5">
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
  color: theme('colors.golden');
}

/* Links */
a {
  color: theme('colors.oma-blue.300');
}

a:hover {
  color: theme('colors.oma-blue.700');
}

.dark a {
  color: theme('colors.oma-blue.200');
}

.dark a:hover {
  color: theme('colors.oma-blue.400');
}

/* Code block */
code {
  border: 3px solid #dcdcdc;
  border-radius: 30px;
  background-color: #dcdcdc;
  padding: 0px 8px; 
  position: relative; 
}

code::before,
code::after {
  content: ''; 
  display: none; 
}

.dark code {
  border: 3px solid #9b9b9b;
  border-radius: 30px;
  background-color: #9b9b9b;
  padding: 0px 8px; 
  position: relative;
  color: #ffffff;
}

pre code {
  border: none;
  background: none;
  padding: 0; 
}

blockquote {
  background-color: theme('colors.neutral.200');
  border-left: 4px solid #858585;
  color: #333;
  font-style: italic;
}

blockquote p {
  margin: 0;;
}

.dark blockquote {
  background-color: theme('colors.neutral.700');
  border-left: 4px solid #ccc;
  margin: 1.5rem 0;
  font-style: italic;
}

.dark blockquote p {
  margin: 0; /* Remove default margin from paragraphs */
  color: white;
}
</style>
