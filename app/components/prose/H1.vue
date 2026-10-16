<!-- Nuxt UI's ProseH1 has no hash icon, same anatomy as H2 with the shared look from utils/prose.ts -->
<script setup lang="ts">
import { headingColor, headingLink, headingLeading, headingLeadingIcon } from '~/utils/prose'

const props = defineProps<{
  id?: string
}>()

// `# {{$doc.title}}` has no text at parse time, so MDC generates an empty id. Build it from the rendered text instead.
const slots = useSlots()
const vnodeText = (nodes: any[] = []): string =>
  nodes.map(n => (typeof n.children === 'string' ? n.children : Array.isArray(n.children) ? vnodeText(n.children) : '')).join('')
const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-')
const headingId = computed(() => props.id || slugify(vnodeText(slots.default?.())) || undefined)

const appConfig = useAppConfig()
const { headings } = useRuntimeConfig().public?.mdc || {}
const generate = computed(() =>
  !!headingId.value && (typeof headings?.anchorLinks === 'boolean' ? headings.anchorLinks : headings?.anchorLinks?.h1 ?? false),
)
</script>

<template>
  <h1
    :id="headingId"
    :class="[headingColor, 'relative group text-[1.75em] leading-[1.2] md:text-[2.25em] md:leading-[1.1111] font-normal mt-0 mb-[0.6em] md:mb-[0.8889em] scroll-mt-0 lg:scroll-mt-0']"
  >
    <a v-if="generate && headingId" :href="`#${headingId}`" :class="headingLink">
      <span :class="headingLeading">
        <UIcon :name="appConfig.ui.icons.hash" :class="headingLeadingIcon" />
      </span>
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
