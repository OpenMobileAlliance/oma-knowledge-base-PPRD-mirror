<template>
  <div class="h-screen">
    <AppHeader class="py-4" title="OMA">
      <template v-slot:logo>
        <img src="/public/logo-tagline2-1.png" alt="logo" />
      </template>
    </AppHeader>
    <UContainer class="pt-10 pb-20">
      <slot />
    </UContainer>
    <AppFooter />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
