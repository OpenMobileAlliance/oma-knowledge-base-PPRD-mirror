<template>
  <div :class="ui.landingHero.wrapper" class="bg-[url('/images/landing-hero/lh-3.jpeg')] bg-cover bg-center">
    <div class="flex flex-col items-start pl-32 pt-20 h-screen">
      <img src="/logo.png" alt="Logo" :class="ui.landingHero.logo"
        class="w-[20%] sm:w-[25%] lg:w-[28%] xl:w-[13%] mb-14" />
      <div class="rounded-xl">
        <h1 class="font-extrabold text-golden sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Build the next <br />
          generation of <br /> wireless</h1>
        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-8 text-golden/70 font-mono">For A Connected
          World</p>
      </div>
      <ShButton class="p-4 rounded-2xl mt-12 hover:contrast-150 dark:text-white dark:hover:text-white hover:text-white"
        color="primary" size="lg" urlButton="/omaspecworks/" target="_parent">Get Started</ShButton>
    </div>
  </div>

  <ContentDoc class="lg:w-3/4 xl:w-1/2 min-w-max mx-auto mt-14 pb-24" />
  <AppFooter />
</template>

<script setup lang="ts">

const config = {
  landingHero: {
    wrapper: '',
    logo: '',
  }
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
  },
);

const { ui, attrs } = useUI(
  "index",
  toRef(props, "ui"),
  config,
);

const theme = useColorMode();;

</script>
