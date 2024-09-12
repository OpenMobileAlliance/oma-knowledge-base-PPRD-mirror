<template>
  <div :class="ui.wrapper">
    <aside class="not-prose text-wrap">
      <nav v-if="items" class="">
        <ul class="border-r-2 border-neutral-200 dark:border-neutral-500">
          <li v-for="(link, index) in items" class="" :key="index">
            <Disclosure v-slot="{ open }" defaultOpen>
              <DisclosureButton
                class="flex w-full justify-between rounded-lg pl-2 py-1 text-left text-sm font-medium text-primary-900 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75">
                <ULink :to="link._path" class="no-underline" :class="isActive(link._path)">{{ link.title
                  }}</ULink>
              </DisclosureButton>
              <DisclosurePanel class="pl-2 pb-1 text-sm text-gray-500" v-if="link.children?.length > 0">
                <ul v-if="link.children?.length > 0" class="hidden lg:block">
                  <li v-for="(subLink, subIndex) in link.children" class="" :key="subIndex">
                    <Disclosure v-slot="{ open }" defaultOpen v-if="subLink._path !== link._path">
                      <DisclosureButton
                        class="flex w-full justify-between rounded-lg  pl-2 py-1 text-left text-sm font-medium text-primary-900 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75">
                        <ULink v-if="link._path !== subLink._path" :to="subLink._path"
                          class="no-underline" :class="isActive(subLink._path)">
                          {{ subLink.title }}
                        </ULink>
                      </DisclosureButton>
                      <DisclosurePanel class="pl-2 pb-1 text-sm text-gray-500" v-if="subLink.children?.length > 0">
                        <ul v-if="subLink.children?.length > 0" class="">
                          <li v-for="(subChildLink, subChildIndex) in subLink.children" class="" :key="subChildIndex">
                            <Disclosure v-slot="{ open }" defaultOpen v-if="subLink._path !== subChildLink._path">
                              <DisclosureButton
                                class="flex w-full justify-between rounded-lg  pl-2 py-1 text-left text-sm font-medium text-primary-900 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75">
                                <ULink v-if="subLink._path !== subChildLink._path" :to="subChildLink._path"
                                  class="no-underline hover:bg-primary-100 rounded-md p-1" :class="isActive(subChildLink._path)">
                                  {{ subChildLink.title }}
                                </ULink>
                              </DisclosureButton>
                              <DisclosurePanel class="pl-2 pb-1 text-sm text-primary-900"
                                v-if="subChildLink.children?.length > 0"> <!-- classes for depth lvl 3-->
                                <ul v-if="subChildLink.children?.length > 0" class="">
                                  <li v-for="(subSubChildLink, subSubChildIndex) in subChildLink.children" class="py-1"
                                    :key="subSubChildIndex">
                                    <ULink v-if="subChildLink._path !== subSubChildLink._path"
                                      :to="subSubChildLink._path" class="pl-2 no-underline hover:bg-primary-100 rounded-md p-1"
                                      :class="isActive(subSubChildLink._path)">
                                      {{ subSubChildLink.title }}
                                    </ULink>
                                  </li>
                                </ul>
                              </DisclosurePanel>
                            </Disclosure>
                          </li>
                        </ul>
                      </DisclosurePanel>
                    </Disclosure>
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
const route = useRoute()

const config = {
  wrapper:
    "",
};


const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    class?: any;
    items: [];
  }>(),
  {
    ui: () => ({}),
    class: undefined,
    items: undefined
  },
);

const { ui, attrs } = useUI(
  "SideMenu",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);

const isActive = (path) => {
  return route.path === path ? "border-b-2 border-b-primary-300 rounded-md pl-1 pr-1" : ""
}

</script>
