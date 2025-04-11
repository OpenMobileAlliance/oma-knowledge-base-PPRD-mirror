<template>
  <div :class="ui.wrapper">
    <img v-if="props.coverImage && !coverText && !coverIcon" :src="props.coverImage" :class="[ui.coverImage, coverEffectClass]" />
    <div v-if="props.coverIcon && !coverText && !coverImage" :class="[ui.coverIconWrapper, coverEffectClass]">
      <UIcon :name="props.coverIcon" :class="ui.coverIcon" dynamic />
    </div>
    <div v-if="coverText && !coverImage && !coverIcon" :class="[ui.coverText, coverEffectClass]">
      <MDC :value="coverText" class="px-4" />
    </div>
    <div :class="ui.upperBase" :style="backgroundClass">
      <NuxtLink :to="urlUpperBase" :target="target" class="not-prose">
        <div v-if="urlImage" class="h-80 w-full flex justify-center items-center">
          <img :src="urlImage" :class="ui.image" :alt="altImage" />
        </div>
        <MDC v-else :value="upperBaseText" :class="ui.upperBaseText" />
      </NuxtLink>
    </div>
    <div :class="ui.lowerBase">
      <div :class="ui.title">
        <MDC :value="title" />
      </div>
      <div :class="ui.subtitle">
        <MDC :value="subtitle" />
      </div>
      <div :class="ui.text">
        <MDC v-if="text" :value="text" />
        <ContentRenderer v-else>
          <MDC :value="excerpt" excerpt class="dark:text-golden" />
        </ContentRenderer>
      </div>
      <div v-if="page._path === '/media/blog' || 'media/news' || 'media/press' || 'media/newsletter'" >
        <NuxtLink :to="article" target="_self" class="">
          Read more...
        </NuxtLink>
      </div>
      <div class="border-t mt-16">
        <div class="grid grid-cols-3">
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
import { card as config } from '@/ui.config' // Import the config file

const route = useRoute()
const { data: page } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne());

const props = withDefaults(
  defineProps<{
    coverImage?: string;
    coverIcon?: string;
    coverText?: string;
    opacity?: boolean;
    urlUpperBase?: string;
    upperBaseText?: string;
    urlImage?: string;
    target?: string;
    altImage?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    excerpt?: string;
    leftLabel?: string;
    centerLabel?: string;
    rightLabel?: string;
    imageBackground?: string;
    article?: string;
    description?: string;
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
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
    excerpt: "",
    leftLabel: "",
    centerLabel: "",
    rightLabel: "",
    imageBackground: "",
  }
);

const { ui } = useUI(
  "sh-card",
  toRef(props, "ui"),
  config
);
const backgroundClass = computed(() => {
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
