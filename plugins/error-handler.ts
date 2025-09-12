export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:error', (err) => {
    console.log(`APP ERROR: ${err}`)
    clearError({ redirect: '/home' })
    return false
  })
})

