<template>
  <ul class="flex mt-4 sm:justify-center sm:mt-0">
    <li v-for="socialLink of socialLinks" :key="socialLink.title">
      <ULink :href="socialLink.url" :title="socialLink.title" target="_blank" active-class="text-primary"
        class="hover:text-oma-blue-500 font-extralight text-slate-400 ml-1">
        <UIcon :name="socialLink.logo" />
      </ULink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const socialLinks = useAppConfig().socialLinks;
</script>
