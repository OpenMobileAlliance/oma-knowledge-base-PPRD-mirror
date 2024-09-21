import "./MDCSlot--O5WvgcF.js";
import { c as useUI } from "../server.mjs";
import { defineComponent, toRef, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
const status = {
  a: "bg-[#FFFFFF] border-[#E3E3E3] text-[#FF0000]",
  b: "bg-[#000000] border-[#000000] text-[#00FF00]",
  c: "bg-[#FFFF00] border-[#FFFF00] text-[#000000]",
  d: "bg-[#ADD8E6] border-[#ADD8E6] text-[#0000FF]",
  default: "bg-neutral-200 border-neutral-200 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-300 text-gray-700"
};
const config = {
  wrapper: status.default,
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-badge",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    description: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-badge",
      toRef(props, "ui"),
      config
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(ui).wrapper, "w-fit rounded-3xl px-2 py-1"]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-badge-GQLY_EWp.js.map
