<template>
    <UDropdown :items="items" mode="click" :popper="{ placement: 'bottom-start' }"
        :ui="{ background: 'bg-golden contrast-[90%] dark:bg-neutral-600', item: { active: 'bg-golden saturate-150 dark:bg-golden/[0.2]' } }">
        <template v-slot:item="{ item }">
            <ULink :to="item.to" target="_blank"
                class="text-black hover:text-black dark:text-golden hover:dark:text-golden flex items-center">
                <UIcon :name="item.icon" class="text-2xl mr-2" />
                {{ item.label }}
            </ULink>
        </template>
        <UIcon name="stash:user-avatar" dynamic class="text-3xl -mt-1" />
    </UDropdown>
</template>

<script setup lang="ts">
const items = [
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