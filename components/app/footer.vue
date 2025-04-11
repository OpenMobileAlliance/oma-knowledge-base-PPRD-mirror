<template>
  <div :class="ui.megaFooter">
    <img src="/images/landing-hero/lh-3.jpeg" alt="footer_background" :class="ui.backgroundImg" />
    <div :class="ui.contentContainer">
      <div :class="ui.upperContainer">
        <div :class="ui.contentAboveHr">
          <img src="/logo.png" alt="logo" title="Official OMA logo" :class="ui.logo" />
          <div id="slogan" title="Our Slogan" :class="ui.slogan">
            <b>For a Connected World</b>
          </div>
          <AppSocialLinks :class="ui.socialLinks" />
        </div>
        <hr :class="ui.hr">
      </div>
      <ContentQuery path="/footer-content" v-slot="{ data }" class="flex mx-auto">
        <ContentRenderer :value="item" v-for="item in data" :class="ui.megaFooterContent" />
      </ContentQuery>
    </div>
  </div>

  <footer :class="ui.footer" v-bind="attrs">
    <UContainer :class="ui.container">
      <div :class="ui.copyrightContainer">
        <span :class="ui.copyright">
          Copyright &copy; &nbsp; 2002-<div>{{ year }}</div>
        </span>
        <ClientOnly>
          <!-- <ColorMode :class="ui.colorMode" /> -->
        </ClientOnly>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">

const date = new Date();
const year = date.getFullYear();

const config = {
  megaFooter: "relative p-6 dark:bg-neutral-950/[0.3] overflow-hidden bottom-0",
  contentContainer: "relative z-30",
  upperContainer: "container w-[70%] mx-auto",
  contentAboveHr: "flex justify-between items-center",
  backgroundImg: "absolute bottom-0 left-0 w-full opacity-20 object-cover h-full xl:h-auto xl:object-fill object-center z-20",
  logo: "size-[15%] md:size-[10%] lg:size-[7%] pr-3",
  slogan: "text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-thin text-golden text-center font-expressa",
  socialLinks: "text-xl sm:text-2xl md:text-3xl space-x-2 pl-3",
  hr: "mx-auto mb-10 mt-10 dark:border-neutral-600",
  megaFooterContent: "text-left z-40",
  footer: "py-1 sm:py-2 bottom-0 w-full bg-background/75 backdrop-blur border-t border-primary/[0.4] dark:border-primary/[0.4] z-50",
  container: "",
  copyrightContainer: "flex justify-center sm:items-center sm:justify-around",
  copyright: "text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center",
  colorMode: "",
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    class: undefined,
  },
);

const { ui, attrs } = useUI(
  "footer",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);
</script>

<style scoped>
@font-face {
  font-family: 'Expressa';
  /* You can name it anything */
  src: url('/fonts/expressa/Expressa Regular.ttf') format('truetype');
  font-style: normal;
}
#slogan {
  font-family: "Expressa";
}
</style>