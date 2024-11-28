// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "nuxt-testimonial",
    '@nuxtjs/color-mode',
    '@zadigetvoltaire/nuxt-gtm',
    "@nuxtjs/sitemap"
  ],

  site: {
    url: 'https://www.openmobilealliance.org/', 
    name: 'Website of OMA SpecWork as an innovative kind of Standards Development Organization' 
  },

  colorMode: {
    preference: 'system'
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    markdown: {
      anchorLinks: false 
    },
    api: {
      baseURL: '/site-api/_content'
    }
  },

  // ui: {
  //   icons: ["heroicons-solid", "fa6-brands", "devicon", "icons8"],
  // },

  icon: {
    serverBundle: 'remote',
  },

  gtm: {
    id: 'GTM-T55F5MHQ', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
    },
  
  googleFonts: {
    families: {
      "Roboto": [300, 400, 600, 700],
      "DM Sans": [400, 500, 600, 700],
      "DM Mono": [400, 500],
    },
  },

  app: {
    // baseURL: process.NODE_ENV === 'production' ? "/oma-knowledge-base/" : '/',
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: 'en'
      },
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "shortcut icon", href: "/favicon-1.png", type: "image/x-icon" },
      ],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-08-13",
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/news', '/news/articles'],
      ignore: ['/www.ericsson.com'], 
      failOnError: false,
    },
  }
});
