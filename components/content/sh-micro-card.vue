<template>
  <div :class="ui.wrapper">
    <NuxtLink :to="src" target="_blank">
      <div>
        <img :src="imageLink" :class="ui.image" />
        <p :class="ui.title">{{ title }}</p>
        <p :class="ui.subtitle">{{ subtitle }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import config from '@/ui.config/sh-micro-card' // Importing the config file

const props = withDefaults(
  defineProps<{
    src?: String;
    imageLink?: String;
    title?: String;
    subtitle?: String;
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
    src: "",
    imageLink: "",
    title: "",
    subtitle: "",
  });

const { ui } = useUI(
  "sh-micro-card",
  toRef(props, "ui"),
  config
);
</script>
