<template>
  <div :class="ui.wrapper">
    <div :class="ui.upperBase" :style="backgroundClass">
      <NuxtLink :to="urlUpperBase" target="_blank" class="not-prose">
        <div class="h-80 w-full flex justify-center items-center">
          <img :src="urlImage" :class="ui.image" :alt="altImage" />
        </div>
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
        <ContentRenderer v-else >
          <MDC :value="excerpt" excerpt class="dark:text-golden"/>
        </ContentRenderer>
      </div>
      <div v-if="page._path === '/news'">
        <NuxtLink :to="article" target="_blank" class="">
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
    urlUpperBase?: string;
    urlImage?: string;
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
    urlUpperBase: "",
    urlImage: "",
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

</script>
