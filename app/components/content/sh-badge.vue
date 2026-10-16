<template>
  <div :class="[ui.wrapper, 'w-fit rounded-md px-3 py-1 text-sm font-medium leading-6 [&_p]:m-0 [&_p]:leading-6']">
    <slot />
  </div>
</template>

<script setup lang="ts">
const config = {
  /** Container of the badge: background, border, text color and their dark-mode variants. */
  wrapper: 'bg-neutral-100 border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 text-neutral-700',
}

const props = withDefaults(
  defineProps<{
    ui?: Record<string, any>;
    description?: string;
  }>(),
  {
    ui: undefined,
    description: "",
  });

const ui = computed(() => mergeUi(config, props.ui));
</script>
