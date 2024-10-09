<template>
  <div :class="[ui.wrapper]">
    <NuxtLink :to="urlWrapper" class="not-prose">
      <div class="relative group">
        <img v-if="urlImage" :src="urlImage" :class="ui.image" :alt="altImage" />
        <UIcon v-if="icon" :name="icon" :alt="altIcon" dynamic :class="ui.icon" />
        <div class="relative">
          <MDC v-if="title"
            :class="[ui.title, 'transition-opacity duration-300', { 'group-hover:text-transparent': clipboard === true }]"
            :value="title" />
          <MDC v-if="subtitle" :class="[ui.subtitle, 'transition-opacity duration-300']" :value="subtitle" />
          <MDC v-if="text" :class="[ui.text, 'transition-opacity duration-300']" :value="text" />
        </div>
        <div v-if="clipboard"
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
          <button @click="toast.add({ title: 'Copied! Click here to check clipboard!', click: onClick })">
            <UIcon @click="copyToClipboard" name="i-line-md:clipboard-arrow" alt="cliboard-icon" dynamic
              class="text-5xl text-black" />
          </button>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { microCard as config } from '@/ui.config' // Importing the config file

const props = withDefaults(
  defineProps<{
    description?: string;
    urlWrapper?: string;
    urlImage?: string;
    altImage?: string;
    icon?: string;
    altIcon?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    clipboard?: boolean; // Add clipboard prop
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
    description: "",
    urlWrapper: "",
    urlImage: "",
    altImage: "",
    icon: "",
    altIcon: "",
    title: "",
    subtitle: "",
    text: "",
    clipboard: false,
  });

const { ui } = useUI(
  "sh-micro-card",
  toRef(props, "ui"),
  config
);

const toast = useToast()
const colorName = ref(props.title);

const copyToClipboard = () => {
  navigator.clipboard.writeText(colorName.value);
};

function onClick() {
  alert('Currently copied: ' + colorName.value);
}
</script>
