<template>
  <div :class="ui.wrapper">
    <aside class="not-prose text-wrap">
      <nav v-if="items" class="">
        <ul class="">
          <li v-for="(link, index) in items" :key="index">
            <Disclosure v-slot="{ open }" defaultOpen>
              <DisclosureButton :class="ui.shadow"
                class="flex w-full justify-between pl-2 py-1 text-left text-lg font-medium text-black p-1 mb-1">
                <ULink :to="link._path" class="no-underline" :class="isActive(link._path)">{{ link.title}}</ULink>
              </DisclosureButton>
              <DisclosurePanel class="pl-2 pb-1 text-sm text-gray-500" v-if="link.children?.length > 0">
                <ul v-if="link.children?.length > 0" class="hidden lg:block">
                  <li v-for="(subLink, subIndex) in link.children" class="" :key="subIndex">
                    <Disclosure v-slot="{ open }" defaultOpen v-if="subLink._path !== link._path">
                      <DisclosureButton :class="ui.shadow"
                        class="flex w-full justify-between pl-2 py-1 text-left text-base font-medium text-black p-1 mt-1">
                        <ULink v-if="link._path !== subLink._path" :to="subLink._path" class="no-underline"
                          :class="isActive(subLink._path)">
                          {{ subLink.title }}
                        </ULink>
                      </DisclosureButton>
                      <DisclosurePanel class="pl-2 pb-1 text-sm" v-if="subLink.children?.length > 0">
                        <ul v-if="subLink.children?.length > 0" class="">
                          <li v-for="(subChildLink, subChildIndex) in subLink.children" class="" :key="subChildIndex">
                            <Disclosure v-slot="{ open }" defaultOpen v-if="subLink._path !== subChildLink._path">
                              <DisclosureButton :class="ui.shadow"
                                class="flex w-full justify-between pl-2 py-1 text-left text-sm font-medium text-black p-1 mt-1">
                                <ULink v-if="subLink._path !== subChildLink._path" :to="subChildLink._path"
                                  class="no-underline" :class="isActive(subChildLink._path)">
                                  {{ subChildLink.title }}
                                </ULink>
                              </DisclosureButton>
                              <DisclosurePanel class="pl-2 pb-1 text-sm text-primary-900"
                                v-if="subChildLink.children?.length > 0"> <!-- classes for depth lvl 3-->
                                <ul v-if="subChildLink.children?.length > 0" class="">
                                  <li v-for="(subSubChildLink, subSubChildIndex) in subChildLink.children"
                                    :class="ui.shadow" class="py-1 p-1 text-black" :key="subSubChildIndex">
                                    <ULink v-if="subChildLink._path !== subSubChildLink._path"
                                      :to="subSubChildLink._path" class="pl-2 no-underline"
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
  wrapper: '',
  shadow: 'hover:bg-primary-100 focus:bg-primary-200/[0.6] hover:focus:bg-primary-100 dark:hover:bg-neutral-500 dark:focus:bg-primary-600[0.6] dark:hover:focus:bg-neutral-500 rounded-lg',
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
  return route.path === path ? "pl-1" : ""
}

</script>
