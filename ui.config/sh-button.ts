export default {
  wrapper: "align-middle m-1 font-medium transition-colors duration-200",
  inner: "text-center not-prose mx-auto",
  styleButton: {
    solid: 'bg-{colorButton}-500 dark:bg-{colorButton}-400 text-white hover:bg-{colorButton}-700 dark:hover:bg-{colorButton}-300 hover:text-white dark:text-white dark:hover:text-white no-underline',
    outline: 'text-{colorButton}-500 dark:text-{colorButton}-400 hover:bg-{colorButton}-50 dark:hover:bg-{colorButton}-950 ring-1 ring-inset ring-{colorButton}-500 dark:ring-{colorButton}-400 no-underline',
    link: 'text-{colorButton}-500 hover:text-{colorButton}-600 disabled:text-{colorButton}-500 dark:text-{colorButton}-400 dark:hover:text-{colorButton}-500 dark:disabled:text-{colorButton}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{colorButton}-500 dark:focus-visible:ring-{colorButton}-400'
  },
  colorButton: {
    'oma-blue': {
      solid: 'bg-oma-blue-300 hover:bg-oma-blue-400 dark:bg-oma-blue-500 dark:hover:bg-oma-blue-400 text-white hover:text-white dark:text-white dark:hover:text-white no-underline',
      outline: 'text-oma-blue-400 dark:text-oma-blue-300 ring-1 ring-inset ring-oma-blue-300 dark:ring-oma-blue-400 hover:bg-oma-blue-50 dark:hover:bg-oma-blue-950 no-underline',
      link: 'text-oma-blue-500 dark:text-oma-blue-300 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-oma-blue-500',
    },
    golden: {
      solid: 'bg-golden hover:bg-golden/80 text-neutral-900 hover:text-neutral-900 dark:text-neutral-900 dark:hover:text-neutral-900 no-underline',
      outline: 'text-neutral-900 dark:text-golden ring-1 ring-inset ring-golden hover:bg-golden/30 dark:hover:bg-golden/10 no-underline',
      link: 'text-neutral-900 dark:text-golden underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-golden',
    },
  },
  fullWidth: 'flex mx-auto justify-center items-center',
  inline: 'inline-flex items-center',
  rounded: 'rounded',
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  },
  padding: {
    '2xs': 'px-1 py-1',
    xs: 'px-1.5 py-1.5',
    sm: 'px-2 py-2',
    md: 'px-2.5 py-2.5',
    base: 'px-3 py-3',
    lg: 'px-7 py-6',
    xl: 'px-8 py-7',
    '2xl': 'px-9 py-8',
    '3xl': 'px-10 py-9',
    '4xl': 'px-11 py-10',
    '5xl': 'px-12 py-11',
  },
  default: {
    size: 'base',
    styleButton: 'solid',
    colorButton: 'oma-blue',
    target: '_blank',
  }
}

