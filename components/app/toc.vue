<template>
  <div v-if="page?.body?.toc?.links?.length > 0" class="">
    <nav>
      <button class="flex sticky top-0 backdrop-blur items-center gap-1.5 lg:cursor-text lg:select-text w-full group">
        <span class="font-semibold text-sm/6 truncate dark:text-white/80">
          <b class="dark:text-golden">Table of Contents</b>
        </span>
      </button>
      <ul class="space-y-1 lg:block -ml-2">
        <li v-for="link in flatLinks" :key="link.id" class="space-y-1 lg:block"
          :class="[isActive(link.id) ? ui.active : ui.normal, link.depth > 0 ? 'hidden lg:block' : '']"
          :style="{ paddingLeft: `${link.depth * 0.75}rem` }">
          <ULink :id="`toc-${link.id}`" :to="`${page.path}#${link.id}`"
            :class="[ui.shadow, isActive(link.id) ? ui.link.active : ui.link.normal]"
            class="not-prose pl-1 pr-1 text-black dark:text-golden">
            {{ link.text }}
          </ULink>
        </li>
      </ul>
    </nav>
    <hr class="w-1/2 mx-auto" />
  </div>
</template>

<script setup lang="ts">
const config = {
  shadow: 'hover:bg-primary-200/[0.7] dark:hover:bg-primary-600 dark:hover:text-oma-blue-100 hover:rounded-lg pt-2 pb-2',
  active: 'p-2',
  normal: 'w-full ',
  link: {
    active: 'text-oma-blue-500 dark:text-oma-blue-200 font-bold',
    normal: 'w-full block text-black dark:text-golden hover:text-black dark:hover:text-golden'
  }
};


const props = withDefaults(defineProps<{
  page: any,
  ui?: Partial<typeof config>
}>(),
  {
    page: [],
    ui: () => ({}),
  });

const { ui } = useUI("toc", toRef(props, "ui"), config);

// Flatten the nested toc (h1-h6) into a list, keeping each link's nesting depth for indentation
const flatLinks = computed(() => {
  const result: { id: string, text: string, depth: number }[] = [];
  const walk = (links: any[] = [], depth = 0) => {
    for (const link of links) {
      result.push({ id: link.id, text: link.text, depth });
      walk(link.children, depth + 1);
    }
  };
  walk(props.page?.body?.toc?.links);
  return result;
});

const activeSection = ref<string | null>(null);

const isActive = (id: string) => {
  return activeSection.value === id;
};
</script>
