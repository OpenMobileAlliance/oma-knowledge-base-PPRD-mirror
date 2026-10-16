/**
 * Tracks which headings of the rendered page are currently in the viewport.
 * Used by the table of contents to highlight the sections being read.
 */
export function useActiveHeading() {
  const route = useRoute()
  const visible = ref<Set<string>>(new Set())
  let observer: IntersectionObserver | undefined

  const observe = () => {
    observer?.disconnect()
    visible.value = new Set()

    observer = new IntersectionObserver((entries) => {
      const next = new Set(visible.value)
      for (const entry of entries) {
        const id = entry.target.getAttribute('id')
        if (!id) continue
        if (entry.intersectionRatio > 0) next.add(id)
        else next.delete(id)
      }
      visible.value = next
    })

    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(el => observer!.observe(el))
  }

  onMounted(observe)
  watch(() => route.path, () => nextTick(observe))
  onBeforeUnmount(() => observer?.disconnect())

  return { visible }
}
