<template>
  <div class="flex items-center justify-center h-screen bg-gradient-to-b from-oma-blue-600 overflow-hidden">
    <div
      class="enter-effect opacity-0 translate-y-12  transition-opacity duration-[4000ms] delay-500 ease-out flex-rows space-y-12"
      ref="enterEffect">
      <img src="/logo-dark.png" alt="Oma Logo" class="mx-auto contrast-125 hover:scale-150 ease-in-out duration-500" />
      <ContentDoc />
    </div>
  </div>
</template>

<script setup lang="ts">

const enterEffect = ref<HTMLElement | null>(null);

onMounted(() => {
  if (enterEffect.value) {
    setTimeout(() => {
      enterEffect.value?.classList.add('visible');
    }, 500); // Delay before animation starts
  }
});

onMounted(async () => {
  const result = await queryContent('/').findOne();
  console.log(result);
});

</script>

<style scoped>
.enter-effect.visible {
  @apply opacity-100 translate-y-0;
}
</style>
