<template>
  <div :class="computedHeightClass" class="w-fit sm:w-full bg-golden/[0.2] dark:bg-[#19191a]"
    :style="{ fontFamily: main.font.type }">
    <ShAnnouncement :class="['z-50', route.path !== '/' ? '' : 'sticky w-full top-0']" />
    <AppHeader v-if="route.path !== '/'" class="flex py-4" title="OMA">
      <template v-slot:logo>
        <img v-if="computedLogoSrc" src="/logo-dark.png" alt="logo-dark" class="shrink-0 grow-0 h-16 w-[265px] object-contain object-left" />
        <img v-if="!computedLogoSrc" src="/logo-light.png" alt="logo-light" class="shrink-0 grow-0 h-16 w-[265px] object-contain object-left" />
        <!-- <img v-if="windowWidth < 640" src="/logo.png" alt="Logo" class="h-16" /> -->
      </template>
    </AppHeader>
    <div :class="route.path === '/' ? 'size-full' : 'w-full pb-24 px-4 sm:px-6 lg:px-8'">
      <NuxtPage />
    </div>
    <AppFooter v-if="route.path !== '/' && route" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">

const main = useAppConfig().main;
const route = useRoute();

const theme = useColorMode();

const computedLogoSrc = computed(() => {
  return theme.value === 'dark';
});

const baseUrl = 'https://www.openmobilealliance.org/';

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: baseUrl + route.path
    }
  ]
}))

// Use onMounted to ensure the code runs only on the client side
onMounted(() => {
  for (let i = 1; i <= 7; i++) {
    document.documentElement.style.setProperty(`--h${i}-font-type`, main[`h${i}`].font.type);
    document.documentElement.style.setProperty(`--h${i}-font-size`, main[`h${i}`].font.size);
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const el = document.querySelector(`a[id="toc-${id}"]`)
      if (entry.intersectionRatio > 0) {
        if (el) {
          el.classList.add('bg-primary-100');
          el.classList.add('rounded-lg');
          el.classList.add('dark:bg-neutral-500');
        }
      } else {
        if (el) {
          el.classList.remove('bg-primary-100');
          el.classList.remove('rounded-lg');
          el.classList.remove('dark:bg-neutral-500');
        }
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((section) => {
    observer.observe(section);
  });

});

const hasScrollbar = ref(false)

const checkScrollbar = () => {
  const hasVerticalOverflow = document.documentElement.scrollHeight > document.documentElement.clientHeight
  hasScrollbar.value = hasVerticalOverflow
}

const computedHeightClass = computed(() => (hasScrollbar.value ? 'h-full' : 'h-screen'))

let observer: MutationObserver | null = null

onMounted(() => {
  checkScrollbar()

  // Check for changes in the document that may affect scrollability
  observer = new MutationObserver(checkScrollbar)
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  })
  window.addEventListener('resize', checkScrollbar)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('resize', checkScrollbar)
})

const windowWidth = ref(0);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

// Keep scroll-padding-top equal to the sticky header's real height (it includes the
// breadcrumbs when they are visible, and changes across breakpoints), plus a small gap
let headerObserver: ResizeObserver | null = null

const updateScrollOffset = () => {
  const header = document.querySelector('header')
  const offset = header ? header.getBoundingClientRect().height : 0
  document.documentElement.style.setProperty('--scroll-offset', `${Math.ceil(offset)}px`)
}

const observeHeader = () => {
  headerObserver?.disconnect()
  const header = document.querySelector('header')
  if (header) headerObserver?.observe(header)
  updateScrollOffset()
}

onMounted(() => {
  headerObserver = new ResizeObserver(updateScrollOffset)
  observeHeader()
})

watch(() => route.path, () => nextTick(observeHeader))

onBeforeUnmount(() => headerObserver?.disconnect())

onMounted(() => {
  // Add the "Copy to Clipboard" button to all code blocks
  document.querySelectorAll('pre').forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerText = 'Copy';
    button.addEventListener('click', () => copyCode(pre));
    pre.appendChild(button);
  });
});

const copyCode = (pre: HTMLElement) => {
  const code = pre.querySelector('code');
  if (code) {
    navigator.clipboard.writeText(code.textContent || '').then(() => {
      alert('Copied to clipboard!');
    });
  }
};
</script>

<style>
html {
  scroll-behavior: smooth !important;
  scroll-padding-top: calc(var(--scroll-offset, 8rem) + 1rem);
}

h1 {
  font-size: var(--h1-font-size);
  font-family: var(--h1-font-type);
}

h2 {
  font-size: var(--h2-font-size);
  font-family: var(--h2-font-type);
}

h3 {
  font-size: var(--h3-font-size);
  font-family: var(--h3-font-type);
}

h4 {
  font-size: var(--h4-font-size);
  font-family: var(--h4-font-type);
}

h5 {
  font-size: var(--h5-font-size);
  font-family: var(--h5-font-type);
}

h6 {
  font-size: var(--h6-font-size);
  font-family: var(--h6-font-type);
}

h7 {
  font-size: var(--h7-font-size);
  font-family: var(--h7-font-type);
}

/* Dark HTML elements */
.dark .par,
/* custom class for paragraph located in /[...slug].vue */
.dark em,
.dark ul,
.dark ol,
.dark ::marker,
.dark td,
.dark th {
  color: theme('colors.golden');
}

