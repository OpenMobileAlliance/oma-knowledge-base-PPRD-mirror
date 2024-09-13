<template>
<header class="-mb-1 w-full text-xs italic flex items-center">
    <div class="mx-auto mt-4">
      <NuxtLink to="/" :class="ui.linkCrumb">HOME</NuxtLink>
      <span v-for="(crumb, index) in breadcrumbs" :key="index" class="text-primary/[0.6] dark:text-primary/[0.8]">
        &nbsp; <b> > </b> &nbsp;
        <NuxtLink v-if="crumb.to != route.path" :to="crumb.to"
          :class="{ [ui.linkCrumb]: isBreadcrumbActive(crumb, index) }">
          {{ crumb.label.toUpperCase() }}
      </NuxtLink>
        <span v-else :class="[ui.activeCrumb, { '': isBreadcrumbActive(crumb, index) }]">{{
          crumb.label.toUpperCase() }}</span>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">

const config = {
  linkCrumb: 'text-primary/[0.7] hover:text-primary contrast-125 dark:text-primary/[0.8] dark:hover:text-primary',
  activeCrumb: 'text-primary dark:text-primary contrast-125'
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
  "breadcrumbs",
  toRef(props, "ui"),
  config
);

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment !== '');
  return pathSegments.map((segment, index) => {
    const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = capitalize(segment);
    return { to, label };
  });
});

const isBreadcrumbActive = (crumb: { to: string }, index: number) => {
  const currentPath = `/${route.path.split('/').filter(segment => segment !== '').slice(0, index + 1).join('/')}`;
  return crumb.to === currentPath;
};
</script>