<template>
  <div :class="[ui.wrapper, props.class]"  v-bind="attrs" >
    
  </div>
</template>

<script setup lang="ts">
import {dynamicTable as config } from "@/ui.config"

static PER_PAGE_LIST = config.perPage

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    caption?: String;
    dataUrl: String;
    columns?: Array;
    filters?: Array;
    page?: Number'
    perPage?: Number;
    q?: String;
    selectedFilters?: Array;
    class?: Any;
  }>(),
  {
    ui: () => ({}),
    caption: '',
    dataUrl: ''
    columns: [],
    filters: [],
    page: 1,
    perPage: config.default.perPage,
    q: '',
    selectedFilters: []
    class: () => undefined
  });

const { ui, attrs } = useUI(
  "sh-dynamic-table",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
)

</script>
