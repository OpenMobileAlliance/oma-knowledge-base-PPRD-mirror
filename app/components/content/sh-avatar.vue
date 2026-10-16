<template>
    <div :class="ui.wrapper">
        <img :src="srcAvatar" :alt="altAvatar" :class="ui.avatar" />
        <div :class="ui.base">
            <div>
                <MDC :class="ui.name" :value="name" />
            </div>
            <div>
                <MDC :class="ui.role" :value="role" />
            </div>
            <div v-if="company">
                <MDC :class="ui.company" :value="'@' + company"/>
            </div>
            <div :class="ui.socials">
                <NuxtLink v-if="twitter" :to="twitter">
                    <UIcon name="i-mdi:twitter" :class="ui.icon" />
                </NuxtLink>
                <NuxtLink v-if="linkedin" :to="linkedin">
                    <UIcon name="i-mdi:linkedin" :class="ui.icon" />
                </NuxtLink>
                <NuxtLink v-if="facebook" :to="facebook">
                    <UIcon name="i-mdi:facebook" :class="ui.icon" />
                </NuxtLink>
                <NuxtLink v-if="instagram" :to="instagram">
                    <UIcon name="i-mdi:instagram" :class="ui.icon" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const config = {
    /** Defines the overall styling for the container that holds all the elements of the avatar. The attribute `shadow-xl` is used to provide a shadow effect around the wrapper. */
    wrapper: "grid grid-cols-2 gap-4 p-4 mx-auto w-fit dark:bg-inherit rounded-md",
    /** Styles applied to the avatar image itself, including properties like grayscale effect, rounded shape, and size. */
    avatar: "my-[2em] grayscale justify-self-end tracking-widest rounded-full size-48 border border-neutral-300 dark:border-neutral-700",
    /** A placeholder for additional base styles that can be applied to the avatar component. */
    base: "",
    /** Styles applied to the text displaying the name of the person, such as font size and color. */
    name: "text-2xl md:text-3xl font-semibold grow text-neutral-900 dark:text-neutral-100 bottom-0",
    /** Styles applied to the text displaying the role or position of the person. */
    role: "text-lg font-semibold text-neutral-700 -mt-4 dark:text-gray-400",
    /** Styles applied to the text displaying the company name of the person. */
    company: "text-lg text-neutral-500 tracking-wide -mt-5 dark:text-neutral-400",
    /** Contains the styles for the social media icons, including their alignment and spacing. */
    socials: "flex text-5xl -mx-1 -mt-4",
    /** Defines the styling for individual social media icons, including hover effects and transition animations. */
    icon: "transition-colors duration-200 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-golden",
}

const props = withDefaults(
  defineProps<{
    description?: string;
    /** The source URL of the avatar image to be displayed. */
    srcAvatar?: string;
    /** Alternative text for the avatar image, used for accessibility and in case the image fails to load. */
    altAvatar?: string;
    /** The name of the person to be displayed. */
    name?: string;
    /** The role or position of the person within the company. */
    role?: string;
    /** The name of the company the person is associated with. */
    company?: string;
    /** URL link to the person's Twitter profile. */
    twitter?: string;
    /** URL link to the person's LinkedIn profile. */
    linkedin?: string;
    /** URL link to the person's Facebook profile. */
    facebook?: string;
    /** URL link to the person's Instagram profile. */
    instagram?: string;
    ui?: Record<string, any>;
  }>(),
  {
    ui: undefined,
    description: "",
    srcAvatar: "",
    altAvatar: "",
    name: "",
    role: "",
    company: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    instagram: "",
  });

const ui = computed(() => mergeUi(config, props.ui));
</script>
