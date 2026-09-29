<!-- INTERNAL: site-wide banner rendered by app.vue. Not intended for use in content; no guideline. -->
<template>
    <div v-if="visible" :class="ui.wrapper">
        <div :class="ui.base">
            <div :class="ui.content">
                <ContentRenderer :value="announcement ?? {}" />
            </div>
            <button @click="hideAnnouncement" :class="ui.button">
                <UIcon name="i-line-md:close-small" dynamic :class="ui.icon" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQueryCollection } from '~/composables/nuxt/query/useQueryCollection';

const config = {
    wrapper: 'p-1 sm:p-3 z-50 bg-neutral-400/70 dark:bg-black border dark:border-neutral-500 rounded-3xl shadow-xl', //bg-golden dark:bg-oma-yellow-500
    base: 'flex items-center justify-between',
    content: 'content flex-1 text-center text-xl',
    linkIcon: 'inline-block',
    button: 'absolute hover:bg-inherit hover:rounded-lg right-0 hover:scale-125 duration-700 z-50',
    icon: 'text-3xl mr-4 dark:text-white',
};

const props = withDefaults(
    defineProps<{
        ui?: Partial<typeof config>;
    }>(),
    {
        ui: () => ({}),
    },
);

const { ui, attrs } = useUI(
    "announcement",
    toRef(props, "ui"),
    config,
);

const { data: announcement } = useQueryCollection('content', '/announcement');

const dismissed = ref(false);
const visible = computed(() => !dismissed.value && announcement.value?.meta?.visible === true);

const hideAnnouncement = () => {
    dismissed.value = true;
};
</script>