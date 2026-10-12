<template>
  <div :class="ui.wrapper">
    <div :class="ui.inner">
      <NuxtLink v-if="route.path !== '/home'" to="/"
        :class="[ui.linkCrumb, { 'hidden': breadcrumbs.length > 2, 'lg:flex': breadcrumbs.length > 2 }]">
        <UIcon :name="iconHome" :class="ui.iconHome" />
        HOME
      </NuxtLink>
      <span v-for="(crumb, index) in breadcrumbs" :key="index" :class="ui.crumbsWrapper">
        <div v-if="route.path !== '/home'">
          <UIcon :name="iconNext" :class="[ui.iconNext, index === 0
            ? (breadcrumbs.length > 2 ? 'hidden lg:inline-flex' : 'inline-flex')
            : 'inline-flex']" />
        </div>
        <NuxtLink v-if="crumb.to != route.path" :to="crumb.to"
          :class="{ [ui.linkCrumb]: isBreadcrumbActive(crumb, index) }">
          <UIcon v-if="route.path !== '/home'" :name="iconCrumb" :class="ui.iconCrumb" />
          <UIcon v-else :name="iconHome" :class="ui.iconHome" />
          {{ crumb.label.toUpperCase() }}
        </NuxtLink>
        <span v-else :class="[ui.activeCrumb, { '': isBreadcrumbActive(crumb, index) }]">
          <UIcon v-if="route.path === '/home'" :name="iconHome" :class="ui.iconHome" />
          <UIcon v-else :name="iconCrumb" :class="ui.iconCrumb" />
          {{ crumb.label.toUpperCase() }}
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const ui = {
  wrapper: 'w-full flex italic 2xl:justify-center items-center',
  inner: 'flex items-center mr-0 lg:mx-auto mt-1',
  crumbsWrapper: 'flex items-center text-primary/70 dark:text-primary/80',
  iconNext: 'text-3xl flex items-center mt-1',
  iconHome: 'hidden md:inline-flex items-center mr-1',
  iconCrumb: 'hidden md:inline-flex items-center mr-1',
  linkCrumb: 'text-[15px] font-normal text-primary/70 hover:text-black dark:text-primary/80 dark:hover:text-white duration-300 ease-out',
  activeCrumb: 'text-[15px] font-normal text-black dark:text-white',
}

const iconNext = 'material-symbols:arrow-right-rounded'
const iconCrumb = 'solar:folder-path-connect-linear'
const iconHome = 'line-md:home-twotone'

const route = useRoute()

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment !== '')
  return pathSegments.map((segment, index) => {
    const to = `/${pathSegments.slice(0, index + 1).join('/')}`
    const label = capitalize(segment)
    return { to, label }
  })
})

const isBreadcrumbActive = (crumb: { to: string }, index: number) => {
  const currentPath = `/${route.path.split('/').filter(segment => segment !== '').slice(0, index + 1).join('/')}`
  return crumb.to === currentPath
}
</script>
