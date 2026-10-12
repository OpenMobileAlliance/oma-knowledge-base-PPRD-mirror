<template>
  <div :class="ui.wrapper">
    <div :class="ui.inner">

      <!-- Header Section -->
      <div :class="ui.header">
        <div :class="ui.title">
          <MDC :value="title" />
          <hr :class="ui.underline">
        </div>
        <div :class="ui.subtitle">
          <MDC :value="subtitle" />
        </div>
        <div :class="ui.text">
          <MDC :value="text" />
        </div>
      </div>
      <!-- /Header Section -->

      <!-- Tag Section -->
      <div :title="tooltip" :class="ui.tagSection" @click="isOpen = true">
        <div v-if="tags" :class="ui.tags.title">{{ 'Tags' }}
          <div v-if="selectedTags.length > 0" class="mr-2">{{ ':' }}</div>
          <div v-if="selectedTags.length > 0" class="">{{ selectedTags.length }}</div>
          <UIcon name="system-uicons:tags" class="ml-3 text-3xl" />
        </div>
        <USlideover v-model:open="isOpen" :title="'Tags for ' + slideoverTitle" description="Filter the cards by tag"
          :ui="{ overlay: 'dark:bg-black/50 backdrop-blur-sm' }">
          <template #content>
            <UCard class="flex flex-col flex-1 h-full rounded-none dark:bg-neutral-900"
              :ui="{ root: 'ring-0 divide-y divide-neutral-100 dark:divide-neutral-800', body: 'flex-1 min-h-0' }">
              <template #header>
                <div class="flex h-8 justify-between items-center">
                  <div class="dark:text-golden text-xl">{{ 'Tags for ' + slideoverTitle }}</div>
                  <div class="flex items-center">
                    <button type="button" aria-label="Close tags panel" @click="isOpen = false">
                      <UIcon name="material-symbols-light:right-panel-close"
                        class="text-4xl mb-2 text-slate-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-golden cursor-pointer" />
                    </button>
                  </div>
                </div>
              </template>
              <div class="h-full">
                <div class="block flex-col space-y-3 text-neutral-700 dark:text-neutral-300">
                  <span v-for="tag in tags" :key="tag" @click="toggleTag(tag)" :class="[ui.tags.list,
                  {
                    [ui.tags.selected]: selectedTags.includes(tag)
                  }
                  ]">
                    <span>{{ tag }}</span>
                    <UIcon v-if="selectedTags.includes(tag)" name="i-line-md:close-circle"
                      class="hover:text-gray-500 duration-100 text-xl ml-auto" />
                  </span>
                </div>
                <div class="flex justify-center mt-5 mb-5">
                  <button v-if="selectedTags.length" @click="clearTags" :class="ui.tags.clear">
                    Clear All
                    <UIcon name="i-line-md:filter-remove-twotone" class="ml-1 animate-pulse" />
                  </button>
                </div>
              </div>
              <template #footer>
                <div class="flex h-8 justify-center text-neutral-700 dark:text-golden italic">{{ 'Number of selected tags: ' + selectedTags.length }}</div>
              </template>
            </UCard>
          </template>
        </USlideover>
      </div>
    </div>
    <!-- /Tag Section -->

    <!-- Cards Section -->
    <div :class="[ui.base, ui.gap]">
      <template v-for="(card, index) in filteredCards" :key="index">
        <ShCard :title="card.title" :subtitle="card.subtitle" :excerpt="card.excerpt" :urlImage="card.urlImage"
          :urlUpperBase="card.path" :articleURL="card.path" :leftLabel="card.leftLabel" :rightLabel="card.rightLabel"
          :centerLabel="card.centerLabel" :resultData="result" />
      </template>
    </div>
    <!-- /Cards Section -->
  </div>
</template>

<script setup lang="ts">
import { useQueryCollection } from "~/composables/nuxt/query/useQueryCollection";

