<template>
    <div :class="ui.wrapper" :style="backgroundStyle">
        <div class="grid grid-cols-5 gap-4">
            <img v-if="urlImage" :class="ui.image" :src="urlImage" :alt="altImage" />
            <div class="col-start-2 col-span-3 flex-col">
                <MDC :class="ui.title" :value="title" />
                <MDC v-if="subtitle" :class="ui.subtitle" :value="subtitle" />
                <MDC v-if="text" :class="ui.text" :value="text" />
                <UFormField class="pb-4" error size="xl">
                    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" class="dark:invert" />
                </UFormField>
            </div>
            <UButton :to="urlButton" target="_blank" :label="labelButton" :color="buttonColor" size="xl" :class="ui.button" :variant="styleButton" />
            <UIcon :name="icon" size="lg" :class="ui.icon" :alt="altIcon" />
        </div>
    </div>
</template>

<script setup lang="ts">
const config = {
    /** Defines the overall styling for the container that holds all the elements of the component. */
    wrapper: "mt-6 dark:bg-inherit border border-neutral-300 dark:border-neutral-700 mx-auto p-4 rounded-md shadow-xs bg-no-repeat bg-cover size-full max-w-4xl max-h-3xl",
    /** Styles applied to the image element, including properties like size and border radius. */
    image: "my-[2em] col-start-1 col-span-1 size-4/6 self-center place-self-center row-span-2 w-fit h-fit",
    /** Styles applied to the title text, such as font size and color. */
    title: "title text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 text-center font-semibold",
    /** Styles applied to the subtitle text, such as font size and color. */
    subtitle: "subtitle text-lg text-center font-semibold text-neutral-500 dark:text-neutral-400 -mt-8",
    /** Styles applied to the text content, such as font size and color. */
    text: "text text-md text-center font-normal not-prose",
    /** Defines the styling for the button element, including hover effects and transition animations. */
    button: "col-start-3 col-span-1 mx-auto mb-4 not-prose",
    /** Styles applied to the icon element, including properties like size and color. */
    icon: "self-center place-self-center row-start-1 row-span-2 col-start-5 col-span-1",
}

const props = withDefaults(
    defineProps<{
        description?: string;
        /** The title text to be displayed. */
        title: string;
        /** The subtitle text to be displayed, if any. */
        subtitle?: string;
        /** The main text content to be displayed. */
        text?: string;
        /** The source URL of the image to be displayed. */
        urlImage?: string;
        /** Alternative text for the image, used for accessibility and in case the image fails to load. */
        altImage?: string;
        /** The URL link the button will navigate to when clicked. */
        urlButton?: string;
        /** The label text displayed on the button. */
        labelButton?: string;
        /** The color of the button. */
        colorButton?: string;
        /** The style of the button (can be: `outline`, `soft`, `solid`, `link`, `ghost`). */
        styleButton?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link';
        /** The name of the icon to be displayed. */
        icon?: string;
        /** Alternative text for the icon, used for accessibility. */
        altIcon?: string;
        /** Sets a background image on the card via inline CSS background-image. */
        imageBackground?: string;
        ui?: Record<string, any>;
    }>(),
    {
        ui: undefined,
        description: "",
        title: "",
        subtitle: "",
        text: "",
        urlImage: "",
        altImage: "",
        urlButton: "",
        labelButton: "",
        colorButton: "",
        styleButton: "solid",
        icon: "",
        altIcon: "",
        imageBackground: "",
    }
);

const ui = computed(() => mergeUi(config, props.ui));

// Nuxt UI buttons only know the semantic colors; anything else (e.g. "black") renders neutral
const SEMANTIC_COLORS = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const
const buttonColor = computed(() =>
    (SEMANTIC_COLORS as readonly string[]).includes(props.colorButton) ? props.colorButton as typeof SEMANTIC_COLORS[number] : 'neutral'
);

const backgroundStyle = computed(() => {
    if (props.imageBackground) {
        return "background-image: url(" + props.imageBackground + ")";
    }
});
</script>
