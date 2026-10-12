<template>
    <div id="alert" :class="[ui.wrapper, ui.alert[type]]">
        <div :class="ui.base">
            <UIcon :class="['size-7', ui.icon.color[type]]" :name="ui.icon[type]" />
        </div>
        <div :class="ui.content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const config = {
  /** Defines the overall styling for the container that holds all the elements of the alert. */
  wrapper: "flex items-start gap-4 px-5 py-5 mt-4 mb-4 rounded-lg text-base leading-7 [&_p]:text-inherit [&_p]:my-0",
  /** Container of the alert message text. */
  content: "min-w-0 flex-1 [&_p]:leading-[inherit] [&_p+p]:mt-1 [&_br+br]:hidden",
  /** A placeholder for additional base styles that can be applied to the alert component. In this specific case, it will target the section around icon. */
  base: "flex items-center self-start shrink-0 h-[1lh]",
  /** Colors and borders of the alert for each `typeAlert` (`success`, `warning`, `danger`, `info`). */
  alert: {
    success: 'bg-green-100 dark:bg-green-500/15 text-green-950 dark:text-green-100 relative border border-green-300 dark:border-green-400/30 border-l-4 border-l-green-600 dark:border-l-green-400',
    warning: 'bg-amber-100 dark:bg-amber-500/20 text-amber-950 dark:text-amber-100 relative border border-amber-300 dark:border-amber-400/40 border-l-4 border-l-amber-500 dark:border-l-amber-400',
    danger: 'bg-red-100 dark:bg-red-500/15 text-red-950 dark:text-red-100 relative border border-red-300 dark:border-red-400/30 border-l-4 border-l-red-600 dark:border-l-red-400',
    info: 'bg-golden/50 dark:bg-golden/10 text-neutral-900 dark:text-golden relative border border-golden dark:border-golden/30 border-l-4 border-l-oma-yellow-500 dark:border-l-golden',
  },
  /** Icon computes which type of alert is chosen, and with that information it shows accordingly the icon of alert type. This could also be used to change the icon, make it different color, etc. */
  icon: {
    success: 'i-heroicons-check-circle',
    warning: 'i-heroicons-exclamation-circle',
    danger: 'i-heroicons-x-circle',
    info: 'i-heroicons-information-circle',
    /** Color of the icon for each `typeAlert`. */
    color: {
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-amber-600 dark:text-amber-400',
      danger: 'text-red-600 dark:text-red-400',
      info: 'text-neutral-600 dark:text-golden',
    }
  },
}

const props = withDefaults(
    defineProps<{
        description?: string;
        /** This represents the type of the alert. Options: `info`, `success`, `warning` & `danger` */
        typeAlert?: string;
        ui?: Record<string, any>;
    }>(),
    {
        ui: undefined,
        typeAlert: "info",
        description: "",
    }
);

const ui = computed(() => mergeUi(config, props.ui));

// Unknown types fall back to the info look
const type = computed(() =>
    (['success', 'warning', 'danger'] as const).find(t => t === props.typeAlert) ?? 'info'
);
</script>

<style>
#alert {
    font-family: var(--font-heading);
}
</style>
