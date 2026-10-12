<!--
  Plain image for markdown content. Nuxt UI's ProseImg adds click-to-zoom and stretches images
  without an explicit width to the full column, which is not what the existing content expects
  (logos, icons, inline images inside cards).
-->
<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps<{
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}>()
</script>

<template>
  <img :src="src" :alt="alt ?? ''" :width="width" :height="height" v-bind="$attrs" class="my-[2em] h-auto max-w-full">
</template>
