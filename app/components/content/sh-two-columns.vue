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
  /** Container of the two columns. Use it to add a border or background. */
  wrapper: "",
}

const DEFAULT_SIZE = "L"

const VALID_SIZES = {
  "2XS": "md:grid-cols-10 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-9",
  "XS": "md:grid-cols-5 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-4",
  "S": "md:grid-cols-4 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-3",
  "M": "md:grid-cols-3 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-2",
  "L": "md:grid-cols-2 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-1",
  "XL": "md:grid-cols-3 [&>*:nth-child(odd)]:col-span-2 [&>*:nth-child(even)]:col-span-1",
  "2XL": "md:grid-cols-4 [&>*:nth-child(odd)]:col-span-3 [&>*:nth-child(even)]:col-span-1",
  "3XL": "md:grid-cols-5 [&>*:nth-child(odd)]:col-span-4 [&>*:nth-child(even)]:col-span-1",
  "4XL": "md:grid-cols-10 [&>*:nth-child(odd)]:col-span-9 [&>*:nth-child(even)]:col-span-1",
}

const props = withDefaults(
  defineProps<{
    ui?: Record<string, any>;
    description?: string;
    /** Optional. Specifies the width of the left column. Options: `2XS`, `XS`, `S`, `M`, `L`, `XL`, `2XL`, `3XL` & `4XL` */
    size?: keyof typeof VALID_SIZES;
    /** Gutter between the columns, as a Tailwind CSS `gap-*` class (see tailwindcss.com/docs/gap). */
    gap?: string;
    class?: any;
  }>(),
  {
    ui: undefined,
    size: DEFAULT_SIZE,
    gap: "gap-4",
    class: undefined,
    description: "",
  });

const ui = computed(() => mergeUi(config, props.ui));

const gridClass = computed(() => {
  return ["flex flex-col md:grid", VALID_SIZES[props.size] ?? VALID_SIZES[DEFAULT_SIZE], props.gap].join(' ')
})
</script>
