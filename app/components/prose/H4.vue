<!-- Nuxt UI's ProseH4 has no hash icon, same anatomy as H2 with the shared look from utils/prose.ts -->
<script setup lang="ts">
import { headingColor, headingLink, headingLeading, headingLeadingIcon } from '~/utils/prose'

const props = defineProps<{
  id?: string
}>()

const appConfig = useAppConfig()
const { headings } = useRuntimeConfig().public?.mdc || {}
const generate = computed(() =>
  props.id && (typeof headings?.anchorLinks === 'boolean' ? headings.anchorLinks : headings?.anchorLinks?.h4 ?? false),
)
</script>

<template>
  <h4
    :id="props.id"
    :class="[headingColor, 'relative group text-[1em] leading-[1.5] font-normal mt-[1.5em] mb-[0.5em] scroll-mt-0 lg:scroll-mt-0 dark:brightness-75']"
  >
    <a v-if="props.id && generate" :href="`#${props.id}`" :class="headingLink">
      <span :class="headingLeading">
        <UIcon :name="appConfig.ui.icons.hash" :class="headingLeadingIcon" />
      </span>
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>
