<template>
  <footer :class="ui.wrapper" v-bind="attrs">
    <UContainer :class="ui.container">
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright &copy; 2024. All Rights Reserved.
        </span>
        <ul class="flex mt-4 sm:justify-center sm:mt-0">
          <li v-for="socialLink of socialLinks">
            <a
              :href="socialLink.url"
              :title="socialLink.title"
              target="_blank"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <UIcon :name="socialLink.logo" />
            </a>
          </li>
        </ul>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = useAppConfig().socialLinks;

const config = {
  wrapper:
    "py-4 fixed bottom-0 z-50 w-full bg-background/75 backdrop-blur border-t border-gray-200 dark:border-gray-800",
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    class: undefined,
  },
);

const { ui, attrs } = useUI(
  "footer",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);
</script>
