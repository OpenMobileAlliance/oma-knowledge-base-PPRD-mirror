// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "DM Sans": [400, 500, 600, 700],
      "DM Mono": [400, 500],
    },
  },
  devtools: { enabled: true },
});
