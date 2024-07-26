<template>
  <div :class="ui.wrapper">
    <div :class="gridClass">
      <ContentSlot :use="$slots.default" unwrap="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {multiColumn as config, gridSizes } from "@/ui.config"
  
const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    description?: string;
    cols: Number;
    gap?: String;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    cols: () => config.default.cols,
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

  return ["grid", gridSizes.gridCols[cols], gridSizes.gridRows[1], props.gap].join(' ')
})
</script>
