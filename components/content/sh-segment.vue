<template>
  <div :class="ui.wrapper">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: ""
}

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
  });

const { ui, attrs } = useUI(
  "shsection",
  toRef(props, "ui")
)

</script>
