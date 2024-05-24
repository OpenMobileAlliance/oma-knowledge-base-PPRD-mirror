<template>
    <div id="alert" :class="[ui.wrapper, alert]">
        <div :class="ui.base">
            <i :class="['size-7', icon]"></i>
        </div>
        <MDC :value="text" :class="ui.text" />
    </div>
</template>

<script setup lang="ts">
import { alert as config } from "@/ui.config" // Import the config file

// Define props
const props = withDefaults(
    defineProps<{
        text: string;
        type?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
        text: "",
        type: "info",
    }
);

const { ui } = useUI(
    "sh-alert",
    toRef(props, "ui"),
    config
);

const alert = computed(() => {
    switch (props.type) {
        case "success":
            return config.alert.success;
        case "warning":
            return config.alert.warning;
        case "danger":
            return config.alert.danger;
        default: // info
            return config.alert.info;
    }
});
const icon = computed(() => {
    switch (props.type) {
        case "success":
            return config.icon.success;
        case "warning":
            return config.icon.warning;
        case "danger":
            return config.icon.danger;
        default: // info
            return config.icon.info;
    }
});
</script>

<style>
#alert {
    font-family: "DM Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
