<template>
  <div :class="ui.wrapper">
    <div class="grid gap-4" :class="VALID_SIZES[size]">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
const VALID_SIZES = {
  "S": "grid-cols-5 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-4",
  "M": "grid-cols-4 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-3",
  "L": "grid-cols-2 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-1",
  "XL": "grid-cols-4 [&>*:nth-child(odd)]:col-span-3 [&>*:nth-child(even)]:col-span-1",
  "XXL": "grid-cols-5 [&>*:nth-child(odd)]:col-span-4 [&>*:nth-child(even)]:col-span-1",
}

const config = {
  wrapper: ""
}

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    size: String;
  }>(),
  {
    ui: () => ({}),
    size: () => "L"
  });

const { ui, attrs } = useUI(
  "shtwocolumns",
  toRef(props, "ui"),
  toRef(props, "size")
)
</script>
