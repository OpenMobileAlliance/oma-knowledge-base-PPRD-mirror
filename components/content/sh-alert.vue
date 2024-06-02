<template>
    <div id="alert" :class="[ui.wrapper, alert]">
        <div :class="ui.base">
            <i :class="['size-7', icon]"></i>
        </div>
        <div :class="ui.text">
        <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { alert as config } from "@/ui.config" // Import the config file

// Define props
const props = withDefaults(
    defineProps<{
        type?: string;
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
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
            break;
        case "warning":
            return config.alert.warning;
            break;
        case "danger":
            return config.alert.danger;
            break; 
        default: // info
            return config.alert.info;
            break;
    }
});
const icon = computed(() => {
    switch (props.type) {
        case "success":
            return config.icon.success;
            break;
        case "warning":
            return config.icon.warning;
            break;
        case "danger":
            return config.icon.danger;
            break;
        default: // info
            return config.icon.info;
            break;
    }
});
</script>

<style>
#alert {
    font-family: "DM Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
