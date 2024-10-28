<template>
  <hr class="border-2 dark:border-golden rounded-r-xl rounded-l-xl" />
  <div class="grid grid-cols-2 mt-10 mx-auto max-w-max min-w-full not-prose">
    <NuxtLink v-if="prev" :to="prev._path" :class="['justify-start items-start lg:mr-20 sm:mr-5', ui.button]">
      <UIcon name="i-vaadin:chevron-circle-left-o" dynamic :class="ui.icon" />
      <div :class="ui.title">{{ prev.title }}</div>
      <div v-if="showDescription && prev.description" :class="[ 'text-left' ,ui.description]">{{ prev.description }}</div>
    </NuxtLink>
    <NuxtLink v-if="next" :to="next._path" :class="['justify-start items-end lg:ml-20 sm:ml-5', ui.button]">
      <UIcon name="i-vaadin:chevron-circle-right-o" dynamic :class="ui.icon" />
      <div :class="ui.title">{{ next.title }}</div>
      <div v-if="showDescription && next.description" :class="[ 'text-right' ,ui.description]">{{ next.description }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const [prev, next] = await queryContent()
  .where({ _path: { $not: /\/_dir$/ }, _partial: false })
  .findSurround(route.path);

const config = {
  button: 'flex flex-col border-[3px] dark:border-golden p-4 rounded-xl hover:border-[3px] hover:border-primary/[0.6] dark:hover:saturate-[350%] hover:bg-primary/[0.3] dark:hover:bg-neutral-50/[0.01] transition-colors',
  icon: 'text-3xl hover:scale-105 text-black dark:text-golden mb-8',
  title: 'text-3xl font-semibold text-black dark:text-golden words-break mb-3',
  description: 'text-lg font-normal mt-2 text-gray-700 dark:text-golden/[0.4] words-break',
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    showDescription?: boolean;
  }>(),
  {
    ui: () => ({}),
    showDescription: true,
  }
);

const { ui } = useUI(
  "prev-next-page",
  toRef(props, "ui"),
  config
);
</script>
