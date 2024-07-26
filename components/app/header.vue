<template>
  <header :class="ui.wrapper">
    <UContainer :ui="{constrained: '',}" :class="ui.container">
      <div :class="ui.left">
        <slot name="left">
          <NuxtLink :to="to" :aria-label="ariaLabel" :class="ui.logo">
            <slot name="logo">
              {{ title || "OMA Knowledge Base" }}
            </slot>
          </NuxtLink>
        </slot>
      </div>
      <div :class="ui.center">
        <div class="flex justify-between items-start mb-2">
          <div :class="ui.right">
            <ColorMode />
            <span class="mr-2 text-sm">
              <ULink to="signin" active-class="text-primary" class="hover:text-primary">Sign In</ULink>
            </span>
            <span class="mr-2 text-sm">
              <ULink to="contactus" class="hover:text-primary">Contact us</ULink>
            </span>
            <slot name="right">
              <AppSocialLinks />
            </slot>
          </div>
        </div>
        <div>
          <ul class="flex gap-1.5">
            <li v-for="link in topLinks" :key="link.path" class="ml-4" :style="{ fontFamily: header.menu.font.type, fontSize: header.menu.font.size }">
              <ULink :to="link._path" class="hover:text-primary">{{ link.title }}</ULink>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const config = {
  wrapper: "bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50",
  container: "flex items-center justify-between gap-3 h-[--header-height]",
  left: "lg:flex-1 flex items-center gap-1.5",
  center: "hidden lg:flex flex flex-col grow",
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

const header = useAppConfig().header;
</script>
