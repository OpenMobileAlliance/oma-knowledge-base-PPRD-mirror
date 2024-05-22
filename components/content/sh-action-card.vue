<template>
    <div :class="ui.wrapper" :style="backgroundClass">
        <div class="grid grid-cols-5 gap-4">
            <img v-if="imageLink" :class="ui.image" :src="imageLink" :alt="alt" />
            <div class="col-start-2 col-span-3 flex-col">
                <p :class="ui.title">{{ title }}</p>
                <p v-if="subtitle" :class="ui.subtitle">{{ subtitle }}</p>
                <UFormGroup class="pb-4" error size="xl">
                    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
                </UFormGroup>
            </div>
            <UButton :label="buttonLabel" :color="buttonColor" size="xl" :class="ui.button" />
            <UIcon :name="icon" dynamic size="lg" :class="ui.icon" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, computed } from 'vue'
import config from '@/ui.config/sh-action-card' // Import the config file

const props = withDefaults(
    defineProps<{
        title: string;
        subtitle?: string;
        imageLink?: string;
        alt?: string;
        buttonLabel?: string;
        buttonColor?: string;
        icon?: string;
        background?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
        title: "",
        subtitle: "",
        imageLink: "",
        alt: "",
        buttonLabel: "",
        buttonColor: "",
        icon: "",
        background: "",
    }
);

const { ui } = useUI(
    "sh-action-card",
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
