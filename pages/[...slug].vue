<template>
  <main>
    <article class="prose">
      <ContentDoc />
    </article>
  </main>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation(),
);
</script>
