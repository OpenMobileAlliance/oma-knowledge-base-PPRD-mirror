<template>
  <div v-if="doc" class="not-prose my-6">
    <template v-if="section === 'props' || section === 'type'">
      <p v-if="!rows.length" class="text-neutral-600 dark:text-neutral-400">This component has no props.</p>
      <div v-else class="overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-700">
        <table class="w-full text-left text-sm">
          <thead class="bg-neutral-50 dark:bg-neutral-800/60">
            <tr>
              <th v-for="h in [section === 'type' ? 'Field' : 'Prop', 'Type', 'Default', 'Description']" :key="h" :class="th">{{ h }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-neutral-200 dark:divide-neutral-700">
            <tr v-for="p in rows" :key="p.name" class="align-top">
              <td :class="td"><code :class="code">{{ p.name }}</code><span v-if="p.required" class="ml-1 text-xs text-red-600 dark:text-red-400">required</span></td>
              <td :class="td"><code :class="code">{{ p.type }}</code></td>
              <td :class="td"><code v-if="p.default" :class="code">{{ p.default }}</code><span v-else class="text-neutral-400">–</span></td>
              <td :class="td">{{ p.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template v-else-if="section === 'slots'">
      <p v-if="!rows.length" class="text-neutral-600 dark:text-neutral-400">This component has no slots.</p>
      <ul v-else class="list-disc pl-6">
        <li v-for="s in rows" :key="s.name"><code :class="code">{{ s.name }}</code><span v-if="s.description"> – {{ s.description }}</span></li>
      </ul>
    </template>

    <template v-else-if="section === 'ui'">
      <p v-if="!rows.length" class="text-neutral-600 dark:text-neutral-400">This component has no <code :class="code">ui</code> keys.</p>
      <div v-else class="overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-700">
        <table class="w-full text-left text-sm">
          <thead class="bg-neutral-50 dark:bg-neutral-800/60">
            <tr>
              <th v-for="h in ['Key', 'Default classes', 'Description']" :key="h" :class="th">{{ h }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-neutral-200 dark:divide-neutral-700">
            <tr v-for="u in visibleUi" :key="u.path" class="align-top">
              <td :class="td"><code :class="code">{{ u.path }}</code></td>
              <td :class="td"><code :class="[code, 'break-words']">{{ u.value || '""' }}</code></td>
              <td :class="td">{{ u.description }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="uiCollapsible" class="flex justify-center border-t border-neutral-200 py-2 dark:border-neutral-700">
          <UButton :label="uiExpanded ? 'Collapse' : `Show all ${rows.length} keys`"
            :icon="uiExpanded ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" color="neutral" variant="ghost" size="xs"
            class="rounded-full" @click="uiExpanded = !uiExpanded" />
        </div>
      </div>
    </template>
  </div>
  <p v-else class="text-red-600">DocApi: no generated docs for "{{ name }}". Run <code>npm run docs:generate</code>.</p>
</template>

<script setup lang="ts">
import docs from '~/data/component-docs.json'

/**
 * Renders part of a component's API from `app/data/component-docs.json`, which
 * `scripts/generate-component-docs.mjs` extracts from the component's source.
 */
const props = withDefaults(
  defineProps<{
    /** Component file name, e.g. `sh-badge`. Defaults to the last segment of the page URL. */
    component?: string;
    /** Which part of the API to render. */
    section: 'props' | 'slots' | 'ui' | 'type';
    /** For `section="type"`: name of a type declared in the component, e.g. `itemsElement`. */
    type?: string;
  }>(),
  { component: '', type: '' }
)

const route = useRoute()
const name = computed(() => props.component || route.path.split('/').filter(Boolean).pop() || '')
const doc = computed(() => (docs as Record<string, any>)[name.value])
const rows = computed<any[]>(() =>
  props.section === 'type' ? doc.value?.types?.[props.type] ?? [] : doc.value?.[props.section] ?? []
)

/** The `ui` table shows only this many rows until expanded; longer tables get a toggle. */
const uiMaxRows = 6
const uiExpanded = ref(false)
const uiCollapsible = computed(() => props.section === 'ui' && rows.value.length > uiMaxRows)
const visibleUi = computed(() => (uiCollapsible.value && !uiExpanded.value ? rows.value.slice(0, uiMaxRows) : rows.value))

const th = 'px-3 py-2 font-semibold text-neutral-700 dark:text-neutral-200'
const td = 'px-3 py-2 text-neutral-800 dark:text-neutral-300'
const code = 'rounded bg-neutral-100 px-1 py-0.5 text-[0.85em] dark:bg-neutral-800'
</script>
