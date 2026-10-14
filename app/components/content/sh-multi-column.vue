<template>
  <div :class="twMerge(ui.wrapper, props.class)">
    <div :class="gridClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge"

const config = {
  /** Defines the overall styling for the container that holds all the elements of the multi-column. The default value is an empty string, indicating no styles are applied by default. */
  wrapper: "rounded-md px-0 py-5 md:p-5",
}

const DEFAULT_COLS = 3

// Written out in full so Tailwind sees every class
const VALID_COLS = [
  "2xl:grid-cols-none",
  "2xl:grid-cols-1",
  "2xl:grid-cols-2",
  "2xl:grid-cols-3",
  "2xl:grid-cols-4",
  "2xl:grid-cols-5",
  "2xl:grid-cols-6",
  "2xl:grid-cols-7",
  "2xl:grid-cols-8",
  "2xl:grid-cols-9",
  "2xl:grid-cols-10",
  "2xl:grid-cols-11",
  "2xl:grid-cols-12"
];

const props = withDefaults(
  defineProps<{
    ui?: Record<string, any>;
    description?: string;
    /** The number of columns to display. If not provided, it defaults to the value specified in the configuration. If a value is provided, e.g., 4, the width of the space ocupied by the multi-column is divided by 4. */
    cols?: number;
    /** Optional. Controls the gutters between columns. The value `"gap-4"` applies a gap utility class from Tailwind CSS to add spacing between the columns. */
    gap?: string;
    /** Optional. Additional CSS classes to apply to the multi-column container. */
    class?: any;
  }>(),
  {
    ui: undefined,
    cols: DEFAULT_COLS,
    gap: "gap-4",
    class: undefined,
    description: "",
  }
);

const ui = computed(() => mergeUi(config, props.ui));

const gridClass = computed(() => {
  return ["grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2", VALID_COLS[props.cols], props.gap].join(' ');
});
</script>
