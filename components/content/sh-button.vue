<template>
  <ULink :class="buttonClass" type="button" :disabled="props.disabled" :to="props.urlButton" :target="props.target" v-bind="{...attrs}">
  <div :class="ui.inner">
    <span v-if="labelButton"><MDC :value="labelButton" /></span>
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
    urlButton: string;
    target?: string;
    colorButton?: string;
    size?: string;
    disabled?: boolean;
    variant?: string;
    fullWidth?: boolean;
    labelButton?: string
    class?: any;
  }>(),
  {
    ui: () => ({}),
    urlButton: () => "",
    target: () => config.default.target,
    colorButton: () => config.default.colorButton,
    size: () => config.default.size,
    disabled: () => false,
    variant: () => config.default.variant,
    fullWidth: false,
    labelButton: "",
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
  const variant = ui.value.colorButton?.[props.colorButton as string]?.[props.variant as string] || ui.value.variant[props.variant]

  return twMerge(twJoin(
    ui.value.rounded,
    padding, 
    props.fullWidth ? ui.value.fullWidth : ui.value.inline,
    textSize,
    variant.replaceAll( "{colorButton}",props.colorButton),
    ui.value.wrapper),
    props.class)
})
</script>

