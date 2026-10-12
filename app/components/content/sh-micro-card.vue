<template>
  <component :is="isLink ? NuxtLinkComponent : 'div'"
    v-bind="isLink ? { to: props.urlWrapper, target: props.target } : {}"
    :class="['not-prose', uiLayout.wrapper]" :target="isLink ? props.target : undefined">
    <img v-if="!coverText && !coverIcon && layout!=='flat' && layout!=='swatch'" :class="[uiLayout.coverImage]"
      :src="props.coverImage || '/images/landing-hero/lh-2.jpeg'" />
    <div v-if="props.coverIcon && !coverText && !coverImage && layout !== 'flat'" :class="[uiLayout.coverIconWrapper]">
      <UIcon :name="props.coverIcon" :class="uiLayout.coverIcon" />
    </div>
    <div v-if="props.coverText && !coverImage && !coverIcon && layout !== 'flat'" :class="[uiLayout.coverText]">
      <MDC :value="coverText" class="px-4" />
    </div>
    <button v-if="layout === 'swatch'" type="button" :class="uiLayout.clipboard" :aria-label="`Copy ${title}`"
      @click="copySwatch">
      <UIcon name="i-line-md:clipboard-arrow" :class="uiLayout.icon" />
      <span :class="uiLayout.title">{{ title }}</span>
    </button>
    <div v-else>
      <div class="relative group">
        <img v-if="urlImage" :src="urlImage" :class="uiLayout.image" :alt="altImage" />
        <UIcon v-if="icon" :name="icon" :alt="altIcon" :class="uiLayout.icon" />
        <div class="relative">
          <MDC v-if="title"
            :class="[uiLayout.title, layout === 'cta' && title && !subtitle ? uiLayout.underline : '', 'transition-opacity duration-300', { 'group-hover:text-transparent': clipboard === true }]"
            :value="title" />
          <MDC v-if="subtitle"
            :class="[uiLayout.subtitle, layout === 'cta' && subtitle ? uiLayout.underline : '', 'transition-opacity duration-300']"
            :value="subtitle" />
          <MDC v-if="text" :class="[uiLayout.text, 'transition-opacity duration-300']" :value="text" />
          <div v-if="layout === 'cta'" class="flex justify-start">
            <NuxtLink :to="urlButton" :target="target" class="inline-block">
              <UIcon name="line-md:chevron-right-circle" :class="uiLayout.button" />
            </NuxtLink>
          </div>
        </div>
        <div v-if="clipboard"
          class="absolute inset-0 flex items-start justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
          <button @click="toast.add({ title: 'Copied! Click here to check clipboard!', onClick })">
            <UIcon @click="copyToClipboard" name="i-line-md:clipboard-arrow" alt="cliboard-icon"
              class="text-5xl text-black" />
          </button>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
