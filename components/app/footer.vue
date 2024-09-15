<template>
  <footer :class="[ui.wrapper, 'fixed']" v-bind="attrs">
    <UContainer :class="ui.container">
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright &copy; 2024. All Rights Reserved.
        </span>
        <ClientOnly>
          <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
            variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
        <AppSocialLinks />
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const config = {
  wrapper:
    "py-4 bottom-0 z-50 w-full bg-background/75 backdrop-blur border-t border-primary/[0.4] dark:border-primary/[0.4]", // removed fixed class
  container: "",
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

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
