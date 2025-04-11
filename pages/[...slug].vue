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
          <div class="col-start-12 col-span-1 hidden lg:block sticky top-48 h-screen overflow-auto lg:-ml-10 xl:-ml-14">
            <AppToc :page="page" class="mb-4" />
            <AppUsefulLinks class="" />
          </div>
        </div>
      </template>

      <template v-else-if="page?.layout === 'articles'">
        <div class="w-full -mt-16 xl:px-44 2xl:px-64">
          <div class="container flex mx-auto justify-center mt-6">
            <img v-if="page.urlImage" :src="page.urlImage" alt="Image" class="sm:w-3/5 h-auto object-contain rounded-xl" />
          </div>
          <div class="text-center">
            <h2 :class="['text-center text-4xl text-primary', page.subtitle ? '' : 'mb-16']">{{ page.title }}</h2>
            <h3 v-if="page.subtitle" class="mb-20 text-center text-3xl text-primary-400">
              {{ page.subtitle }}
            </h3>
            <div class="text-center text-2xl par" v-if="page.tags && page.tags.length">
              Tags:
              <span v-for="tag in page.tags" :key="tag"
                class="border rounded-3xl p-2 mx-2 text-white bg-primary border-primary-600 dark:bg-zinc-600 dark:border-primary-400 text-xl">
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-center">
              <p v-if="page.rightLabel" class="mr-2 text-2xl par">By:</p>
              <p v-if="page.rightLabel" class="text-end text-2xl dark:text-zinc-400">
                {{ page.rightLabel }}
              </p>
              <p v-if="page.leftLabel" class="mx-2 text-2xl par">|</p>
              <p v-if="page.leftLabel" class="text-start text-2xl dark:text-zinc-400">
                {{ page.leftLabel }}
              </p>
            </div>
            <hr class="border-b-[1px] border-neutral-500 dark:border-golden rounded-xl w-3/5 mt-2 mb-20 mx-auto">
            <div
              class="content-container par text-left first-letter:text-7xl first-letter:mr-2 first-letter:float-left">
              <ContentDoc :path="page._path" :style="{ fontSize: main.font.size }" />
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="page?.layout === 'web'">
        <div class="grid grid-cols-12 relative">

          <!-- Main Content -->
          <section :class="contentClass"
            class="col-start-1 col-span-12 lg:col-start-1 lg:col-span-12 w-full lg:w-full overflow-auto">
            <!-- <h1 class="pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-12 md:pr-12 lg:pl-24 lg:pr-24 xl:pl-36 xl:pr-36">
              {{ page.title }}
            </h1> -->
            <ContentRenderer v-if="page.body" :value="page" :style="{ fontSize: main.font.size }"
              class="par pb-10 pl-4 pr-4 sm:pl-8 sm:pr-8 2xl:pl-36 2xl:pr-36">
              <!--par is custom class for paragraph-->
              <template #not-found>
                <UAlert title="File not found!" description="The requested resource cannot be found."
                  icon="i-heroicons-exclamation-triangle" />
              </template>
            </ContentRenderer>
            <!-- <PrevNextPage v-if="route.path !== '/'" /> -->
          </section>

        </div>
      </template>

      <template v-else>
        <div class="grid grid-cols-12 ">
          <ContentRenderer v-if="page" :value="page" :style="{ fontSize: main.font.size }"
            class="col-start-1 col-span-12 w-full lg:w-fit par mt-8 pb-24">
          </ContentRenderer>
          <div v-else class="col-start-1 col-span-12 lg:col-start-4 lg:col-span-6 w-full p-8 -mt-8">
            <div class="p-5 border-2 dark:border-golden dark:bg-golden/15 rounded-xl">
              <div class="flex">
                <UIcon name="arcticons:trexrunner" class="dark:text-[#DE8800] text-6xl" />
                <h1 class="mt-6 ml-3">Uh-oh, this is embarrassing!</h1>
              </div>
              <p class="dark:text-golden text-xl flex items-center">
                <UIcon name="tabler:error-404" class="mr-2 text-3xl dark:text-[#DE8800]" />
                We couldn't find the file at &nbsp;<code>{{ route.path }}</code>
              </p>
              <p class="dark:text-golden text-xl flex items-center">
                <UIcon name="mdi:refresh" class="mr-2 text-2xl dark:text-[#DE8800]" />
                Try refreshing the page and checking your internet connection.
              </p>
              <p class="dark:text-golden text-xl flex items-center break-words">
                <UIcon name="mdi:headset" class="mr-2 text-2xl dark:text-[#DE8800]" />
                If the problem persists, contact our
                <NuxtLink to="/about/contact#send-us-your-comments" class="ml-1 mr-1">helpdesk
                </NuxtLink>
                for further assistance.
              </p>
            </div>
          </div>

        </div>
        <!-- <PrevNextPage v-if="route.path !== '/'" /> -->
      </template>
    </article>
  </main>
</template>

<script setup lang="ts">
import type { _fontSize } from '#tailwind-config/theme';


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
