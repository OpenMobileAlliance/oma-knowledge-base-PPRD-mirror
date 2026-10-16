<template>
  <div class="not-prose my-6 overflow-x-auto">
    <table class="w-full min-w-[44rem] table-fixed border-separate border-spacing-2">
      <thead>
        <tr>
          <th class="w-14" />
          <th v-for="name in names" :key="name" class="pb-1 text-center text-base font-semibold capitalize">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shade in shades" :key="shade">
          <th scope="row" class="pr-1 text-right text-sm font-mono font-normal">{{ shade }}</th>
          <td v-for="name in names" :key="name" class="p-0">
            <ShMicroCard layout="swatch" clipboard :title="`oma-${name}-${shade}`"
              :ui="{ swatch: { wrapper: `bg-oma-${name}-${shade}`, clipboard: textColor(name, shade) } }" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import colors from '~/data/theme-colors.json'

/**
 * Table of the OMA palette: one column per color, one row per shade. The values come from
 * `app/data/theme-colors.json`, which `scripts/generate-component-docs.mjs` copies from the `@theme` block of main.css.
 */
const palette = colors as Record<string, Record<string, string>>
const names = Object.keys(palette)
const shades = Object.keys(palette[names[0]]).map(Number).sort((a, b) => a - b)

// Icon and name are white on dark shades and dark on light shades
function textColor(name: string, shade: number) {
  const hex = palette[name][shade].slice(1)
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance > 0.55 ? 'text-neutral-800' : 'text-white'
}
</script>
