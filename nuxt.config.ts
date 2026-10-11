// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/sitemap", "@nuxt/content", "@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-testimonial", '@nuxtjs/color-mode', '@zadigetvoltaire/nuxt-gtm'],

  routeRules: {
    '/': { redirect: '/home' },
    '/groups/resources': { redirect: '/specifications/resources' },
    '/join/join-newsletter': { redirect: '/about/newsletter' },
    '/join/subscribe-news' : { redirect: '/about/subscription' },
    '/about/join-news' : { redirect: '/about/subscription' },
  },

  site: {
    url: 'https://www.openmobilealliance.org/', 
    name: 'Website of OMA as an innovative kind of Standards Development Organization' 
  },

  colorMode: {
    preference: 'dark'
  },
  content: {
    renderer: {
      // Make every heading (h1-h6) a clickable #anchor link
      anchorLinks: { h1: true, h2: true, h3: true, h4: true, h5: true, h6: true }
    },
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    build: {
      markdown: {
        // Table of contents lists h2 only (1 = h2, 2 = h2-h3, up to 5 = h2-h6)
        toc: {
          depth: 1,
          searchDepth: 6,
        },
      },
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
    id: 'GTM-T55F5MHQ',
    enabled: false, // Disabled by default — enabled only after user consents (GDPR/ePrivacy)
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
      script: [
        {
          id: "hs-script-loader",
          type: "text/javascript",
          src: "https://js.hs-scripts.com/21247113.js",
          async: true,
          defer: true,
          tagPosition: "bodyClose",
        },
      ],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-08-13",
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/guidelines', 
        '/groups', 
        '/media', 
        '/oma-events', 
        '/oma-events/sve44-overall-agenda', //remove once the agenda is over
        '/oma-events/sve44-plenary-agenda', //remove once the agenda is over
        '/about/faq/', 
        '/oma-events/past-events', 
        '/about/subscription', 
        '/media/articles/',
      ],
      ignore: ['/www.ericsson.com'], 
      failOnError: false,
    },
  }
});