.dark b {
  color: theme('colors.golden'); /* Lighter golden shade for better contrast */
  font-weight: 600; /* Slightly reduce boldness */
  filter: saturate(2.5) brightness(0.85);
}

.dark strong {
  color: theme('colors.golden'); /* Slightly brighter shade */
  font-weight: 600; /* Adjust boldness */
  filter: saturate(2.8) brightness(0.85);
}

.dark h1,
.dark h2,
.dark h3 {
  color: theme('colors.golden');
  filter: saturate(3) brightness(0.8);
}

.dark h4,
.dark h5,
.dark h6 {
  color: theme('colors.golden');
  filter: saturate(3) brightness(0.75);
}

/* End of Dark HTML elements */

/* Links */
.prose a {
  text-decoration: none !important;
}

a {
  color: theme('colors.oma-blue.300');
  text-decoration: none;
}

a:hover {
  color: theme('colors.blue.700');
}

.dark a {
  color: theme('colors.oma-blue.200');
  text-decoration: none;
}

.dark a:hover {
  color: theme('colors.oma-blue.400');
}

/* Heading anchor links keep the heading color instead of the link color */
:is(h1, h2, h3, h4, h5, h6) > a,
:is(h1, h2, h3, h4, h5, h6) > a:hover,
.prose :is(h1, h2, h3, h4, h5, h6) > a,
.prose :is(h1, h2, h3, h4, h5, h6) > a:hover,
.dark :is(h1, h2, h3, h4, h5, h6) > a,
.dark :is(h1, h2, h3, h4, h5, h6) > a:hover,
.dark .prose :is(h1, h2, h3, h4, h5, h6) > a,
.dark .prose :is(h1, h2, h3, h4, h5, h6) > a:hover {
  color: inherit;
}

/* Light mode headings use the regular dark text color (dark mode keeps golden, see above) */
:root:not(.dark) .prose :is(h1, h2, h3, h4, h5, h6) {
  color: theme('colors.neutral.900');
}

/* Heading anchor hover: heading slides right, a hash fades in where it used to be */
:is(h1, h2, h3, h4, h5, h6):has(> a) {
  position: relative;
}

/* Heading anchor hover: heading slides right, a hash fades in where it used to be */
:is(h1, h2, h3, h4, h5, h6) > a {
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}

/* The hash lives inside the link so clicking it follows the anchor */
:is(h1, h2, h3, h4, h5, h6) > a::before {
  content: '#';
  position: absolute;
  left: -1em;
  opacity: 0;
  transform: translateX(-0.4em);
  color: inherit;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

:is(h1, h2, h3, h4, h5, h6):hover > a {
  transform: translateX(1em);
}

:is(h1, h2, h3, h4, h5, h6):hover > a::before {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  :is(h1, h2, h3, h4, h5, h6) > a,
  :is(h1, h2, h3, h4, h5, h6) > a::before {
    transition: none;
  }
}

/* End of Links */

/* CodeBlock */
/* Inline code */
code {
  border-radius: 4px;
  background-color: theme('colors.golden / 45%');
  color: theme('colors.neutral.900');
  padding: 2px 6px;
  position: relative;
}

code::before,
code::after {
  content: '';
  display: none;
}

.dark code {
  background-color: theme('colors.neutral.800');
  color: theme('colors.golden');
}

pre {
  position: relative;
}

/* Fenced code blocks: tinted golden surface in light mode, dark neutral surface in dark mode.
   Token colors come from the github-light / github-dark Shiki themes (see nuxt.config.ts). */
.prose pre {
  position: relative;
  padding: 2.5rem 1.25rem 1rem;
  border: 1px solid theme('colors.golden');
  border-radius: 6px;
  background-color: theme('colors.golden / 20%');
  color: theme('colors.neutral.800');
  box-shadow: none;
}

.dark .prose pre {
  border-color: theme('colors.neutral.700');
  background-color: theme('colors.neutral.900');
  color: theme('colors.neutral.100');
}

pre code,
.dark pre code {
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  box-shadow: none;
  color: inherit;
}

.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: theme('colors.golden');
  color: theme('colors.neutral.900');
  border: 1px solid theme('colors.golden');
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s ease-in-out;
}

.dark .copy-btn {
  background-color: transparent;
  color: theme('colors.golden');
}

.copy-btn:hover {
  opacity: 1;
}
/* End of CodeBlock */

/* Blockquote */
.light blockquote {
  background-color: theme('colors.golden / 30%');
  border-radius: 6px;
  padding: 1rem;
  border-left: 4px solid theme('colors.oma-yellow.500');
  color: theme('colors.neutral.800');
  font-style: italic;
}

.light blockquote p {
  margin: 0;
}

.dark blockquote {
  background-color: theme('colors.neutral.800');
  border-radius: 6px;
  padding: 1rem;
  border-left: 4px solid theme('colors.golden');
  margin: 1.5rem 0;
  font-style: italic;
}

.dark blockquote p {
  margin: 0;
  color: theme('colors.golden');
}

/* End of Blockquote */

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
}

th:first-child,
td:first-child {
  padding-left: 1em;
}

th:first-child {
  border-top-left-radius: 0.6rem;
}

th:last-child {
  border-top-right-radius: 0.6rem;
}

th,
td {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  font-size: 20px;
  text-align: left;
}

th {
  background-color: theme('colors.zinc.200');
}

th,
td {
  border-left: none;
  border-right: none;
}

.dark th {
  background-color: theme('colors.zinc.700');
  color: #f2f2f2;
}

/* End of Table */
</style>
