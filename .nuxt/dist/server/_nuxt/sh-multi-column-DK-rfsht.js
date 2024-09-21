import "./MDCSlot--O5WvgcF.js";
import { c as useUI } from "../server.mjs";
import { defineComponent, toRef, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-BmDQgCP9.js";
import { g as gridSizes } from "./sh-grid-sizes-BGxtnISM.js";
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
  wrapper: "bg-gray-50 dark:bg-inherit border-2 border-neutral-200 dark:border-neutral-500 rounded-2xl shadow-2xl p-5",
  default: {
    size: 3,
    gap: "gap-4"
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-multi-column",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    description: { default: "" },
    cols: { default: () => config.default.cols },
    gap: { default: () => config.default.gap },
    class: { default: () => void 0 }
  },
  setup(__props) {
    const props = __props;
    const { ui, attrs } = useUI(
      "sh-multi-column",
      toRef(props, "ui"),
      config,
      toRef(props, "class")
    );
    const gridClass = computed(() => {
      const cols = props.cols != void 0 ? props.cols : config.default.cols;
      return ["grid", gridSizes.gridCols[cols], gridSizes.gridRows[1], props.gap].join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}><div class="${ssrRenderClass(unref(gridClass))}">`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "" }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-multi-column.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-multi-column-DK-rfsht.js.map