const config = {
  /**
   * Color swatch used by the color palette: a fixed-size tile that shows nothing until hovered.
   * On hover the copy icon and the `title` (the color name) appear. Set `clipboard` to copy the title.
   */
  swatch: {
    /** Fixed-size tile. Set the color with a `bg-*` class. */
    wrapper: "relative group block w-full h-16 overflow-hidden rounded-md border border-black/15 dark:border-white/20 not-prose",
    /** Covers the tile and centers the icon and the name. */
    clipboard: "absolute inset-0 flex flex-col items-center justify-center cursor-pointer",
    /** Copy icon. Hidden until hover, then it shrinks to make room for the name. */
    icon: "text-3xl opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-xl",
    /** Color name. Hidden until hover, never wraps. */
    title: "max-h-0 opacity-0 whitespace-nowrap text-xs font-mono leading-none transition-all duration-200 group-hover:max-h-4 group-hover:opacity-100 group-hover:mt-1",
  },
  /** Classes for the default variant. */
  default: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md pl-4 pr-4 pb-4 pt-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-md duration-300 border bg-golden/[0.25] border-golden hover:border-neutral-400 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-golden",
    /** Background cover image of the card. */
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-60 group-hover:opacity-[25%] transition-opacity duration-500 z-0",
    /** Overlay with the cover text, shown over the cover image. */
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out opacity-100 group-hover:opacity-[10%] transition-opacity duration-500 z-0",
    /** Container of the cover icon. */
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-center z-0",
    /** Large background cover icon of the card. */
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-30 duration-500 group-hover:opacity-[5%] transition-opacity duration-500 z-0",
    /** Image of the card. */
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    /** Icon of the card. */
    icon: "relative sm:mt-4 flex shrink-0 mx-auto text-[96px] mb-8 z-20",
    /** Title text. */
    title: "title text-[24px] font-semibold break-words z-20",
    /** Subtitle text. */
    subtitle: "subtitle text-[20px] font-bold mt-3 break-words z-20",
    /** Body text. */
    text: "text font-light text-[18px] mt-7 break-words z-20",
  },
  /** Classes for the `flat` variant. */
  flat: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md p-4 mx-auto max-w-md w-full h-full justify-items-center text-center bg-transparent dark:bg-transparent",
    //coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    //coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    //coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    //coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    /** Icon of the card. */
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[96px] z-20",
    /** Title text. */
    title: "title text-[24px] font-semibold break-words z-20",
    /** Subtitle text. */
    subtitle: "subtitle text-[20px] font-bold mt-1 break-words z-20",
    /** Body text. */
    text: "text font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-[18px] mt-9 break-words z-20"
  },
  /** Classes for the `teaser` variant. */
  teaser: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md p-4 mx-auto max-w-md w-full h-full justify-items-center hover:shadow-md duration-300 border bg-golden/[0.25] border-golden hover:border-neutral-400 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-golden",
    /** Background cover image of the card. */
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-[0.3] dark:opacity-45 group-hover:opacity-[0.12] dark:group-hover:opacity-[25%] transition-opacity duration-500 z-0",
    /** Overlay with the cover text, shown over the cover image. */
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out opacity-100 group-hover:opacity-[10%] transition-opacity duration-500 z-0",
    /** Container of the cover icon. */
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-center z-0",
    /** Large background cover icon of the card. */
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-30 duration-500 group-hover:opacity-[5%] transition-opacity duration-500 z-0",
    /** Image of the card. */
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    /** Icon of the card. */
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[96px] transition-transform duration-500 ease-in-out group-hover:translate-y-[-0.3rem] transform z-20",
    /** Title text. */
    title: "title mt-16 text-center text-[24px] font-semibold break-words z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-2rem] transform",
    /** Subtitle text. */
    subtitle: "subtitle text-center font-bold text-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out mt-1 break-words z-20 transition-transform group-hover:translate-y-[-1.1rem] transform",
    /** Body text. */
    text: "text text-center text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out font-medium mt-2 mb-5 break-words z-20",
  },
  /** Classes for the `snap` variant. */
  snap: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md p-4 mx-auto max-w-md w-full h-full justify-items-center hover:shadow-md duration-300 border bg-golden/[0.25] border-golden hover:border-neutral-400 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-golden",
    /** Background cover image of the card. */
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-60 z-0",
    /** Overlay with the cover text, shown over the cover image. */
    coverText: "absolute inset-0 flex items-center justify-center text-center text-2xl font-semibold opacity-30 scale-100 transition-all duration-700 ease-in-out group-hover:translate-y-[45%] group-hover:scale-[0.8] group-hover:opacity-100 z-10",
    /** Container of the cover icon. */
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-between z-0 overflow-hidden",
    /** Large background cover icon of the card. */
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-30 scale-100 transition-all duration-700 ease-in-out group-hover:-translate-y-[6rem] group-hover:scale-[0.2] group-hover:opacity-100 group-hover:-mt-9 z-0",
    /** Icon of the card. */
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[3rem] transition-transform duration-500 ease-in-out group-hover:opacity-0 group-hover:transition-opacity group-hover:duration-500 transform z-20",
    /** Title text. */
    title: "title mt-32 text-center text-[24px] font-semibold break-words z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-2rem] transform",
    /** Subtitle text. */
    subtitle: "subtitle text-center font-bold text-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 ease-in-out mt-1 break-words z-20 transition-transform group-hover:translate-y-[-1.1rem] transform",
    /** Body text. */
    text: "text text-center text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ease-in-out font-medium mt-2 mb-5 break-words z-20",
  },
  /** Classes for the `translate` variant. */
  translate: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md pl-3 pr-3 mx-auto max-w-md w-full h-full justify-items-center text-center border border-golden hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-golden",
    /** Background cover image of the card. */
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    /** Overlay with the cover text, shown over the cover image. */
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white transition-transform duration-700 group-hover:-translate-y-full z-40",
    /** Container of the cover icon. */
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    /** Large background cover icon of the card. */
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    /** Image of the card. */
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    /** Icon of the card. */
    icon: "relative sm:mt-4 mb-8 text-[4rem] flex shrink-0 mx-auto z-20",
    /** Title text. */
    title: "title text-xl font-semibold break-words z-20",
    /** Subtitle text. */
    subtitle: "subtitle text-base font-bold mt-3 break-words z-20",
    /** Body text. */
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  },
  /** Classes for the `opacity` variant. */
  opacity: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md pl-3 pr-3 pt-5 pb-7 mx-auto max-w-md w-full h-full justify-items-center text-center border border-golden hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-golden",
    /** Background cover image of the card. */
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-cover opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    /** Overlay with the cover text, shown over the cover image. */
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    /** Container of the cover icon. */
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    /** Large background cover icon of the card. */
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    /** Image of the card. */
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    /** Icon of the card. */
    icon: "relative sm:mt-4 mb-8 text-[96px] flex shrink-0 mx-auto z-20",
    /** Title text. */
    title: "title text-[24px] font-semibold break-words z-20",
    /** Subtitle text. */
    subtitle: "subtitle text-[20px] font-bold mt-3 break-words z-20",
    /** Body text. */
    text: "text font-light text-[18px] mt-7 break-words z-20",
  },
  /** Classes for the `cta` variant. */
  cta: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md p-4 mx-auto max-w-md w-full h-full justify-items-center text-center border bg-golden/[0.25] border-golden dark:bg-neutral-800 dark:border-neutral-700",
    /** Background cover image of the card. */
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-60 z-0",
    /** Overlay with the cover text, shown over the cover image. */
    coverText: "absolute inset-0 flex items-center justify-center text-center opacity-60 z-0",
    /** Container of the cover icon. */
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-center z-0",
    /** Large background cover icon of the card. */
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-60 z-0",
    /** Image of the card. */
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    /** Icon of the card. */
    icon: "relative text-start sm:mt-4 mb-8 flex shrink-0 text-[3rem] z-20",
    /** Title text. */
    title: "title text-4xl text-start font-semibold text-neutral-900 dark:text-golden break-words z-20",
    /** Subtitle text. */
    subtitle: "subtitle text-2xl text-start font-bold text-neutral-900 dark:text-golden mt-1 break-words z-20",
    /** Decorative line under the title. */
    underline: "underline underline-offset-[1.5rem] decoration-2 dark:decoration-golden/[0.4]",
    /** Body text. */
    text: "text mt-8 font-light text-[1.1rem] text-start text-neutral-700 dark:text-golden/[0.85] break-words z-20",
    /** Call-to-action button of the card. */
    button: "mt-24 mb-4 text-6xl duration-300 text-neutral-900 dark:text-neutral-100",
  },
  /** Classes for the `logo` variant. */
  logo: {
    /** Container of the card for this variant. */
    wrapper: "container overflow-hidden relative group flex flex-col rounded-md pl-3 pr-3 mx-auto max-w-md w-full h-full justify-items-center text-center border border-golden hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-golden",
    /** Background cover image of the card. */
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-contain bg-white transition-transform duration-700 group-hover:-translate-y-full z-40",
    /** Overlay with the cover text, shown over the cover image. */
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white transition-transform duration-700 group-hover:-translate-y-full z-40",
    /** Container of the cover icon. */
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    /** Large background cover icon of the card. */
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    /** Image of the card. */
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    /** Icon of the card. */
    icon: "relative sm:mt-4 mb-8 text-[8rem] flex shrink-0 mx-auto z-20",
    /** Title text. */
    title: "title text-xl font-semibold break-words z-20",
    /** Subtitle text. */
    subtitle: "subtitle text-base font-bold mt-3 break-words z-20",
    /** Body text. */
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  }
}

