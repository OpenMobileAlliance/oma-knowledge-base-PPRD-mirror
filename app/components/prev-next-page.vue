<template>
  <nav v-if="prev || next" aria-label="Previous and next page" class="not-prose mt-12 border-t border-default pt-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <NuxtLink v-if="prev" :to="prev.path" :class="[ui.card, 'sm:col-start-1']">
        <span :class="[ui.label, 'justify-start']">
          <UIcon name="i-lucide-arrow-left" :class="[ui.icon, 'group-hover:-translate-x-1']" />
          Previous
        </span>
        <span :class="ui.title">{{ prev.title }}</span>
        <span v-if="showDescription && prev.description" :class="ui.description">{{ prev.description }}</span>
      </NuxtLink>

      <NuxtLink v-if="next" :to="next.path" :class="[ui.card, 'sm:col-start-2 text-left sm:text-right sm:items-end']">
        <span :class="[ui.label, 'justify-start sm:justify-end']">
          Next
          <UIcon name="i-lucide-arrow-right" :class="[ui.icon, 'group-hover:translate-x-1']" />
        </span>
        <span :class="ui.title">{{ next.title }}</span>
        <span v-if="showDescription && next.description" :class="ui.description">{{ next.description }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    showDescription?: boolean
  }>(),
  {
    showDescription: true,
  },
)

const route = useRoute()

const excludedPaths = [
  '/announcement',
  '/landing-page-floaters',
  '/landing-page-menu',
  '/test-guide',
]

const guidelinesPaths = [
  '/guidelines',
  '/guidelines/looks-feel',
  '/guidelines/components',
  '/guidelines/components/sh',
]

const { data: surround } = await useAsyncData(
  () => `surround-${route.path}`,
  () => {
    // Pages under /guidelines are only part of the prev/next chain while reading the guidelines themselves
    const inGuidelines = guidelinesPaths.some(path => route.path.includes(path))
    const query = queryCollectionItemSurroundings('content', route.path, { fields: ['title', 'description', 'path'] })
      .where('path', 'NOT IN', excludedPaths)
      .where('stem', 'NOT LIKE', '%.navigation')
    return inGuidelines ? query : query.where('path', 'NOT LIKE', '/guidelines%')
  },
  { watch: [() => route.path] },
)

const isLink = (item?: { path?: string } | null) => !!item?.path && item.path !== '/'

const prev = computed(() => (isLink(surround.value?.[0]) ? surround.value![0] : null))
const next = computed(() => (isLink(surround.value?.[1]) ? surround.value![1] : null))

const ui = {
  card: 'group flex min-w-0 flex-col gap-2 rounded-xl border border-default bg-default/60 p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:hover:border-golden dark:hover:bg-golden/5',
  label: 'flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted',
  icon: 'size-4 shrink-0 text-primary transition-transform duration-200 dark:text-golden',
  title: 'text-lg font-semibold leading-snug text-highlighted break-words sm:text-xl',
  description: 'line-clamp-2 text-sm text-muted break-words',
}
</script>