const config = {
  /** Defines the overall styling for the container that holds the entire list of cards. This typically includes padding, margins, and general layout settings. */
  wrapper: "",
  /** Container that holds the header and the tag filter side by side. */
  inner: "flex justify-between",
  /** Box that holds the tag filter. */
  tagSection: "border border-golden dark:border-golden/[0.6] duration-200 rounded-md block w-fit h-fit pl-3 pr-3 hover:cursor-pointer dark:text-golden hover:border-golden dark:hover:border-golden",
  /** Tag filter. */
  tags: {
    /** Title of the tag filter. */
    title: "title flex justify-center items-center",
    /** Button that clears the selected tags. */
    clear: "flex items-center border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200",
    /** A single tag. */
    list: "flex items-center px-3 py-1 m-1 border border-neutral-300 dark:border-neutral-600 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer",
    /** A tag that is currently selected. */
    selected: "bg-golden border-golden text-neutral-900 dark:bg-golden dark:border-golden transition-all duration-300",
  },
  /** Styles applied to the header section, including the title, subtitle, and description. This can include font size, color, and alignment settings. */
  header: "",
  /** Define the style of title fonts, displayed prominently at the top of the header section. */
  title: "title -mt-9 text-3xl font-semibold text-left dark:text-golden",
  /** Decorative line under the title. */
  underline: "border-b-[3px] border-golden w-32 -mt-2 mb-[3em]",
  /** Define the style of subtitle fonts, which provides additional context or description for the list of cards. */
  subtitle: "subtitle text-xl font-semibold text-neutral-600 dark:text-neutral-300 text-left -mt-14",
  /** Define the style of text fonts */
  text: "text text-left font-normal dark:text-neutral-300",
  /** Styles applied to the grid layout of the cards. This typically includes grid columns and gap settings. */
  base: "justify-between flex flex-wrap",
  /** The gap size between the cards in the grid layout. */
  gap: "gap-0",
}

const DEFAULT_COLS = 3

const props = withDefaults(
  defineProps<{
    ui?: Record<string, any>;
    /** The title of the list of cards, displayed prominently at the top of the header section. */
    title?: string;
    /** The subtitle, which provides additional context or description for the list of cards. */
    subtitle?: string;
    /** Additional descriptive text or instructions displayed below the subtitle. */
    text?: string;
    /** The number of columns in the grid layout for the cards. The `gridClass` inteligentlly calculates number of cols that can be visible depending of the width of the screen. For any screen larger than `1300px` this component will allow user to enter his desired number of columns. Any width lower than that, it will automatically set columns to either 3, 2 or 1. User can always set a smaller number if screen is beyond `1300px`. */
    cols?: number;
    description?: string;
    /** This prop allows this constructor to list cards in order that is inputed */
    cardID?: number[];
    /** Optional list of all available tag names that can be associated with the listed cards. */
    allTags?: string[];
  }>(),
  {
    ui: undefined,
    title: "",
    subtitle: "",
    text: "",
    cols: DEFAULT_COLS,
    description: "",
  }
);

const ui = computed(() => mergeUi(config, props.ui));

const isOpen = ref(false)

const route = useRoute();

const slideoverTitle = computed(() => {
  const segments = route.path.toUpperCase().split('/').filter(Boolean);
  return segments.pop() || 'Unknown'; // Fallback in case the path is empty
});

const tags = ref<string[]>([]);
const selectedTags = ref<string[]>([]);

const media = computed(() => {
  return route.path.split('/media/').pop() || null;
});
// Fetch cards and sort by cardID prop order
const { data: result } = await useAsyncData(`fetch-articles-by-cardID-in-${media.value}`, () =>
  queryCollection('articles')
    .where('cardID', 'IN' , props.cardID)
    .order('cardID', 'DESC')
    .all()
);

result.value?.forEach(card => {
  card.title = card.title || "" 
  card.subtitle = card.subtitle || "" 
  card.urlImage = card.urlImage || ""
  card.path = card.path || ""
  card.leftLabel = card.leftLabel || ""
  card.rightLabel = card.rightLabel || ""
  card.centerLabel = card.centerLabel || "" 
});

//Tag & Tag Manipulation
// Process each card in the result and collect all tags
const allCardTags: string[] = [];
result.value?.forEach((card, index) => {
  
  // Extract tags from each card and add to allCardTags array
  if (card.tags && Array.isArray(card.tags)) {
    card.tags.forEach((tag: string) => {
      if (!allCardTags.includes(tag)) {
        allCardTags.push(tag);
      }
    });
  }
});

// Update the tags ref with all collected tags
tags.value = allCardTags;

// Toggle tag selection
const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) {
    // Tag not selected, add it
    selectedTags.value.push(tag);
  } else {
    // Tag already selected, remove it
    selectedTags.value.splice(index, 1);
  }
};

// Clear all selected tags
const clearTags = () => {
  selectedTags.value = [];
};

// Computed property to filter cards based on selected tags
const filteredCards = computed(() => {
  if (!result.value || selectedTags.value.length === 0) {
    return result.value; // Return all cards if no tags selected
  }
  
  return result.value.filter(card => {
    if (!card.tags || !Array.isArray(card.tags)) {
      return false; // Exclude cards without tags
    }
    
    // Check if the card has at least one of the selected tags
    return selectedTags.value.some(selectedTag => 
      card.tags.includes(selectedTag)
    );
  });
});

const tooltip = computed(() => {
  if( selectedTags.value.length > 0) {
    return `Selected Tags: ${selectedTags.value.join(', ') }`;
  }
  else {
    return "Click to select tags";
  }
});
</script>
