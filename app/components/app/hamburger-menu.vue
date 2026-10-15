<template>
    <div class="flex items-center">
        <button type="button" aria-label="Open navigation menu" class="flex items-center cursor-pointer" @click="isOpen = true">
            <UIcon name="pajamas:hamburger" class="text-2xl md:text-3xl hover:scale-105 duration-300" />
        </button>

        <USlideover v-model:open="isOpen" title="Navigation menu" description="Browse all sections of the website"
            :ui="{ overlay: 'dark:bg-golden/20 backdrop-blur-sm' }">
            <template #content>
                <UCard class="flex flex-col flex-1 h-full rounded-none dark:bg-neutral-900"
                    :ui="{ root: 'ring-0 divide-y divide-neutral-100 dark:divide-neutral-800', body: 'flex-1 min-h-0' }">
                    <template #header>
                        <div class="flex h-8 justify-between items-center">
                            <AppSocialLinks class="text-xl md:text-2xl space-x-1 !mt-0" />
                            <div class="flex items-center">
                                <ColorMode />
                                <button type="button" aria-label="Close navigation menu" class="flex items-center" @click="isOpen = false">
                                    <UIcon name="material-symbols-light:right-panel-close"
                                        class="text-3xl md:text-4xl text-slate-600 dark:text-golden hover:text-oma-red-500 dark:hover:text-oma-red-500 cursor-pointer" />
                                </button>
                            </div>
                        </div>
                        <hr class="flex md:hidden border-golden/35 mt-5 mb-2 w-[95%] mx-auto">
                        <AppBreadcrumbs class="flex md:hidden" />
                    </template>

                    <div class="h-full overscroll-contain overflow-y-auto max-h-[calc(100vh-8rem)]">
                        <UAccordion :items="accordionItems" type="multiple"
                            :ui="{ item: 'border-b-0', trigger: 'py-0 px-0 gap-0', body: 'pb-0 text-base', label: 'w-full', leadingIcon: 'hidden', trailingIcon: 'hidden' }">
                            <template #default="{ item }">
                                <NuxtLink v-if="!item.children" :to="item.path" :class="ui.rootMenuButton"
                                    @click="isOpen = false">
                                    <UIcon v-if="item.icon" :name="item.icon" :class="[ui.rootIcon, isActive(item) ? ui.rootIconActive : '']" />
                                    <span :class="[ui.rootMenuLabel, isActive(item) ? ui.rootActive : '']">
                                        {{ item.label.toUpperCase() }}
                                    </span>
                                </NuxtLink>
                                <span v-else :class="ui.rootMenuButton">
                                    <UIcon v-if="item.icon" :name="item.icon" :class="[ui.rootIcon, isActive(item) ? ui.rootIconActive : '']" />
                                    <span :class="[ui.rootMenuLabel, isActive(item) ? ui.rootActive : '']">
                                        {{ item.label.toUpperCase() }}
                                    </span>
                                    <UIcon name="i-lucide-chevron-down"
                                        class="ml-auto shrink-0 text-lg text-gray-500 dark:text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </span>
                            </template>

                            <template #body="{ item }">
                                <div class="ml-6 pl-4 border-l-2 border-golden/50">
                                <template v-for="child in item.children" :key="child.path">
                                    <button v-if="child.path !== submenuToLink" type="button" @click="child.onClick"
                                        :class="[ui.button, isActive(child) ? ui.submenuActive : '']">
                                        <span v-if="child.icon" :class="ui.iconTile">
                                            <UIcon :name="child.icon" :class="ui.icon" />
                                        </span>
                                        <span :class="[ui.label, isActive(child) ? 'font-semibold !text-oma-yellow-700 dark:!text-oma-yellow-400' : '']">{{ child.label }}</span>
                                    </button>
                                    <a v-else :href="page?.meta.link" target="_blank" rel="noopener noreferrer"
                                        :class="['cursor-pointer', ui.button, isActive(child) ? ui.submenuActive : '']">
                                        <span v-if="child.icon" :class="ui.iconTile">
                                            <UIcon :name="child.icon" :class="ui.icon" />
                                        </span>
                                        <span :class="[ui.label, isActive(child) ? 'font-semibold !text-oma-yellow-700 dark:!text-oma-yellow-400' : '']">
                                            {{ child.label }}
                                        </span>
                                    </a>
                                </template>
                                </div>
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
        'group w-full flex items-center justify-start px-3 py-2 text-left hover:bg-golden/30 dark:hover:bg-oma-yellow-700 rounded-lg cursor-pointer',
    rootMenuLabel: 'font-heading font-semibold text-base tracking-wider text-gray-900 dark:text-gray-100',
    rootActive: 'text-oma-yellow-700 dark:text-oma-yellow-400 [text-shadow:0_0_0.6px_currentColor]',
    rootIconActive: 'text-oma-yellow-700 dark:text-oma-yellow-400 group-hover/item:text-oma-yellow-700 dark:group-hover/item:text-oma-yellow-400',
    submenuActive: 'relative before:content-[""] before:absolute before:size-1.5 before:rounded-full before:bg-oma-yellow-500 before:top-1/2 before:-translate-y-1/2 before:right-3',
    button:
        'w-full flex items-center pl-4 pr-9 py-2 text-left hover:bg-golden/30 dark:hover:bg-oma-yellow-900 transition duration-200 rounded-lg cursor-pointer',
    label: 'font-heading text-[15px] font-normal capitalize tracking-normal text-gray-800 dark:text-gray-200 truncate',
    rootIcon: 'shrink-0 mr-3 text-xl text-gray-500 dark:text-gray-400',
    iconTile: 'shrink-0 mr-2.5 flex items-center text-gray-500 dark:text-gray-400',
    icon: 'text-base',
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
    icon?: string
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
            let children = item.children ? transformNavigation(item.children, true) : null

            // A root item with nothing to expand (e.g. Home) is a plain link, not an accordion.
            if (children && children.every(child => child.path === item.path)) children = null

            // For each root folder that has children, add an index file at the start of its submenu.
            if (!isChild && children && children.length > 0) {
                children.unshift({
                    label: item.title,
                    icon: item.icon,
                    path: item.path,
                    children: null,
                    onClick: go(item.path)
                })
            }

            // A `link` in the folder's .navigation.yml overrides the generated path (e.g. an anchor on another page)
            if (isChild && item.link) {
                return {
                    label: item.title,
                    icon: item.icon,
                    path: item.link,
                    children: null,
                    onClick: go(item.link)
                }
            }

            return {
                label: item.title,
                icon: item.icon,
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
    route.path.replace(/(.)\/+$/, '$1') === item.path || (item.children ? item.children.some(child => isActive(child)) : false)
</script>
