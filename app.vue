<template>
  <div class="flex flex-col w-full dark:bg-[#19191a] " :style="{ fontFamily: main.font.type }">
    <AppHeader class="flex py-4" title="OMA">
      <template v-slot:logo>
        <img :src="computedLogoSrc" alt="Logo" />
      </template>
    </AppHeader>
    <UContainer :ui="{ constrained: '', }" class="w-full pb-24">
      <NuxtPage />
    </UContainer>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">

const main = useAppConfig().main;

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
});
</script>

<style>
html {
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
