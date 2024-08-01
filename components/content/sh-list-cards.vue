<template>
  <div :class="ui.wrapper">
    <div :class="ui.header">
      <div :class="ui.title">
        <MDC :value="title" />
      </div>
      <div :class="ui.subtitle">
        <MDC :value="subtitle" />
      </div>
      <div :class="ui.text">
        <MDC :value="text" />
      </div>
    </div>
    <div :class="[ui.base, gridClass]">
      <!-- insert logic for md files render here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { listCards as config, gridSizes } from "@/ui.config"

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    title?: string;
    subtitle?: string;
    text?: string;
    cols?: Number;
    gap?: String;
    class?: any;
    description?: string;
  }>(),
  {
    ui: () => ({}),
    title: "",
    subtitle: "",
    text: "",
    cols: () => config.default.cols,
    gap: () => config.default.gap,
    class: () => undefined,
    description: "",
  }
);

const { ui, attrs } = useUI(
  "sh-list-cards",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
);

const gridClass = computed(() => {
  const cols = props.cols != undefined ? props.cols : config.default.cols;
  return ["grid", gridSizes.gridCols[cols], props.gap].join(' ');
});

</script>