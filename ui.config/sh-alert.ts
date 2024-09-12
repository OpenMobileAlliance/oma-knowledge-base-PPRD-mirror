export default {
  wrapper: "flex items-center space-x-1 mt-4 mb-4 rounded-2xl shadow-2xl",
  base: "flex mx-2 p-1",
  alert: {
    success: 'bg-[#F0FFF4] dark:bg-[#22543D] text-[#2F855A] dark:text-[#9AE6B4] px-2 py-3 relative border-l-4 border-[#68D391] dark:border-[#2F855A]',
    warning: 'bg-[#FFFAF0] dark:bg-[#744210] text-[#C05621] dark:text-[#FBD38D] px-2 py-3 relative border-l-4 border-[#F6AD55] dark:border-[#B7791F]',
    danger: 'bg-[#FFF5F5] dark:bg-[#742A2A] text-[#C53030] dark:text-[#FEB2B2] px-2 py-3 relative border-l-4 border-[#FC8181] dark:border-[#C53030]',
    info: 'bg-[#EBF8FF] dark:bg-[#2A4365] text-[#2B6CB0] dark:text-[#90CDF4] px-2 py-3 relative border-l-4 border-[#63B3ED] dark:border-[#2B6CB0]',
  },
  icon: {
    success: 'text-[#68D391] dark:text-[#68D391] i-heroicons-check-circle',
    warning: 'text-[#F6AD55] dark:text-[#F6AD55] i-heroicons-exclamation-circle',
    danger: 'text-[#FC8181] dark:text-[#FC8181] i-heroicons-x-circle',
    info: 'text-[#63B3ED] dark:text-[#63B3ED] i-heroicons-information-circle',
  },
  // Default Tailwind CSS values
  default: {
  }
}
