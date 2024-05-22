<template>
    <div :class="[ui.wrapper, Status]">
        <div v-if="src" class="grid grid-cols-4 grid-rows-1 grid-flow-col gap-8 items-center">
            <img :src="src" :class="[imgPositionClass, imgSpanClass, 'mx-auto rounded-xl']" />
            <div :class="[textPositionClass, textSpanClass, textAlignClass]">
                <MDC :class="ui.title" :value="title" />
                <MDC :class="ui.subtitle" :value="subtitle" />
                <MDC :class="ui.text" :value="text" />
            </div>
        </div>
        <div v-else class="grid grid-cols-1 grid-rows-1">
            <div :class="[textAlignClass]">
                <MDC :class="ui.title" :value="title" />
                <MDC :class="ui.subtitle" :value="subtitle" />
                <MDC :class="[ui.text, 'items-center']" :value="text" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, computed } from 'vue'
import config from '@/ui.config/sh-text-img' // Import the config file

const props = withDefaults(
    defineProps<{
        textPosition?: string;
        textSpan?: string;
        textAlign?: string;
        title?: string;
        subtitle?: string;
        text?: string;
        src?: string;
        status?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
        textPosition: "right",
        textSpan: "l",
        textAlign: "center",
        title: "",
        subtitle: "",
        text: "",
        src: "",
        status: "",
    }
);

const { ui } = useUI(
    "sh-text-img",
    toRef(props, "ui"),
    config
);

const textPosition = toRef(props, 'textPosition');
const textSpan = toRef(props, 'textSpan');
const textAlign = toRef(props, 'textAlign');
const status = toRef(props, 'status');

const COL_START_VALUES = [
    '',
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4'
]

const textPositionClass = computed(() => {
    if (textPosition.value === 'right' && textSpan.value === 'xl') {
        return COL_START_VALUES[2]
    } else if (textPosition.value === 'left') {
        return COL_START_VALUES[1]
    } else {
        return COL_START_VALUES[3]
    }
});

const textSpanClass = computed(() => {
    switch (textSpan.value) {
        case 'm':
            if (textPosition.value === 'left') {
                return 'col-start-1 col-span-1'
            } else {
                return 'col-start-4 col-span-1'
            }
        case 'l':
            return 'col-span-2'
        case 'xl':
            if (textPosition.value === 'left') {
                return 'col-start-1 col-span-3'
            } else {
                return 'col-start-2 col-span-3'
            }
        default:
            return 'col-span-2'
    }
});

const textAlignClass = computed(() => {
    switch (textAlign.value) {
        case 'left':
            return 'text-left'
        case 'center':
            return 'text-center'
        case 'right':
            return 'text-right'
        default:
            return 'text-center'
    }
});

//depending on the textPosition, the image will be placed on the opposite side
const imgPositionClass = computed(() => {
    if (textPosition.value === 'left' && textSpan.value === 'm') {
        return 'col-start-2'
    } else if (textPosition.value === 'right') {
        return 'col-start-1'
    }
});

//depending on the textSpan and textPosition, the image will take the remaining space
const imgSpanClass = computed(() => {
    if (textSpan.value === 'xl' && textPosition.value === 'left') {
        return 'col-start-4 col-span-1'
    } else if (textSpan.value === 'xl' && textPosition.value === 'right') {
        return 'col-start-1 col-span-1'
    } else if (textSpan.value === 'm' && textPosition.value === 'left') {
        return 'col-start-2 col-span-3'
    } else if (textSpan.value === 'm' && textPosition.value === 'right') {
        return 'col-start-1 col-span-3'
    } else {
        return 'col-span-2'
    }
});

//classes for styling the container background depending on the status
const Status = computed(() => {
    switch (status.value) {
        case 'on':
            return config.status.on
        case 'off':
            return config.status.off
        case 'pending':
            return config.status.pending
        case 'highlight':
            return config.status.highlight
        default:
            return config.status.default
    }
});
</script>
