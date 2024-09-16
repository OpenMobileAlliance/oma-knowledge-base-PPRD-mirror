<template>
  <div :class="[ui.wrapper, props.class]" v-bind="attrs">
    <div v-if="props.header" :class="ui.header">
      <MDC :value="props.header" />
    </div>
    <div :class="ui.base">
      <div :class="ui.search">
        <UInput v-model="q" type="text" @keyup="onSearch" placeholder="type a token to search for" />
      </div>
      <div :class="ui.filter">
        <UAccordion :items="accordionItems" color="gray" class="not-prose">
          <template #quick-filters>
            <div :class="getQuickFilterClass()">
              <template v-for="column in props.columns">
                <div class="rounded-lg border" v-if="column.filter">
                  <UDivider :label="column.title" class="py-4" />
                  <ul class="max-h-36 overflow-auto">
                    <li v-for="label in Object.keys(stats[column.name])" :data-filter-key="column.name"
                      :data-filter-value="label" @click="onFilterChange"
                      class="list-none flex justify-between p-2 hover:bg-gray-50 hover:dark:bg-gray-800/50 hover:cursor-pointer"
                      :class="isSelectedFilter(column.name, label) ? ui.tr.selected : ''">
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
      <table :class="ui.table">
        <thead :calss="ui.thead">
          <tr :ui.tr.base>
            <template v-for="column in props.columns">
              <th :class="[ui.th.base, ui.th.padding, ui.th.color, ui.th.font, ui.th.size]">
                <UButton v-if="column.sortable" v-bind="{ ...(config.default.sortButton) }" :icon="getSortIcon(column)"
                  @click="onSort(column)">
                  <MDC :value="getColumTitle(column)" class="not-prose" />
                </UButton>
                <MDC v-else :value="getColumTitle(column)" class="not-prose" />
              </th>
            </template>
          </tr>
        </thead>
        <tbody :calss="ui.tbody">
          <tr v-for="(row, index) in displayItems" :index="index" :calss="ui.tr.base">
            <template v-for="column in props.columns">
              <td :class="[ui.td.base, ui.td.padding, ui.td.color, ui.td.font, ui.td.size]" class="not-prose">
                {{ getItemColumValue(row, column) }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
      <div :class="ui.pagination">
        <UPagination v-model="page" :page-count="perPage" :total="numberOfItems" :max="10" @click="onPageChange"
          show-last show-first />
      </div>
    </div>
    <div v-if="props.footer" :class="ui.footer">
      <MDC :value="props.footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { dynamicTable as config } from "@/ui.config"

const PER_PAGE_LIST = config.perPage

type itemsElement = {
  name: String;
  title?: String;
  filter?: Boolean;
  order?: Boolean;
  type?: String;
  typeData?: Array;
}


const props = withDefaults(
  defineProps<{
    dataUrl: String;
    dataField?: String;
    columns: itemsElement[];
    ui?: Partial<typeof config>;
    header?: String;
    footer?: String;
    perPage?: Number;
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
    class: () => undefined
  });

const { ui, attrs } = useUI(
  "sh-dynamic-table",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
)

const fetchData = async () => {
  const data = await $fetch(props.dataUrl)

  if (props.dataField) {
    return data[props.dataField]
  } else {
    return data
  }
}

const updateData = async () => {
  items.value = await fetchData()
  updateDisplayData()
}

const updateDisplayData = async () => {
  displayItems.value = []

  let filteredData = filterDataByQuery(items.value)
  filteredData = filterDataByQuickFilter(filteredData)
  filteredData = sortDisplayData(filteredData)

  stats.value = getStats(filteredData)

  numberOfItems.value = filteredData?.length > 0 ? filteredData.length : 0

  let startIndex = page.value * perPage.value - perPage.value
  let endIndex = startIndex + perPage.value > numberOfItems.value ? numberOfItems.value : startIndex + perPage.value

  for (let index = startIndex; index < endIndex; index++) {
    displayItems.value.push(filteredData[index])
  }
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
    slot: "quick-filters"
  }
])
const sortColumn = toRef({})

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
    return data.sort ? data.sort((a, b) => defaultSort(a[sortColumn.value.name], b[sortColumn.value.name], sortColumn.value.direction)) : data
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
  return item[column?.name] ? item[column.name] : " "
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
    return 'grid grid-cols-1 gap-4'
  } else if (numFilterColumns < 3) {
    return 'grid grid-cols-2 gap-2'
  } else if (numFilterColumns < 4) {
    return 'grid grid-cols-3 gap-1'
  } else {
    return 'grid grid-cols-4 gap-1'
  }
}

const getStats = (data) => {
  const stats = {}
  props.columns.forEach(el => {
    if (el.filter) {
      stats[el.name] = {}
    }
  })

  if (data.forEach) {
    data.forEach(el => {
      props.columns.forEach(column => {
        if (Object.keys(el).includes(column.name) && Object.keys(stats).includes(column.name)) {
          const label = el[column.name] ? el[column.name] : "Undefined"
          stats[column.name][label] = stats[column.name][label] ? stats[column.name][label] + 1 : 1
        }
      })
    })

  }

  return stats

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


await updateData()
</script>
