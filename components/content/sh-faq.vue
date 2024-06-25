<template>
  <div :class="ui.wrapper">
    <div :class="ui.inner">
      <i :class="['size-7', currentIcon]" @click="toggle"></i>
      <div v-if="isExpanded">
        <ContentSlot :use="$slots.default" unwrap="" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps, toRef, ref, computed } from 'vue'
import { faq as config } from "@/ui.config"

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    initiallyExpanded?: boolean;
  }>(),
  {
    ui: () => ({}),
    initiallyExpanded: false,
  }
);

const { ui } = useUI(
  "sh-faq",
  toRef(props, "ui"),
  config
);

const isExpanded = ref(props.initiallyExpanded);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};

const currentIcon = computed(() => {
  return isExpanded.value ? config.icon.expanded : config.icon.collapsed;
});
</script>
