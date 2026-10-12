<template>
    <div>
        <button type="button" aria-label="Open navigation menu" class="cursor-pointer" @click="isOpen = true">
            <UIcon name="pajamas:hamburger" class="text-3xl hover:scale-105 duration-300" />
        </button>

        <USlideover v-model:open="isOpen" title="Navigation menu" description="Browse all sections of the website"
            :ui="{ overlay: 'dark:bg-golden/20 backdrop-blur-sm' }">
            <template #content>
                <UCard class="flex flex-col flex-1 h-full rounded-none dark:bg-neutral-900"
                    :ui="{ root: 'ring-0 divide-y divide-neutral-100 dark:divide-neutral-800', body: 'flex-1 min-h-0' }">
                    <template #header>
                        <div class="flex h-8 justify-between items-center">
                            <AppSocialLinks class="text-2xl space-x-1" />
                            <div class="flex items-center">
                                <ColorMode class="mb-1" />
                                <button type="button" aria-label="Close navigation menu" @click="isOpen = false">
                                    <UIcon name="material-symbols-light:right-panel-close"
                                        class="text-4xl mb-2 text-slate-600 dark:text-golden hover:text-oma-red-500 dark:hover:text-oma-red-500 cursor-pointer" />
                                </button>
                            </div>
                        </div>
                        <hr class="flex md:hidden border-golden/35 mt-5 mb-2 w-[95%] mx-auto">
                        <AppBreadcrumbs class="flex md:hidden" />
                    </template>

                    <div class="h-full overscroll-contain overflow-y-auto max-h-[calc(100vh-8rem)]">
                        <UAccordion :items="accordionItems" type="multiple"
                            :ui="{ item: 'border-b-0', trigger: 'py-0 px-0 gap-0', body: 'pb-0 text-base', label: 'w-full', trailingIcon: 'hidden' }">
                            <template #default="{ item }">
                                <NuxtLink v-if="!item.children" :to="item.path" :class="ui.rootMenuButton"
                                    @click="isOpen = false">
                                    <span :class="[ui.rootMenuLabel, isActive(item) ? ui.rootActive : '']">
                                        {{ item.label.toUpperCase() }}
                                    </span>
                                </NuxtLink>
                                <span v-else :class="ui.rootMenuButton">
                                    <span :class="[ui.rootMenuLabel, isActive(item) ? ui.rootActive : '']">
                                        {{ item.label.toUpperCase() }}
                                    </span>
                                    <UIcon name="mdi:chevron-right" :class="[ui.chevronIcon, 'group-data-[state=open]:rotate-90']" />
                                </span>
                            </template>

                            <template #body="{ item }">
                                <template v-for="child in item.children" :key="child.path">
                                    <button v-if="child.path !== submenuToLink" type="button" @click="child.onClick"
                                        :class="[ui.button, isActive(child) ? ui.submenuActive : '']">
                                        <span :class="ui.label">{{ child.label.toUpperCase() }}</span>
                                    </button>
                                    <a v-else :href="page?.meta.link" target="_blank" rel="noopener noreferrer"
                                        :class="['cursor-pointer', ui.button]">
                                        <span :class="[ui.label, isActive(child) ? ui.submenuActive : '']">
                                            {{ child.label.toUpperCase() }}
                                        </span>
                                    </a>
                                </template>
                            </template>
                        </UAccordion>
                    </div>

                    <template #footer>
                        <div class="flex h-8 justify-center"><em>Open Mobile Alliance &copy; {{ year }}</em></div>
                    </template>
                </UCard>
            </template>
        </USlideover>
    </div>
</template>

<script setup lang="ts">
import { useQueryCollection } from '~/composables/nuxt/query/useQueryCollection';
import { useQueryCollectionNavigation } from '~/composables/nuxt/query/useQueryCollectionNavigation';

const ui = {
    rootMenuButton:
        'group w-full flex items-center justify-start px-3 py-2 text-left hover:bg-gray-200 dark:hover:bg-oma-yellow-700 rounded-lg cursor-pointer',
    rootMenuLabel: 'font-medium text-xl text-gray-900 dark:text-gray-100',
    rootActive:
        'relative after:content-[" "] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-oma-yellow-500 after:rounded-full',
    submenuActive: 'underline underline-offset-4 decoration-2 decoration-oma-yellow-500',
    button:
        'w-full flex items-center px-4 py-2 text-left hover:bg-white dark:hover:bg-oma-yellow-900 transition duration-200 rounded-lg cursor-pointer',
    label: 'text-gray-900 dark:text-gray-100 truncate',
    chevronIcon: 'ml-auto transition-transform duration-200',
}

const isOpen = ref(false)

const year = new Date().getFullYear()

const { data: navigation } = useQueryCollectionNavigation('content', 'navigation')

const submenuToLink = '/oma-events/smart-city-expo-world-congress'

const { data: page } = useQueryCollection('content', submenuToLink, 'frontmatter-link')

const router = useRouter()
const route = useRoute()

interface MenuItem {
    label: string
    path: string
    children: MenuItem[] | null
    onClick: () => void
}

function transformNavigation(navItems: any[], isChild = false): MenuItem[] {
    const excludedTitles = [
        'Guidelines',
        'Announcement',
        'Contact Us',
        'Frequently Asked Questions',
        'Index',
        'Open Mobile Alliance',
    ]
    const excludedPaths = [
        '/media/articles',
        '/landing-page-floaters',
        '/landing-page-menu',
        '/newsletter',
        '/test-guide'
    ]

    const go = (path: string) => () => {
        router.push(path)
        isOpen.value = false
    }

    return navItems
        .filter(item => !excludedPaths.includes(item.path) && !excludedTitles.includes(item.title))
        .map(item => {
            const children = item.children ? transformNavigation(item.children, true) : null

            // For each root folder that has children, add an index file at the start of its submenu.
            if (!isChild && children && children.length > 0) {
                children.unshift({
                    label: item.title,
                    path: item.path,
                    children: null,
                    onClick: go(item.path)
                })
            }

            // A `link` in the folder's .navigation.yml overrides the generated path (e.g. an anchor on another page)
            if (isChild && item.link) {
                return {
                    label: item.title,
                    path: item.link,
                    children: null,
                    onClick: go(item.link)
                }
            }

            return {
                label: item.title,
                path: item.path,
                children,
                onClick: go(item.path)
            }
        })
}

const menuData = computed(() => ({
    items: navigation.value ? transformNavigation(navigation.value) : []
}))

// UAccordion needs a unique `value` per item
const accordionItems = computed(() =>
    menuData.value.items.map((item, index) => ({ ...item, value: String(index) }))
)

const isActive = (item: MenuItem): boolean =>
    route.path === item.path || (item.children ? item.children.some(child => isActive(child)) : false)
</script>
