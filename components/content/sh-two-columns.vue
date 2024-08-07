<template>
  <div :class="ui.wrapper"  v-bind="attrs" >
    <div :class="gridClass">
      <ContentSlot :use="$slots.default" unwrap="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {twoColumns as config } from "@/ui.config"

const VALID_SIZES = {
  "2XS": "grid-cols-10 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-9",
  "XS": "grid-cols-5 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-4",
  "S": "grid-cols-4 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-3",
  "M": "grid-cols-3 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-2",
  "L": "grid-cols-2 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-1",
  "XL": "grid-cols-3 [&>*:nth-child(odd)]:col-span-2 [&>*:nth-child(even)]:col-span-1",
  "2XL": "grid-cols-4 [&>*:nth-child(odd)]:col-span-3 [&>*:nth-child(even)]:col-span-1",
  "3XL": "grid-cols-5 [&>*:nth-child(odd)]:col-span-4 [&>*:nth-child(even)]:col-span-1",
  "4XL": "grid-cols-10 [&>*:nth-child(odd)]:col-span-9 [&>*:nth-child(even)]:col-span-1",
}

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    description?: String;
    size?: String;
    gap?: String;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    size: () => config.default.size,
    gap: () => config.default.gap,
    class: () => undefined,
    description: "",
  });

const { ui, attrs } = useUI(
  "sh-two-columns",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
)

const gridClass = computed(() => {
  const selectedSize = props.size != undefined ? props.size : config.default.size
  return ["grid", VALID_SIZES[selectedSize], props.gap].join(' ')
})
</script>
