<template>
    <ul :class="ui.wrapper">
        <li v-for="(item, index) in menuData.items" :key="index" class="group/item relative ">
            <!-- Root Menu Link -->
            <NuxtLink :to="item.path" :class="[
                item.label === 'HOME'
                    ? 'hover:rounded-lg cursor-pointer group-hover/item:rounded-lg'
                    : 'hover:rounded-t-lg cursor-pointer group-hover/item:rounded-t-lg',
                ui.rootMenuButton
            ]">
                <span class="flex items-center space-x-2">
                    <span :class="[ui.rootMenuLabel,
                    isActive(item) ? ui.rootActive : '']">
                        {{ item.label.toUpperCase() }}
                    </span>
                </span>
                <UIcon v-if="item.children" name="mdi:chevron-right" :class="[
                    ui.chevronIcon,
                    isActive(item) ? 'group-hover/rootMenuButton:dark:text-oma-yellow-400 group-hover/item:dark:text-oma-yellow-400' : ''
                ]" />
            </NuxtLink>

            <!-- Submenu -->
            <ul v-if="item.children" :class="[ui.submenuUl, 'hidden group-hover/item:flex']">
                <li v-for="(child, childIndex) in item.children" :key="childIndex" class="group/sub relative">
                    <NuxtLink v-if="child.path !== submenuToLink" :to="child.path"
                        :external="child.path === '/media/news' || child.path === '/media/blog' ? true : false" :class="['cursor-pointer',
                        ui.button
                    ]">
                        <span :class="[ui.label, isActive(child) ? ui.submenuActive : '']">
                            {{ child.label.toUpperCase() }}
                        </span>
                    </NuxtLink>
                    <a v-else :href="page?.meta.link" target="_blank" rel="noopener noreferrer" :class="['cursor-pointer',
                        ui.button
                    ]">
                        <span :class="[ui.label, isActive(child) ? ui.submenuActive : '']">
                            {{ child.label.toUpperCase() }}
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
    rootMenuButton: 'group/rootMenuButton w-full flex items-center justify-start px-3 py-2 text-left hover:bg-white dark:hover:bg-neutral-800 group-hover/item:bg-white dark:group-hover/item:bg-neutral-800',
    rootMenuLabel: 'font-medium text-xl text-gray-900 dark:text-gray-100',
    rootActive: 'relative after:content-[\'\'] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[5px] after:bg-oma-yellow-500 after:rounded-full',
    submenuActive: 'relative after:content-[\'\'] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[8px] after:bg-oma-yellow-500 after:rounded-xs',
    submenuUl: 'absolute top-10 left-0 flex-col shadow-lg mt-0 z-10 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden',
    button: 'w-full flex items-center px-4 py-2 text-left hover:rounded-lg hover:bg-golden/45 dark:hover:bg-golden/20 transition-colors duration-200',
    label: 'text-gray-900 dark:text-gray-100 truncate',
    chevronIcon: 'ml-auto text-gray-900 dark:text-gray-100 group-hover/rootMenuButton:rotate-90 group-hover/rootMenuButton:scale-125 group-hover/item:rotate-90 group-hover/item:scale-125 transition-transform duration-200',
}

const route = useRoute()
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
    path?: string
    link?: string
    children?: MenuItem[] | null
}

const processNavigationItem = (navItem: any, isRoot = true): MenuItem => {
    // A `link` in the folder's .navigation.yml overrides the generated path (e.g. an anchor on another page)
    if (navItem.link) {
        return {
            label: navItem.title,
            path: navItem.link
        };
    }
    if (navItem.children?.length === 1) {
        const singleChild = navItem.children[0];
        return {
            label: navItem.title,
            path: singleChild.path
        };
    }
    return {
        label: navItem.title,
        path: navItem.path, // Keep the index path for active-checking
        children: navItem.children?.map((child: any) => processNavigationItem(child, false)) || null
    };
};

const menuData = computed(() => ({
    items: filteredNavigation.value?.map((navItem: any) => processNavigationItem(navItem))
}))

// Helper: Check if a menu item (or one of its children) is active
const isActive = (item: MenuItem): boolean => {
    if (item.path && item.path.split('#')[0] === route.path && (!item.path.includes('#') || item.path === route.fullPath)) {
        return true
    }
    if (item.children && item.children.length > 0) {
        return item.children.some(isActive)
    }
    return false
}
</script>
