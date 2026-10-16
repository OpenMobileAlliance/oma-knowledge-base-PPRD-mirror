<template>
  <div :class="ui.wrapper">
    <img v-if="props.coverImage && !coverText && !coverIcon" :src="props.coverImage"
      :class="[ui.coverImage, coverEffectClass]" />
    <div v-if="props.coverIcon && !coverText && !coverImage" :class="[ui.coverIconWrapper, coverEffectClass]">
      <UIcon :name="props.coverIcon" :class="ui.coverIcon" />
    </div>
    <div v-if="coverText && !coverImage && !coverIcon" :class="[ui.coverText, coverEffectClass]">
      <MDC :value="coverText" class="px-4" />
    </div>
    <div :class="ui.upperBase" :style="backgroundStyle">
      <a v-if="urlUpperBase" :href="urlUpperBase" :target="target" class="not-prose">
        <div v-if="urlImage" class="h-80 w-full flex justify-center items-center">
          <img :src="urlImage" :class="ui.image" :alt="altImage" />
        </div>
        <MDC v-else :value="upperBaseText" :class="ui.upperBaseText" />
      </a>
      <div v-else class="not-prose">
        <div v-if="urlImage" class="h-80 w-full flex justify-center items-center">
          <img :src="urlImage" :class="ui.image" :alt="altImage" />
        </div>
        <MDC v-else :value="upperBaseText" :class="ui.upperBaseText" />
      </div>
    </div>
    <div :class="ui.lowerBase">
      <div :class="ui.content">
        <div :class="ui.title">
          <MDC :value="title" />
        </div>
        <div :class="ui.subtitle">
          <MDC :value="subtitle" />
        </div>
        <div :class="ui.text">
          <MDC v-if="text" :value="text" />
          <div v-else-if="excerpt" class="dark:text-neutral-300">
            <ContentRenderer :value="excerpt" />
          </div>
        </div>
      </div>
      <div v-if="route.path.includes('/media/blog') || route.path.includes('/media/news')" :class="ui.readMore">
        <a :href="articleURL" target="_self" class="flex items-center">
            Read More
            <UIcon name="i-material-symbols:read-more-rounded" class="ml-1 text-2xl" />
        </a>
      </div>
      <div class="border-t mt-16">
        <div :class="ui.labels">
          <div :class="ui.leftLabel">
            <MDC :value="leftLabel" />
          </div>
          <div :class="ui.centerLabel">
            <MDC :value="centerLabel" />
          </div>
          <div :class="ui.rightLabel">
            <MDC :value="rightLabel" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  /** Defines the overall styling for the container that holds all the elements of the component. */
  wrapper: "flex flex-col max-h-fit relative group justify-between border border-golden dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-golden rounded-md mx-auto max-w-lg overflow-hidden bg-inherit shadow-xs hover:shadow-md transition-shadow duration-200",
  /** Defines the styling for the cover image that spans across the whole constructor */
  coverImage: "absolute mb-0 bottom-0 w-full h-screen object-cover opacity-100 ease-in-out",
  /** Container of the cover icon. */
  coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
  /** Defines the styling for the icon used for covering the constructor */
  coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
  /** Defines the styling for the cover text (including the color of the background) that spans across the whole constructor */
  coverText: "absolute bottom-0 w-full h-full flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100",
  /** Defines the styling for the upper section of the component, typically where the image is displayed. */
  upperBase: "flex items-center justify-center rounded-t-md",
  /** Defines the styling for the text in the upper section of the component, instead of where the image is displayed. */
  upperBaseText: "",
  /** Styles applied to the image element, including properties like size and border radius. */
  image: "h-full w-screen rounded-b-md overflow-hidden",
  /** Defines the styling for the lower section of the component, typically where the text content is displayed. */
  lowerBase: "p-6 rounded-b-md",
  /** Container of the text content in the lower half. */
  content: "",
  /** Styles applied to the title text, such as font size and color. */
  title: "title text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-golden",
  /** Styles applied to the subtitle text, such as font size and color. */
  subtitle: "subtitle text-xl font-semibold text-neutral-600 dark:text-golden/80 -mt-8",
  /** Styles applied to the text content, such as font size and color. */
  text: "text text-base text-gray-800 dark:text-gray-200 not-prose",
  /** The "Read More" link, shown only on blog and news pages. */
  readMore: "mt-8",
  /** Row that holds the left, center and right labels. */
  labels: "flex justify-between items-center",
  /** Defines the overall styling for the leftLabel that holds the text. */
  leftLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  /** Defines the overall styling for the centerLabel that holds the text. */
  centerLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  /** Defines the overall styling for the rightLabel that holds the text. */
  rightLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
}

const route = useRoute()

const props = withDefaults(
  defineProps<{
    /** Link to external or internal image that will be presented as a cover across the whole constructor */
    coverImage?: string;
    /** Any valid icon from Iconify */
    coverIcon?: string;
    /** Inscription that will be presented as a cover across the whole constructor (full Markdown support) */
    coverText?: string;
    /** Setting this to true will trigger fadeaway effect on `coverImage` or `coverText`. Default state triggers the transition effect */
    opacity?: boolean;
    /** The URL that wraps the upper section of the component, typically for navigation purposes. */
    urlUpperBase?: string;
    /** Allows you to have text in upper section of this constructor, instead of an image */
    upperBaseText?: string;
    /** The source URL of the image to be displayed. */
    urlImage?: string;
    /** Specifies where to open the linked document referenced by `urlUpperBase`. */
    target?: string;
    /** Alternative text for the image, used for accessibility and in case the image fails to load. */
    altImage?: string;
    /** The title text to be displayed. */
    title?: string;
    /** The subtitle text to be displayed, if any. */
    subtitle?: string;
    /** The main text content to be displayed. */
    text?: string;
    /** An object used as a fallback for `text`; rendered with `ContentRenderer` when `text` is not provided. */
    excerpt?: object;
    /** The text to be displayed in the left label. */
    leftLabel?: string;
    /** The text to be displayed in the center label. */
    centerLabel?: string;
    /** The text to be displayed in the right label. */
    rightLabel?: string;
    /** The background image for the component's image section. */
    imageBackground?: string;
    /** The URL used for the "Read More" link shown on blog/news pages. */
    articleURL?: string;
    description?: string;
    ui?: Record<string, any>;
  }>(),
  {
    ui: undefined,
    description: "",
    coverImage: "",
    coverIcon: "",
    coverText: "",
    opacity: false,
    urlUpperBase: "",
    upperBaseText: "",
    urlImage: "",
    target: "_self",
    altImage: "",
    title: "",
    subtitle: "",
    text: "",
    leftLabel: "",
    centerLabel: "",
    rightLabel: "",
    imageBackground: "",
  }
);

const ui = computed(() => mergeUi(config, props.ui));

const backgroundStyle = computed(() => {
  if (props.imageBackground) {
    return "background-image: url(" + props.imageBackground + ")";
  }
});

const coverEffectClass = computed(() => {
  if (props.opacity === true) {
    return "transition-opacity duration-700 group-hover:opacity-0";
  }
  else {
    return "transition-transform duration-700 group-hover:-translate-y-full";
  }
});
</script>
