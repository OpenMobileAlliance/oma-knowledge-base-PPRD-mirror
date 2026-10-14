import { headingColor, headingLink, headingLeading } from './utils/prose'

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'neutral',
      neutral: 'neutral',
    },
    icons: {
      // Anchor icon shown next to headings on hover
      hash: 'i-ant-design-link-outlined',
    },
    // Typography of everything rendered from markdown. These are the Nuxt UI
    // Prose component themes, merged on top of the defaults.
    prose: {
      h1: {
        slots: {
          base: [headingColor, 'group text-[1.75em] leading-[1.2] md:text-[2.25em] md:leading-[1.1111] font-normal mt-0 mb-[0.6em] md:mb-[0.8889em] scroll-mt-0 lg:scroll-mt-0'],
          link: headingLink,
        },
      },
      h2: {
        slots: {
          base: [headingColor, 'group text-[1.4em] leading-[1.3] md:text-[1.5em] md:leading-[1.3333] font-normal mt-[1.75em] mb-[0.75em] md:mt-[2em] md:mb-[1em] scroll-mt-0 lg:scroll-mt-0'],
          link: headingLink,
          leading: headingLeading,
        },
      },
      h3: {
        slots: {
          base: [headingColor, 'group text-[1.2em] leading-[1.45] md:text-[1.25em] md:leading-[1.6] font-normal mt-[1.6em] mb-[0.6em] scroll-mt-0 lg:scroll-mt-0'],
          link: headingLink,
          leading: headingLeading,
        },
      },
      h4: {
        slots: {
          base: [headingColor, 'group text-[1em] leading-[1.5] font-normal mt-[1.5em] mb-[0.5em] scroll-mt-0 lg:scroll-mt-0 dark:brightness-75'],
          link: headingLink,
        },
      },
      a: {
        base: 'text-oma-blue-300 hover:text-blue-700 dark:text-oma-blue-200 dark:hover:text-oma-blue-400 font-medium no-underline border-b-0 hover:border-transparent',
      },
      code: {
        base: 'rounded-[4px] border-0 px-1.5 py-0.5 text-[0.875em] font-semibold',
        variants: {
          color: {
            neutral: 'bg-golden/45 text-neutral-900 dark:bg-neutral-800 dark:text-golden',
          },
        },
      },
      pre: {
        slots: {
          root: 'my-[1.7142857em]',
          base: 'border-golden bg-golden/20 text-neutral-800 rounded-md px-3 py-3 md:px-5 md:py-4 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
        },
      },
      blockquote: {
        base: 'font-medium my-[1.6em] rounded-md border-s-4 border-oma-yellow-500 bg-golden/30 p-4 text-neutral-800 italic [&_p]:m-0 dark:border-golden dark:bg-neutral-800 dark:text-golden',
      },
      strong: {
        base: 'font-semibold dark:saturate-[2.8] dark:brightness-[0.85]',
      },
      p: {
        base: 'my-[1.25em] leading-[inherit] text-wrap',
      },
      ul: {
        base: 'my-[1.25em] ps-[1.625em] marker:text-neutral-500 dark:marker:text-golden',
      },
      ol: {
        base: 'my-[1.25em] ps-[1.625em] marker:text-neutral-500 dark:marker:text-golden',
      },
      li: {
        base: 'my-[0.5em] ps-[0.375em] leading-[inherit] [&>ul]:my-[0.75em] [&>ol]:my-[0.75em]',
      },
      hr: {
        base: 'my-[2em] md:my-[3em]',
      },
      // Matches the API tables on the component doc pages (doc-api.vue): a rounded
      // bordered frame, a tinted header row and hairline row dividers.
      table: {
        slots: {
          root: 'my-[1.5em] md:my-[2em] overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-700',
          base: 'w-full border-collapse text-left text-sm',
        },
      },
      thead: {
        base: 'bg-neutral-50 dark:bg-neutral-800/60',
      },
      tbody: {
        base: 'divide-y divide-neutral-200 dark:divide-neutral-700',
      },
      th: {
        base: 'border-0 px-3 py-2 align-bottom font-semibold text-neutral-700 dark:text-neutral-200',
      },
      td: {
        base: 'border-0 px-3 py-2 align-top text-neutral-800 dark:text-neutral-300',
      },
    },
  },
  socialLinks: {
    linkedIn: {
      title: 'LinkedIn',
      logo: 'i-fa6-brands-linkedin',
      url: 'http://www.linkedin.com/company/52819?trk=tyah',
    },
    // facebook: {
    //   title: "Facebook",
    //   logo: "i-fa6-brands-square-facebook",
    //   url: "https://www.facebook.com/OMASpecWorks",
    // },
    youtube: {
      title: "YouTube",
      logo: "i-fa6-brands-square-youtube",
      url: "https://www.youtube.com/c/OMASpecWorks",
    },
    // x: {
    //   title: "X",
    //   logo: "i-fa6-brands-square-x-twitter",
    //   url: "https://twitter.com/OMASpecWorks",
    // },
    github: {
      title: 'GitHub',
      logo: 'i-fa6-brands-square-github',
      url: 'https://github.com/OpenMobileAlliance',
    },
    // rss: {
    //   title: "RSS",
    //   logo: "i-heroicons-solid-rss",
    //   url: "http://openmobilealliance.org/rss/",
    // },
  },
})
