<!-- Nuxt UI only ships ProseH1-H4. Same anatomy, shared look from utils/prose.ts -->
<script setup lang="ts">
import { headingColor, headingLink, headingLeading, headingLeadingIcon } from '~/utils/prose'

const props = defineProps<{
  id?: string
}>()

const appConfig = useAppConfig()
const { headings } = useRuntimeConfig().public?.mdc || {}
const generate = computed(() =>
  props.id && (typeof headings?.anchorLinks === 'boolean' ? headings.anchorLinks : headings?.anchorLinks?.h6 ?? false),
)
</script>

<template>
  <h6
    :id="props.id"
    :class="[headingColor, 'relative group text-[0.67em] leading-normal font-normal mt-[1.5em] mb-[0.5em] dark:brightness-75']"
  >
    <a v-if="props.id && generate" :href="`#${props.id}`" :class="headingLink">
      <span :class="headingLeading">
        <UIcon :name="appConfig.ui.icons.hash" :class="headingLeadingIcon" />
      </span>
      <slot />
    </a>
    <slot v-else />
  </h6>
</template>
