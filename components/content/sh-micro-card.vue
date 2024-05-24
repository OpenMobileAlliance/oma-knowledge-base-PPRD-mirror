<template>
  <div :class="ui.wrapper">
    <NuxtLink :to="url" target="_blank" class="not-prose">
      <div>
        <img :src="imageLink" :class="ui.image" />
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
    url?: String;
    imageLink?: String;
    title?: String;
    subtitle?: String;
    text?: String;
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
    url: "",
    imageLink: "",
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
