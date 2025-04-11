<template>
  <ul class="flex mt-4 sm:justify-center sm:mt-0">
    <li v-for="socialLink of socialLinks" :key="socialLink.title">
      <ULink :to="socialLink.url" :title="socialLink.title" target="_blank" active-class="text-primary"
        class="font-extralight text-slate-600 dark:text-golden hover:text-oma-yellow-700 dark:hover:text-oma-yellow-500 ml-1">
        <UIcon :name="socialLink.logo" />
      </ULink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const socialLinks = useAppConfig().socialLinks;
</script>
