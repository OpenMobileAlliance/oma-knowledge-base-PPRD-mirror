<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div v-if="title || subTitle" :class="ui.header">
      <MDC v-if="title" :value="title" :class="ui.header.title" />
      <MDC v-if="subTitle" :value="subTitle" :class="ui.header.subTitle" />
    </div>

    <div :class="ui.main">
      <ContentSlot :use="$slots.default" unwrap="" />
    </div>

    <div v-if="footerText" :class="ui.footer">
      <MDC :value="footerText" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {column as config } from "@/ui.config"
  
const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    title?: string;
    subTitle?: string;
    footerText?: string;
    size?: string;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    title: "",
    subTitle: "",
    footerText: "",
    size: () => config.default.size,
    class: () => undefined
  });

const { ui, attrs } = useUI(
  "sh-column",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
)

</script>
