<template>
    <div class="-mt-16">
        <div class="container flex mx-auto">
            <img :src="page.urlImage" alt="Image" v-if="page.urlImage" class="mx-auto object-contain h-fit w-screen" />
        </div>
        <div class="text-center">
            <h2 class="text-oma-300 text-start">{{ page.title }}</h2>
            <h3 v-if="page.subtitle" class="text-start">{{ page.subtitle }}</h3>
            <div class="text-center dark:text-white" v-if="page.tags && page.tags.length">
                Tags:
                <span v-for="tag in page.tags" :key="tag" class="border rounded-3xl p-3 mx-2 text-gray-500">
                    {{ tag }}
                </span>
            </div>
            <div class="flex items-center justify-center mt-4">
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