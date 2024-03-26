<template>
  <header :class="ui.wrapper">
    <UContainer :class="ui.container">
      <div :class="ui.left">
        <slot name="letf">
          <NuxtLink :to="to" :aria-label="ariaLabel" :class="ui.logo">
            <slot name="logo">
              {{ title || "OMA Knowledge Base" }}
            </slot>
          </NuxtLink>
        </slot>
      </div>
      <div :class="ui.center">
        <ul class="flex justify-between items-start">
          <li v-for="link of topLinks" :key="link.path" class="ml-4">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div :class="ui.right">
        <slot name="right">
          <AppSocialLinks />
        </slot>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const config = {
  wrapper:
    "bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50",
  container: "flex items-center justify-between gap-3 h-[--header-height]",
  left: "lg:flex-1 flex items-center gap-1.5",
  center: "hidden lg:flex",
  right: "flex items-center justify-end lg:flex-1 gap-1.5",
  logo: "flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5",
};

const props = withDefaults(
  defineProps<{
    to?: string;
    title?: string;
    ui?: Partial<typeof config>;
    class?: any;
  }>(),
  {
    to: "/",
    title: undefined,
    ui: () => ({}),
    class: undefined,
  },
);

const { ui, attrs } = useUI(
  "header",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);

const ariaLabel = computed(() => (props.title || "Logo").trim());

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation(),
);

const topLinks = navigation.value.reduce((previous, current) => {
  if (current.children) {
    previous.push(current);
  }
  return previous;
}, []);
</script>
