<template>
    <ClientOnly>
      <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="link"
        aria-label="Theme"
        @click="isDark = !isDark"
        class="hover:text-primary dark:hover:text-primary contrast-125"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

