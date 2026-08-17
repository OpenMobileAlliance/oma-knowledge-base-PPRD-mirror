export default {
  wrapper: "relative w-full",
  title: "title text-center text-[24px] font-extrabold dark:saturate-[300%] break-words",
  subtitle: "subtitle text-center text-[20px] font-bold dark:saturate-[180%] -mt-5 break-words",
  inner: "overflow-hidden",
  track: "grid grid-cols-1",
  group: "col-start-1 row-start-1 flex justify-center gap-4",
  item: {
    wrapper: "w-full",
  },
  navigation: {
    wrapper: "absolute z-10 flex gap-2",
    inner: "rounded-full",
    active: "bg-golden saturate-[300%]",
    inactive: "bg-gray-500",
  },
  horizontal: {
    group: "px-4",
    item: {
      single: "max-w-md",
      multiple: "max-w-sm",
    },
    navigation: {
      wrapper: "left-1/2 transform -translate-x-1/2 bottom-2",
      inner: "w-3 h-3",
    },
  },
  vertical: {
    group: "items-center px-12",
    item: {
      single: "max-w-full",
      multiple: "max-w-sm",
    },
    navigation: {
      wrapper: "left-4 top-1/2 transform -translate-y-1/2 flex-col",
      inner: "w-2 h-2",
    },
  },
  // Default Tailwind CSS values
  default: {
  }
}
