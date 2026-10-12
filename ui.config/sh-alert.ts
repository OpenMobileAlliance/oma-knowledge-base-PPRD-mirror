export default {
  wrapper: "flex items-start gap-4 px-5 py-5 mt-4 mb-4 rounded-lg text-base leading-7 [&_p]:text-inherit [&_p]:my-0",
  content: "min-w-0 flex-1 [&_p]:leading-[inherit] [&_p+p]:mt-1 [&_br+br]:hidden",
  base: "flex items-center self-start shrink-0 h-[1lh]",
  alert: {
    success: 'bg-green-100 dark:bg-green-500/15 text-green-950 dark:text-green-100 relative border border-green-300 dark:border-green-400/30 border-l-4 border-l-green-600 dark:border-l-green-400',
    warning: 'bg-amber-100 dark:bg-amber-500/20 text-amber-950 dark:text-amber-100 relative border border-amber-300 dark:border-amber-400/40 border-l-4 border-l-amber-500 dark:border-l-amber-400',
    danger: 'bg-red-100 dark:bg-red-500/15 text-red-950 dark:text-red-100 relative border border-red-300 dark:border-red-400/30 border-l-4 border-l-red-600 dark:border-l-red-400',
    info: 'bg-golden/50 dark:bg-golden/10 text-neutral-900 dark:text-golden relative border border-golden dark:border-golden/30 border-l-4 border-l-oma-yellow-500 dark:border-l-golden',
  },
  icon: {
    success: 'i-heroicons-check-circle',
    warning: 'i-heroicons-exclamation-circle',
    danger: 'i-heroicons-x-circle',
    info: 'i-heroicons-information-circle',
    color: {
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-amber-600 dark:text-amber-400',
      danger: 'text-red-600 dark:text-red-400',
      info: 'text-neutral-600 dark:text-golden',
    }
  },
  // Default Tailwind CSS values
  default: {
  }
}
