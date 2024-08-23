<template>
  <div :class="ui.wrapper">
    <!-- Tag Selection Area -->
    <div class="ui.tags">
      <span
        v-for="tag in tags"
        :key="tag"
        @click="toggleTag(tag)"
        :class="['tag', { selected: selectedTags.includes(tag) }]"
      >
        {{ tag }}
      </span>
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
    <div :class="[ui.base, gridClass]">
      <ShCard v-for="(card, index) in filteredCards" :key="index" v-bind="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { listCards as config } from "@/ui.config";
import { gridSizes } from "@/ui.config";

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    title?: string;
    subtitle?: string;
    text?: string;
    cols?: number;
    gap?: string;
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
    gap: config.default.gap,
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
  const cols = props.cols !== undefined ? props.cols : config.default.cols;

  if (windowWidth.value >= 1300) {
    return ["grid", gridSizes.gridCols[cols], props.gap].join(' ');
  } else if (windowWidth.value < 640) {
    return ["grid", "grid-cols-1", props.gap].join(' ');
  } else if (windowWidth.value > 640 && windowWidth.value < 980) {
    return ["grid", "grid-cols-2", props.gap].join(' ');
  } else {
    return ["grid", "grid-cols-3", props.gap].join(' ');
  }
});

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
          };
        }
      }).filter(card => card !== undefined); // Filter out undefined values

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
</script>

<style scoped>
.tag {
  cursor: pointer;
  padding: 4px 8px;
  margin: 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.tag.selected {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
