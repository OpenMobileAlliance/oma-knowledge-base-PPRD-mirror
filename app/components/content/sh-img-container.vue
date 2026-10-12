<template>
    <div :class="ui.wrapper">
        <div :class="ui.inner">
            <figure :class="ui.base">
                <img :src="urlImage" :alt="altImage" :class="ui.image">
            </figure>
        </div>
        <div :class="ui.figcaption">
            <MDC :value="figcaption" />
        </div>
    </div>
</template>

<script setup lang="ts">
const config = {
    /** Defines the overall styling for the container that holds both the image and its caption. */
    wrapper: 'flex-row',
    /** Styles applied to the inner section that holds the image. */
    inner: 'bg-white dark:bg-black pt-3 pb-3 mx-32 rounded-md',
    /** A placeholder for additional base styles that can be applied to the image component. */
    base: 'dark:invert flex flex-col justify-center items-center m-4',
    /** Styles applied to the image itself, including size, alignment, and additional effects like borders or shadows. */
    image: '',
    /** Image caption. */
    figcaption: 'flex justify-center italic text-neutral-600 dark:text-neutral-400',
}

const props = withDefaults(
    defineProps<{
        description?: string;
        /** The source URL of the image to be displayed. */
        urlImage?: string;
        /** Alternative text for the image, used for accessibility and in case the image fails to load. */
        altImage?: string;
        /** Optional caption text displayed below the image. This includes font size, color, and alignment settings. */
        figcaption?: string;
        ui?: Record<string, any>;
    }>(),
    {
        ui: undefined,
        description: "",
    });

const ui = computed(() => mergeUi(config, props.ui));
</script>
