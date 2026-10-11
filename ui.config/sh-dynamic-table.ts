export default {
  wrapper: "bg-white dark:bg-inherit border border-neutral-300 dark:border-neutral-700 rounded-md p-5",
  header: "font-semibold text-center bg-neutral-100 dark:bg-neutral-800 dark:text-golden",
  base: "",
  footer: "font-semibold text-center bg-neutral-100 dark:bg-neutral-800 dark:text-golden",
  search: "pb-4",
  filter: "",
  // Scroll container for the table. The max height holds a header plus ten
  // single-line rows, so larger page sizes ("Show: 25/50/100/All") scroll
  // inside the component instead of stretching the page past the viewport.
  // The prose margin that used to sit on the table lives here instead, so it
  // stays outside the scrolling area.
  tableContainer: 'w-full my-8 max-h-[38rem] overflow-x-auto overflow-y-auto',
  table: 'min-w-full my-0 divide-y divide-gray-300 dark:divide-gray-700',
  tbody: 'divide-y divide-gray-300 dark:divide-gray-700',
  thead: "",
  tr: {
    base: '',
    selected: 'bg-oma-blue-400 hover:bg-oma-blue-300 text-white dark:bg-oma-blue-600 dark:hover:bg-oma-blue-500 dark:text-golden',
    active: 'hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer'
  },
  th: {
    base: 'sticky top-0 z-10 text-left rtl:text-right bg-neutral-100 dark:bg-neutral-800 shadow-[inset_0_-1px_0_theme(colors.gray.300)] dark:shadow-[inset_0_-1px_0_theme(colors.gray.700)]',
    padding: 'px-4 py-3.5',
    color: 'text-neutral-900 dark:text-neutral-100',
    font: 'font-semibold',
    size: 'text-sm'
  },
  td: {
    base: 'whitespace-nowrap text-pretty ',
    padding: 'px-4 py-4',
    color: 'text-neutral-600 dark:text-golden dark:brightness-[85%]',
    font: '',
    size: 'text-sm'
  },
  pagination: '',
  perPage: [10, 25, 50, 100],
  default: {
    perPage: 10,
    sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
    sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
    sortButton: {
      icon: 'i-heroicons-arrows-up-down-20-solid',
      trailing: true,
      square: true,
      color: 'gray' as const,
      variant: 'ghost' as const,
      class: '-m-1.5 font-semibold text-sm'
    },
  }
}
