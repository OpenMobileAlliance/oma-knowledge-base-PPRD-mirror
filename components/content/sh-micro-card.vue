<template>
  <div :class="ui.wrapper">
    <NuxtLink :to="urlWrapper" target="_blank" class="not-prose">
      <div>
        <img v-if="urlImage" :src="urlImage" :class="ui.image" :alt="altImage"/>
        <UIcon v-if="icon" :name="icon" :alt="altIcon" dynamic :class="ui.icon" />
        <MDC :class="ui.title" :value="title" />
        <MDC :class="ui.subtitle" :value="subtitle" />
        <MDC v-if="text" :class="ui.text" :value="text" />
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
    icon?: string
    altIcon?: string
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
    icon: "",
    altIcon: "",
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
