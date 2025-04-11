<template>
  <div :class="[ui.wrapper, 'w-full p-4']" v-bind="attrs">
    <div v-if="props.header" :class="ui.header">
      <MDC v-if="props.header" :value="props.header" />
    </div>
    <div :class="ui.base">
      <div :class="ui.search">
        <div class="flex flex-row gap-2">
          <div class="text-base flex flex-row items-center">
            <span class="pr-2">Show: </span>
            <select class="" @change="onPerPageChange">
              <option v-for="item in PER_PAGE_LIST" :key="item" :value="item" :class="{ selected: perPage === item }">
                {{ item }}
              </option>
              <option value="-1" key="-1" :class="{ selected: perPage === -1 }">All</option>
            </select>
          </div>
          <div class="pl-4">
            <button @click="downloadCSV" class="hover:scale-125" title="Download CSV file">
              <UIcon name="i-carbon-download" />
            </button>
          </div>
          <div class="pl-8 grow">
            <UInput v-model="q" type="text" @keyup="onSearch" placeholder="type a token to search for" />
          </div>
        </div>
      </div>
      <div :class="ui.filter">
        <UAccordion :items="accordionItems" color="primary" variant="solid" size="sm" class="not-prose">
          <template #quick-filters>
            <div :class="getQuickFilterClass()">
              <template v-for="column in sortedFilters">
                <div class="rounded-lg border" v-if="column.filter">
                  <UDivider :label="column.title" class="py-4 overflow-x-auto" />
                  <ul class="max-h-36 overflow-auto">
                    <li v-for="label in Object.keys(stats[column.name]).sort()" :data-filter-key="column.name"
                      :data-filter-value="label" @click="onFilterChange"
                      class="list-none flex justify-between p-2 hover:cursor-pointer"
                      :class="[isSelectedFilter(column.name, label) ? ui.tr.selected : '', ui.tr.active]">
                      <span>{{ label }}</span>
                      <UBadge>
                        {{ stats[column.name][label] }}
                      </UBadge>
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </template>
        </UAccordion>
      </div>
      <div class="w-full overflow-x-auto">
        <table :class="[ui.table, 'min-w-full']">
          <thead :calss="ui.thead">
            <tr :ui.tr.base>
              <template v-for="column in props.columns">
                <th v-if="column.hide !== true"
                  :class="[ui.th.base, ui.th.padding, ui.th.color, ui.th.font, ui.th.size]">
                  <UButton v-if="column.sortable" v-bind="{ ...(config.default.sortButton) }"
                    :icon="getSortIcon(column)" @click="onSort(column)">
                    <span v-html="getColumTitle(column)" class="not-prose" />
                  </UButton>
                  <span v-else v-html="getColumTitle(column)" class="not-prose" />
                </th>
              </template>
            </tr>
          </thead>
          <tbody :calss="ui.tbody">
            <template v-for="(row, index) in displayItems" :key="`${index}-${Date.now()}`">
              <tr :id="`${index}-${Date.now()}`" :calss="ui.tr.base">
                <template v-for="(column, cIndex) in props.columns" :key="`${column.name}-${index}-${Date.now()}`">
                  <td v-if="!column.hide" v-html="getItemColumValue(row, column)"
                    :id="`${column.name}-${index}-${Date.now()}`"
                    :class="[ui.td.base, ui.td.padding, ui.td.color, ui.td.font, ui.td.size]" class="not-prose">
                  </td>
                </template>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div :class="ui.pagination">
        <div class="flex flex-row justify-between">
          <div class="text-xs">
            {{ infoMessage }}
          </div>
          <UPagination v-model="page" :page-count="perPage" :total="numberOfItems" :max="10" @click="onPageChange"
            show-last show-first />
        </div>
      </div>
    </div>
    <div v-if="props.footer" :class="ui.footer">
      <MDC :value="props.footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { dynamicTable as config } from "@/ui.config"
const { $filterDDFObjects, $filterCommonObjects, $filterOmaEnablers } = useNuxtApp();

const PER_PAGE_LIST = config.perPage

type itemsElement = {
  name: String;
  title?: String;
  filter?: Boolean;
  filterOrder?: Number;
  order?: Boolean;
  hide?: Boolean;
  formatColumValue?: String;
  type?: String;
  typeData?: Array;
}

