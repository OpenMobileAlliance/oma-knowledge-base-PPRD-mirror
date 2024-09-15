export default {
  wrapper: "",
  header: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  footer: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  search: "pb-4",
  filter: "",
  table: 'min-w-full divide-y divide-gray-300 dark:divide-gray-700',
  tbody: 'divide-y divide-gray-300 dark:divide-gray-700',
  tr: {
    base: '',
    selected: 'bg-gray-50 dark:bg-gray-800/50',
    active: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer'
  },
  th: {
    base: 'text-left rtl:text-right',
    padding: 'px-4 py-3.5',
    color: 'text-gray-900 dark:text-white',
    font: 'font-semibold',
    size: 'text-sm'
  },
  td: {
    base: 'whitespace-nowrap text-pretty ',
    padding: 'px-4 py-4',
    color: 'text-gray-500 dark:text-gray-400',
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
      class: '-m-1.5'
    },
  }
}
