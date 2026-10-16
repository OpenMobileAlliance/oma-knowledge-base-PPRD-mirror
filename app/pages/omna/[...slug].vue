<template>
  <main class="">
    <article class="w-fit max-w-fit mt-16">
      <div v-html="htmlContent"></div>
    </article>
  </main>
</template>


<script setup lang="ts">
const route = useRoute()

const htmlContent = toRef("")
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : (route.params.slug || 'index')

const fetchHtmlFile = async () => {
  try {

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
