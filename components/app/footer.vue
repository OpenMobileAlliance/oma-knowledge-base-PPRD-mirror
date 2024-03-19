<template>
  <footer :class="ui.wrapper" v-bind="attrs">
    <UContainer :class="ui.container">
      <h4 class="text-center">Copyright &copy; 2024</h4>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const config = {
  wrapper:
    "fixed bottom-0 z-50 w-full bg-background/75 backdrop-blur border-t border-gray-200 dark:border-gray-800",
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    class: undefined,
  },
);

const { ui, attrs } = useUI(
  "footer",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);
</script>
