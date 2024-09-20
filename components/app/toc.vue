<template>
    <div v-if="page.body?.toc?.links?.length > 0" class="fixed top-64 right-8 w-64 h-[calc(100vh-20rem)] overflow-auto">
        <nav>
            <button
                class="flex sticky top-0 backdrop-blur items-center gap-1.5 lg:cursor-text lg:select-text w-full group">
                <span class="font-semibold text-sm/6 truncate dark:text-white/80">
                    Table of Contents
                    <hr class="dark:text-white/80 mt-0 mb-1" />
                </span>
            </button>
            <ul class="space-y-1 lg:block -ml-2">
                <li v-for="(link, index) in page.body.toc.links" :key="index" class="space-y-1 lg:block" :class="[ui.shadow, isActive(link.to) ? ui.active : ui.normal]">
                    <ULink :id="`toc-${link.id}`" :to="`${page._path}#${link.id}`" :class="isActive(link.to) ? ui.link.active : ui.link.normal"
                        class="not-prose truncate rounded-lg p-1 pl-2 pr-2 text-black dark:text-golden">
                        {{ link.text }}
                    </ULink>
                    <ul v-if="link.children?.length > 0" class="space-y-1 hidden lg:block">
                        <li v-for="(subLink, subIndex) in link.children" :key="subIndex" class="space-y-1 lg:block" :class="[ isActive(link.to) ? ui.active : ui.normal]">
                            <ULink :id="`toc-${subLink.id}`" :to="`${page._path}#${subLink.id}`" :class="isActive(link.to) ? ui.link.active : ui.link.normal"
                                class="not-prose rounded-lg p-1 pl-2 pr-2 text-black dark:text-golden">
                                {{ subLink.text }}
                            </ULink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
const config = {
    shadow: 'hover:bg-primary-200/[0.7] dark:hover:bg-primary-700/[0.7] rounded-lg',
    active: 'bg-primary-200 border-oma-blue-400 dark:bg-primary-800 dark:border-oma-blue-200',
    normal: 'dark:border-neutral-700 border-gray-100-ml-px w-full',
    link: {
        active: 'text-oma-blue-500 dark:text-oma-blue-200 font-bold',
        normal: 'w-full block text-black dark:text-golden'
    }
};

const props = withDefaults(defineProps<{ ui?: Partial<typeof config> }>(), {
    ui: () => ({}),
});

const { ui } = useUI("toc", toRef(props, "ui"), config);

const route = useRoute();
const { data: page } = await useAsyncData(() => queryContent(route.path).findOne());

const isActive = (path) => {
  return route.path === path
}
</script>