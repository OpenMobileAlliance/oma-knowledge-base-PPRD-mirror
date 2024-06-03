<template>
    <div :class="[ui.wrapper, Status]">
        <div v-if="urlImage" class="grid grid-cols-4 grid-rows-1 grid-flow-col gap-8 items-center">
            <img :src="urlImage" :alt="altImage" :class="[imgPositionClass, imgSpanClass, ui.image]" />
            <div :class="[positionTextClass, spanTextClass, alignTextClass]">
                <MDC :class="ui.title" :value="title" />
                <MDC :class="ui.subtitle" :value="subtitle" />
                <MDC :class="ui.text" :value="text" />
            </div>
        </div>
        <div v-else class="grid grid-cols-1 grid-rows-1">
            <div :class="[alignTextClass]">
                <MDC :class="ui.title" :value="title" />
                <MDC :class="ui.subtitle" :value="subtitle" />
                <MDC :class="[ui.text, 'items-center']" :value="text" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, computed } from 'vue'
import { textImg as config } from '@/ui.config' // Import the config file

const props = withDefaults(
    defineProps<{
        positionText?: string;
        spanText?: string;
        alignText?: string;
        title?: string;
        subtitle?: string;
        text?: string;
        urlImage?: string;
        altImage?: string;
        status?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
        positionText: "right",
        spanText: "l",
        alignText: "center",
        title: "",
        subtitle: "",
        text: "",
        urlImage: "",
        altImage: "",
        status: "",
    }
);

const { ui } = useUI(
    "sh-text-img",
    toRef(props, "ui"),
    config
);

const positionText = toRef(props, 'positionText');
const spanText = toRef(props, 'spanText');
const alignText = toRef(props, 'alignText');
const status = toRef(props, 'status');

const COL_START_VALUES = [
    '',
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4'
]

const positionTextClass = computed(() => {
    if (positionText.value === 'right' && spanText.value === 'xl') {
        return COL_START_VALUES[2]
    } else if (positionText.value === 'left') {
        return COL_START_VALUES[1]
    } else {
        return COL_START_VALUES[3]
    }
});

const spanTextClass = computed(() => {
    switch (spanText.value) {
        case 'm':
            if (positionText.value === 'left') {
                return 'col-start-1 col-span-1'
            } else {
                return 'col-start-4 col-span-1'
            }
        case 'l':
            return 'col-span-2'
        case 'xl':
            if (positionText.value === 'left') {
                return 'col-start-1 col-span-3'
            } else {
                return 'col-start-2 col-span-3'
            }
        default:
            return 'col-span-2'
    }
});

const alignTextClass = computed(() => {
    switch (alignText.value) {
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
    if (positionText.value === 'left' && spanText.value === 'm') {
        return 'col-start-2'
    } else if (positionText.value === 'right') {
        return 'col-start-1'
    }
});

//depending on the spanText and textPosition, the image will take the remaining space
const imgSpanClass = computed(() => {
    if (spanText.value === 'xl' && positionText.value === 'left') {
        return 'col-start-4 col-span-1'
    } else if (spanText.value === 'xl' && positionText.value === 'right') {
        return 'col-start-1 col-span-1'
    } else if (spanText.value === 'm' && positionText.value === 'left') {
        return 'col-start-2 col-span-3'
    } else if (spanText.value === 'm' && positionText.value === 'right') {
        return 'col-start-1 col-span-3'
    } else {
        return 'col-span-2'
    }
});

//classes for styling the container background depending on the status
const Status = computed(() => {
    switch (status.value) {
        case 'a':
            return config.status.a
        case 'b':
            return config.status.b
        case 'c':
            return config.status.c
        case 'd':
            return config.status.d
        default:
            return config.status.default
    }
});
</script>
