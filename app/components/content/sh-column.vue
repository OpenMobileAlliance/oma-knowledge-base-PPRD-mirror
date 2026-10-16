<template>
  <div :class="twMerge(ui.wrapper, sizeClass, props.class)">
    <div v-if="title || subtitle" :class="ui.header.wrapper">
      <MDC v-if="title" :value="title" :class="ui.header.title" />
      <MDC v-if="subtitle" :value="subtitle" :class="ui.header.subtitle" />
    </div>

    <div :class="ui.main">
      <slot />
    </div>

    <div v-if="footerText" :class="ui.footer">
      <MDC :value="footerText" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge"

const config = {
  /** Defines the overall styling for the container that holds all the elements of the column. The attribute `border-8` is used to highlight the contur of the wrapper. */
  wrapper: "",
  /** Header of the column: title and subtitle. */
  header: {
    /** Container of the header. */
    wrapper: "",
    /** Title text of the header. */
    title: "title text-2xl md:text-[28px] font-bold text-center not-prose",
    /** Subtitle text of the header. */
    subtitle: "subtitle text-neutral-500 py-0 not-prose"
  },
  /** Styles applied to the main content (text, image, list, etc.). This attribute only can be modified by modifying the logic on `sh-column.vue` file. It cannot be modified via the markdown document. */
  main: "",
  /** Styles applied to the text displaying the footer text of the column, such as font, size, color, etc. */
  footer: "text-neutral-400 py-0 not-prose",
}

const DEFAULT_SIZE = 1

const props = withDefaults(
  defineProps<{
    ui?: Record<string, any>;
    description?: string;
    /** Title of the column */
    title?: string;
    /** Subtitle of the column */
    subtitle?: string;
    /** Text at the footer of the column */
    footerText?: string;
    /** Width of the column in a grid of 12, from 1 to 12. */
    size?: number;
    class?: any;
  }>(),
  {
    ui: undefined,
    description: "",
    title: "",
    subtitle: "",
    footerText: "",
    size: DEFAULT_SIZE,
    class: undefined
  });

const ui = computed(() => mergeUi(config, props.ui))

const sizeClass = computed(() => gridSizes.colSpan[props.size || DEFAULT_SIZE])
</script>
