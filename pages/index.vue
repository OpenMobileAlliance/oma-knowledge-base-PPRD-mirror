<template>
  <div :class="ui.landingHero.wrapper" class="">
    <div class="grid grid-cols-2 gap-9">
      <div class="bg-white text-center p-6 rounded-xl">
        <h1 class="font-extrabold text-5xl">Build the next generation of wireless</h1>
        <p class="text-4xl mt-8 font-mono">For A Connected World</p>
      </div>
      <img src="/logo.png" alt="Logo" :class="ui.landingHero.logo" class="w-[30%]" />
    </div>
  </div>

</template>

<script setup lang="ts">

const config = {
  landingHero: {
    wrapper: 'size-full bg-golden/[0.2] dark:bg-[#19191a]',
    logo: '',
    header: '',
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

const computedLogoSrc = computed(() => {
  return theme.value === 'dark';
});
</script>
