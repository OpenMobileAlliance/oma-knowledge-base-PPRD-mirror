<template>
  <Transition name="slide-up">
    <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div
        class="mx-auto max-w-2xl rounded-xl border border-primary/20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-xl p-5 md:p-6"
      >
        <div class="flex items-start gap-3 mb-4">
          <UIcon name="i-heroicons-shield-check" class="text-primary text-xl mt-0.5 shrink-0" />
          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Cookie Consent</h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
              We use cookies for analytics and marketing to improve your experience.
              No cookies are set until you make a choice.
              Read our <NuxtLink to="/about/legal#cookie-policy" class="text-primary underline">Cookie Policy</NuxtLink>.
            </p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <UButton
            label="Reject All"
            variant="outline"
            size="sm"
            @click="reject"
          />
          <UButton
            label="Accept All"
            variant="outline"
            size="sm"
            @click="accept"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { showBanner, accept, reject } = useCookieConsent()
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
