<template>
  <div :class="ui.landingHero.wrapper" class="bg-[url('/images/landing-hero/lh-3.jpeg')] bg-cover bg-center">
    <div class="grid grid-cols-2">
      <div class="col-start-1 col-span-1 flex flex-col items-start pl-5 sm:pl-14 lg:pl-28 pt-20 h-screen">
        <img src="/logo.png" alt="Logo" :class="ui.landingHero.logo"
          class="w-[70%] sm:w-[60%] lg:w-[28%] xl:w-[30%] mb-14" />
        <div class="rounded-xl">
          <h1 class="font-extrabold text-golden sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:truncate">Build the next <br />
            generation of <br /> wireless</h1>
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-16 text-golden/70 font-mono sm:truncate">For A
            Connected
            World</p>
        </div>
        <ShButton
          class="p-4 rounded-2xl mt-4 sm:mt-12 hover:contrast-150 dark:text-white dark:hover:text-white hover:text-white"
          color="primary" size="lg" urlButton="/omaspecworks" target="_parent">
          Get Started
        </ShButton>
      </div>
      <div class="flex flex-col lg:flex-row h-[80%] sm:h-full lg:h-1/6 lg:pl-16 items-end p-3 sm:p-0 mt-12 sm:mt-14 lg:mt-96">
        <ContentQuery>
          <ShMicroCard :class="ui.microCard" title="Open SVE-42 Registration"
            subtitle="Oct 28-31, 2024! Düsseldorf, Germany" urlWrapper="oma-events/test-events#next-test-event"
            urlImage="/images/events/sve42.jpg" :ui="{ wrapper: 'backdrop-blur min-w-min', image: '-mt-1 mb-5 rounded-lg', title:'text-oma-yellow-50', subtitle: 'text-golden' }">
          </ShMicroCard>
          <ShMicroCard :class="ui.microCard" title="Open Members Meeting Registration"
            subtitle="Oct 28-31,	2024! Düsseldorf, Germany" 
            urlWrapper="/oma-events/members-meetings"
            urlImage="/images/tools/lwm2m-tools-oma.png" :ui="{ wrapper: 'backdrop-blur min-w-min', image: '-mt-1 mb-5 rounded-lg', title:'text-oma-yellow-50', subtitle: 'text-golden' }">
          </ShMicroCard>
        </ContentQuery>
      </div>
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
  },
  microCard: 'col-start-2 col-span-1 w-1/3 microCard mb-6'
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

<style>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }

  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }

  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.microCard {
  align-items: center;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}
</style>