<template>
  <div :class="ui.wrapper">
    <aside class="not-prose text-wrap">
      <nav v-if="sideManuItems" class="">
        <ul class="">
          <li v-for="(link, index) in sideManuItems" :key="index">
            <div :class="[ui.shadow, isActive(link.to) ? ui.active : ui.normal]">
              <a :href="link.to" :class="isActive(link.to) ? ui.link.active : ui.link.normal">
                <span :class="[getIndent(link.depth), 'text-nowrap']">{{ link.title }}</span>
              </a>
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
  shadow: 'hover:bg-primary-100 focus:bg-primary-200/[0.6] hover:focus:bg-primary-100 dark:hover:bg-neutral-500 dark:focus:bg-primary-600[0.6] dark:hover:focus:bg-neutral-500',
  active: 'block border-l-2 dark:border-oma-blue-400 border-oma-blue-400',
  normal: 'block border-l-2 dark:border-neutral-700 border-gray-100-ml-px',
  link: {
    active: 'text-oma-blue-500 dark:text-oma-blue-400 font-bold',
    normal: ''
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

const sideManuItems = computed(() => {
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

const COSNT_INDENT = ['pl-2', 'pl-4', 'pl-8', 'pl-12']

const getIndent = (depth) => {
  return COSNT_INDENT[depth]
}
</script>

<style scoped>
/*.verticalLine {
  border-left: 4px solid;
  border-color: theme('colors.oma-blue.300');
  border-radius: 5px solid
}

.dark .verticalLine {
  border-left: 4px solid;
  border-color: theme('colors.oma-blue.400');
}*/
</style>
