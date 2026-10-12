<template>
  <div :class="[ui.wrapper, Status]">
    <div v-if="urlImage" class="lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:grid-flow-col lg:gap-10">
      <img :src="urlImage" :alt="altImage" :class="[imgPositionClass, imgSpanClass, ui.image]" />
      <div :class="[positionTextClass, spanTextClass, alignTextClass, 'content-center']">
        <MDC v-if="title" :class="ui.title" :value="title" />
        <hr v-if="title" :class="ui.underline" />
        <MDC v-if="subtitle" :class="ui.subtitle" :value="subtitle" />
        <MDC v-if="text" :class="ui.text" :value="text" />
      </div>
    </div>
    <div v-else class="grid grid-cols-1 grid-rows-1">
      <div :class="[alignTextClass]">
        <MDC v-if="title" :class="ui.title" :value="title" />
        <hr v-if="title" :class="ui.underline" />
        <MDC v-if="subtitle" :class="ui.subtitle" :value="subtitle" />
        <MDC v-if="text" :class="[ui.text, 'items-center']" :value="text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  /** Defines the overall styling for the container that holds all the elements of the component. */
  wrapper: "bg-inherit dark:bg-inherit border-neutral-200 dark:border-neutral-500 rounded-md p-3 sm:p-5 mb-12",
  /** Styles applied to the title text, such as font size and color. */
  title: "title font-semibold text-xl leading-7 sm:text-[32px] md:text-[32px] lg:text-[32px]",
  /** Decorative line under the title. */
  underline: "border-b-[3px] border-oma-yellow-500 w-32 -mt-2 mb-[3em]",
  /** Styles applied to the subtitle text, such as font size and color. */
  subtitle: "subtitle font-medium text-neutral-600 dark:text-neutral-300 text-lg leading-7 sm:text-[24px] md:text-[24px] lg:text-[24px] break-words -mt-8",
  /** Styles applied to the text content, such as font size and color. */
  text: "not-prose text-lg sm:text-md md:text-lg lg:text-xl leading-7 break-words mt-16",
  // raw <img>/<hr>/<p> carry the margins the old site got from its typography plugin
  image: "mx-auto rounded-md my-[2em]",
}

// Container look per `status` (a-d), anything else keeps the plain look
const STATUS: Record<string, string> = {
  a: 'bg-white border-neutral-300 text-red-700',
  b: 'bg-neutral-900 border-neutral-900 text-green-300',
  c: 'bg-amber-100 border-amber-200 text-amber-900',
  d: 'bg-oma-blue-50 border-oma-blue-100 text-oma-blue-700',
}

const props = withDefaults(
  defineProps<{
    description?: string;
    /** Defines position of text in regard of image. Options: `left`, `right` */
    positionText?: string;
    /** Defines amount of space that will text occupy. Options: `s`, `m`, `l` */
    spanText?: string;
    /** Defines alignement of the text. Options: `left`, `center` & `right` */
    alignText?: string;
    /** The title text to be displayed. */
    title?: string;
    /** The subtitle text to be displayed, if any. */
    subtitle?: string;
    /** The main text content to be displayed. */
    text?: string;
    /** The source URL of the image to be displayed. */
    urlImage?: string;
    /** Alternative text for the image, used for accessibility and in case the image fails to load. */
    altImage?: string;
    /** Styles for the container background depending on the status value. Options: `a`, `b`, `c`, `d` & `default` */
    status?: string;
    ui?: Record<string, any>;
  }>(),
  {
    ui: undefined,
    description: "",
    positionText: "right",
    spanText: "m",
    alignText: "center",
    title: "",
    subtitle: "",
    text: "",
    urlImage: "",
    altImage: "",
    status: "",
  }
);

const ui = computed(() => mergeUi(config, props.ui));

const positionText = toRef(props, 'positionText');
const spanText = toRef(props, 'spanText');
const alignText = toRef(props, 'alignText');
const status = toRef(props, 'status');

const COL_START_VALUES = [
  '',
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4'
]

const positionTextClass = computed(() => {
  if (positionText.value === 'right' && spanText.value === 'l') {
    return COL_START_VALUES[2]
  } else if (positionText.value === 'left') {
    return COL_START_VALUES[1]
  } else {
    return COL_START_VALUES[3]
  }
});

const spanTextClass = computed(() => {
  switch (spanText.value) {
    case 's':
      if (positionText.value === 'left') {
        return 'col-start-1 col-span-1'
      } else {
        return 'col-start-4 col-span-1'
      }
    case 'm':
      return 'col-span-2'
    case 'l':
      if (positionText.value === 'left') {
        return 'col-start-1 col-span-3'
      } else {
        return 'col-start-2 col-span-3'
      }
    default:
      return 'col-span-2'
  }
});

const alignTextClass = computed(() => {
  switch (alignText.value) {
    case 'left':
      return 'text-left'
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-center'
  }
});

//depending on the textPosition, the image will be placed on the opposite side
const imgPositionClass = computed(() => {
  if (positionText.value === 'left' && spanText.value === 's') {
    return 'col-start-2'
  } else if (positionText.value === 'right') {
    return 'col-start-1'
  }
});

//depending on the spanText and textPosition, the image will take the remaining space
const imgSpanClass = computed(() => {
  if (spanText.value === 'l' && positionText.value === 'left') {
    return 'col-start-4 col-span-1'
  } else if (spanText.value === 'l' && positionText.value === 'right') {
    return 'col-start-1 col-span-1'
  } else if (spanText.value === 's' && positionText.value === 'left') {
    return 'col-start-2 col-span-3'
  } else if (spanText.value === 's' && positionText.value === 'right') {
    return 'col-start-1 col-span-3'
  } else {
    return 'col-span-2'
  }
});

//classes for styling the container background depending on the status
const Status = computed(() => STATUS[status.value] ?? '')
</script>
