<template>
  <NuxtLayout :name="layout">
    <div :style="{ fontFamily: main.font.type }">
    <NuxtPage />
  </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "default";

// Use useAppConfig to access the app config
const main = useAppConfig().main;
</script>

