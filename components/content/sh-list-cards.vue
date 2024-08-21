<template>
  <div :class="ui.wrapper">
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
    <div :class="[ui.base, gridClass]">
        <ShCard v-for="(card, index) in cards" :key="index" v-bind="card" />
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
    return ["grid", gridSizes.gridCols[cols], props.gap].join(' ')
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

onMounted(async () => {
  if (props.cardID && props.cardID.length > 0) {
    const result = await queryContent('news/articles')
      .where({ cardID: { $in: props.cardID } })
      .find();

    if (result && result.length > 0) {
      // Create a map of cardID to corresponding content
      const cardMap = new Map(result.map(item => [item.cardID, item]));
      
      // Sort the cards according to the order of cardID in props.cardID
      cards.value = props.cardID.map(id => {
        const item = cardMap.get(id);
        if (item) {
          const { ...frontmatter } = item;
          return {
            ...frontmatter,
            excerpt: item,
            urlUpperBase: item._path,
          };
        }
      })
    }
  }
});
</script>