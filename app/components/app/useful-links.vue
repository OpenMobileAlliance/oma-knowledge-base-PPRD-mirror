<template>
    <div class="not-prose mt-6 border-t border-neutral-200 pt-6 dark:border-golden/20">
        <p class="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-golden">
            Useful links
        </p>
        <ul class="space-y-1">
            <li v-for="link in links" :key="link.to">
                <NuxtLink :to="link.to"
                    class="group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-neutral-700 transition-colors duration-200 hover:bg-golden/30 hover:text-neutral-900 dark:text-golden/80 dark:hover:bg-golden/10 dark:hover:text-golden">
                    <UIcon :name="link.icon" class="size-5 shrink-0" />
                    <span class="flex-1">{{ link.label }}</span>
                    <UIcon name="ph:arrow-up-right"
                        class="shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const links = [
    { to: '/newsletter', label: 'Newsletter', icon: 'iconamoon:news-thin' },
    { to: '/faq', label: 'F.A.Q', icon: 'icons8:question-mark' },
    { to: '/contact-us', label: 'Contact Us', icon: 'streamline:send-email' },
]
</script>
