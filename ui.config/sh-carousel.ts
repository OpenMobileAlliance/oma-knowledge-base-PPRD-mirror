export default {
  wrapper: "relative dark:bg-neutral-800/[0.5] rounded-lg w-full mt-6",
  title: "title text-center text-[24px] font-extrabold dark:saturate-[300%] break-words",
  subtitle: "subtitle text-center text-[20px] font-bold dark:saturate-[180%] -mt-5 break-words",
  inner: "overflow-hidden",
  navigation: {
    wrapper: "absolute left-1/2 transform -translate-x-1/2 flex gap-2 mt-2 bottom-[-1.5rem]",
    inner: "w-3 h-3 rounded-full",
    active: "bg-golden saturate-[300%]",
    inactive: "bg-gray-500",
  },
  // Default Tailwind CSS values
  default: {
  }
}