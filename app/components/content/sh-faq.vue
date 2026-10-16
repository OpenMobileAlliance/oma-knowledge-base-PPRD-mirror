<template>
  <div :class="ui.header.wrapper">
    <MDC :class="ui.header.title" :value="title" />
  </div>
  <div :class="ui.wrapper">
    <div v-for="(faq, index) in faqs" :key="index" :class="ui.inner">
      <div :class="ui.question" @click="toggleAnswer(index)">
        <MDC :class="['not-prose', ui.q]" :value="'Q: ' + faq.q" />
        <UIcon name="i-icons8-chevron-right-round"
          :class="[ui.icon, visibleAnswers[index] ? 'rotate-90' : 'rotate-0', 'transition-transform duration-300']" />
      </div>
      <div :class="[ui.answer, 'transition-max-height duration-500 ease-in-out overflow-hidden']"
        :style="{ maxHeight: visibleAnswers[index] ? answerHeights[index] : '0' }" ref="answerRefs">
        <MDC :class="ui.a" :value="faq.a" />
      </div>
      <div v-if="index < faqs.length - 1" :class="ui.divider"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  /** Header above the list of questions. */
  header: {
    /** Container of the header. */
    wrapper: "mt-10 mb-[1.25em]",
    /** Title of the header. */
    title: "title text-xl md:text-2xl font-bold",
  },
  /** Defines the styling for the container of the FAQ items. This includes borders, padding, and layout. */
  wrapper: "border border-neutral-300 dark:border-neutral-700 rounded-md",
  /** Specifies the styling for individual FAQ items, such as margin and padding. */
  inner: "mx-3 cursor-pointer",
  /** Defines the styling for the question part of the FAQ, including cursor and text color. */
  question: "my-[1.25em] grid grid-cols-2 flex-row font-semibold",
  /** Defines the text styling for the question part of the FAQ. */
  q: "w-full hover:text-neutral-500 dark:hover:text-neutral-100 duration-200 text-neutral-900 dark:text-golden mx-4",
  /** Defines the styling for the answer part of the FAQ, including text color. */
  answer: "my-[1.25em] ml-1",
  /** Defines the text styling for the answer part of the FAQ. */
  a: "mx-6 font-normal text-neutral-700 dark:text-golden/85",
  /** Defines the styling for the divider between FAQ items. */
  divider: "border-b border-neutral-300 dark:border-neutral-700",
  /** Defines the styling of the icon. */
  icon: "place-self-end self-center text-3xl text-neutral-900 dark:text-golden",
}

interface Faq {
  q: string;
  a: string;
}

// Define the props to accept a dynamic number of Q&A pairs
const props = withDefaults(
  defineProps<{
    description?: string;
    /** Represents the list of question-answer pairs to be displayed in the FAQ component. */
    qas: Faq[];
    /** The heading text displayed above the list of questions and answers. */
    title?: string;
    ui?: Record<string, any>;
  }>(),
  {
    ui: undefined,
    description: "",
    title: "FAQs",
  }
);

const ui = computed(() => mergeUi(config, props.ui));

// Convert the incoming Q&A props to a structured format
const faqs = computed(() => {
  return props.qas.map((item) => ({
    q: item.q,
    a: item.a,
  }));
});

// State to track which answers are visible
const visibleAnswers = ref<boolean[]>(faqs.value.map(() => false));
const answerHeights = ref<string[]>(faqs.value.map(() => '0'));
const answerRefs = ref<HTMLParagraphElement[]>([]);

// Function to toggle visibility of answers
const toggleAnswer = (index: number) => {
  visibleAnswers.value[index] = !visibleAnswers.value[index];
  nextTick(() => {
    const element = answerRefs.value[index];
    answerHeights.value[index] = visibleAnswers.value[index] ? `${element.scrollHeight}px` : '0';
  });
};

onMounted(() => {
  faqs.value.forEach((_, index) => {
    const element = answerRefs.value[index];
    answerHeights.value[index] = `${element.scrollHeight}px`;
  });
});
</script>

<style>
/* Transition for max-height */
.transition-max-height {
  transition: max-height 0.5s ease-in-out;
}
</style>
