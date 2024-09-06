<template>
  <main>
    <article class="prose w-full max-w-full pt-16">
      <template v-if="page.layout === 'doc'">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <aside class="lg:col-span-2">
            <nav v-if="displayNavigation">
              <ul class="space-y-1 lg:block">
                <li v-for="(link, index) in displayNavigation" class="space-y-1 lg:block" :key="index">
                  <ULink :to="link._path" class="no-underline hover:uppercase ">{{ link.title }}</ULink>
                  <ul v-if="link.children?.length > 0" class="space-y-1 hidden lg:block">
                    <li v-for="(subLink, subIndex) in link.children" class="space-y-1 lg:block" :key="subIndex">
                      <ULink v-if="link._path !== subLink._path" :to="subLink._path"
                        class="no-underline hover:uppercase">
                        {{ subLink.title }}
                      </ULink>
                      <ul v-if="subLink.children?.length > 0" class="space-y-1 hidden lg:block">
                        <li v-for="(subChildLink, subChildIndex) in subLink.children" class="space-y-1 lg:block"
                          :key="subChildIndex">
                          <ULink v-if="subLink._path !== subChildLink._path" :to="subChildLink._path"
                            class="no-underline hover:uppercase">
                            {{ subChildLink.title }}
                          </ULink>
                          <ul v-if="subChildLink.children?.length > 0" class="space-y-1 hidden lg:block">
                            <li v-for="(subSubChildLink, subSubChildIndex) in subChildLink.children"
                              class="space-y-1 lg:block" :key="subSubChildIndex">
                              <ULink v-if="subChildLink._path !== subSubChildLink._path" :to="subSubChildLink._path"
                                class="no-underline hover:uppercase">
                                {{ subSubChildLink.title }}
                              </ULink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
          <section :class="contentClass">
            <h1 class="capitalize hover:uppercase">
              {{ page.title }}
            </h1>
            <ContentRenderer v-if="page.body" :value="page" :style="{ fontSize: main.font.size }" class="mt-8 pb-24">
              <template #not-found>
                <UAlert title="File not found!" description="The requested resource cannot be found."
                  icon="i-heroicons-exclamation-triangle" />
              </template>
            </ContentRenderer>
          </section>
          <div v-if="page.body?.toc?.links?.length > 0" class="lg:col-span-2 order-first lg:order-last">
            <nav>
              <button class="flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group">
                <span class="font-semibold text-sm/6 truncate">Table of Contents</span>
              </button>
              <ul class="space-y-1 lg:block">
                <li v-for="(link, index) in page.body.toc.links" class="space-y-1 lg:block" :key="index">
                  <ULink :to="`${page._path}#${link.id}`">{{ link.text }}</ULink>
                  <ul v-if="link.children?.length > 0" class="space-y-1 hidden lg:block">
                    <li v-for="(subLink, subIndex) in link.children" class="space-y-1 lg:block" :key="subIndex">
                      <ULink :to="`${page._path}#${subLink.id}`" class="">{{ subLink.text }}</ULink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </template>
      <template v-else-if="page.layout === 'articles'">
        <div class="-mt-16 mx-64 ">
          <div class="container flex mx-auto">
            <img :src="page.urlImage" alt="Image" v-if="page.urlImage" class="mx-auto object-contain h-fit w-screen" />
          </div>
          <div class="text-center">
            <h2 class="text-oma-300 text-start text-4xl text-gray-700 dark:text-oma-blue-500">{{ page.title }}</h2>
            <h3 v-if="page.subtitle" class="text-start text-3xl text-gray-600 dark:text-oma-blue-300">{{ page.subtitle }}</h3>
            <div class="text-center dark:text-white text-2xl" v-if="page.tags && page.tags.length">
              Tags:
              <span v-for="tag in page.tags" :key="tag" class="border rounded-3xl p-2 mx-2 text-white bg-oma-blue-500 border-oma-blue-400 dark:bg-oma-purple-300 dark:border-oma-purple-400 text-xl">
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-center">
              <p v-if="page.rightLabel" class="mr-2 text-2xl ">{{ 'By:' }}</p>
              <p v-if="page.rightLabel" class="text-end text-gray-500 dark:text-gray-400 text-2xl">{{ page.rightLabel }}</p>
              <p v-if="page.leftLabel" class="mx-2 text-2xl">{{ '|' }}</p>
              <p v-if="page.leftLabel" class="text-start text-gray-500 text-2xl dark:text-gray-400">{{ page.leftLabel }}</p>
            </div>
            <ContentRenderer v-if="page.body" :value="page" :style="{ fontSize: main.font.size }" class="text-left dark:text-white" />
            <br />
          </div>
        </div>
      </template>
      <template v-else>
        <ContentRenderer :value="page" :style="{ fontSize: main.font.size }" class="mt-8 pb-24">
          <template #not-found>
            <UAlert title="File not found!" description="The requested resource cannot be found."
              icon="i-heroicons-exclamation-triangle" />
          </template>
        </ContentRenderer>
      </template>
    </article>

  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne());
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const main = useAppConfig().main

const routeDepth = route.path.split('/').length
const minDepth = routeDepth - 4 > 0 ? routeDepth - 4 : 0

const contentClass = computed(() => {
  if (page.value.layout === 'doc') {
    return page.value.body?.toc?.links?.length > 0 ? "lg:col-span-6" : "lg:col-span-8"
  } else {
    return "lg:col-span-10"
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

const filterNavigation = (list: array, path: sting) => {
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
