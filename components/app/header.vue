<template>
  <header :class="ui.wrapper">
    <div class="px-8">
      <div :class="ui.container">
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
          <AppMenus :class="ui.menus" />
          <AppBreadcrumbs :class="ui.breadcrumbs"
            class="hidden md:flex 2xl:hidden lg:justify-between" />
        </div>
        <div :class="ui.right">
          <!-- <ColorMode :class="ui.colorMode" /> -->
          <AppLogin :class="ui.login" />
          <AppSocialLinks :class="ui.socialLinks" />
          <AppHamburgerMenu :class="ui.hamburgerMenu" />
        </div>
      </div>
    </div>
    <hr :class="ui.hr" />
    <AppBreadcrumbs :class="ui.breadcrumbs" class="hidden 2xl:flex" />
  </header>
</template>

<script setup lang="ts">

const config = {
  wrapper: "flex flex-col -mb-px sticky top-0 backdrop-blur bg-gradient-to-b from-primary/[0.5] dark:bg-gradient-to-b dark:from-primary/[0.25] z-50",
  container: "flex items-center justify-between gap-3 h-[--header-height]",
  left: "flex items-center gap-1.5",
  logo: "flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white items-center gap-1.5",
  center: "flex justify-center items-center",
  menus: "hidden 2xl:flex z-50",
  right: "flex items-center gap-1.5",
  colorMode: "hidden 2xl:flex",
  login: "mr-2 text-base",
  socialLinks: "text-xl hidden 2xl:flex",
  hamburgerMenu: "2xl:hidden order-last z-50 cursor-pointer ml-4",
  hr: "mt-1 border-neutral-50/[0.5] dark:border-neutral-700",
  breadcrumbs: "z-10",
  shadow: "text:black dark:text-golden hover:text-black dark:hover:text-golden hover:bg-golden dark:hover:bg-primary-600 rounded-xl p-2",
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

const header = useAppConfig().header;

</script>