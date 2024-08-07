<template>
  <div class="h-screen">
    <AppHeader class="relative py-4" title="OMA">
      <template v-slot:logo>
        <img :src="computedLogoSrc" alt="Logo" />
      </template>
    </AppHeader>
    <AppBreadcrumbs class="absolute z-20"/>
    <UContainer :ui="{constrained: '',}" class="pb-20">
      <slot />
      <PrevNextPage v-if="$route.path !== '/'" />
    </UContainer>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">

const theme = useColorMode();

const computedLogoSrc = computed(() => {
  return theme.value === 'dark' ? '/logo-dark.png' : '/logo-light.png';
});
</script>
