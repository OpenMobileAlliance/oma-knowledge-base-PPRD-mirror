export default {
  wrapper: "",
  inner: "flex justify-between",
  tagSection: "border border-golden dark:border-golden/[0.6] duration-200 rounded-md block w-fit h-fit pl-3 pr-3 hover:cursor-pointer dark:text-golden hover:border-golden dark:hover:border-golden",
  tags: {
    title: "title flex justify-center items-center",
    clear: "flex items-center border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200",
    list: "flex items-center px-3 py-1 m-1 border border-neutral-300 dark:border-neutral-600 rounded transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer",
    selected: "bg-golden border-golden text-neutral-900 dark:bg-golden dark:border-golden transition-all duration-300",
  },
  header: "",
  title: "title -mt-9 text-3xl font-semibold text-left dark:text-golden",
  underline: "border-b-[3px] border-golden w-32 -mt-2",
  subtitle: "subtitle text-xl font-semibold text-neutral-600 dark:text-neutral-300 text-left -mt-14",
  text: "text text-left font-normal dark:text-neutral-300",
  base: "justify-between flex flex-wrap",
  gap: "gap-0",
  // Default Tailwind CSS values
  default: {
    cols: 3,
  }
}