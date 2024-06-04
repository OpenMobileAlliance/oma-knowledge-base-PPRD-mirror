<template>
  <div :class="ui.wrapper">
    <NuxtLink :to="urlWrapper" target="_blank" class="not-prose">
      <div>
        <img :src="urlImage" :class="ui.image" :alt="altImage"/>
        <MDC :class="ui.title" :value="title" />
        <MDC :class="ui.subtitle" :value="subtitle" />
        <MDC :class="ui.text" :value="text" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { microCard as config } from '@/ui.config' // Importing the config file

const props = withDefaults(
  defineProps<{
    urlWrapper?: string;
    urlImage?: string;
    altImage?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
    urlWrapper: "",
    urlImage: "",
    altImage: "",
    title: "",
    subtitle: "",
    text: "",
  });

const { ui } = useUI(
  "sh-micro-card",
  toRef(props, "ui"),
  config
);
</script>
