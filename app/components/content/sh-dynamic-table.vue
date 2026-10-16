<template>
  <div ref="tableRoot" :class="twMerge(ui.wrapper, props.class)">
    <div v-if="props.header" :class="ui.header">
      <MDC v-if="props.header" :value="props.header" />
    </div>
    <div :class="ui.base">
      <div :class="ui.search">
        <div :class="ui.toolbar">
          <UInput ref="searchInput" v-model="q" :ui="{ root: 'grow min-w-[12rem] max-w-sm' }" type="text"
            icon="i-heroicons-magnifying-glass-20-solid" placeholder="Type to search for..." @keyup="onSearch">
            <template v-if="q !== ''" #trailing>
              <UButton color="neutral" variant="link" size="xs" icon="i-heroicons-x-mark-20-solid"
                aria-label="Clear search" @click="clearSearch" />
            </template>
          </UInput>
          <USelect :model-value="perPage" :items="perPageOptions" value-key="value" label-key="label"
            aria-label="Rows per page" :ui="{ base: ui.control }" @update:model-value="onPerPageChange" />
          <UButton :class="ui.control" color="neutral" variant="outline" icon="i-carbon-download" label="Export CSV"
            title="Download the filtered rows as a CSV file" @click="downloadCSV" />
          <span :class="ui.count">{{ countMessage }}</span>
        </div>

        <!-- Every narrowing currently applied, stated outside the filter panel so a
             collapsed panel never hides why the table is showing fewer rows. -->
        <div v-if="activeChips.length > 0" :class="ui.chips">
          <button v-for="chip in activeChips" :key="chip.key" type="button" :class="ui.chip"
            :title="`Remove the ${chip.group} filter`" @click="removeChip(chip)">
            <span :class="ui.chipKey">{{ chip.group }}</span>{{ chip.value }}
            <UIcon name="i-heroicons-x-mark-20-solid" class="w-3.5 h-3.5" />
          </button>
          <UButton color="neutral" variant="link" size="xs" label="Clear all" @click="clearAll" />
        </div>
      </div>
      <div :class="ui.filter">
        <UAccordion :items="accordionItems" default-value="0" class="not-prose" :ui="{ trigger: 'rounded-md px-3 py-1.5 text-sm bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-400 dark:text-neutral-900 dark:hover:bg-neutral-300', content: 'pt-3' }">
          <template #quick-filters>
            <div :class="ui.facetGrid">
              <template v-for="column in sortedFilters" :key="column.name">
                <div v-if="column.filter" :class="ui.facet.wrapper">
                  <div :class="ui.facet.header">
                    <span class="truncate" :title="column.title">{{ column.title }}</span>
                    <span :class="ui.facet.count">{{ facetSummary(column.name) }}</span>
                    <UButton v-if="countSelected(column.name) > 0" color="neutral" variant="link" size="xs"
                      icon="i-heroicons-x-mark-20-solid" :aria-label="`Clear the ${column.title} filter`"
                      @click="clearFacet(column.name)" />
                  </div>
                  <div :class="ui.facet.search">
                    <UInput v-model="facetQuery[column.name]" size="xs" class="w-full"
                      placeholder="Filter values..." icon="i-heroicons-magnifying-glass-20-solid"
                      :aria-label="`Filter ${column.title} values`" />
                  </div>
                  <ul :class="ui.facet.list">
                    <li v-for="label in visibleFacetValues(column.name)" :key="label" :data-filter-key="column.name"
                      :data-filter-value="label" @click="onFilterChange"
                      :class="[ui.facet.option, isSelectedFilter(column.name, label) ? ui.tr.selected : ui.tr.active]">
                      <span
                        :class="[ui.facet.checkbox, isSelectedFilter(column.name, label) ? ui.facet.checkboxOn : ui.facet.checkboxOff]">
                        <UIcon v-if="isSelectedFilter(column.name, label)" name="i-heroicons-check-20-solid"
                          class="w-3 h-3" />
                      </span>
                      <span :title="label" class="flex-1 break-words pr-1 min-w-0">{{ label }}</span>
                      <UBadge color="neutral" variant="subtle" :class="[ui.badge, 'flex-shrink-0']">
                        {{ stats[column.name]?.[label] }}
                      </UBadge>
                    </li>
                    <li v-if="visibleFacetValues(column.name).length === 0" :class="ui.facet.empty">
                      No matching values
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </template>
        </UAccordion>
      </div>
      <div class="w-full">
        <!-- The grid scrolls inside this box instead of growing the page, and the
             sticky header row latches to its top edge. -->
        <div ref="tableContainer" :class="ui.tableContainer">
          <table :class="ui.table">
            <thead :class="ui.thead">
              <tr :class="ui.tr.headRow">
                <template v-for="column in props.columns">
                  <th v-if="column.hide !== true"
                    :class="[ui.th.base, ui.th.padding, ui.th.color, ui.th.font, ui.th.size,
                      isSortedColumn(column) ? ui.th.sorted : '']"
                    :aria-sort="isSortedColumn(column) ? (sortColumn.direction === 'asc' ? 'ascending' : 'descending') : undefined">
                    <UButton v-if="column.sortable" v-bind="defaults.sortButton"
                      :icon="getSortIcon(column)" @click="onSort(column)">
                      <span v-html="getColumTitle(column)" class="not-prose break-words" />
                    </UButton>
                    <span v-else v-html="getColumTitle(column)" class="not-prose break-words" />
                  </th>
                </template>
              </tr>
            </thead>
            <tbody v-if="isLoading" :class="ui.tbody">
              <tr v-for="n in SKELETON_ROWS" :key="`skeleton-${n}`">
                <template v-for="column in props.columns" :key="`skeleton-${n}-${column.name}`">
                  <td v-if="!column.hide" :class="[ui.td.padding, ui.td.size]">
                    <div :class="ui.skeleton" :style="{ width: skeletonWidth(n, column) }"></div>
                  </td>
                </template>
              </tr>
            </tbody>
            <tbody v-else :class="ui.tbody">
              <template v-for="(row, index) in displayItems" :key="index">
                <tr :class="ui.tr.base">
                  <template v-for="(column, cIndex) in props.columns" :key="column.name">
                    <td v-if="!column.hide" :title="getCellTooltip(row, column)"
                      :class="[ui.td.base, ui.td.padding, ui.td.color, ui.td.font, ui.td.size, ...getCellClass(column)]"
                      class="not-prose">
                      <span v-if="column.pill && row[column.name]" :class="ui.td.pill">{{ row[column.name] }}</span>
                      <span v-else :class="column.wrap ? ui.td.clamp : ''" v-html="getItemColumValue(row, column)"></span>
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <!-- Reached when the fetch succeeded but the query and filters exclude every
             row. Names what is narrowing the table and offers each way back out. -->
        <div v-if="!isLoading && displayItems.length === 0" :class="ui.empty.wrapper">
          <UIcon name="i-heroicons-magnifying-glass-circle" :class="ui.empty.icon" />
          <p :class="ui.empty.title">{{ emptyTitle }}</p>
          <p v-if="emptyDetail" :class="ui.empty.text">{{ emptyDetail }}</p>
          <div v-if="q || selectedFilters.length > 0" class="flex flex-wrap justify-center gap-2 pt-1">
            <UButton v-if="q" color="neutral" variant="outline" label="Clear search" @click="clearSearch" />
            <UButton v-if="selectedFilters.length > 0" color="neutral" variant="ghost" label="Clear all filters"
              @click="clearFilters" />
          </div>
        </div>
      </div>
      <div :class="ui.pagination">
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:justify-between overflow-hidden">
          <div class="text-xs mx-auto sm:mx-0">
            {{ infoMessage }}
          </div>
          <UPagination v-if="perPage !== -1" class="mx-auto sm:mx-0" v-model:page="page" :items-per-page="perPage"
            :total="numberOfItems" :sibling-count="2" show-edges @update:page="onPageChange" />
        </div>
      </div>
    </div>
    <div v-if="props.footer" :class="ui.footer">
      <MDC :value="props.footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge"

