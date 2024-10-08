<template>
    <div>
      <div class="md:flex">
        <div class="p-7">
          <img src="/images/oma2.png" class="w-full h-full md:h-44" />
        </div>
        <div class="p-7">
          <img v-if="!computedLogoSrc" src="/logo-light.png" class="w-full h-full md:h-32 mt-20" />
          <img v-if="computedLogoSrc" src="/logo-dark.png" class="w-full h-full md:h-32 mt-20" />
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">

const theme = useColorMode();

const computedLogoSrc = computed(() => {
    return theme.value === 'dark';
});
</script>