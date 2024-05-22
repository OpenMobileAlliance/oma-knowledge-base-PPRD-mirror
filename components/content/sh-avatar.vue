<template>
    <div :class="ui.wrapper">
        <img :src="avatarSrc" :alt="avatarAlt" :class="ui.image" />
        <div :class="ui.base">
            <div>
                <MDC :class="ui.name" :value="name" />
            </div>
            <div>
                <MDC :class="ui.role" :value="role" />
            </div>
            <div>
                <MDC :class="ui.company" :value="'@' + company"/>
            </div>
            <div :class="ui.socials">
                <NuxtLink v-if="twitter" :to="twitter">
                    <UIcon name="i-mdi:twitter" dynamic :class="ui.icon" />
                </NuxtLink>
                <NuxtLink v-if="linkedin" :to="linkedin">
                    <UIcon name="i-mdi:linkedin" dynamic :class="ui.icon" />
                </NuxtLink>
                <NuxtLink v-if="facebook" :to="facebook">
                    <UIcon name="i-mdi:facebook" dynamic :class="ui.icon" />
                </NuxtLink>
                <NuxtLink v-if="instagram" :to="instagram">
                    <UIcon name="i-mdi:instagram" dynamic :class="ui.icon" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { avatar as config } from '@/ui.config' // Importing the config file

const props = withDefaults(
  defineProps<{
    avatarSrc?: String;
    avatarAlt?: String;
    name?: String;
    role?: String;
    company?: String;
    twitter?: String;
    linkedin?: String;
    facebook?: String;
    instagram?: String;
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
    avatarSrc: "",
    avatarAlt: "",
    name: "",
    role: "",
    company: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    instagram: "",
  });

const { ui } = useUI(
  "sh-avatar",
  toRef(props, "ui"),
  config
);

</script>
