/**
 * Keeps `--scroll-offset` (used by `scroll-padding-top` in main.css) equal to the
 * real height of the sticky header. The header grows with the breadcrumbs and
 * changes across breakpoints, so anchors would otherwise end up underneath it.
 */
export function useScrollOffset() {
  const route = useRoute()
  let resizeObserver: ResizeObserver | undefined

  const update = () => {
    const header = document.querySelector('header')
    const offset = header ? header.getBoundingClientRect().height : 0
    document.documentElement.style.setProperty('--scroll-offset', `${Math.ceil(offset)}px`)
  }

  const observe = () => {
    resizeObserver?.disconnect()
    const header = document.querySelector('header')
    if (header) resizeObserver?.observe(header)
    update()
  }

  onMounted(() => {
    resizeObserver = new ResizeObserver(update)
    observe()
  })

  watch(() => route.path, () => nextTick(observe))

  onBeforeUnmount(() => resizeObserver?.disconnect())
}
