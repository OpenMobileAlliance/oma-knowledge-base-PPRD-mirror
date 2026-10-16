<template>
  <nav v-if="page?.body?.toc?.links?.length > 0" aria-label="Table of Contents" class="not-prose">
    <p class="mb-3 pl-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-golden">
      On this page
    </p>
    <ul class="border-l border-neutral-300 dark:border-golden/20">
      <li v-for="link in flatLinks" :key="link.id" :class="link.depth > 0 ? 'hidden lg:block' : ''">
        <ULink :id="`toc-${link.id}`" :to="`${page.path}#${link.id}`" raw
          class="-ml-px block border-l-2 py-1.5 pr-2 text-sm leading-snug transition-colors duration-200"
          :class="visible.has(link.id) ? ui.active : ui.normal"
          :style="{ paddingLeft: `${0.875 + link.depth * 0.75}rem` }">
          {{ link.text }}
        </ULink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  page: any
}>()

const ui = {
  normal: 'border-transparent text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 dark:text-golden/70 dark:hover:border-golden/60 dark:hover:text-golden',
  // Headings currently in the viewport
  active: 'border-primary-500 font-medium text-neutral-900 dark:border-golden dark:text-golden',
}

const { visible } = useActiveHeading()

// Flatten the nested toc (h1-h6) into a list, keeping each link's nesting depth for indentation
const flatLinks = computed(() => {
  const result: { id: string, text: string, depth: number }[] = []
  const walk = (links: any[] = [], depth = 0) => {
    for (const link of links) {
      result.push({ id: link.id, text: link.text, depth })
      walk(link.children, depth + 1)
    }
  }
  walk(props.page?.body?.toc?.links)
  return result
})
</script>
