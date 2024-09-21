import "./MDCSlot--O5WvgcF.js";
import { c as useUI } from "../server.mjs";
import { defineComponent, toRef, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-BmDQgCP9.js";
import "./node-B5VQLu6X.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "@yeger/vue-masonry-wall";
import "@vueuse/core";
import "klona";
import "tailwind-merge";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ohash";
import "destr";
import "cookie-es";
const config = {
  wrapper: "flex items-center space-x-1 mt-4 mb-4 rounded-2xl shadow-2xl",
  base: "flex mx-2 p-1",
  alert: {
    success: "bg-[#F0FFF4] dark:bg-[#22543D] text-[#2F855A] dark:text-[#9AE6B4] px-2 py-3 relative border-l-4 border-[#68D391] dark:border-[#2F855A]",
    warning: "bg-[#FFFAF0] dark:bg-[#744210] text-[#C05621] dark:text-[#FBD38D] px-2 py-3 relative border-l-4 border-[#F6AD55] dark:border-[#B7791F]",
    danger: "bg-[#FFF5F5] dark:bg-[#742A2A] text-[#C53030] dark:text-[#FEB2B2] px-2 py-3 relative border-l-4 border-[#FC8181] dark:border-[#C53030]",
    info: "bg-[#EBF8FF] dark:bg-[#2A4365] text-[#2B6CB0] dark:text-[#90CDF4] px-2 py-3 relative border-l-4 border-[#63B3ED] dark:border-[#2B6CB0]"
  },
  icon: {
    success: "text-[#68D391] dark:text-[#68D391] i-heroicons-check-circle",
    warning: "text-[#F6AD55] dark:text-[#F6AD55] i-heroicons-exclamation-circle",
    danger: "text-[#FC8181] dark:text-[#FC8181] i-heroicons-x-circle",
    info: "text-[#63B3ED] dark:text-[#63B3ED] i-heroicons-information-circle"
  },
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-alert",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    typeAlert: { default: "info" },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-alert",
      toRef(props, "ui"),
      config
    );
    const alert = computed(() => {
      switch (props.typeAlert) {
        case "success":
          return config.alert.success;
        case "warning":
          return config.alert.warning;
        case "danger":
          return config.alert.danger;
        default:
          return config.alert.info;
      }
    });
    const icon = computed(() => {
      switch (props.typeAlert) {
        case "success":
          return config.icon.success;
        case "warning":
          return config.icon.warning;
        case "danger":
          return config.icon.danger;
        default:
          return config.icon.info;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "alert",
        class: [unref(ui).wrapper, unref(alert)]
      }, _attrs))}><div class="${ssrRenderClass(unref(ui).base)}"><i class="${ssrRenderClass(["size-7", unref(icon)])}"></i></div>`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-alert-BROIf8ug.js.map