const control = "bg-white dark:bg-neutral-900 text-black dark:text-white ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"

const config = {
  /** Customizes the overall container's styling, such as padding, margin, and background. */
  wrapper: "w-full bg-neutral-50 dark:bg-inherit border-2 border-neutral-200 dark:border-neutral-500 rounded-2xl p-5",
  /** Styles for the table's header, including background, text alignment, and font. */
  header: "rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 px-6 py-4 mb-6 text-center text-lg md:text-xl font-bold uppercase tracking-[0.18em] text-black dark:text-white not-prose",
  /** Applies default styles to the main table structure, including borders and layout. */
  base: "w-full",
  /** Customizes the footer section, often used for summaries or additional actions. */
  footer: "font-semibold text-center text-black dark:text-white border-t border-neutral-200 dark:border-neutral-700 pt-3 mt-5",
  /** Defines styling for the search input or controls, enhancing usability and design. */
  search: "w-full pb-4",
  /** Row that holds the search, filters and result count. */
  toolbar: "flex flex-wrap items-center gap-2",
  /** Text showing the number of results. */
  count: "ms-auto text-sm text-neutral-600 dark:text-neutral-300 whitespace-nowrap",
  /** Style of the toolbar controls (inputs, selects and buttons). */
  control,
  /** Counter badge shown on the filter button. */
  badge: "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 ring-1 ring-inset ring-neutral-200 dark:ring-neutral-700",
  /** Container of the active filter chips. */
  chips: "flex flex-wrap items-center gap-2 pt-3",
  /** A single active filter chip. */
  chip: "inline-flex items-center gap-1.5 rounded-full border border-oma-blue-100 dark:border-oma-blue-700 bg-oma-blue-50 hover:bg-oma-blue-100 dark:bg-oma-blue-900 dark:hover:bg-oma-blue-800 text-black dark:text-white text-xs font-semibold ps-2.5 pe-2 py-0.5 cursor-pointer",
  /** Column name inside a filter chip. */
  chipKey: "font-normal opacity-70",
  /** Applies styles to filtering options for better UI clarity and interaction. */
  filter: "",
  /** Grid that lays out the filter panels. */
  facetGrid: "flex flex-wrap gap-1 justify-center gap-y-4",
  /** Filter panel of a single column. */
  facet: {
    /** Container of a filter panel. */
    wrapper: "rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex-[0_0_calc(14.28%-0.25rem)] min-w-[180px] max-w-[250px] overflow-hidden",
    /** Header of a filter panel. */
    header: "flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 text-xs font-semibold uppercase tracking-wide text-black dark:text-white",
    /** Number of selected values in a filter panel. */
    count: "ms-auto text-[11px] font-normal normal-case tracking-normal text-neutral-500 dark:text-neutral-400",
    /** Search field inside a filter panel. */
    search: "px-2 pt-2 pb-1",
    /** Scrollable list of values in a filter panel. */
    list: "max-h-64 overflow-auto pt-1 text-sm",
    /** A single value row in a filter panel. */
    option: "list-none flex items-center p-2 hover:cursor-pointer gap-2",
    /** Base of the checkbox of a value. */
    checkbox: "flex-shrink-0 grid place-items-center w-3.5 h-3.5 rounded border",
    /** Checkbox of a selected value. */
    checkboxOn: "bg-oma-blue-500 border-oma-blue-500 text-white dark:bg-oma-blue-300 dark:border-oma-blue-300 dark:text-neutral-900",
    /** Checkbox of an unselected value. */
    checkboxOff: "border-neutral-300 dark:border-neutral-600",
    /** Message shown when a filter panel has no values. */
    empty: "px-2.5 py-2 text-xs italic text-neutral-500 dark:text-neutral-400"
  },
  // Scroll container for the table. The max height holds a header plus ten
  // single-line rows, so larger page sizes ("Show: 25/50/100/All") scroll
  // inside the component instead of stretching the page past the viewport.
  // The margin sits here instead of on the table, so it stays outside the
  // scrolling area.
  tableContainer: 'w-full mt-6 max-h-[38rem] overflow-auto',
  /** Styling applied to the table element, such as borders, spacing, and layout. */
  table: 'w-full min-w-full table-auto border-collapse my-0',
  /** Table body, including the divider between rows. */
  tbody: 'divide-y divide-neutral-300 dark:divide-neutral-700',
  /** Customizes the table header section, including fonts, colors, and spacing. */
  thead: "",
  /** Table rows. */
  tr: {
    /** Every row. */
    base: 'group hover:bg-neutral-100 dark:hover:bg-neutral-800',
    /** Header row. */
    headRow: '',
    /** Selected row. */
    selected: 'bg-oma-blue-50 hover:bg-oma-blue-100 text-black dark:bg-oma-blue-900/40 dark:hover:bg-oma-blue-900/60 dark:text-white',
    /** Row that can be clicked. */
    active: 'hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer'
  },
  /** Header cells. */
  th: {
    /** Base of every header cell, including the sticky position. */
    base: 'sticky top-0 z-20 text-left rtl:text-right backdrop-blur-sm bg-neutral-100/95 dark:bg-neutral-800/95 shadow-[inset_0_-2px_0_0_#d4d4d4] dark:shadow-[inset_0_-2px_0_0_#525252]',
    /** Padding of header cells. */
    padding: 'px-4 py-3.5',
    /** Text color of header cells. */
    color: 'text-black dark:text-white',
    /** Font weight of header cells. */
    font: 'font-semibold',
    /** Text size of header cells. */
    size: 'text-sm',
    /** Header cell of the column the table is sorted by. */
    sorted: 'bg-oma-blue-50 dark:bg-oma-blue-900/60 [&_svg]:text-oma-blue-700 dark:[&_svg]:text-oma-blue-100'
  },
  /** Body cells. */
  td: {
    /** Base of every body cell. */
    base: 'text-pretty [&_svg]:w-5 [&_svg]:h-5 [&_svg]:opacity-80 group-hover:[&_svg]:opacity-100',
    /** Padding of body cells. */
    padding: 'px-4 py-4',
    /** Text color of body cells. */
    color: 'text-black dark:text-white',
    /** Font of body cells. */
    font: '',
    /** Text size of body cells. */
    size: 'text-sm',
    /** Cells whose text is cut off on a single line. */
    truncate: 'whitespace-nowrap truncate max-w-[24rem]',
    /** Cells whose text wraps onto several lines. */
    wrap: 'whitespace-normal break-words align-top max-w-[24rem]',
    /** Cells with numeric values. */
    number: 'text-right tabular-nums',
    /** Cells displayed as a pill. */
    pill: 'inline-block rounded-full border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs font-medium text-black dark:text-white',
    /** Cells whose text is limited to two lines. */
    clamp: 'line-clamp-2'
  },
  /** Placeholder bars shown while data is loading. */
  skeleton: "h-3 rounded bg-neutral-200 dark:bg-neutral-700 animate-pulse",
  /** Message shown when there are no rows to display. */
  empty: {
    /** Container of the empty message. */
    wrapper: "flex flex-col items-center gap-2 py-12 text-center",
    /** Icon of the empty message. */
    icon: "w-8 h-8 text-neutral-400 dark:text-neutral-500",
    /** Title of the empty message. */
    title: "font-semibold text-black dark:text-white",
    /** Text of the empty message. */
    text: "text-sm text-neutral-500 dark:text-neutral-400 max-w-md"
  },
  /** Styles pagination controls, including buttons, spacing, and hover effects. */
  pagination: 'pt-5',
}

