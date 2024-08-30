<template>
    <div class="">
        <img :src="page.urlImage" alt="Image" v-if="page.urlImage" /> {{ page }}
        <div class="">
            <h2 class="text-oma-300">{{ page.title }}</h2>
            <h3 class="" v-if="page.subtitle">{{ page.subtitle }}</h3>
            <div class="text-center dark:text-white" v-if="page.tags && page.tags.length">
                Tags:
                <span v-for="tag in page.tags" :key="tag" class="border rounded-3xl p-3 mx-2 text-gray-500">{{ tag }}</span>
            </div>
            <div class="flex items-center justify-center">
                <p v-if="page.rightLabel" class="mr-2">{{ 'By:' }}</p>
                <p v-if="page.rightLabel" class="text-end text-gray-500">{{ page.rightLabel }}</p>
                <p v-if="page.leftLabel" class="mx-2">{{ '|' }}</p>
                <p v-if="page.leftLabel" class="text-start text-gray-500">{{ page.leftLabel }}</p>
            </div>
            <br />
        </div>
    </div>
</template>

<script setup lang="ts">

const { page } = useContent();
</script>