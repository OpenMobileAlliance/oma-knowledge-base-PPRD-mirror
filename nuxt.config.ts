// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-testimonial", '@nuxtjs/color-mode', '@zadigetvoltaire/nuxt-gtm', "@nuxtjs/sitemap"],

  routeRules: {
    '/': { redirect: '/home' },
    '/groups/resources': { redirect: '/specifications/resources' },
    '/join/join-newsletter': { redirect: '/about/newsletter' },
    '/join/subscribe-news' : { redirect: '/about/subscription' },
    '/media/subscription' : { redirect: '/about/subscription' },
    '/about/join-news' : { redirect: '/about/subscription' },
  },

  site: {
    url: 'https://www.openmobilealliance.org/', 
    name: 'Website of OMA SpecWork as an innovative kind of Standards Development Organization' 
  },

  colorMode: {
    preference: 'dark'
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

  icon: {
    provider: 'iconify',
    serverBundle: false,
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
      routes: ['/guidelines', '/groups', '/media', '/oma-events', '/about/faq/', '/oma-events/past-events', '/about/subscription', '/media/articles/', '/media/articles/2022-04-12-nusim_objects', '/media/articles/2024-09-27-sve_42-blog-mqtt-vs-lwm2m'],
      ignore: ['/www.ericsson.com'], 
      failOnError: false,
    },
  }
});
