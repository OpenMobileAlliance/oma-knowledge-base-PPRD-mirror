<template>
    <div :class="ui.wrapper">
        <div :class="ui.upperBase" :style="backgroundClass">
            <div class="h-80 w-full flex justify-center items-center">
                <!-- Set a fixed height for the row containing the image -->
                <img :src="imageLink" :class="ui.image" />
                <!-- Allow the image to expand within the row height -->
            </div>
        </div>
        <div :class="ui.lowerBase">
            <p :class="ui.title">
                <MDC :value="title" />
            </p>
            <p :class="ui.subtitle">
                <MDC :value="subtitle" />
            </p>
            <p>
                <MDC :value="text" />
            </p>
            <div class="grid grid-cols-3">
                <p :class="ui.leftLabel">
                    <MDC :value="leftLabel" />
                </p>
                <p :class="ui.centerLabel">
                    <MDC :value="centerLabel" />
                </p>
                <p :class="ui.rightLabel">
                    <MDC :value="rightLabel" />
                </p>
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
