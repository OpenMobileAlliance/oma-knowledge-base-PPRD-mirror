<template>
  <div :class="ui.wrapper">
    <div :class="ui.inner">

      <h3 :class="ui.tags.title">Tags</h3>

      <div class="flex justify-center">
        <span v-for="tag in tags" :key="tag" @click="toggleTag(tag)"
          :class="[ui.tags.list, { 'bg-primary-300 border-primary-400 text-neutral-600 dark:bg-primary-700 dark:border-primary-600 dark:hover:shadow-primary/[0.1]': selectedTags.includes(tag) }]">
          {{ tag }}
          <UIcon v-if="selectedTags.includes(tag)" name="i-line-md:close-circle" dynamic
            class="hover:text-gray-500 duration-100" />
        </span>
      </div>

      <div class="flex justify-center mt-5">
        <button v-if="selectedTags.length" @click="clearTags" :class="ui.tags.clear">
          Clear All
          <UIcon name="i-line-md:filter-remove-twotone" dynamic class="animate-pulse"></UIcon>
        </button>
      </div>

    </div>

    <!-- Header Section -->
    <div :class="ui.header">
      <div :class="ui.title">
        <MDC :value="title" />
      </div>
      <div :class="ui.subtitle">
        <MDC :value="subtitle" />
      </div>
      <div :class="ui.text">
        <MDC :value="text" />
        
      </div>
    </div>

    <!-- Cards Section -->
    <div :class="[ui.base, ui.gap, gridClass]">
      <ShCard v-for="(card, index) in filteredCards" :key="index" v-bind="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { listCards as config, gridSizes } from "@/ui.config";

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

const gridClass = computed(() => {
  const cols = props.cols ?? config.default.cols;

  if (windowWidth.value >= 1300) {
    return ["grid", gridSizes.gridCols[cols]].join(' ');
  } else if (windowWidth.value < 640) {
    return ["grid", "grid-cols-1"].join(' ');
  } else if (windowWidth.value > 640 && windowWidth.value < 980) {
    return ["grid", "grid-cols-2"].join(' ');
  } else {
    return ["grid", "grid-cols-3"].join(' ');
  }
});

const { page } = useContent()

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const cards = ref<any[]>([]); // Ref to store fetched card data
const tags = ref<string[]>([]); // Ref to store all tags
const selectedTags = ref<string[]>([]); // Ref to store selected tags

onMounted(async () => {
  if (props.cardID && props.cardID.length > 0) {
    const result = await queryContent('news/articles')
      .where({ cardID: { $in: props.cardID } })
      .find();

    if (result && result.length > 0) {
      // Create a map of cardID to corresponding content
      const cardMap = new Map(result.map(item => [item.cardID, item]));

      // Temporary Set to store unique tags
      const uniqueTags = new Set<string>();

      // Sort the cards according to the order of cardID in props.cardID
      cards.value = props.cardID.map(id => {
        const item = cardMap.get(id);

        if (item) {
          // Ensure item.tags is an array before filtering
          const validTags = Array.isArray(item.tags) ? item.tags.filter(tag => tag !== null) : [];

          // Add tags to the Set to ensure uniqueness
          validTags.forEach(tag => uniqueTags.add(tag));

          const { ...frontmatter } = item;
          return {
            ...frontmatter,
            excerpt: item,
            urlUpperBase: item._path,
            tags: validTags,
            article: item._path,
          };
        }
      })
      // Convert Set to an array and assign to tags ref
      tags.value = Array.from(uniqueTags);
    }
  }
});

// Computed property to filter cards based on selected tags
const filteredCards = computed(() => {
  if (selectedTags.value.length === 0) {
    return cards.value;
  }
  return cards.value.filter(card =>
    card.tags.some((tag: string) => selectedTags.value.includes(tag))
  );
});

// Method to toggle tag selection
const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag);
  } else {
    selectedTags.value.push(tag);
  }
};

// Method to clear all selected tags
const clearTags = () => {
  selectedTags.value = [];
};
</script>