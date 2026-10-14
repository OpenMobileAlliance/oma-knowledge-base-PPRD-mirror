// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', '@nuxtjs/sitemap'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  routeRules: {
    '/': { redirect: '/home' },
    '/groups/resources': { redirect: '/specifications/resources' },
    '/join/join-newsletter': { redirect: '/about/newsletter' },
    '/join/subscribe-news': { redirect: '/about/subscription' },
    // '/media/subscription': { redirect: '/about/subscription' },
    '/about/join-news': { redirect: '/about/subscription' },
  },

  site: {
    url: 'https://www.openmobilealliance.org/',
    name: 'Website of OMA as an innovative kind of Standards Development Organization',
  },

  colorMode: {
    preference: 'dark',
  },

  content: {
    renderer: {
      // Make every heading (h1-h6) a clickable #anchor link
      anchorLinks: { h1: true, h2: true, h3: true, h4: true, h5: true, h6: true },
    },
    build: {
      markdown: {
        // Table of contents lists h2 only (1 = h2, 2 = h2-h3, up to 5 = h2-h6)
        toc: {
          depth: 1,
          searchDepth: 6,
        },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
  },

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  fonts: {
    families: [
      { name: 'DM Sans', weights: [400, 500, 600, 700] },
    ],
  },

  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en',
      },
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'shortcut icon', href: '/favicon-1.png', type: 'image/x-icon' },
      ],
      script: [
        // Google Tag Manager (container GTM-T55F5MHQ)
        {
          key: 'gtm',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T55F5MHQ');`,
        },
        {
          id: 'hs-script-loader',
          type: 'text/javascript',
          src: 'https://js.hs-scripts.com/21247113.js',
          async: true,
          defer: true,
          tagPosition: 'bodyClose',
        },
      ],
      noscript: [
        {
          key: 'gtm-noscript',
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T55F5MHQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: 'bodyOpen',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/guidelines',
        '/groups',
        '/media',
        '/oma-events',
        '/oma-events/sve44-overall-agenda', // remove once the agenda is over
        '/oma-events/sve44-plenary-agenda', // remove once the agenda is over
        '/about/faq/',
        '/oma-events/past-events',
        '/about/subscription',
        '/media/articles/',
      ],
      ignore: ['/www.ericsson.com'],
      failOnError: false,
    },
  },
})