const DEFAULT_PER_PAGE = 10

const defaults = {
  perPageList: [10, 25, 50, 100],
  sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
  sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
  sortButton: {
    icon: 'i-heroicons-arrows-up-down-20-solid',
    trailing: true,
    square: true,
    color: 'neutral' as const,
    variant: 'ghost' as const,
    class: '-m-1.5 font-semibold text-sm text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700'
  },
}

const { $filterDDFObjects, $filterCommonObjects, $filterOmaEnablers } = useNuxtApp();

const PER_PAGE_LIST = defaults.perPageList

type itemsElement = {
  /** Key of the field in the data that this column displays. */
  name: String;
  /** Header text of the column. Defaults to `name`. */
  title?: String;
  /** Adds a filter panel with the distinct values of the column. */
  filter?: Boolean;
  /** Adds a sort button to the column header. */
  sortable?: Boolean;
  /** Hides the column, while still allowing it to be searched. */
  hide?: Boolean;
  /** Reformats the value before display. `DY` shows only the year of a date. */
  formatColumValue?: String;
  /** How the value is rendered: `url` (link), `list` (several values) or `subs` (a field of the value). */
  type?: String;
  /** Extra fields used by `type`. For `url`, the field that holds the link address. */
  typeData?: Array;
  /** Render the value as a pill - meant for short status vocabularies. */
  pill?: Boolean;
  /** Let the cell wrap over several lines instead of truncating to one. */
  wrap?: Boolean;
}

