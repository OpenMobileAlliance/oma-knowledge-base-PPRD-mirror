<template>
    <div v-if="page?.body?.toc?.links?.length > 0" class="fixed top-64 right-8 w-64 h-[calc(100vh-20rem)] overflow-auto">
        <nav>
            <button
                class="flex sticky top-0 backdrop-blur items-center gap-1.5 lg:cursor-text lg:select-text w-full group">
                <span class="font-semibold text-sm/6 truncate dark:text-white/80">
                    <b class="dark:text-golden">Table of Contents</b>
                </span>
            </button>
            <ul class="space-y-1 lg:block -ml-2">
                <li v-for="(link, index) in page.body.toc.links" :key="index" class="space-y-1 lg:block"
                    :class="[isActive(link.id) ? ui.active : ui.normal]">
                    <ULink :id="`toc-${link.id}`" :to="`${page._path}#${link.id}`"
                        :class="[ui.shadow, isActive(link.id) ? ui.link.active : ui.link.normal]"
                        class="not-prose truncate pl-1 pr-1 text-black dark:text-golden">
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
        <div class="">
            <hr />
            <p class="dark:text-golden">
                <b>Useful links</b>
            </p>
            <ul class="">
                <NuxtLink to="/newsletter" class="not-prose flex mb-3 text-black dark:text-golden">
                    <UIcon name="iconamoon:news-thin" dynamic class="mr-2 text-2xl" />
                    Newsletter
                    <UIcon name="ph:arrow-up-right" dynamic class="ml-1" />
                </NuxtLink>

                <NuxtLink to="/faq" class="not-prose flex mb-3 text-black dark:text-golden">
                    <UIcon name="icons8:question-mark" dynamic class="mr-2 text-2xl" />
                    F.A.Q
                    <UIcon name="ph:arrow-up-right" dynamic class="ml-1" />
                </NuxtLink>

                <NuxtLink to="/contact-us" class="not-prose flex mb-3 text-black dark:text-golden">
                    <UIcon name="streamline:send-email" dynamic class="mr-3 mt-1 text-xl" />
                    Contact Us
                    <UIcon name="ph:arrow-up-right" dynamic class="ml-1" />
                </NuxtLink>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const config = {
    shadow: 'hover:bg-primary-200/[0.7] dark:hover:bg-primary-600',
    active: 'bg-primary-200 dark:bg-primary-600 p-2',
    normal: 'w-full p-2',
    link: {
        active: 'text-oma-blue-500 dark:text-oma-blue-400 font-bold',
        normal: 'w-full block text-black dark:text-golden hover:text-black dark:hover:text-golden'
    }
};


const props = withDefaults(defineProps<{ ui?: Partial<typeof config> }>(), {
    ui: () => ({}),
});

const { ui } = useUI("toc", toRef(props, "ui"), config);

const route = useRoute();
const { data: page } = await useAsyncData(() => queryContent(route.path).findOne());

const activeSection = ref<string | null>(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, { rootMargin: '-10% 0px -80% 0px' });

    page.value.body.toc.links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);

        if (link.children) {
            link.children.forEach((subLink) => {
                const subSection = document.getElementById(subLink.id);
                if (subSection) observer.observe(subSection);
            });
        }
    });
});

const isActive = (id: string) => {
    return activeSection.value === id;
};
</script>
