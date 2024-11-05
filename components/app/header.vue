<template>
  <header :class="ui.wrapper"
    class="backdrop-blur bg-gradient-to-b from-primary/[0.5] dark:bg-gradient-to-b dark:from-primary/[0.25]">
    <div class="px-8">
      <div :class="ui.container">
        <div :class="ui.left">
          <slot name="left">
            <NuxtLink :to="to" :aria-label="ariaLabel" :class="ui.logo">
              <slot name="logo">
                {{ title || "OMA Knowledge Base" }}
              </slot>
            </NuxtLink>
          </slot>
        </div>
        <div :class="ui.center">
          <div class="flex justify-between items-start mb-2">
            <div :class="ui.right">
              <ColorMode />
              <span class="mr-2 text-base mt-1">
                <!-- TODO: provide proper URL -->
                <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }"
                  :ui="{ background: 'bg-golden/[0.5] dark:bg-neutral-600', item: { active: 'bg-golden saturate-150 dark:bg-golden/[0.2]' } }">
                  <template v-slot:item="{ item }">
                    <ULink :to="item.to" target="_blank" class="text-black hover:text-black dark:text-golden hover:dark:text-golden flex items-center">
                      <UIcon :name="item.icon" class="text-2xl mr-2" />
                      {{ item.label }}
                    </ULink>
                  </template>
                  <UIcon name="stash:user-avatar" dynamic class="text-3xl" />
                </UDropdown>

              </span>
              <!-- <span class="hidden sm:flex mr-2 text-base">
                <ULink to="/contact-us" class="text-black dark:text-golden hover:text-primary">Contact us</ULink>
              </span> -->
              <slot name="right">
                <AppSocialLinks class="text-xl hidden sm:flex" />
              </slot>
            </div>
          </div>
          <ul class="hidden 2xl:flex gap-1.5">
            <li v-for="link in topLinks" :key="link.path" class="ml-4"
              :style="{ fontFamily: header.menu.font.type, fontSize: header.menu.font.size }">
              <ULink :to="link._path" :class="[
                {
                  'relative after:content-[\'\'] after:absolute after:bottom-[-7px] after:left-0 after:w-full after:h-[5px] after:bg-oma-blue-400 after:rounded-full dark:after:bg-oma-blue-200 after:mt-[14px]': isLinkActive(link._path)
                },
                ui.shadow,
                'text-black dark:text-golden'
              ]">
                {{ link.title }}
              </ULink>

            </li>
          </ul>
          <!-- Dropdown for smaller screens -->
          <div class="2xl:hidden lg:mx-0">
            <UDropdown mode="click" :popper="{ placement: 'bottom-start' }">
              <button @click="toggleDropdownAndRotation"
                class="bg-inherit hover:bg-primary-200/[0.7] dark:hover:bg-primary-600 text-xl lg:text-2xl text-black dark:text-golden p-2 pl-2 pr-2 rounded-2xl">
                Menus
                <UIcon :name="'gridicons:chevron-right'" dynamic
                  :class="[isDropdownVisible ? 'rotate-90' : '', 'transition-transform', 'duration-500', 'ease-in-out']" />
              </button>
              <ul v-if="isDropdownVisible"
                class="background absolute right-0 mt-11 flex flex-col gap-1.5 p-5 rounded-xl shadow-md z-10">
                <li v-for="(link, index) in topLinks" :key="link.path" class="text-lg lg:text-xl"
                  :style="{ fontFamily: header.menu.font.type }">
                  <div v-if="index !== 0" class="p-3 mb-2">
                    <hr />
                  </div>
                  <ULink @click="toggleDropdownAndRotation" :to="link._path" :class="ui.shadow">
                    {{ link.title }}
                  </ULink>
                </li>
              </ul>
            </UDropdown>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-1 border-neutral-50/[0.5] dark:border-neutral-700" />
    <AppBreadcrumbs v-if="route.name !== 'index'" />
  </header>
</template>

<script setup lang="ts">
const config = {
  wrapper: "flex flex-col -mb-px sticky top-0 z-50",
  container: "flex items-center justify-between gap-3 h-[--header-height]",
  left: "lg:flex-1 flex items-center gap-1.5",
  center: "flex flex-col grow",
  right: "flex items-center lg: lg:justify-end lg:flex-1 gap-1.5",
  logo: "flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5",
  shadow: "text:black dark:text-golden hover:text-black dark:hover:text-golden hover:bg-golden dark:hover:bg-primary-600 rounded-xl p-2",
};

const props = withDefaults(
  defineProps<{
    to?: string;
    title?: string;
    ui?: Partial<typeof config>;
    class?: any;
  }>(),
  {
    to: "/",
    title: undefined,
    ui: () => ({}),
    class: undefined,
  },
);

const { ui, attrs } = useUI(
  "header",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);

const items = [
  [{
    label: 'Login',
    icon: 'i-heroicons-user',
    to: 'https://member.openmobilealliance.org/'
  }], [{
    label: 'Create an account',
    icon: 'i-heroicons-user-plus',
    to: 'http://member.openmobilealliance.org/AccountCreation/GetAccount.asp'
  }]
]

const isDropdownVisible = ref(false);

const toggleDropdownAndRotation = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const ariaLabel = computed(() => (props.title || "Logo").trim());

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation(),
);

const topLinks = navigation.value.reduce((previous, current) => {
  if (current.children) {
    previous.push(current);
  }
  return previous;
}, []);

const header = useAppConfig().header;
const route = useRoute();

function isLinkActive(path: string): boolean {
  return route.path.startsWith(path);
}
</script>

<style scoped>
.background {
  background-color: rgb(242, 235, 226);
}

.dark .background {
  @apply bg-neutral-700
}
</style>