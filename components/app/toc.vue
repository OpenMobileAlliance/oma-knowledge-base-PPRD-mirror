<template>
  <div v-if="page?.body?.toc?.links?.length > 0" class="">
    <nav>
      <button class="flex sticky top-0 backdrop-blur items-center gap-1.5 lg:cursor-text lg:select-text w-full group">
        <span class="font-semibold text-sm/6 truncate dark:text-white/80">
          <b class="dark:text-golden">Table of Contents</b>
        </span>
      </button>
      <ul class="space-y-1 lg:block -ml-2">
        <li v-for="(link, index) in page.body.toc.links" :key="index" class="space-y-1 lg:block"
          :class="[isActive(link.id) ? ui.active : ui.normal]">
          <ULink :id="`toc-${link.id}`" :to="`${page._path}#${link.id}`"
            :class="[ui.shadow, isActive(link.id) ? ui.link.active : ui.link.normal]"
            class="not-prose pl-1 pr-1 text-black dark:text-golden">
            {{ link.text }}
          </ULink>
          <ul v-if="link.children?.length > 0" class="space-y-1 hidden lg:block">
            <li v-for="(subLink, subIndex) in link.children" :key="subIndex" class="space-y-1 lg:block"
              :class="[isActive(subLink.id) ? ui.active : ui.normal]">
              <ULink :id="`toc-${subLink.id}`" :to="`${page._path}#${subLink.id}`"
                :class="[ui.shadow, isActive(subLink.id) ? ui.link.active : ui.link.normal]"
                class="not-prose pl-1 pr-1 text-black dark:text-golden">
                {{ subLink.text }}
              </ULink>
            </li>
          </ul>
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

const activeSection = ref<string | null>(null);

const isActive = (id: string) => {
  return activeSection.value === id;
};
</script>
