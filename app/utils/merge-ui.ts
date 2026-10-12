import { twMerge } from 'tailwind-merge'

type UiValue = string | { [key: string]: UiValue }

/**
 * Deep-merges a component's default class config with the `ui` prop passed from
 * markdown (`ui:` front matter of an MDC component). String leaves are combined
 * with tailwind-merge, so `wrapper: "p-0"` replaces a default `p-4` instead of
 * fighting it in the cascade.
 *
 * This is what Nuxt UI v2's `useUI()` used to do for the sh-* content components.
 */
export function mergeUi<T extends Record<string, any>>(config: T, overrides?: Record<string, any> | null): T {
  if (!overrides) return config

  const result: Record<string, any> = { ...config }

  for (const key of Object.keys(overrides)) {
    const base = result[key]
    const next = overrides[key] as UiValue | undefined

    if (next === undefined || next === null) continue

    if (typeof next === 'string') {
      result[key] = typeof base === 'string' ? twMerge(base, next) : next
    } else if (base && typeof base === 'object') {
      result[key] = mergeUi(base, next)
    } else {
      result[key] = next
    }
  }

  return result as T
}
