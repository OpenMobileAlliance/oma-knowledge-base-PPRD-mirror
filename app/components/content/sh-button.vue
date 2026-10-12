<template>
  <ULink :class="buttonClass" :disabled="props.disabled" :to="props.urlButton" :target="props.target" raw>
    <div :class="ui.inner">
      <span v-if="labelButton"><MDC :value="labelButton" /></span>
      <slot v-else />
    </div>
  </ULink>
</template>

<script setup lang="ts">
import { twMerge, twJoin } from "tailwind-merge"

const config = {
  /** Defines the overall styling for the container that holds all the elements of the button. The `wrapper` attribute is used to ensure the button is aligned properly within its container, with appropriate margins, e.g., `align-middle m-1` */
  wrapper: "align-middle m-1 font-medium transition-colors duration-200",
  /** Specifies the styling for the inner content of the button, ensuring it is centered and does not inherit any prose-related styles, making it suitable for standalone button components, e.g., `text-center not-prose mx-auto` */
  inner: "text-center not-prose mx-auto",
  // `{colorButton}` is replaced with the `colorButton` prop; the class names this
  // produces are kept in the Tailwind safelist in assets/css/main.css
  styleButton: {
    solid: 'bg-{colorButton}-500 dark:bg-{colorButton}-400 text-white hover:bg-{colorButton}-700 dark:hover:bg-{colorButton}-300 hover:text-white dark:text-white dark:hover:text-white no-underline',
    outline: 'text-{colorButton}-500 dark:text-{colorButton}-400 hover:bg-{colorButton}-50 dark:hover:bg-{colorButton}-950 ring-1 ring-inset ring-{colorButton}-500 dark:ring-{colorButton}-400 no-underline',
    link: 'text-{colorButton}-500 hover:text-{colorButton}-600 disabled:text-{colorButton}-500 dark:text-{colorButton}-400 dark:hover:text-{colorButton}-500 dark:disabled:text-{colorButton}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{colorButton}-500 dark:focus-visible:ring-{colorButton}-400'
  },
  /** Custom color schemes that bring their own classes for each `styleButton`, instead of the `{colorButton}` template. */
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
  } as Record<string, Record<string, string>>,
  /** Classes applied when `fullWidth` is true, so the button spans the whole container. */
  fullWidth: 'flex mx-auto justify-center items-center',
  /** Classes applied when `fullWidth` is false, so the button only takes the width of its content. */
  inline: 'inline-flex items-center',
  /** Corner rounding of the button. */
  rounded: 'rounded-xl',
  /** Text size for each `size` value. */
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
  } as Record<string, string>,
  /** Padding for each `size` value. */
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
  } as Record<string, string>,
}

const props = withDefaults(
  defineProps<{
    ui?: Record<string, any>;
    description?: string;
    /** Represents the URL to which the button will navigate when clicked. It can be used to define external or internal links for the button's action. */
    urlButton: string;
    /** Specifies where to open the linked document. Common values include `_self` for the same frame, `_blank` for a new window or tab, `_parent` for the parent frame, and `_top` for the full body of the window. */
    target?: string;
    /** Determines the primary color scheme for the button. The value `primary` sets a default color, which can be customized by replacing `{colorButton}` in the styleButton styles with the desired color name. */
    colorButton?: string;
    /** Sets the size of the button, ranging from `2xs`, `xs`, `sm`, `md`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, to `5xl`. Each size corresponds to predefined text and padding sizes, ensuring consistency across different button sizes. */
    size?: string;
    /** A boolean attribute (`true` or `false`) that indicates whether the button is disabled. When true, the button is not interactive and is usually styled to look inactive. */
    disabled?: boolean;
    /** Specifies the style styleButton of the button, which can be `solid`, `outline`, or `link`. Each styleButton applies different styling rules, such as background colors, border styles, and text decorations. */
    styleButton?: string;
    /** A boolean attribute (`true`, `false`) defines whether the button should be displayed as a fullWidth element, taking the full width of its container. */
    fullWidth?: boolean;
    /** Defines the text label displayed on the button. This attribute ensures the button conveys its intended action clearly to the user. */
    labelButton?: string
    class?: any;
  }>(),
  {
    ui: undefined,
    description: "",
    urlButton: "",
    target: "_blank",
    colorButton: "oma-blue",
    size: "base",
    disabled: false,
    styleButton: "solid",
    fullWidth: false,
    labelButton: "",
    class: "",
  });

const ui = computed(() => mergeUi(config, props.ui));

const buttonClass = computed(() => {
  const textSize = ui.value.size[props.size]
  const padding = ui.value.padding[props.size]
  const styleButton = ui.value.colorButton?.[props.colorButton]?.[props.styleButton]
    || ui.value.styleButton[props.styleButton as keyof typeof config.styleButton]

  return twMerge(twJoin(
    ui.value.rounded,
    padding,
    props.fullWidth ? ui.value.fullWidth : ui.value.inline,
    textSize,
    styleButton.replaceAll("{colorButton}", props.colorButton),
    ui.value.wrapper),
    props.class)
})
</script>
