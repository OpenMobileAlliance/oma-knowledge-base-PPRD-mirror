<template>
  <main class="">
    <article class="prose w-full max-w-full mt-16">

      <template v-if="page?.layout === 'doc'">
        <div class="grid grid-cols-12 relative">
          <!-- Sidebar Menu -->
          <div class="col-start-1 col-span-2 hidden lg:block overflow-auto h-screen sticky top-48">
            <AppSideMenu :items="displayNavigation" class="overflow-auto" />
          </div>

          <!-- Main Content -->
          <section :class="contentClass"
            class="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8 lg:ml-9 lg:mr-24 w-full lg:w-full overflow-auto">
            <h1 class="">
              {{ page.title }}
            </h1>
            <ContentRenderer v-if="page.body" :value="page" :style="{ fontSize: main.font.size }"
              class="par mt-8 pb-10"> <!--par is custom class for paragraph-->
              <template #not-found>
                <UAlert title="File not found!" description="The requested resource cannot be found."
                  icon="i-heroicons-exclamation-triangle" />
              </template>
            </ContentRenderer>
            <PrevNextPage v-if="route.path !== '/'" />
          </section>

          <!-- Table of Contents and Useful Links -->
          <div class="col-start-12 col-span-1 hidden lg:block sticky top-48 h-screen overflow-auto sm:-ml-16">
            <AppToc class="mb-4" />
            <AppUsefulLinks class="" />
          </div>
        </div>
      </template>

      <template v-else-if="page?.layout === 'articles'">
        <div class="w-full -mt-16 xl:px-44 2xl:px-64">
          <div class="container flex mx-auto">
            <img :src="page.urlImage" alt="Image" v-if="page.urlImage" class="mx-auto object-contain h-fit w-screen" />
          </div>
          <div class="text-center">
            <h2 class="text-oma-300 text-start text-4xl text-primary">{{ page.title }}</h2>
            <h3 v-if="page.subtitle" class="mb-20 text-start text-3xl text-primary-400">{{
              page.subtitle }}</h3>
            <div class="text-center text-2xl dark:text-neutral-400" v-if="page.tags && page.tags.length">
              Tags:
              <span v-for="tag in page.tags" :key="tag"
                class="border rounded-3xl p-2 mx-2 text-white bg-primary border-primary-600 dark:bg-primary dark:border-primary-400 text-xl">
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-center">
              <p v-if="page.rightLabel" class="mr-2 text-2xl dark:text-neutral-400">{{ 'By:' }}</p>
              <p v-if="page.rightLabel" class="text-end text-gray-500 dark:text-gray-400 text-2xl">{{ page.rightLabel }}
              </p>
              <p v-if="page.leftLabel" class="mx-2 text-2xl">{{ '|' }}</p>
              <p v-if="page.leftLabel" class="text-start text-gray-500 text-2xl dark:text-gray-400">{{ page.leftLabel }}
              </p>
            </div>
            <ContentRenderer v-if="page.body" :value="page" :style="{ fontSize: main.font.size }"
              class="par text-left dark:text-white" />
            <br />
            <PrevNextPage v-if="route.path !== '/'" />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="grid grid-cols-12 ">
          <ContentRenderer v-if="page" :value="page" :style="{ fontSize: main.font.size }"
            class="col-start-1 col-span-12 w-full lg:w-fit par mt-8 pb-24">
          </ContentRenderer>
          <div v-else>
            <UAlert title="File not found!" description="The requested resource cannot be found."
              icon="i-heroicons-exclamation-triangle" />
          </div>
        </div>
        <PrevNextPage v-if="route.path !== '/'" />
      </template>
    </article>
  </main>
</template>

<script setup lang="ts">

const config = {
  shadow: 'hover:bg-primary-500 focus:bg-primary-200/[0.6] hover:focus:bg-primary-100 dark:hover:bg-neutral-500 dark:focus:bg-primary-600[0.6] dark:hover:focus:bg-neutral-500 rounded-lg',
};


const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
  },
);

const { ui, attrs } = useUI(
  "[...slug]",
  toRef(props, "ui"),
  config,
);

const route = useRoute()
const { data: page } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne());
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const main = useAppConfig().main

const routeDepth = route.path.split('/').length
const minDepth = routeDepth - 4 > 0 ? routeDepth - 4 : 0

const contentClass = computed(() => {
  if (page?.value.layout === 'doc') {
    return page.value.body?.toc?.links?.length > 0 ? "mr-64" : ""
  } else {
    return ""
  }
})

const comparePathsForBranch = (path1: string, path2: string) => {
  const path1Parts = path1.split('/');
  const path2Parts = path2.split('/');

  if (path1Parts.length < path2Parts.length) {
    return false;
  }

  for (let i = 0; i < path2Parts.length; i++) {
    if (path1Parts[i] !== path2Parts[i]) {
      return false;
    }
  }

  return true;
}

const filterNavigation = (list: Array, path: string) => {
  if (list?.length > 0) {
    const branchList = list.reduce((prev, curr) => {
      if (comparePathsForBranch(path, curr._path)) {
        prev.push(curr)
      }
      return prev
    }, [])

    return branchList

  } else {
    return list
  }
}

const displayNavigation = computed(() => {
  let res = filterNavigation(navigation.value, page.value._path)
  if (minDepth > 0) {
    let depth = minDepth

    while (depth > 0) {
      let childResult = []
      depth -= 1
      if (res[0].children?.length > 0) {
        childResult = filterNavigation(res[0].children, page.value._path)
        childResult = childResult.filter((item) => {
          const itemDepth = item._path.split('/')
          return itemDepth.length >= routeDepth - 1
        })
        res = childResult.length > 0 ? childResult : res
      }
    }
  }
  return res
})
</script>
