<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <div class="flex min-h-dvh w-full flex-col bg-default text-default">
      <ShAnnouncement :class="['z-50', isHome ? 'sticky top-0 w-full' : '']" />
      <AppHeader v-if="!isHome" class="flex py-2 md:py-4" title="OMA">
        <template #logo>
          <img
            src="/logo-dark.png"
            alt="OMA logo"
            class="hidden h-10 w-[166px] md:h-16 md:w-[265px] shrink-0 grow-0 object-contain object-left dark:block"
          >
          <img
            src="/logo-light.png"
            alt="OMA logo"
            class="h-10 w-[166px] md:h-16 md:w-[265px] shrink-0 grow-0 object-contain object-left dark:hidden"
          >
        </template>
      </AppHeader>
      <div :class="isHome ? 'size-full' : 'w-full px-4 pb-16 sm:px-6 md:pb-24 lg:px-8'">
        <NuxtPage />
      </div>
      <AppFooter v-if="!isHome" class="mt-auto" />
    </div>
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute()
const siteUrl = useSiteConfig().url

const isHome = computed(() => route.path === '/')

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: new URL(route.path, siteUrl).href,
    },
  ],
}))

useScrollOffset()
</script>
