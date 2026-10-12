<template>
  <div :class="ui.wrapper" :style="[backgroundUrl, backgroundClass]">
    <slot :class="ui.inner"></slot>
  </div>
</template>

<script setup lang="ts">
const config = {
  /** Defines the overall styling for the container that holds all the elements inside of the `ShSegment`. The attribute `shadow-xl` is used to provide a shadow effect around the wrapper. */
  wrapper: "",
  /** Inner container that holds the segment content. */
  inner: "",
}

const props = withDefaults(
  defineProps<{
    ui?: Record<string, any>;
    /** Sets a background image on the segment via inline CSS `background`. */
    imageBackground?: string;
    /** Optional. Additional inline style applied alongside `imageBackground`, e.g. to control background size or position. */
    imageBackgroundClass?: string;
    description?: string;
  }>(),
  {
    ui: undefined,
    description: "",
  });

const ui = computed(() => mergeUi(config, props.ui));

const backgroundUrl = computed(() => {
  if (props.imageBackground) {
    return "background: url(" + props.imageBackground + ")";
  }
});

const backgroundClass = computed(() => {
  if (props.imageBackgroundClass) {
    return props.imageBackgroundClass;
  }
});
</script>
