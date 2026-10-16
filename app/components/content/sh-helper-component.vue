<template>
  <div :class="ui.wrapper">
    <div :class="ui.inner">
      <div :class="ui.firstLogo">
        <img v-if="firstLogoDark" :src="firstLogoDark" :class="[ui.firstLogoDark, 'hidden dark:block']" />
        <img v-if="firstLogoLight" :src="firstLogoLight" :class="[ui.firstLogoLight, 'dark:hidden']" />
      </div>
      <div :class="ui.secondLogo">
        <img v-if="secondLogoDark" :src="secondLogoDark" :class="[ui.secondLogoDark, 'hidden dark:block']" />
        <img v-if="secondLogoLight" :src="secondLogoLight" :class="[ui.secondLogoLight, 'dark:hidden']" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
    /** Styling for the outermost container. */
    wrapper: "",
    /** Styling for the container holding both logos. */
    inner: "flex-col -mt-3",
    /** Styling for the container of the first logo. */
    firstLogo: "",
    /** First logo in dark mode. */
    firstLogoDark: "m-0 max-w-full max-h-full object-contain",
    /** First logo in light mode. */
    firstLogoLight: "m-0 max-w-full max-h-full object-contain",
    /** Styling for the container of the second logo. */
    secondLogo: "mt-10",
    /** Second logo in dark mode. */
    secondLogoDark: "m-0 max-w-full max-h-full object-contain",
    /** Second logo in light mode. */
    secondLogoLight: "m-0 max-w-full max-h-full object-contain",
}

const props = withDefaults(
  defineProps<{
    description?: string;
    /** Path of the first logo shown in dark mode. */
    firstLogoDark?: string;
    /** Path of the first logo shown in light mode. */
    firstLogoLight?: string;
    /** Path of the second logo shown in dark mode. */
    secondLogoDark?: string;
    /** Path of the second logo shown in light mode. Nothing is rendered in light mode when empty. */
    secondLogoLight?: string;
    ui?: Record<string, any>;
  }>(),
  {
    ui: undefined,
    firstLogoDark: "/logo-dark.png",
    firstLogoLight: "/logo-light.png",
    secondLogoDark: "/images/oma2.png",
    secondLogoLight: "",
    description: "",
  }
);

const ui = computed(() => mergeUi(config, props.ui));
</script>
