import { _ as _sfc_main$1 } from "./MDC-T9lPa9WT.js";
import "./MDCSlot--O5WvgcF.js";
import { c as useUI } from "../server.mjs";
import { defineComponent, toRef, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-BmDQgCP9.js";
import { g as gridSizes } from "./sh-grid-sizes-BGxtnISM.js";
import "./MDCRenderer-Da3FR2NX.js";
import "destr";
import "scule";
import "property-information";
import "ohash";
import "hookable";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "unified";
import "remark-parse";
import "remark-rehype";
import "remark-mdc";
import "hast-util-to-string";
import "github-slugger";
import "detab";
import "micromark-util-sanitize-uri";
import "remark-emoji";
import "remark-gfm";
import "rehype-external-links";
import "rehype-sort-attribute-values";
import "rehype-sort-attributes";
import "rehype-raw";
import "./node-B5VQLu6X.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@yeger/vue-masonry-wall";
import "@vueuse/core";
import "tailwind-merge";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "cookie-es";
const config = {
  wrapper: "",
  header: {
    wrapper: "",
    title: "text-xl not-prose",
    subtitle: "text-slate-400 py-0 not-prose"
  },
  main: "",
  footer: "text-slate-300 py-0 not-prose",
  default: {
    size: 1
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-column",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    description: { default: "" },
    title: { default: "" },
    subtitle: { default: "" },
    footerText: { default: "" },
    size: { default: () => config.default.size },
    class: { default: () => void 0 }
  },
  setup(__props) {
    const props = __props;
    const { ui, attrs } = useUI(
      "sh-column",
      toRef(props, "ui"),
      config,
      toRef(props, "class")
    );
    const sizeClass = computed(() => {
      const size = props.size ? props.size : config.default.size;
      return gridSizes.colSpan[size];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDC = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(ui).wrapper, unref(sizeClass)]
      }, unref(attrs), _attrs))}>`);
      if (_ctx.title || _ctx.subtitle) {
        _push(`<div class="${ssrRenderClass(unref(ui).header.wrapper)}">`);
        if (_ctx.title) {
          _push(ssrRenderComponent(_component_MDC, {
            value: _ctx.title,
            class: unref(ui).header.title
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.subtitle) {
          _push(ssrRenderComponent(_component_MDC, {
            value: _ctx.subtitle,
            class: unref(ui).header.subtitle
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).main)}">`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "" }, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.footerText) {
        _push(`<div class="${ssrRenderClass(unref(ui).footer)}">`);
        _push(ssrRenderComponent(_component_MDC, { value: _ctx.footerText }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-column.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-column-BVwu72Fo.js.map
