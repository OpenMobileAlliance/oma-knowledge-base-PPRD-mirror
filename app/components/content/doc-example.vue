<template>
  <div class="my-6 rounded-md border border-neutral-200 dark:border-neutral-700 overflow-hidden">
    <div class="p-6" :class="ui">
      <!-- MDC alone cannot resolve the local sh-* components; ContentRenderer can. -->
      <MDC :value="code">
        <template #default="{ body }">
          <ContentRenderer v-if="body" :value="{ body }" />
        </template>
      </MDC>
    </div>
    <div class="not-prose relative border-t border-neutral-200 dark:border-neutral-700 [&_.relative]:!my-0 [&_pre]:!my-0 [&_pre]:!border-0 [&_pre]:!rounded-none"
      :class="collapsed ? 'max-h-64 overflow-hidden' : ''">
      <MDC :value="fenced" />
      <div v-if="collapsible && collapsed"
        class="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center bg-gradient-to-t from-white to-transparent pb-4 dark:from-neutral-900">
        <UButton label="Expand code" icon="i-lucide-chevron-down" color="neutral" variant="outline" size="sm"
          class="bg-default rounded-full" @click="expanded = true" />
      </div>
    </div>
    <div v-if="collapsible && expanded" class="flex justify-center border-t border-neutral-200 py-2 dark:border-neutral-700">
      <UButton label="Collapse code" icon="i-lucide-chevron-up" color="neutral" variant="ghost" size="xs" class="rounded-full"
        @click="expanded = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Renders an example once from its MDC source: live preview on top, code below,
 * like the component pages of ui.nuxt.com. Write the example a single time in
 * the `code` prop instead of pasting it twice.
 */
const props = withDefaults(
  defineProps<{
    /** MDC source of the example, e.g. a `::ShCard ... ::` block. */
    code: string;
    /** Extra classes for the preview area. */
    ui?: string;
  }>(),
  { ui: '' }
)

/** Code taller than this many lines (about 16rem) is collapsed behind an "Expand code" button. */
const maxLines = 10
const expanded = ref(false)
const collapsible = computed(() => props.code.trim().split('\n').length > maxLines)
const collapsed = computed(() => collapsible.value && !expanded.value)
const fenced = computed(() => '```mdc\n' + props.code.trim() + '\n```')
</script>