// `cta` and `swatch` tiles are not links (a swatch holds its own button)
const isLink = computed(() => props.layout !== 'cta' && props.layout !== 'swatch')
const NuxtLinkComponent = resolveComponent("NuxtLink"); //dynamically resolving the NuxtLink component to avoid build errors

const props = withDefaults(
  defineProps<{
    description?: string;
    /** This property allows us to change layout of a constructor which in effect has that our styling is changing and we get different look and effect out of the same component. Options: `default`, `flat`, `teaser`, `snap`, `translate`, `opacity`, `cta` & `logo` */
    layout?: string;
    /** Link to external or internal image that will be presented as a cover across the whole constructor */
    coverImage?: string;
    /** Any valid icon from Iconify */
    coverIcon?: string;
    /** Inscription that will be presented as a cover across the whole constructor (full Markdown support) */
    coverText?: string;
    /** The URL that wraps the component, typically for navigation purposes. */
    urlWrapper?: string;
    /** The URL the button navigates to when `layout` is set to `cta`. Used instead of `urlWrapper` for that layout. */
    urlButton?: string;
    /** Specifies where to open the linked document. */
    target?: string;
    /** The source URL of the image to be displayed. */
    urlImage?: string;
    /** Alternative text for the image, used for accessibility and in case the image fails to load. */
    altImage?: string;
    /** Any valid icon from Iconify */
    icon?: string;
    /** Alternative text for the icon, used for accessibility. */
    altIcon?: string;
    /** The title text to be displayed. */
    title?: string;
    /** The subtitle text to be displayed, if any. */
    subtitle?: string;
    /** The main text content to be displayed. */
    text?: string;
    /** To show or not the copy button on hover over. It can either be `true` or `false` */
    clipboard?: boolean; // Add clipboard prop
    ui?: Record<string, any>;
  }>(),
  {
    ui: undefined,
    description: "",
    layout: "default",
    coverImage: "",
    coverIcon: "",
    coverText: "",
    urlWrapper: "",
    urlButton: "",
    target: "_self",
    urlImage: "",
    altImage: "",
    icon: "",
    altIcon: "",
    title: "",
    subtitle: "",
    text: "",
    clipboard: false,
  });

const ui = computed(() => mergeUi(config, props.ui));

const uiLayout = computed<Record<string, string>>(() => {
  return ui.value?.[props.layout] ?? ui.value?.default ?? {};
});


const toast = useToast()
const colorName = ref(props.title);

const copyToClipboard = () => {
  navigator.clipboard.writeText(colorName.value);
};

function copySwatch() {
  navigator.clipboard.writeText(props.title);
  toast.add({ title: `Copied ${props.title}` });
}

function onClick() {
  alert('Currently copied: ' + colorName.value);
}
</script>

<style scoped>
a {
  color: inherit;
}

a:hover {
  color: inherit;
}
</style>