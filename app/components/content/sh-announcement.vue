<!-- INTERNAL: site-wide banner rendered by app.vue. Not intended for use in content; no guideline. -->
<template>
    <div v-if="visible" :class="ui.wrapper">
        <div :class="ui.base">
            <div :class="ui.content">
                <ContentRenderer :value="announcement ?? {}" />
            </div>
            <button type="button" aria-label="Dismiss announcement" :class="ui.button" @click="hideAnnouncement">
                <UIcon name="i-line-md:close-small" :class="ui.icon" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQueryCollection } from '~/composables/nuxt/query/useQueryCollection';

const ui = {
    wrapper: 'p-1 sm:p-3 z-50 bg-golden/60 dark:bg-neutral-900 border border-golden dark:border-golden/60 rounded-md shadow-xs',
    base: 'flex items-center justify-between',
    content: 'content flex-1 text-center text-xl not-prose',
    button: 'absolute hover:bg-inherit hover:rounded-sm right-0 duration-200 z-50',
    icon: 'text-2xl md:text-3xl mr-1 md:mr-4 dark:text-white',
};

const { data: announcement } = useQueryCollection('content', '/announcement');

const dismissed = ref(false);
const visible = computed(() => !dismissed.value && announcement.value?.meta?.visible === true);

const hideAnnouncement = () => {
    dismissed.value = true;
};
</script>
