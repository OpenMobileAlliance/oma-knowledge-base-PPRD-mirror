<template>
    <div :class="ui.wrapper">
        <div class="row-start-1 flex items-center justify-center rounded-lg" :style="backgroundClass">
            <div class="h-80 w-full flex justify-center items-center">
                <!-- Set a fixed height for the row containing the image -->
                <img :src="imageLink" class="h-full w-auto p-8" />
                <!-- Allow the image to expand within the row height -->
            </div>
        </div>
        <div class="row-start-2 p-6">
            <NuxtLink :to="titleLink">
                <p class="text-3xl font-extrabold">
                    {{ title }}
                </p><!-- title -->
            </NuxtLink>
            <p class="text-xl font-semibold text-gray-600 dark:text-gray-400">
                {{ subtitle }}
            </p><!-- subtitle -->
            <p>
                {{ text }}
            </p><!-- text -->
            <div class="grid grid-cols-3">
                <p class="col-start-1 text-lg justify-self-start text-gray-600 dark:text-gray-400">
                    {{ leftLabel }}
                </p><!-- left label -->
                <p class="col-start-2 text-lg justify-self-center text-gray-600 dark:text-gray-400">
                    {{ centerLabel }}
                </p><!-- center label -->
                <p class="col-start-3 text-lg justify-self-end text-gray-600 dark:text-gray-400">
                    {{ rightLabel }}
                </p><!-- right label -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, computed } from 'vue'
import { card as config } from '@/ui.config' // Import the config file

const props = withDefaults(
    defineProps<{
        imageLink?: string;
        titleLink?: string;
        title?: string;
        subtitle?: string;
        text?: string;
        leftLabel?: string;
        centerLabel?: string;
        rightLabel?: string;
        background?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
        imageLink: "",
        titleLink: "",
        title: "",
        subtitle: "",
        text: "",
        leftLabel: "",
        centerLabel: "",
        rightLabel: "",
        background: "",
    }
);

const { ui } = useUI(
    "sh-card",
    toRef(props, "ui"),
    config
);
const backgroundClass = computed(() => {
    if (props.background) {
        return "background-image: url(" + props.background + ")";
    } else {
        return "background-color: rgb(255, 255, 255)";
    }
});
</script>