// type: url
// name: link text 
// typeData: ['url']  => [text](url)
// typeData: ['name'] => [text](text)


const props = withDefaults(
  defineProps<{
    /** URL from which the table fetches its data dynamically. */
    dataUrl: String;
    /** Specifies the key or field within the fetched data to be displayed. */
    dataField?: String;
    /** Column definitions: `name` (key in the data) plus optional `title`, `filter`, `order`, `hide`, `type`, `pill`, `wrap` and more. See the Columns section of the guideline. */
    columns: itemsElement[];
    ui?: Record<string, any>;
    /** Content for the table header, typically displayed above the column titles. */
    header?: String;
    /** Content for the footer section, often used for totals or additional information. */
    footer?: String;
    /** Defines the number of rows shown per page when the table loads, and preselects that value in the "Show" dropdown. Acceptable values: 10, 25, 50, 100, or `-1` to show all rows on a single page. */
    perPage?: number;
    /** Optional. Name of a built-in transform applied to the fetched data before it is rendered. Accepts `filterDDFObjects`, `filterCommonObjects`, or `filterOmaEnablers`. */
    transformRawData?: any;
    /** When `true`, the page scrolls to the table once its data has loaded and puts the cursor in the search box, so a visitor can start typing straight away. Intended for pages whose main purpose is looking something up in the table. The scroll is skipped when the URL carries an anchor, and the focus is skipped below the `lg` breakpoint so the on-screen keyboard does not cover the table on touch devices. */
    autofocusSearch?: Boolean;
    class?: any;
  }>(),
  {
    dataUrl: '',
    dataField: () => undefined,
    columns: () => ([]),
    ui: undefined,
    header: '',
    footer: '',
    perPage: DEFAULT_PER_PAGE,
    transformRawData: () => null,
    autofocusSearch: false,
    class: () => undefined
  });

const ui = computed(() => mergeUi(config, props.ui))


