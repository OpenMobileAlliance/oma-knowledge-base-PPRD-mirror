<template>
  <main>
    <article class="prose w-full max-w-full pt-16">
      <template v-if="page.layout === 'doc'">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <aside class="lg:col-span-2">
            <nav v-if="displayNavigation">
              <ul class="space-y-1 lg:block">
                <li v-for="(link, index) in displayNavigation" class="space-y-1 lg:block" :key="index">
                  <ULink :to="link._path">{{ link.title }}</ULink>
                  <ul v-if="link.children?.length > 0" class="space-y-1 hidden lg:block">
                    <li v-for="(subLink, subIndex) in link.children" class="space-y-1 lg:block" :key="subIndex">
                      <ULink v-if="link._path !== subLink._path" :to="subLink._path" class="">{{ subLink.title }}
                      </ULink>
                      <ul v-if="subLink.children?.length > 0" class="space-y-1 hidden lg:block">
                        <li v-for="(subChildLink, subChildIndex) in subLink.children" class="space-y-1 lg:block"
                          :key="subChildIndex">
                          <ULink v-if="subLink._path !== subChildLink._path" :to="subChildLink._path" class="">{{
                            subChildLink.title }}
                          </ULink>
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
const { navDirFromPath } = useContentHelpers()
const route = useRoute()
const { data: page } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne());
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const main = useAppConfig().main

const contentClass = computed(() => {
  if (page.value.layout === 'doc') {
    return page.value.body?.toc?.links?.length > 0 ? "lg:col-span-6" : "lg:col-span-8"
  } else {
    return "lg:col-span-10"
  }
})

const comparePathsForBranch = (path1, path2) => {
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

const filterNavigation = (list, path) => {
  if (list?.length > 0) {

    const branchList = list.reduce((prev, curr) => {
      if (comparePathsForBranch(path, curr._path)) {
        prev.push(curr)
      }
      return prev
    }, [])

    return branchList

  } else {
    return []
  }
}

const displayNavigation = computed(() => {
  const res = filterNavigation(navigation.value, page.value._path)
  return res
})
</script>
