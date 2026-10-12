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
const route = useRoute()

const config = {
  wrapper: '',
  shadow: 'hover:bg-golden/[0.3] dark:hover:bg-golden/[0.1] rounded-r-md hover:rounded-md p-1 transition-colors duration-200',
  active: 'block border-l-4 rounded-e-sm rounded-s-sm border-oma-yellow-500 dark:border-golden bg-golden/[0.45] dark:bg-golden/[0.15]',
  normal: 'block border-l-2 border-golden/[0.6] dark:border-neutral-700 w-full',
  link: {
    active: 'text-neutral-900 dark:text-golden font-bold',
    normal: 'w-full block text-neutral-800 dark:text-golden/[0.85]'
  }
};

const addMenuItems = (list, depth, prevEl, outList) => {
  if (list.length > 0 && depth < 4) {
    list.forEach(el => {
      if (prevEl != el.path) {
        outList.push({
          to: el.path,
          title: el.title,
          depth: depth,
          children: el.children?.length > 0
        })
      }
      if (el.children?.length > 0) {
        addMenuItems(el.children, depth + 1, el.path, outList)
      }
    });
  }
}

const sideMenuItems = computed(() => {
  const menuItems = []
  if (props.items?.length > 0) {
    addMenuItems(props.items, 0, null, menuItems)
  }
  return menuItems
})


const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    class?: any;
    items: [];
  }>(),
  {
    ui: () => ({}),
    class: undefined,
    items: undefined
  },
);

const { ui, attrs } = useUI(
  "SideMenu",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);

const isActive = (path) => {
  return route.path === path
}

const CONST_INDENT = ['pl-2 font-semibold', 'pl-4', 'pl-8', 'pl-12']

const getIndent = (depth) => {
  return CONST_INDENT[depth]
}
</script>