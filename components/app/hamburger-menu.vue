<template>
    <div>
        <UIcon name="pajamas:hamburger" dynamic @click="isOpen = true" class="text-3xl hover:scale-105 duration-300" />

        <USlideover v-model="isOpen">
            <UCard class="flex flex-col flex-1"
                :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex h-8 justify-between items-center">
                        <AppSocialLinks class="text-2xl space-x-1" />
                        <div class="flex items-center">
                            <!-- <ColorMode class="" /> -->
                            <UIcon name="material-symbols-light:right-panel-close" dynamic @click="isOpen = false"
                                class="text-4xl mb-2 text-slate-600 dark:text-golden hover:text-oma-red-500 dark:hover:text-oma-red-500 cursor-pointer" />
                        </div>
                    </div>
                    <hr class="flex md:hidden border-golden/35 mt-5 mb-2 w-[95%] mx-auto">
                    <AppBreadcrumbs class="flex md:hidden" />
                </template>

                <div class="h-full overscroll-contain overflow-y-auto max-h-[calc(100vh-8rem)]">
                    <UAccordion :items="menuData.items" multiple>
                        <template #default="{ item, open }">
                            <div>
                                <!-- Root Menu Button -->
                                <button @click="item.onClick"
                                    :class="[ui.rootMenuButton, isActive(item) ? ui.rootActive : '']">
                                    <span class="flex items-center space-x-2">
                                        <span :class="ui.rootMenuLabel">{{ item.label }}</span>
                                    </span>
                                    <UIcon v-if="item.children" :name="open ? 'mdi:chevron-down' : 'mdi:chevron-right'"
                                        :class="ui.chevronIcon" />
                                </button>

                                <!-- Submenu (Opens when root menu item is clicked) -->
                                <UAccordion v-if="open && item.children" :items="item.children" multiple>
                                    <template #default="{ item: child }">
                                        <button @click="child.onClick"
                                            :class="[ui.button, isActive(child) ? ui.submenuActive : '']">
                                            <span :class="ui.label">{{ child.label }}</span>
                                        </button>
                                    </template>
                                </UAccordion>
                            </div>
                        </template>
                    </UAccordion>
                </div>

                <template #footer>
                    <div class="flex h-8 justify-center"><em>Open Mobile Alliance &copy; {{ year }}</em></div>
                </template>
            </UCard>
        </USlideover>
    </div>
</template>

<script setup lang="ts">

const isOpen = ref(false)

const date = new Date();
const year = date.getFullYear();

// Fetch navigation data only once.
const { data: navigation } = await useAsyncData(
    'navigation',
    () => fetchContentNavigation(),
    { immediate: true, server: false }
)

const router = useRouter()
const route = useRoute()

const config = {
    rootMenuButton:
        'w-full flex items-center justify-start px-3 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg',
    rootMenuLabel: 'font-medium text-xl text-gray-900 dark:text-gray-100',
    rootActive:
        'relative after:content-[" "] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-oma-yellow-500 after:rounded-full',
    submenuActive: 'underline underline-offset-4 decoration-2 decoration-oma-yellow-500',
    button:
        'w-full flex items-center px-4 py-2 text-left hover:bg-white dark:hover:bg-gray-800 transition duration-200 rounded-lg',
    label: 'font-small text-gray-900 dark:text-gray-100 truncate',
    chevronIcon: 'ml-auto',
}

const props = withDefaults(defineProps<{ ui?: Partial<typeof config> }>(), { ui: () => ({}) })
const { ui } = useUI('menus', toRef(props, 'ui'), config, toRef(props, 'class'), true)

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

    return navItems
        .filter(item => {
            return !excludedPaths.includes(item._path) && !excludedTitles.includes(item.title)
        })
        .map(item => {
            let children = item.children ? transformNavigation(item.children, true) : null

            // For each root folder that has children, add an index file at the start of its submenu.
            if (!isChild && children && children.length > 0) {
                children.unshift({
                    label: item.title,
                    path: item._path,
                    children: null,
                    onClick: () => {
                        router.push(item._path)
                        isOpen.value = false
                    }
                })
            }

            return {
                label: item.title,
                path: item._path,
                children,
                onClick: () => {
                    // Only perform navigation on child items.
                    if (isChild) {
                        router.push(item._path)
                        isOpen.value = false
                    }
                }
            }
        })
}

const menuData = computed(() => ({
    items: navigation.value ? transformNavigation(navigation.value) : []
}))

const isActive = (item: MenuItem): boolean =>
    route.path === item.path || (item.children ? item.children.some(child => isActive(child)) : false)

</script>