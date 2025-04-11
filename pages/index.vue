<!-- <template> -->
  <!-- <div :class="ui.landingHero.wrapper" class="bg-[url('/images/landing-hero/lh-3.jpeg')] bg-cover bg-center">
    <div class="grid grid-cols-2">
      <div class="col-start-1 col-span-1 flex flex-col items-start pl-5 sm:pl-14 lg:pl-28 pt-20 h-screen">
        <img src="/logo.png" alt="Logo" :class="ui.landingHero.logo"
          class="w-[70%] sm:w-[60%] lg:w-[28%] xl:w-[30%] mb-14" />
        <div class="rounded-xl">
          <h1 class="font-extrabold text-golden sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl words-break">Build the
            next <br />
            generation of <br /> wireless</h1>
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-16 text-golden/70 font-mono sm:truncate">
            For A
            Connected
            World</p>
        </div>
        <NuxtLink to="/omaspecworks">
          <button
            class="p-4 rounded-2xl border mt-4 sm:mt-12 hover:contrast-150 bg-neutral-400 border-neutral-400 dark:bg-neutral-600 dark:border-neutral-600 text-white dark:text-white dark:hover:text-white">
            Get Started
          </button>
        </NuxtLink>
      </div>
      <div class="col-start-2 col-span-1 pr-5 sm:mt-24 md:mt-56">
        <ContentQuery path="/landing-page-menu" v-slot="{ data }" >
          <h1 v-if="data[0].title !== 'Landing Page Menu'" :class="ui.landingPage.menu.title">{{ data[0].title }}</h1>
          <h3 :class="ui.landingPage.menu.description">{{ data[0].description }}</h3>
          <ContentRenderer :value="item" v-for="item in data" :class="ui.landingPage.menu.content"/>
        </ContentQuery> -->
        <!-- <ContentQuery path="/landing-page-floaters" v-slot="{ data }">
          <ContentRenderer :value="item" v-for="item in data"
            class="flex flex-col lg:flex-row h-[80%] sm:h-full lg:h-1/6 lg:pl-16 items-end p-3 sm:p-0 mt-12 sm:mt-14 lg:mt-64" />
        </ContentQuery> -->
      <!-- </div>
    </div>
  </div>

  <ContentDoc class="lg:w-3/4 xl:w-1/2 min-w-max mx-auto mt-14 pb-24" />
  <AppFooter /> -->
<!-- </template> -->

<script setup lang="ts">

// Redirect to the first page in the navigation handled in nuxt.config.ts
// const router = useRouter()
// const data = await useAsyncData('data', () => fetchContentNavigation())
// console.log(data.data._rawValue[1]._path)
// router.replace(data.data._rawValue[1]._path)

/*

const config = {
  landingHero: {
    wrapper: '',
    logo: '',
  },
  microCard: '',
  landingPage: {
    menu: {
      title: 'flex mx-auto justify-center',
      description: 'flex mx-auto justify-center',
      content: 'flex justify-center pl-3 sm:pl-0 mt-5',
    },
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

*/
</script>