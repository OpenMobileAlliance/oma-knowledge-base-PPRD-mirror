<template>
  <div :class="ui.wrapper" :style="backgroundClass">
    <ContentSlot :use="$slots.default" unwrap="" />
  </div>
</template>

<script setup lang="ts">
import {segment as config } from "@/ui.config"

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    imageBackground?: string;
    description?: string;
  }>(),
  {
    ui: () => ({}),
    description: "",
  });

const { ui, attrs } = useUI(
  "sh-segment",
  toRef(props, "ui"),
  config
)
const backgroundClass = computed(() => {
  if (props.imageBackground) {
    return "background-image: url(" + props.imageBackground + ")";
  }
});
</script>
