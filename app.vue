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

.dark code,
.dark p,
.dark strong,
.dark em,
.dark ul,
.dark a,
.dark td,
.dark th,
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6 {
  color: white;
}
</style>
