export default {
  default: {
    wrapper: "container overflow-hidden relative group mt-4 flex flex-col rounded-2xl pb-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 flex shrink-0 mx-auto dark:saturate-[200%] z-20 mb-4 text-[2rem]",
    title: "title text-xl font-bold break-words z-20",
    subtitle: "subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-golden/[0.5] mt-3 break-words z-20 text-xl",
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  },
  flat: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pb-4 mx-auto max-w-md w-full h-full justify-items-center text-center bg-transparent dark:bg-transparent",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-4 flex shrink-0 mx-auto text-[4rem] z-20",
    title: "title text-xl font-bold text-black dark:text-white break-words z-20",
    subtitle: "subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-1 break-words z-20 text-xl",
    text: "text font-light text-[1rem] mt-7 break-words z-20",
  }
}