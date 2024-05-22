<template>
  <div :class="ui.wrapper">
    <ContentSlot :use="$slots.default" unwrap="" />
  </div>
</template>

<script setup lang="ts">
import {segment as config } from "@/ui.config"

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
  });

const { ui, attrs } = useUI(
  "shsection",
  toRef(props, "ui"),
  config
)

</script>
