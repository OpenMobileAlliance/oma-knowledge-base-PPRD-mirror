<template>
    <ul :class="ui.wrapper">
        <li v-for="(item, index) in menuData.items" :key="index" class="group/item relative ">
            <!-- Root Menu Button -->
            <button @click="item.onClick" :class="[
                item.label === 'HOME'
                    ? 'hover:rounded-lg cursor-pointer'
                    : 'hover:rounded-t-lg cursor-pointer',
                ui.rootMenuButton
            ]">
                <span class="flex items-center space-x-2">
                    <!-- <UIcon v-if="iconsMap[item.label]" :name="iconsMap[item.label]" dynamic :class="ui.contentIcon" /> -->
                    <span :class="[ui.rootMenuLabel,
                    isActive(item) ? ui.rootActive : '']">
                        {{ item.label }}
                    </span>
                </span>
                <UIcon v-if="item.children" name="mdi:chevron-right" :class="ui.chevronIcon" />
            </button>

            <!-- Submenu -->
            <ul v-if="item.children" :class="[ui.submenuUl, 'hidden group-hover/item:flex']">
                <li v-for="(child, childIndex) in item.children" :key="childIndex" class="group/sub relative">
                    <button @click="child.onClick" :class="['cursor-pointer',
                        ui.button,
                        isActive(child) ? ui.submenuActive : ''
                    ]">
                        <!-- <UIcon v-if="frontmatter[0].icon" :name="frontmatter[0].icon" dynamic :class="ui.contentIcon" /> -->
                        <span :class="ui.label">
                            {{ child.label }}
                        </span>
                        <!-- <UIcon v-if="child.children" name="mdi:chevron-right" :class="ui.chevronIcon" /> -->
                    </button>

                    <!-- Recursive Submenu -->
                    <!-- <ul v-if="child.children" :class="[ui.ul, 'hidden group-hover/sub:flex']">
                        <li v-for="(subChild, subChildIndex) in child.children" :key="subChildIndex"
                            class="group/subsub relative">
                            <button @click="subChild.onClick" :class="[
                                subChild.children ? 'cursor-default' : 'cursor-pointer',
                                ui.button,
                                isActive(subChild) ? ui.submenuActive : ''
                            ]">
                                <span :class="ui.label">
                                    {{ subChild.label }}
                                </span>
                                <UIcon v-if="subChild.children" name="mdi:chevron-right" :class="ui.chevronIcon" />
                            </button>

                            <ul v-if="subChild.children" :class="[ui.ul, 'hidden group-hover/subsub:flex']">
                                <li v-for="(deepChild, deepChildIndex) in subChild.children" :key="deepChildIndex"
                                    class="group/deeper relative">
                                    <button @click="deepChild.onClick" :class="[
                                        deepChild.children ? 'cursor-default' : 'cursor-pointer',
                                        ui.button,
                                        isActive(deepChild) ? ui.submenuActive : ''
                                    ]">
                                        <span :class="ui.label">
                                            {{ deepChild.label }}
                                        </span>
                                        <UIcon v-if="deepChild.children" name="mdi:chevron-right"
                                            :class="ui.chevronIcon" />
                                    </button>

                                    <ul v-if="deepChild.children" :class="[ui.ul, 'hidden group-hover/deeper:flex']">
                                        <li v-for="(fifthChild, fifthChildIndex) in deepChild.children"
                                            :key="fifthChildIndex" class="relative">
                                            <button @click="fifthChild.onClick" :class="[
                                                fifthChild.children ? 'cursor-default' : 'cursor-pointer',
                                                ui.button,
                                                isActive(fifthChild) ? ui.submenuActive : ''
                                            ]">
                                                <span :class="ui.label">
                                                    {{ fifthChild.label }}
                                                </span>
                                                <UIcon v-if="fifthChild.children" name="mdi:chevron-right"
                                                    :class="ui.chevronIcon" />
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul> -->

                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
const config = {
    wrapper: 'w-fit flex items-end justify-center rounded-lg',
    rootMenuButton: 'w-full flex items-center justify-start px-3 py-2 text-left hover:bg-white dark:hover:bg-gray-800',
    rootMenuLabel: 'font-medium text-xl text-gray-900 dark:text-gray-100',
    rootActive: 'relative after:content-[\'\'] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[5px] after:bg-oma-yellow-500 after:dark:bg-oma-yellow-500 after:rounded-full',
    submenuActive: 'underline underline-offset-4 decoration-4 decoration-oma-yellow-500',
    submenuUl: 'absolute top-10 left-0 flex-col shadow-lg mt-0 z-10 bg-white dark:bg-gray-800 rounded-tl-none rounded-b-lg rounded-tr-lg hover:rounded-tl-lg',
    ul: 'absolute left-full top-0 flex-col shadow-lg rounded-lg mt-0 z-10 bg-white dark:bg-gray-800',
    button: 'w-full flex items-center px-4 py-2 text-left hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200',
    label: 'font-small text-gray-900 dark:text-gray-100 truncate',
    contentIcon: '',
    chevronIcon: 'ml-auto',
}

const props = withDefaults(
    defineProps<{
        ui?: Partial<typeof config>
    }>(),
    {
        ui: () => ({}),
    }
)

const { ui, attrs } = useUI(
    'menus',
    toRef(props, 'ui'),
    config,
    toRef(props, 'class'),
    true
)

const router = useRouter()
const route = useRoute()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

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
    if (excludedPaths.includes(navItem._path)) {
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
    onClick?: () => void
    children?: MenuItem[] | null
}

const processNavigationItem = (navItem: any, isRoot = true): MenuItem => {
    if (navItem.children?.length === 1) {
        const singleChild = navItem.children[0];
        return {
            label: navItem.title,
            path: singleChild._path,
            onClick: () => router.push(singleChild._path)
        };
    }
    return {
        label: navItem.title,
        path: navItem._path, // Keep the index path for active-checking
        children: navItem.children?.map((child: any) => processNavigationItem(child, false)) || null,
        onClick: () => router.push(navItem._path) 
    };
};

const menuData = computed(() => ({
    items: filteredNavigation.value?.map((navItem: any) => processNavigationItem(navItem))
}))

const iconsMap = ref<Record<string, string>>({})

watchEffect(async () => {
    if (!menuData.value?.items) return

    // Fetch all documents that have an "icon" in frontmatter
    const allIcons = await queryContent().where({ icon: { $exists: true } }).find()

    // Create a mapping: title -> icon
    const iconsLookup = new Map(allIcons.map((content) => [content.title, content.icon]))

    // Map icons to menu items based on label
    menuData.value.items.forEach((item) => {
        if (iconsLookup.has(item.label)) {
            iconsMap.value[item.label] = iconsLookup.get(item.label)!
        }
    })

    nextTick(() => {
        // Debug: console.log("Icons Map after update:", iconsMap.value)
    })
})

// Helper: Check if a menu item (or one of its children) is active
const isActive = (item: MenuItem): boolean => {
    if (item.path && item.path === route.path) {
        return true
    }
    if (item.children) {
        return item.children.some(isActive)
    }
    return false
}
</script>
