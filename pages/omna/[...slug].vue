<template>
  <main class="">
    <article class="prose w-fit max-w-fit mt-16">
      <div v-html="htmlContent"></div>
    </article>
  </main>
</template>


<script setup lang="ts">
const route = useRoute()

const htmlContent = toRef("")
const slug = route.params.slug ? route.params.slug.join('/') : 'index'

const fetchHtmlFile = async () => {
  try {

    console.log(slug)
    // Fetch the HTML file dynamically
    htmlContent.value = await $fetch(route.path)
  } catch (error) {
    console.error(`File not found: ${slug}.html`, error)
    htmlContent.value = `<h1>404 - Page ${slug}.html not found</h1>`
  }
}

onMounted(() => {
  fetchHtmlFile()
})
</script>
