/**
 * Class lists shared by the Prose heading overrides (app.config.ts -> ui.prose.h1..h4)
 * and the custom ProseH5 / ProseH6 components (Nuxt UI only ships h1-h4).
 *
 * Heading sizes are `em`-based on purpose: the content area sets the base size
 * (see `contentTextClass`), headings scale relative to it.
 */
export const headingColor =
  'font-heading text-highlighted dark:saturate-300 dark:brightness-80'

/**
 * Anchor behaviour: the heading text slides to the right on hover, making room
 * for the default anchor icon that the Nuxt UI heading themes render.
 */
export const headingLink = [
  'relative inline-block text-inherit hover:text-inherit transition-transform duration-300 ease-out',
  'group-hover:translate-x-[1em]',
  'motion-reduce:transition-none',
].join(' ')

/** Default Nuxt UI hash icon (leading slot of h2/h3), reused for the headings that ship without one. */
export const headingLeading =
  'absolute -ms-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated group-hover:text-primary group-focus:text-primary rounded-md hidden lg:flex text-muted transition'
export const headingLeadingIcon = 'size-4 shrink-0'

/** Base font size of rendered markdown (the old site rendered content at 20px). */
export const contentTextClass = 'text-base leading-[1.65] md:text-xl md:leading-[1.75]'
