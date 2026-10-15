<template>
    <ul :class="ui.wrapper">
        <li v-for="(item, index) in menuData.items" :key="index" class="group/item relative ">
            <!-- Root Menu Link -->
            <NuxtLink :to="item.path" :class="ui.rootMenuButton">
                <span class="flex items-center gap-2">
                    <UIcon v-if="item.icon" :name="item.icon" :class="[ui.rootIcon, isActive(item) ? ui.rootIconActive : '']" />
                    <span :class="[ui.rootMenuLabel, isActive(item) ? ui.rootActive : '']">
                        {{ item.label.toUpperCase() }}
                    </span>
                </span>
            </NuxtLink>

            <!-- Arrow pointing from the dropdown to its root item -->
            <span v-if="item.children" :class="[ui.submenuArrow, 'hidden group-hover/item:block']" aria-hidden="true" />

            <!-- Submenu -->
            <ul v-if="item.children" :class="[ui.submenuUl, 'hidden group-hover/item:flex']">
                <li v-for="(child, childIndex) in item.children" :key="childIndex" class="group/sub relative">
                    <NuxtLink v-if="child.path !== submenuToLink" :to="child.path"
                        :external="child.path === '/media/news' || child.path === '/media/blog' ? true : false" :class="['cursor-pointer',
                        ui.button, isActive(child) ? ui.submenuActive : ''
                    ]">
                        <span v-if="child.icon" :class="ui.iconTile">
                            <UIcon :name="child.icon" :class="ui.icon" />
                        </span>
                        <span :class="[ui.label, isActive(child) ? 'font-semibold !text-yellow-700 dark:!text-yellow-400' : '']">
                            {{ child.label }}
                        </span>
                    </NuxtLink>
                    <a v-else :href="page?.meta.link" target="_blank" rel="noopener noreferrer" :class="['cursor-pointer',
                        ui.button, isActive(child) ? ui.submenuActive : ''
                    ]">
                        <span v-if="child.icon" :class="ui.iconTile">
                            <UIcon :name="child.icon" :class="ui.icon" />
                        </span>
                        <span :class="[ui.label, isActive(child) ? 'font-semibold !text-yellow-700 dark:!text-yellow-400' : '']">
                            {{ child.label }}
                        </span>
                    </a>

                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useQueryCollection } from '~/composables/nuxt/query/useQueryCollection';
import { useQueryCollectionNavigation } from '~/composables/nuxt/query/useQueryCollectionNavigation';

const ui = {
    wrapper: 'w-fit flex items-end justify-center rounded-lg',
    rootMenuButton: 'group/rootMenuButton w-full flex items-center justify-start px-3 py-2 text-left cursor-pointer',
    rootMenuLabel: 'font-medium text-xl text-gray-700 dark:text-gray-300 group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-200',
    rootActive: 'text-yellow-700 dark:text-yellow-400 group-hover/item:!text-yellow-700 dark:group-hover/item:!text-yellow-400 [text-shadow:0_0_0.6px_currentColor]',
    rootIconActive: 'text-yellow-700 dark:text-yellow-400 group-hover/item:text-yellow-700 dark:group-hover/item:text-yellow-400',
    submenuActive: 'relative before:content-[""] before:absolute before:size-1.5 before:rounded-full before:bg-oma-yellow-500 before:top-1/2 before:-translate-y-1/2 before:right-3',
    submenuArrow: 'absolute top-[40px] left-6 z-20 size-2.5 rotate-45 [clip-path:polygon(0_0,100%_0,0_100%)] bg-white dark:bg-neutral-800 border-t border-l border-gray-200 dark:border-neutral-700',
    submenuUl: 'absolute top-11 left-0 flex-col shadow-md mt-0 z-10 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700',
    button: 'w-full flex items-center pl-4 pr-9 py-2 text-left hover:rounded-lg hover:bg-golden/45 dark:hover:bg-golden/20 transition-colors duration-200',
    label: 'font-heading text-[15px] font-medium capitalize tracking-normal text-gray-800 dark:text-gray-100 group-hover/sub:text-black dark:group-hover/sub:text-white truncate transition-colors duration-200',
    rootIcon: 'shrink-0 text-lg text-gray-700 dark:text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-200',
    iconTile: 'shrink-0 mr-2.5 flex items-center text-gray-600 dark:text-gray-400 group-hover/sub:text-black dark:group-hover/sub:text-white transition-colors duration-200',
    icon: 'text-base',
}

const route = useRoute()
const currentPath = computed(() => (route.path.length > 1 ? route.path.replace(/\/+$/, '') : route.path))
const { data: navigation } = useQueryCollectionNavigation('content', `navigation-to-${route.path}`)

const submenuToLink = '/oma-events/smart-city-expo-world-congress'

const { data: page } = useQueryCollection('content', submenuToLink, 'frontmatter-link')
// List of folder and file titles to filter out
const excludedTitles = [
    'Guidelines',
    'Announcement',
    'Contact Us',
    'Frequently Asked Questions',
    'Index',
    'Landing Page Floaters',
    'Landing Page Menu',
    'Newsletter',
    'OMA Test Lab',
    'Open Mobile Alliance'
]
const excludedPaths = ['/media/articles', '/oma-events/past-events', '/footer-content']

const filterExcludedPaths = (navItem: any): boolean => {
    if (excludedPaths.includes(navItem.path)) {
        return false
    }
    if (navItem.children) {
        navItem.children = navItem.children.filter(filterExcludedPaths)
    }
    return true
}

const filteredNavigation = computed(() =>
    navigation.value?.filter((navItem: any) => filterExcludedPaths(navItem) && !excludedTitles.includes(navItem.title))
)

interface MenuItem {
    label: string
    icon?: string
    path?: string
    link?: string
    children?: MenuItem[] | null
}

const processNavigationItem = (navItem: any, isRoot = true): MenuItem => {
    // A `link` in the folder's .navigation.yml overrides the generated path (e.g. an anchor on another page)
    if (navItem.link) {
        return {
            label: navItem.title,
            icon: navItem.icon,
            path: navItem.link
        };
    }
    if (navItem.children?.length === 1) {
        const singleChild = navItem.children[0];
        return {
            label: navItem.title,
            icon: navItem.icon ?? singleChild.icon,
            path: singleChild.path
        };
    }
    return {
        label: navItem.title,
        icon: navItem.icon,
        path: navItem.path, // Keep the index path for active-checking
        children: navItem.children?.map((child: any) => processNavigationItem(child, false)) || null
    };
};

const menuData = computed(() => ({
    items: filteredNavigation.value?.map((navItem: any) => processNavigationItem(navItem))
}))

// Helper: Check if a menu item (or one of its children) is active
const isActive = (item: MenuItem): boolean => {
    if (item.path && item.path.split('#')[0] === currentPath.value && (!item.path.includes('#') || item.path === route.fullPath)) {
        return true
    }
    if (item.children && item.children.length > 0) {
        return item.children.some(isActive)
    }
    return false
}
</script>
