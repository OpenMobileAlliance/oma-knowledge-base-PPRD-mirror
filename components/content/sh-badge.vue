<template>
    <UBadge :color="color" :variant="variant" :ui="{ rounded: 'rounded-full' }" size="lg">
      <MDC :value="text" />
    </UBadge>
  </template>
  
  <script setup lang="ts">
  import { defineProps, toRef } from 'vue'
  import { badge as config } from '@/ui.config' // Importing the config file

  const props = withDefaults(
  defineProps<{
    text: String;
    color?: String;
    variant?: String;
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
    description: "",
    color: "red",
    variant: "soft", // checkout the UBadge component for more variants https://ui.nuxt.com/components/badge#style
  });

const { ui } = useUI(
  "sh-badge",
  toRef(props, "ui"),
  config
);
</script>
  
