<template>
    <div :class="ui.wrapper" :style="backgroundClass">
        <div class="grid grid-cols-5 gap-4">
            <img v-if="imageLink" :class="ui.image" :src="imageLink" :alt="altImage" />
            <div class="col-start-2 col-span-3 flex-col">
                <MDC :class="ui.title" :value="title" />
                <MDC v-if="subtitle" :class="ui.subtitle" :value="subtitle" />
                <MDC v-if="text" :class="ui.text" :value="text" />
                <UFormGroup class="pb-4" error size="xl">
                    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
                </UFormGroup>
            </div>
            <UButton :to="buttonLink" target="_blank" :label="buttonLabel" :color="buttonColor" size="xl" :class="ui.button" variant="solid" />
            <UIcon :name="icon" dynamic size="lg" :class="ui.icon" :alt="altIcon" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, computed } from 'vue'
import { actionCard as config } from '@/ui.config' // Import the config file

const props = withDefaults(
    defineProps<{
        title: string;
        subtitle?: string;
        text?: string;
        imageLink?: string;
        altImage?: string;
        buttonLink?: string;
        buttonLabel?: string;
        buttonColor?: string;
        icon?: string;
        altIcon?: string;
        backgroundImage?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
        title: "",
        subtitle: "",
        text: "",
        imageLink: "",
        altImage: "",
        buttonLink: "",
        buttonLabel: "",
        buttonColor: "",
        icon: "",
        altIcon: "",
        backgroundImage: "",
    }
);

const { ui } = useUI(
    "sh-action-card",
    toRef(props, "ui"),
    config
);

const backgroundClass = computed(() => {
    if (props.backgroundImage) {
        return "background-image: url(" + props.backgroundImage + ")";
    }
});
</script>
