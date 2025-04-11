<template>
  <div :class="computedHeightClass" class="w-fit sm:w-full bg-golden/[0.2] dark:bg-[#19191a]"
    :style="{ fontFamily: main.font.type }">
    <ShAnnouncement :class="['z-50', route.path !== '/' ? '' : 'sticky w-full top-0']" />
    <AppHeader v-if="route.path !== '/'" class="flex py-4" title="OMA">
      <template v-slot:logo>
        <img v-if="computedLogoSrc" src="/logo-dark.png" alt="logo-dark" class="shrink-0 grow-0 h-16" />
        <img v-if="!computedLogoSrc" src="/logo-light.png" alt="logo-light" class="shrink-0 grow-0 h-16" />
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
  document.querySelectorAll('h2, h3').forEach((section) => {
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
  scroll-padding-top: 16rem;
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

/* End of Links */

/* CodeBlock */
code {
  border: 3px solid #dcdcdc;
  border-radius: 6px;
  background-color: #dcdcdc;
  padding: 2px 6px;
  position: relative;
}

code::before,
code::after {
  content: '';
  display: none;
}

.dark code {
  border: 3px solid #414141;
  border-radius: 6px;
  background-color: #414141;
  padding: 2px 6px;
  color: #ffffff;
}

pre code {
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  box-shadow: none;
}

.dark pre code {
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  box-shadow: none;
  color: #ffffff;
}
.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

.copy-btn:hover {
  opacity: 1;
}

pre {
  position: relative;
  padding-top: 2.5rem; /* Extra space for the button */
}
/* End of CodeBlock */

/* Blockquote */
.light blockquote {
  background-color: theme('colors.neutral.200');
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #858585;
  color: #333;
  font-style: italic;
}

.light blockquote p {
  margin: 0;
}

.dark blockquote {
  background-color: theme('colors.neutral.700');
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid #ccc;
  margin: 1.5rem 0;
  font-style: italic;
}

.dark blockquote p {
  margin: 0;
  color: white;
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
