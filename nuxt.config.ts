// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-testimonial"],
  colorMode: {
    preference: 'light'
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark'
    },
    markdown: {
      anchorLinks: false 
    },
  },

  ui: {
    icons: ["heroicons-solid", "fa6-brands", "devicon", "icons8"],
  },

  googleFonts: {
    families: {
      "Roboto": [300, 400, 600, 700],
      "DM Sans": [400, 500, 600, 700],
      "DM Mono": [400, 500],
    },
  },

  app: {
    head: {
      link: [
        { rel: "shortcut icon", href: "/favicon-1.png", type: "image/x-icon" },
      ],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-08-13",
});
