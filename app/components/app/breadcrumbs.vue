<template>
  <nav aria-label="Breadcrumb" :class="ui.wrapper">
    <ol :class="ui.list">
      <li v-if="route.path !== '/home'" :class="[ui.item, { 'hidden lg:flex': breadcrumbs.length > 2 }]">
        <NuxtLink to="/" :class="ui.link">
          <UIcon :name="iconHome" :class="ui.icon" />
          <span :class="ui.label">Home</span>
        </NuxtLink>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.to"
        :class="[ui.item, { 'hidden lg:flex': index === 0 && breadcrumbs.length > 2 }]">
        <UIcon v-if="route.path !== '/home'" :name="iconNext"
          :class="[ui.separator, { 'hidden lg:block': index === 0 && breadcrumbs.length > 2 }]" />
        <NuxtLink v-if="crumb.to !== route.path" :to="crumb.to" :class="ui.link">
          <UIcon :name="route.path === '/home' ? iconHome : (crumb.icon || iconCrumb)" :class="ui.icon" />
          <span :class="ui.label">{{ formatLabel(crumb.label) }}</span>
        </NuxtLink>
        <span v-else :class="ui.active" aria-current="page">
          <UIcon :name="route.path === '/home' ? iconHome : (crumb.icon || iconCrumb)" :class="ui.icon" />
          <span :class="ui.label">{{ formatLabel(crumb.label) }}</span>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { findPageBreadcrumb } from '@nuxt/content/utils'
import { mapContentNavigation } from '@nuxt/ui/utils/content'
import { useQueryCollectionNavigation } from '~/composables/nuxt/query/useQueryCollectionNavigation'

const ui = {
  wrapper: 'w-full flex justify-center items-center font-heading tracking-wide',
  list: 'flex flex-wrap justify-center items-center gap-x-1 gap-y-0.5 py-1',
  item: 'flex items-center gap-1',
  separator: 'size-5 shrink-0 text-primary/50 dark:text-primary/60',
  icon: 'hidden md:block size-4 shrink-0',
  label: 'leading-none pt-px',
  link: 'inline-flex items-center gap-1.5 text-[15px] font-medium text-primary/70 hover:text-black dark:text-primary/80 dark:hover:text-white duration-300 ease-out',
  active: 'inline-flex items-center gap-1.5 text-[15px] font-semibold text-black dark:text-white',
}

const iconNext = 'material-symbols:arrow-right-rounded'
const iconCrumb = 'solar:folder-path-connect-linear'
const iconHome = 'line-md:home-twotone'

const route = useRoute()

// Only the first letter of each crumb is uppercase, everything else lowercase.
const formatLabel = (label: string) => {
  const text = label.replace(/[-_]+/g, ' ').trim().toLowerCase()
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const { data: navigation } = useQueryCollectionNavigation('content', 'navigation-breadcrumbs')

// Official Nuxt Content breadcrumb helper: walks the navigation tree to the current path.
// Icon and title come from frontmatter / .navigation.yml; segments missing from the tree fall back to the URL.
const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment !== '')
  const found = mapContentNavigation(
    findPageBreadcrumb(navigation.value ?? [], route.path, { current: true }),
  )
  const byPath = new Map(found.map(item => [item.to, item]))
  return pathSegments.map((segment, index) => {
    const to = `/${pathSegments.slice(0, index + 1).join('/')}`
    const item = byPath.get(to)
    const label = item?.label ?? segment
    return { to, label, icon: item?.icon as string | undefined }
  })
})
</script>
