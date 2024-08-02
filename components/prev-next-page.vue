<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div class="grid grid-cols-2 mt-10 mx-auto max-w-max min-w-full">
    <NuxtLink v-if="prev" :to="prev._path" class="grid grid-rows-3 border p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 justify-items-start lg:mr-20 sm:mr-5">
        <UIcon name="i-vaadin:chevron-circle-left-o" dynamic class="text-3xl hover:scale-105" />
        <div class="text-3xl font-semibold mt-2">{{ prev.title }}</div>
        <div v-if="prev.description" class="text-lg font-normal text-gray-500 dark:text-gray-400 mt-2">{{ prev.description }}</div>
    </NuxtLink>
    <NuxtLink v-if="prev" :to="prev._path" class="grid grid-rows-3 border p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 justify-items-end lg:ml-20 sm:ml-5">
        <UIcon name="i-vaadin:chevron-circle-right-o" dynamic class="text-3xl hover:scale-105" />
        <div class="text-3xl font-semibold mt-2">{{ next.title }}</div>
        <div v-if="next.description" class="text-lg font-normal text-gray-500 dark:text-gray-400 mt-2">{{ next.description }}</div>
    </NuxtLink>
  </div>
</template>
