<template>
  <div :class="[ui.wrapper, sizeClass]" v-bind="attrs">
    <div v-if="title || subTitle" :class="ui.header.wrapper">
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
import {column as config, gridSizes } from "@/ui.config"
  
const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    title?: String;
    subTitle?: String;
    footerText?: String;
    size?: Number;
    class?: Any;
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

const sizeClass = computed(() => {
  const size = props.size ? props.size : config.default.size
  return gridSizes.colSpan[size]
})

</script>
