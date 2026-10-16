<template>
  <div :class="ui.wrapper">
    <aside class="not-prose text-wrap">
      <nav v-if="sideMenuItems" class="">
        <ul class="">
          <li v-for="(link, index) in sideMenuItems" :key="index">
            <div :class="[ui.shadow, isActive(link.to) ? ui.active : ui.normal]">
              <NuxtLink :to="link.to" :class="isActive(link.to) ? ui.link.active : ui.link.normal" class="dark:hover:text-golden">
                <span :class="[getIndent(link.depth), 'text-nowrap w-full']">{{ link.title }}</span>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
interface SideMenuItem {
  to: string
  title: string
  depth: number
  children: boolean
}

const props = defineProps<{
  items?: any[]
}>()

const route = useRoute()

const ui = {
  wrapper: '',
  shadow: 'hover:bg-golden/30 dark:hover:bg-golden/10 rounded-r-md hover:rounded-md p-1 transition-colors duration-200',
  active: 'block border-l-4 rounded-e-xs rounded-s-xs border-oma-yellow-500 dark:border-golden bg-golden/45 dark:bg-golden/15',
  normal: 'block border-l-2 border-golden/60 dark:border-neutral-700 w-full',
  link: {
    active: 'text-neutral-900 dark:text-golden font-bold',
    normal: 'w-full block text-neutral-800 dark:text-golden/85',
  },
}

const CONST_INDENT = ['pl-2 font-semibold', 'pl-4', 'pl-8', 'pl-12']

const addMenuItems = (list: any[], depth: number, prevEl: string | null, outList: SideMenuItem[]) => {
  if (list.length > 0 && depth < 4) {
    list.forEach((el) => {
      if (prevEl != el.path) {
        outList.push({
          to: el.path,
          title: el.title,
          depth,
          children: el.children?.length > 0,
        })
      }
      if (el.children?.length > 0) {
        addMenuItems(el.children, depth + 1, el.path, outList)
      }
    })
  }
}

const sideMenuItems = computed(() => {
  const menuItems: SideMenuItem[] = []
  if (props.items && props.items.length > 0) {
    addMenuItems(props.items, 0, null, menuItems)
  }
  return menuItems
})

const isActive = (path: string) => route.path === path

const getIndent = (depth: number) => CONST_INDENT[depth]
</script>
