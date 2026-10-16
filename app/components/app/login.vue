<template>
    <UDropdownMenu :items="items" :content="{ align: 'start', side: 'bottom' }"
        :ui="{ content: 'bg-golden contrast-90 dark:bg-neutral-600', item: 'data-highlighted:before:bg-golden data-highlighted:before:saturate-150 dark:data-highlighted:before:bg-golden/20' }">
        <button type="button" aria-label="Member account menu" class="flex items-center cursor-pointer">
            <UIcon name="stash:user-avatar" class="text-2xl md:text-3xl" />
        </button>
        <template #item="{ item }">
            <ULink :to="item.to" target="_blank" raw
                class="text-black hover:text-black dark:text-golden dark:hover:text-golden flex items-center">
                <UIcon :name="item.icon" class="text-2xl mr-2" />
                {{ item.label }}
            </ULink>
        </template>
    </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [
    [{
        label: 'Login',
        icon: 'i-heroicons-user',
        to: 'https://member.openmobilealliance.org/ftp'
    }], [{
        label: 'Create an account',
        icon: 'i-heroicons-user-plus',
        to: 'https://member.openmobilealliance.org/AccountCreation/GetAccount.asp'
    }]
]
</script>
