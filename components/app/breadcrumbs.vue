<template>
  <header class="h-8 p-4 w-full bg-zinc-200 dark:bg-slate-800 text-xs italic flex items-center">
    <div class="mx-auto">
      <nuxt-link to="/" class="text-[#dda20d] dark:text-[#87cefa] hover:text-[#044ea1]">HOME</nuxt-link>
      <span v-for="(crumb, index) in breadcrumbs" :key="index" class="text-[#dda20d] dark:text-[#87cefa]">
        &nbsp; <b> > </b> &nbsp;
        <nuxt-link
          v-if="crumb.to"
          :to="crumb.to"
          :class="{ 'active': isBreadcrumbActive(crumb, index) }"
        >
          {{ crumb.label.toUpperCase() }}
        </nuxt-link>
        <span v-else>{{ crumb.label.toUpperCase() }}</span>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const pathSegments = this.$route.path.split('/').filter(segment => segment !== '');
      return pathSegments.map((segment, index) => {
        const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = this.capitalize(segment);
        return { to, label };
      });
    },
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    isBreadcrumbActive(crumb, index) {
      const currentPath = `/${this.$route.path.split('/').filter(segment => segment !== '').slice(0, index + 1).join('/')}`;
      return crumb.to === currentPath;
    },
  },
};
</script>

<style scoped>
.active {
  color: #dda20d; /* change the color of active breadcrumb */
}
.dark .active {
  color: #87cefa; /* change the color of active breadcrumb in dark mode */
}
a:hover {
  color: #044ea1;
}
.dark a:hover {
  color: #dda20d;
}
</style>
