<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "default";
</script>

<style>
body {
  font-family: "DM Sans", serif;
}
</style>
