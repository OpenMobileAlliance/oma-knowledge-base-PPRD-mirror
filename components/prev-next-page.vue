<template>
  <div class="grid grid-cols-2 mt-10 mx-auto max-w-max min-w-full not-prose">
    <NuxtLink v-if="prev" :to="prev._path" :class="['justify-items-start lg:mr-20 sm:mr-5', ui.button]">
        <UIcon name="i-vaadin:chevron-circle-left-o" dynamic :class="ui.icon" />
        <div :class="ui.title">{{ prev.title }}</div>
        <div v-if="prev.description" :class="ui.description">{{ prev.description }}</div>
    </NuxtLink>
    <NuxtLink v-if="next" :to="next._path" :class="['justify-items-end lg:ml-20 sm:ml-5', ui.button]">
        <UIcon name="i-vaadin:chevron-circle-right-o" dynamic :class="ui.icon" />
        <div :class="ui.title">{{ next.title }}</div>
        <div v-if="next.description" :class="ui.description">{{ next.description }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { prev, next } = useContent()

const config = {
  button: 'grid grid-rows-3 border p-4 rounded-xl hover:border hover:border-primary/[0.6] dark:hover:border-primary/[0.8] hover:bg-primary/[0.3] dark:hover:bg-primary/[0.2] transition-colors',
  icon: 'text-3xl hover:scale-105 hover:text-primary',
  title: 'text-3xl font-semibold mt-2 hover:text-primary',
  description: 'text-lg font-normal mt-2',
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
  },
);

const { ui } = useUI(
  "prev-next-page",
  toRef(props, "ui"),
  config
);
</script>