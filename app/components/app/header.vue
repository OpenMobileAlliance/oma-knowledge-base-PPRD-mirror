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
          <AppBreadcrumbs :class="ui.breadcrumbs" class="hidden md:flex 2xl:hidden" />
        </div>
        <div :class="ui.right">
          <ColorMode :class="ui.colorMode" />
          <AppLogin :class="ui.login" />
          <AppSocialLinks :class="ui.socialLinks" />
          <AppHamburgerMenu :class="ui.hamburgerMenu" />
        </div>
      </div>
    </div>
    <hr :class="ui.hr">
    <AppBreadcrumbs :class="ui.breadcrumbs" class="hidden 2xl:flex" />
  </header>
</template>

<script setup lang="ts">
const ui = {
  wrapper: "flex flex-col -mb-px sticky top-0 backdrop-blur-sm bg-linear-to-b from-primary/50 dark:from-primary/25 z-50",
  container: "flex items-center justify-between gap-3 h-(--ui-header-height)",
  left: "flex items-center gap-1.5",
  logo: "shrink-0 font-bold text-xl text-gray-900 dark:text-white items-center gap-1.5",
  center: "flex justify-center items-center",
  menus: "hidden 2xl:flex z-50",
  right: "flex items-center gap-1.5",
  colorMode: "hidden 2xl:flex",
  login: "mr-2 text-base",
  socialLinks: "text-xl hidden 2xl:flex",
  hamburgerMenu: "2xl:hidden order-last z-50 cursor-pointer ml-4",
  hr: "mt-1 border-neutral-50/50 dark:border-neutral-700",
  breadcrumbs: "z-10",
}

const props = withDefaults(
  defineProps<{
    to?: string
    title?: string
  }>(),
  {
    to: "/",
    title: undefined,
  },
)

const ariaLabel = computed(() => (props.title || "Logo").trim())
</script>
