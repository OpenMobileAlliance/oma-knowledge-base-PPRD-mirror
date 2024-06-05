<template>
  <ULink :class="buttonClass" :type="props.type" :disabled="props.disabled" :to="props.url" :target="props.target" v-bind="{...attrs}">
  <div :class="ui.inner">
    <span v-if="label"><MDC :value="label" /></span>
    <ContentSlot v-else :use="$slots.default" unwrap="" />
  </div>
  </ULink>
</template>

<script setup lang="ts">
import { twMerge, twJoin } from "tailwind-merge"
import {button as config } from "@/ui.config"

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    url: String;
    target?: String;
    color?: String;
    size?: String;
    disabled?: Boolean;
    variant?: String;
    type?: String;
    block?: Boolean;
    label?: String
    class?: any;
  }>(),
  {
    ui: () => ({}),
    url: () => "",
    target: () => "",
    color: () => config.default.color,
    size: () => config.default.size,
    disabled: () => false,
    variant: () => config.default.variant,
    type: () => "button",
    block: false,
    label: "",
    class: () => "",
  });

const { ui, attrs } = useUI(
  "sh-button",
  toRef(props, "ui"),
  config,
)

const buttonClass = computed(() => {
  const textSize = ui.value.size[props.size]
  const padding = ui.value.padding[props.size]
  const variant = ui.value.color?.[props.color as string]?.[props.variant as string] || ui.value.variant[props.variant]

  return twMerge(twJoin(
    ui.value.wrapper,
    ui.value.rounded,
    padding, 
    props.block ? ui.value.block : ui.value.inline,
    textSize,
    variant.replaceAll( "{color}",props.color)),
    props.class)
})
</script>

