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
        <USlideover v-model="isOpen" :ui="{ overlay: { background: 'dark:bg-golden/[0.2] backdrop-blur-sm' } }">
          <UCard class="flex flex-col flex-1"
            :ui="{ background: 'dark:bg-neutral-900', body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
              <div class="flex h-8 justify-between items-center">
                <div class="dark:text-golden text-xl">{{ 'Tags for ' + slideoverTitle }}</div>
                <div class="flex items-center">
                  <UIcon name="material-symbols-light:right-panel-close" dynamic @click="isOpen = false"
                    class="text-4xl mb-2 text-slate-600 dark:text-golden hover:text-oma-red-500 dark:hover:text-oma-red-500 cursor-pointer" />
                </div>
              </div>
            </template>
            <div class="h-full">
              <div class="block flex-col space-y-3">
                <span v-for="tag in tags" :key="tag" @click="toggleTag(tag)" :class="[ui.tags.list,
                {
                  [ui.tags.selected]: selectedTags.includes(tag)
                }
                ]">
                  <span>{{ tag }}</span>
                  <UIcon v-if="selectedTags.includes(tag)" name="i-line-md:close-circle" dynamic
                    class="hover:text-gray-500 duration-100 text-xl ml-auto" />
                </span>
              </div>
              <div class="flex justify-center mt-5 mb-5">
                <button v-if="selectedTags.length" @click="clearTags" :class="ui.tags.clear">
                  Clear All
                  <UIcon name="i-line-md:filter-remove-twotone" dynamic class="ml-1 animate-pulse"></UIcon>
                </button>
              </div>
            </div>
            <template #footer>
              <div class="flex h-8 justify-center text-golden italic">{{ 'Number of selected tags: ' + selectedTags.length }}</div>
            </template>
          </UCard>
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
import { listCards as config } from "@/ui.config";
import { useQueryCollection } from "~/composables/nuxt/query/useQueryCollection";

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    title?: string;
    subtitle?: string;
    text?: string;
    cols?: number;
    class?: any;
    description?: string;
    cardID?: number[];
    allTags?: string[];
  }>(),
  {
    ui: () => ({}),
    title: "",
    subtitle: "",
    text: "",
    cols: config.default.cols,
    class: undefined,
    description: "",
  }
);

const { ui, attrs } = useUI(
  "sh-list-cards",
  toRef(props, "ui"),
  config,
  toRef(props, "class")
);

const isOpen = ref(false)

const route = useRoute();

const slideoverTitle = computed(() => {
  const segments = route.path.toUpperCase().split('/').filter(Boolean);
  return segments.pop() || 'Unknown'; // Fallback in case the path is empty
});

const tags = ref<string[]>([]);
const selectedTags = ref<string[]>([]);

// Fetch cards and sort by cardID prop order
const { data: result } = await useAsyncData('fetch-articles-by-cardID', () =>
  queryCollection('articles')
    .where('cardID', 'IN' , props.cardID)
    .order('cardID', 'DESC')
    .all()
);

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
