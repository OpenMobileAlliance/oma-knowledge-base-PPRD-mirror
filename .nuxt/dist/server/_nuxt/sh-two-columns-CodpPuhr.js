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
  wrapper: "",
  default: {
    size: "L",
    gap: "gap-4"
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-two-columns",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    description: { default: "" },
    size: { default: () => config.default.size },
    gap: { default: () => config.default.gap },
    class: { default: () => void 0 }
  },
  setup(__props) {
    const VALID_SIZES = {
      "2XS": "grid-cols-10 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-9",
      "XS": "grid-cols-5 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-4",
      "S": "grid-cols-4 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-3",
      "M": "grid-cols-3 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-2",
      "L": "grid-cols-2 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-1",
      "XL": "grid-cols-3 [&>*:nth-child(odd)]:col-span-2 [&>*:nth-child(even)]:col-span-1",
      "2XL": "grid-cols-4 [&>*:nth-child(odd)]:col-span-3 [&>*:nth-child(even)]:col-span-1",
      "3XL": "grid-cols-5 [&>*:nth-child(odd)]:col-span-4 [&>*:nth-child(even)]:col-span-1",
      "4XL": "grid-cols-10 [&>*:nth-child(odd)]:col-span-9 [&>*:nth-child(even)]:col-span-1"
    };
    const props = __props;
    const { ui, attrs } = useUI(
      "sh-two-columns",
      toRef(props, "ui"),
      config,
      toRef(props, "class")
    );
    const gridClass = computed(() => {
      const selectedSize = props.size != void 0 ? props.size : config.default.size;
      return ["grid", VALID_SIZES[selectedSize], props.gap].join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(gridClass))}">`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "" }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-two-columns.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-two-columns-CodpPuhr.js.map
