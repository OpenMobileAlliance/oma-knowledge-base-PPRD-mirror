<template>
  <div :class="ui.wrapper">
    <div :class="['grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-' + props.cols , gridClass]">
      <ContentSlot :use="$slots.default" unwrap="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {multiColumn as config } from "@/ui.config"
import { gridSizes } from "@/ui.config"

  
const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    description?: string;
    cols: number;
    gap?: String;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    cols: () => config.default.size,
    gap: () => config.default.gap,
    class: () => undefined,
    description: "",
  });

const { ui, attrs } = useUI(
  "sh-multi-column",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
)

const gridClass = computed(() => {
  const cols = props.cols != undefined ? props.cols : config.default.cols

  return [ gridSizes.gridRows[1], props.gap].join(' ')
})
</script>