const fetchData = async () => {
  try {
    displayItems.value = []
    items.value = []
    nextTick()

    let data = await $fetch(props.dataUrl)
    if (props.transformRawData) {
      if (props.transformRawData === "filterDDFObjects") {
        data = $filterDDFObjects(data)
      } else if (props.transformRawData === "filterCommonObjects") {
        data = $filterCommonObjects(data)
      } else if (props.transformRawData === "filterOmaEnablers") {
        data = $filterOmaEnablers(data)
      }
    }
    nextTick()

    if (props.dataField) {
      return reformatColumnValues(data[props.dataField])
    } else {
      return reformatColumnValues(data)
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

const reformatColumnValues = (data) => {
  for (let i = 0; i < data.length; i++) {
    props.columns?.forEach(column => {
      if (column.name && column.formatColumValue) {
        if (column.formatColumValue === 'DY' && data[i][column.name]) {
          try {
            let dateStr = new Date(data[i][column.name])
            dateStr = dateStr.getFullYear().toString()
            data[i][column.name] = dateStr

          } catch (error) {
            console.log(error)
          }
        }
      }
    })
  }
  return data
}

const updateData = async () => {
  isLoading.value = true
  items.value = await fetchData()
  isLoading.value = false
  nextTick()
  sortFilters()
  updateDisplayData()
}

const infoMessage = toRef("")
const tableContainer = ref<HTMLElement | null>(null)
const tableRoot = ref<HTMLElement | null>(null)
const searchInput = ref<any>(null)

const goToSearch = () => {
  nextTick(() => {
    if (!window.location.hash) {
      const header = document.querySelector('header')
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
      const headerBottom = header ? header.getBoundingClientRect().height : 0
      const top = window.scrollY + tableRoot.value.getBoundingClientRect().top - headerBottom - rem

      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    }
    if (window.matchMedia('(min-width: 1024px)').matches) {
      searchInput.value?.inputRef?.focus({ preventScroll: true })
    }
  })
}

const scrollTableToTop = () => {
  nextTick(() => {
    if (tableContainer.value) {
      tableContainer.value.scrollTop = 0
    }
  })
}

const updateDisplayData = () => {

  let filteredData = filterDataByQuery(items.value)
  filteredData = filterDataByQuickFilter(filteredData)
  filteredData = sortDisplayData(filteredData)

  stats.value = getStats(filteredData)

  numberOfItems.value = filteredData?.length > 0 ? filteredData.length : 0
  const rows = filteredData || []

  if (perPage.value === -1) {
    displayItems.value = rows.slice()

    infoMessage.value = `Showing ${numberOfItems.value} items`

  } else {
    // Keep the current page inside the available range, otherwise a page-size
    // change while on a late page slices past the end and renders no rows.
    const lastPage = Math.max(1, Math.ceil(numberOfItems.value / perPage.value))
    if (page.value > lastPage) {
      page.value = lastPage
    }

    const startIndex = (page.value - 1) * perPage.value
    const endIndex = Math.min(startIndex + perPage.value, numberOfItems.value)

    displayItems.value = rows.slice(startIndex, endIndex)

    infoMessage.value = `Showing ${endIndex > 0 ? startIndex + 1 : 0} to ${endIndex} out of ${numberOfItems.value} items`
  }
  nextTick()
  scrollTableToTop()
}

const items = toRef([])
const displayItems = toRef([])
const page = defineModel('page', { type: Number, default: 1 })
const q = defineModel('q', { type: String, default: '' })
const perPage = toRef(props.perPage)
const numberOfItems = toRef(0)
const selectedFilters = toRef([])
const stats = toRef([])
// Computed so a collapsed panel still reports that the table is being narrowed.
const accordionItems = computed(() => [
  {
    label: selectedFilters.value.length > 0
      ? `Quick Filters \u00b7 ${selectedFilters.value.length} active`
      : "Quick Filters",
    icon: "i-heroicons-eye-dropper",
    slot: "quick-filters",
  }
])

// --- toolbar ----------------------------------------------------------------

const countMessage = computed(() => {
  if (isLoading.value) return ''
  const total = items.value?.length || 0
  return numberOfItems.value === total
    ? `${total} items`
    : `${numberOfItems.value} of ${total} items`
})

const columnTitle = (name: string) =>
  props.columns.find((column: any) => column.name === name)?.title || name

// The search term and every selected facet value, as one removable list. Without
// this the only record of a filter lives inside a panel that can be collapsed.
const activeChips = computed(() => {
  const chips = selectedFilters.value.map((filter: any) => ({
    key: `filter:${filter.name}:${filter.value}`,
    type: 'filter',
    group: columnTitle(filter.name),
    value: filter.value,
    name: filter.name
  }))

  if (q.value) {
    chips.unshift({ key: 'search', type: 'search', group: 'Search', value: q.value, name: '' })
  }

  return chips
})

const removeChip = (chip: any) => {
  if (chip.type === 'search') {
    clearSearch()
    return
  }

  selectedFilters.value = selectedFilters.value.filter(
    (filter: any) => !(filter.name === chip.name && filter.value === chip.value)
  )
  page.value = 1
  updateDisplayData()
}

const clearSearch = () => {
  q.value = ''
  page.value = 1
  updateDisplayData()
}

const clearFilters = () => {
  selectedFilters.value = []
  page.value = 1
  updateDisplayData()
}

const clearAll = () => {
  q.value = ''
  selectedFilters.value = []
  page.value = 1
  updateDisplayData()
}

// --- facet cards ------------------------------------------------------------

const facetQuery = reactive<Record<string, string>>({})

const facetValues = (name: string) => Object.keys(stats.value[name] || {}).sort(sortBySelection(name))

const countSelected = (name: string) =>
  selectedFilters.value.filter((filter: any) => filter.name === name).length

// Every matching value is listed; a long facet scrolls inside its own card rather
// than costing a click to expand.
const visibleFacetValues = (name: string) => {
  const needle = (facetQuery[name] || '').trim().toLowerCase()
  const values = facetValues(name)
  return needle ? values.filter(value => value.toLowerCase().includes(needle)) : values
}

const facetSummary = (name: string) => {
  const selected = countSelected(name)
  return selected > 0 ? `${selected} selected` : `${facetValues(name).length} values`
}

const clearFacet = (name: string) => {
  selectedFilters.value = selectedFilters.value.filter((filter: any) => filter.name !== name)
  page.value = 1
  updateDisplayData()
}

// --- cells ------------------------------------------------------------------

const isSortedColumn = (column: any) => sortColumn.value?.name === column.name

// Columns whose every populated value is a number, so the figures can be
// right-aligned and compared down the column.
const numericColumns = computed(() => {
  const names = new Set<string>()
  const sample = (items.value || []).slice(0, 50)
  if (sample.length === 0) return names

  props.columns.forEach((column: any) => {
    if (!column.name || column.type === 'list' || column.type === 'url') return
    // Identifiers are numbers nobody compares by magnitude, so they stay left-aligned.
    if (/id$/i.test(column.name)) return

    let populated = 0
    const allNumeric = sample.every((row: any) => {
      const value = row?.[column.name]
      if (value === null || value === undefined || value === '') return true
      populated++
      return typeof value === 'number' || /^-?\d+(\.\d+)?$/.test(String(value).trim())
    })

    if (allNumeric && populated > 0) names.add(column.name)
  })

  return names
})

// Columns marked `wrap: true` keep their prose over two or more lines; the rest
// stay on one line and carry the full value in a tooltip.
const getCellClass = (column: any) => {
  const classes = [column.wrap ? ui.value.td.wrap : ui.value.td.truncate]
  if (numericColumns.value.has(column.name)) classes.push(ui.value.td.number)
  return classes
}

const getCellTooltip = (row: any, column: any) => {
  const value = row?.[column.name]
  return value === null || value === undefined || value === '' ? undefined : String(value)
}

// --- loading and empty ------------------------------------------------------

const isLoading = ref(true)
const SKELETON_ROWS = 5

// Varied widths so the placeholder does not read as a grid of identical boxes.
const SKELETON_WIDTHS = ['72%', '54%', '88%', '46%', '64%', '78%']
const skeletonWidth = (rowIndex: number, column: any) =>
  SKELETON_WIDTHS[(rowIndex + (column.name?.length || 0)) % SKELETON_WIDTHS.length]

const emptyTitle = computed(() =>
  q.value ? `No results for \u201c${q.value}\u201d` : 'No results to show'
)

const emptyDetail = computed(() => {
  if (selectedFilters.value.length === 0) return ''

  const listed = selectedFilters.value
    .map((filter: any) => `${columnTitle(filter.name)} ${filter.value}`)
    .join(', ')

  return selectedFilters.value.length === 1
    ? `One filter is also active: ${listed}.`
    : `${selectedFilters.value.length} filters are also active: ${listed}.`
})
const sortColumn = toRef({})
const sortedFilters = toRef([])

// "Show" options: the configured page sizes plus All (-1). A page can pass any
// perPage it likes, so add that value to the list when it is not one of them,
// otherwise the select would have no option to display.
const perPageOptions = computed(() => {
  const sizes = perPage.value === -1 || PER_PAGE_LIST.includes(perPage.value)
    ? [...PER_PAGE_LIST]
    : [...PER_PAGE_LIST, perPage.value].sort((l, r) => l - r)

  return [
    ...sizes.map(size => ({ value: size, label: `${size}` })),
    { value: -1, label: 'All' }
  ]
})

const sortFilters = () => {
  sortedFilters.value = []

  if (props.columns) {
    let columnsUsedForFilter = props.columns.reduce((acc, c) => {
      if (c && c.filter) {
        acc.push(c)
      }
      return acc
    }, [])
    columnsUsedForFilter = columnsUsedForFilter.sort((l, r) => {
      if (!l.filterOrder && !r.filterOrder) {
        return 0
      } else if (!r.filterOrder) {
        return -1
      }
      return l.filterOrder - r.filterOrder
    })
    sortedFilters.value = columnsUsedForFilter
  }
}

const filterDataByQuery = (data) => {
  const fields2Search = props.columns.filter(item => item.query).map(item => item.name)

  if (q.value.length > 0) {
    return data.filter(item => {
      let finded = false
      for (const name of fields2Search) {
        if (name === "Undefined") {
          if (q.value === "") {
            finded = true
            break
          }
        } else if (item[name]?.toString().toLowerCase().includes(q.value.toLowerCase())) {
          finded = true
          break
        }
      }
      return finded
    })
  } else {
    return data
  }
}

const filterDataByQuickFilter = (data) => {
  if (selectedFilters.value.length > 0) {
    return selectedFilters.value.reduce((res, el) => {
      const currColumn = props.columns.filter(column => column.name === el.name)
      const rows = res.length > 0 ? res : data
      res = rows.filter(item => {
        if (item[el.name] && el.value) {
          return (currColumn[0]?.type === 'list') ? item[el.name].toString().includes(el.value.toString())
            : item[el.name].toString() === el.value.toString()
        } else
          return false
      })
      return res
    }, [])
  } else {
    return data
  }
}

const sortDisplayData = (data) => {
  if (Object.keys(sortColumn.value).length > 0) {
    // Sort a copy: with no query and no quick filter active the filters return
    // the source array itself, and sort() would reorder it in place.
    return (data && typeof data.sort === 'function') ? [...data].sort((a, b) => defaultSort(a[sortColumn.value.name], b[sortColumn.value.name], sortColumn.value.direction)) : data
  } else {
    return data
  }
}

const isSelectedFilter = (key, value) => {
  const res = selectedFilters.value.filter(item => item.name === key && item.value === value)
  return res.length > 0
}

const getColumTitle = (column) => {
  return column?.title ? column.title : ""
}

const getItemColumValue = (item, column) => {
  let result = ""
  if (column.type === 'url') {
    const linkTitle = item[column?.name] ? item[column.name] : ""
    const linkHref = item[column?.typeData] ? item[column.typeData[0]] : ""
    result = `<a href="${linkHref}" target="_blank">${linkTitle}</a>`
  } else if (column.type === 'subs') {
    result = item[column?.typeData] ? item[column.typeData] : ""
  } else {
    const itemValue = item[column.name]
    result = itemValue?.length > 0 ? itemValue.toString() : ""
  }
  return result
}

const getSortIcon = (column) => {
  if (sortColumn.value?.name === column.name) {
    return sortColumn.value.direction === 'asc' ? defaults.sortAscIcon : defaults.sortDescIcon
  } else {
    return defaults.sortButton.icon
  }
}

const getQuickFilterClass = () => {
  const numFilterColumns = props.columns.reduce((res, column) => {
    return column.filter ? res + 1 : res
  }, 0)

  if (numFilterColumns < 2) {
    return 'grid grid-cols-1 gap-4 min-h-48'
  } else if (numFilterColumns < 3) {
    return 'grid grid-cols-2 gap-2 min-h-48'
  } else if (numFilterColumns < 4) {
    return 'grid grid-cols-3 gap-1 min-h-48'
  } else if (numFilterColumns < 5) {
    return 'grid grid-cols-4 gap-1 min-h-48'
  } else {
    return 'grid grid-cols-5 gap-1 min-h-48'
  }
}

const getStats = (data) => {
  const stats = {}
  props.columns.forEach(el => {
    if (el.filter) {
      stats[el.name] = {}
    }
  })

  if (data && typeof data.forEach === 'function') {
    data.forEach(el => {
      props.columns.forEach(column => {
        if (Object.keys(el).includes(column.name) && Object.keys(stats).includes(column.name)) {
          if (column.type === 'list') {
            const parts = el[column.name]?.split(',')
            if (parts?.length > 0) {
              parts.forEach(part => {
                const label = part ? part.trim() : "Undefined"
                stats[column.name][label] = stats[column.name][label] ? stats[column.name][label] + 1 : 1
              })
            }
          } else {
            const label = el[column.name] ? el[column.name] : "Undefined"
            stats[column.name][label] = stats[column.name][label] ? stats[column.name][label] + 1 : 1
          }
        }
      })
    })
  }

  return stats
}

// Sort facet values with the selected ones first, the rest alphabetically
const sortBySelection = (colName: string) => {
  const selectedValues = (selectedFilters.value as any[])
    .filter((el: any) => el.name === colName)
    .map((el: any) => el.value)

  return (a: any, b: any): number => {
    if (selectedValues.length > 0) {
      const aSelected = selectedValues.includes(a)
      const bSelected = selectedValues.includes(b)
      if (aSelected && !bSelected) return -1
      if (!aSelected && bSelected) return 1
    }
    if (a === b) return 0
    return a < b ? -1 : 1
  }
}

// Escape fields containing special characters by wrapping them in quotes
const escapeCSVField = (field) => {
  let result = ""
  if (typeof field === 'string' && (field.includes(',') ||
    field.includes('"') || field.includes('#') || field.includes('\n'))) {
    result = field.replace(/"/g, '\"')
    result = result.replace(/,/g, ' ')
    result = result.replace(/\n/g, ' ')
  } else if (!field) {
    result = "NULL"
  } else {
    result = field.length > 0 ? field.toString() : " "
  }
  return `${result}`
}

const downloadCSV = () => {
  let csvContent = "" // "data:text/csv;charset=utf-8," // CSV file headers
  const headers = props.columns.map(column => `${escapeCSVField(column.title)}`)
  csvContent += headers.join(",") + "\n"

  displayItems.value.forEach((row, index) => {

    const rowContent = props.columns.map(column => `${escapeCSVField(row[column.name])}`)
    csvContent += rowContent.join(",") + "\n"
  })

  // Create a temporary anchor element to trigger the download
  const encodedUri = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "table_data.csv")
  document.body.appendChild(link)

  // Trigger the download
  link.click()

  // Clean up: remove the link after download
  document.body.removeChild(link)
}

// Event handlers

const onPageChange = (e) => {
  updateDisplayData()
}

const onSearch = (e) => {
  page.value = 1
  q.value = q.value.trim()
  updateDisplayData()
}

const onFilterChange = (e) => {
  const key = e.currentTarget.getAttribute('data-filter-key')
  const value = e.currentTarget.getAttribute('data-filter-value')

  const selected = selectedFilters.value.filter(el => el.name === key && el.value === value)

  if (selected.length > 0) {
    selectedFilters.value = selectedFilters.value.filter(el => el != selected[0])
  } else {
    selectedFilters.value.push({ name: key, value: value });
  }

  page.value = 1
  updateDisplayData()
}

const MONTHS: Record<string, number> = {
  jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3, apr: 4, april: 4,
  may: 5, jun: 6, june: 6, jul: 7, july: 7, aug: 8, august: 8,
  sep: 9, sept: 9, september: 9, oct: 10, october: 10, nov: 11, november: 11, dec: 12, december: 12
}

// "11-Aug-25" / "11 August 2025" -> 20250811
const humanDateNumber = (val: any): number | null => {
  if (typeof val !== 'string') return null
  const m = val.match(/(\d{1,2})[- ]([A-Za-z]{3,9})[- ](\d{2,4})/i)
  if (!m) return null
  const month = MONTHS[m[2].toLowerCase()]
  if (!month) return null
  const yearRaw = Number(m[3])
  const year = yearRaw < 100 ? 2000 + yearRaw : yearRaw
  return year * 10000 + month * 100 + Number(m[1])
}

// "focus_20250501" -> 20250501
const compactDateNumber = (val: any): number | null => {
  if (typeof val !== 'string') return null
  const m = val.match(/(\d{8})/)
  return m && m[1] ? Number(m[1]) : null
}

const defaultSort = (a: any, b: any, direction: 'asc' | 'desc') => {
  if (a == null) {
    a = ""
  }
  if (b == null) {
    b = ""
  }
  if (typeof a === 'string') a = a.trim()
  if (typeof b === 'string') b = b.trim()
  if (a === b) {
    return 0
  }

  // Dates written in text sort chronologically instead of alphabetically
  for (const toNumber of [humanDateNumber, compactDateNumber]) {
    const aNum = toNumber(a)
    const bNum = toNumber(b)
    if (aNum !== null && bNum !== null) {
      if (aNum === bNum) return 0
      return (direction === 'asc') === (aNum < bNum) ? -1 : 1
    }
  }

  if (direction === 'asc') {
    return a < b ? -1 : 1
  } else {
    return a > b ? -1 : 1
  }
}

const onSort = (column) => {
  if (sortColumn.value.name === column.name) {
    sortColumn.value.direction = sortColumn.value.direction === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = { name: column.name, direction: 'asc' }
  }
  updateDisplayData()
}

const onPerPageChange = (value) => {
  try {
    perPage.value = Number(value)
    page.value = 1
    updateDisplayData()
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await updateData()

  if (props.autofocusSearch) {
    goToSearch()
  }
})

watch(items,
  (newValue, oldValue) => {
    updateDisplayData()
    nextTick()
  },
  { immediate: true }
)
</script>
