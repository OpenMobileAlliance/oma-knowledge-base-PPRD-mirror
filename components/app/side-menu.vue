<template>
  <div :class="ui.wrapper">
    <aside class="not-prose text-wrap">
      <nav v-if="sideMenuItems" class="">
        <ul class="">
          <li v-for="(link, index) in sideMenuItems" :key="index">
            <div :class="[ui.shadow, isActive(link.to) ? ui.active : ui.normal]">
              <NuxtLink :to="link.to" :class="isActive(link.to) ? ui.link.active : ui.link.normal" class="dark:hover:text-oma-blue-100">
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
  shadow: 'hover:bg-primary-200/[0.7] dark:hover:bg-primary-600 rounded-r-lg hover:rounded-lg p-1',
  active: 'block border-l-4 rounded-e-sm rounded-s-sm dark:border-oma-blue-200 border-oma-blue-400 bg-primary-200 dark:bg-primary-600/[0.7]',
  normal: 'block border-l-2 dark:border-neutral-700 border-gray-100-ml-px w-full',
  link: {
    active: 'text-oma-blue-500 dark:text-oma-blue-200 font-bold',
    normal: 'w-full block text-black dark:text-golden'
  }
};

const addMenuItems = (list, depth, prevEl, outList) => {
  if (list.length > 0 && depth < 4) {
    list.forEach(el => {
      if (prevEl != el._path) {
        outList.push({
          to: el._path,
          title: el.title,
          depth: depth,
          children: el.children?.length > 0
        })
      }
      if (el.children?.length > 0) {
        addMenuItems(el.children, depth + 1, el._path, outList)
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