// type: url
// name: link text 
// typeData: ['url']  => [text](url)
// typeData: ['name'] => [text](text)


const props = withDefaults(
  defineProps<{
    dataUrl: String;
    dataField?: String;
    columns: itemsElement[];
    ui?: Partial<typeof config>;
    header?: String;
    footer?: String;
    perPage?: Number;
    transformRawData?: any;
    class?: Any;
  }>(),
  {
    dataUrl: '',
    dataField: () => undefined,
    columns: () => ([]),
    ui: () => ({}),
    header: '',
    footer: '',
    perPage: config.default.perPage,
    transformRawData: () => null,
    class: () => undefined
  });

const { ui, attrs } = useUI(
  "sh-dynamic-table",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
)


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
  items.value = await fetchData()
  nextTick()
  sortFilters()
  updateDisplayData()
}

const infoMessage = toRef("")

const updateDisplayData = () => {

  let filteredData = filterDataByQuery(items.value)
  filteredData = filterDataByQuickFilter(filteredData)
  filteredData = sortDisplayData(filteredData)

  stats.value = getStats(filteredData)

  numberOfItems.value = filteredData?.length > 0 ? filteredData.length : 0

  if (perPage.value === -1) {
    for (let index = 0; index < numberOfItems.value; index++) {
      displayItems.value.push(filteredData[index])
    }

    infoMessage.value = `Showing ${numberOfItems.value} items`

  } else {
    let startIndex = page.value * perPage.value - perPage.value
    let endIndex = startIndex + perPage.value > numberOfItems.value ? numberOfItems.value : startIndex + perPage.value

    infoMessage.value = ""
    displayItems.value = []
    nextTick()

    for (let index = startIndex; index < endIndex; index++) {
      displayItems.value.push(filteredData[index])
    }

    infoMessage.value = `Showing ${endIndex > 0 ? startIndex + 1 : 0} to ${endIndex} out of ${numberOfItems.value} items`
  }
  nextTick()
}

const items = toRef([])
const displayItems = toRef([])
const page = defineModel('page', { type: Number, default: 1 })
const q = defineModel('q', { type: String, default: '' })
const perPage = toRef(props.perPage)
const numberOfItems = toRef(0)
const selectedFilters = toRef([])
const stats = toRef([])
const accordionItems = toRef([
  {
    label: "Quick Filters",
    icon: "i-heroicons-eye-dropper",
    slot: "quick-filters",
    defaultOpen: true
  }
])
const sortColumn = toRef({})
const sortedFilters = toRef([])

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
      for (name of fields2Search) {
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
      if (res.length > 0) {
        res = res.filter(item => item[el.name] && el.value ? item[el.name].toString() === el.value.toString() : false)
      } else {
        res = data.filter(item => item[el.name] && el.value ? item[el.name].toString() === el.value.toString() : false)
      }
      return res
    }, [])
  } else {
    return data
  }
}

const sortDisplayData = (data) => {
  if (Object.keys(sortColumn).length > 0) {
    return (data && typeof data.sort === 'function') ? data.sort((a, b) => defaultSort(a[sortColumn.value.name], b[sortColumn.value.name], sortColumn.value.direction)) : data
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
    return sortColumn.value.direction === 'asc' ? config.default.sortAscIcon : config.default.sortDescIcon
  } else {
    return config.default.sortButton.icon
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
          const label = el[column.name] ? el[column.name] : "Undefined"
          stats[column.name][label] = stats[column.name][label] ? stats[column.name][label] + 1 : 1
        }
      })
    })
  }

  //Object.keys(stats).forEach(key => (stats[key]).sort((a, b) => a - r))

  return stats

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
  const encodedUri = "data:text/csv;charset=utf-8i," + encodeURIComponent(csvContent)
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
  q.value = ""
  updateDisplayData()
}

const defaultSort = (a: any, b: any, direction: 'asc' | 'desc') => {
  if (a == null) {
    a = ""
  }
  if (b == null) {
    b = ""
  }
  if (a === b) {
    return 0
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

const onPerPageChange = (e) => {
  try {
    perPage.value = Number(e.target.value)
    updateDisplayData()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  updateData()
})

watch(items,
  (newValue, oldValue) => {
    updateDisplayData()
    nextTick()
  },
  { immediate: true }
)

await updateData()
</script>
