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
const config = {
  wrapper: ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-segment",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    description: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { ui, attrs } = useUI(
      "sh-segment",
      toRef(props, "ui"),
      config
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-segment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-segment-BcYLh2aA.js.map
