<template>
  <ul class="flex mt-4 sm:justify-center sm:mt-0">
    <li v-for="socialLink of socialLinks" :key="socialLink.title">
      <a
        :href="socialLink.url"
        :title="socialLink.title"
        target="_blank"
        class="ml-1 text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <UIcon :name="socialLink.logo" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const socialLinks = useAppConfig().socialLinks;
</script>
