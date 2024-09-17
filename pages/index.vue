<template>
  <div :class="ui.landingHero.wrapper">
    <div :class="['mt-44 transition-all duration-1000 ease-in-out', { 'translate-y-6': !isTextVisible }]">
      <div
        :class="['relative w-[300px] h-[300px]', { 'opacity-0': !isLogoVisible, 'opacity-100': isLogoVisible, 'transition-opacity duration-[700ms] ease-in-out': true }]">
        <img src="/logo.png" alt="OMA Logo"
          :class="ui.landingHero.image, { 'filter grayscale': isGrayscale, 'filter grayscale-0': !isGrayscale }" />
      </div>
    </div>
    <div :class="[ui.landingHero.title, { 'transition-opacity duration-[1700ms] opacity-100 ease-in': !isGrayscale }]">
      Welcome to OMA KnowledgeBase
    </div>
    <div
      :class="[ui.landingHero.bookmark, { 'transition-all -translate-x-full duration-1000 ease-in-out transform-gpu': isTextVisible }]">
      <NuxtLink to="/omaspecworks/about/" class="not-prose flex items-center">
        <img v-if="opacity !== 'sm:opacity-0'" src="/logo-dark.png" alt="OMA Logo" :class="['mx-auto', opacity]" />
        <UIcon name="i-line-md:home-twotone" dynamic
          :class="['mx-auto text-4xl text-oma-blue-500 mr-6 mb-2 hover:contrast-125', { 'w-full h-full': opacity === 'sm:opacity-0' }]" />
      </NuxtLink>
    </div>
    <div class="flex justify-center -mt-16">
      <UIcon name="i-iconoir:mouse-scroll-wheel" dynamic :class="[ui.landingHero.scroll, { 'opacity-100': isTextVisible }]" />
    </div>
  </div>

  <!-- <div class="constructor h-[20%] bg-oma-blue-500 dark:bg-oma-blue-800 text-xl text-white p-44 text-center">
    <p>Welcome to OMA KnowledgeBase website, where all of our sites will be combined into one place.</p>
  </div>

  <div :class="[ui.constructors.wrapper, 'constructor']">
    <ContentDoc />
    <img src="/logo-dark.png" alt="OMA Logo" class="mx-auto mt-12 contrast-125" />
  </div> -->
</template>

<script setup lang="ts">

const config = {
  landingHero: {
    wrapper: 'relative flex flex-col h-full items-center w-screen bg-gradient-to-t from-neutral-200',
    image: 'absolute inset-0 w-full h-full transition-filter duration-1000 ease-in-out',
    title: 'text-center font-serif text-6xl mt-16 text-neutral-700 dark:text-[#333333] opacity-0',
    bookmark: 'content-center mt-[15%] ml-[120%] w-[20%] h-[10%] bg-neutral-400 dark:bg-neutral-600 rounded-l-full hover:scale-105 duration-700 delay-0 p-3',
    scroll: 'text-6xl text-neutral-700 transition-opacity duration-1000 delay-700 opacity-0 animate-bounce rounded-full hover:cursor-none'
  },
  constructors: {
    wrapper: 'h-screen bg-gradient-to-t from-oma-blue-500 p-16',
  },
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

const isLogoVisible = ref(false);
const isGrayscale = ref(true);
const isTextVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLogoVisible.value = true;
  }, 700);

  setTimeout(() => {
    isGrayscale.value = false;
  }, 1100);

  nextTick(() => {
    setTimeout(() => {
      isTextVisible.value = true;
    }, 2000);
  });

  // nextTick(() => {
  //   const constructors = document.querySelectorAll('.constructor');
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle('show', entry.isIntersecting);
  //     });
  //   }, {
  //     threshold: 1,
  //   });

  //   constructors.forEach((constructor) => {
  //     observer.observe(constructor);
  //   });
  // })
});

const opacity = computed(() => 'sm:opacity-0 lg:opacity-100');
</script>

<style scoped>

.constructor {
  transform: translateX(100%);
  opacity: 0;
  transition: 1000ms;
}

.constructor.show {
  transform: translateX(0);
  opacity: 1;
}
</style>
