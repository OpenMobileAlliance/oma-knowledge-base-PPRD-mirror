import { _ as _sfc_main$1 } from "./MDC-T9lPa9WT.js";
import { c as useUI } from "../server.mjs";
import { defineComponent, toRef, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
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
  wrapper: "bg-gray-50 dark:bg-inherit border-2 border-neutral-200 dark:border-neutral-500 rounded-2xl shadow-2xl p-5",
  title: "font-bold text-3xl dark:text-white",
  subtitle: "font-semibold text-2xl -mt-6 dark:text-neutral-400",
  text: "dark:text-neutral-500 not-prose",
  image: "mx-auto rounded-xl",
  status: "",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-text-img",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    positionText: { default: "right" },
    spanText: { default: "m" },
    alignText: { default: "center" },
    title: { default: "" },
    subtitle: { default: "" },
    text: { default: "" },
    urlImage: { default: "" },
    altImage: { default: "" },
    status: { default: "" },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-text-img",
      toRef(props, "ui"),
      config
    );
    const positionText = toRef(props, "positionText");
    const spanText = toRef(props, "spanText");
    const alignText = toRef(props, "alignText");
    const status = toRef(props, "status");
    const COL_START_VALUES = [
      "",
      "col-start-1",
      "col-start-2",
      "col-start-3",
      "col-start-4"
    ];
    const positionTextClass = computed(() => {
      if (positionText.value === "right" && spanText.value === "l") {
        return COL_START_VALUES[2];
      } else if (positionText.value === "left") {
        return COL_START_VALUES[1];
      } else {
        return COL_START_VALUES[3];
      }
    });
    const spanTextClass = computed(() => {
      switch (spanText.value) {
        case "s":
          if (positionText.value === "left") {
            return "col-start-1 col-span-1";
          } else {
            return "col-start-4 col-span-1";
          }
        case "m":
          return "col-span-2";
        case "l":
          if (positionText.value === "left") {
            return "col-start-1 col-span-3";
          } else {
            return "col-start-2 col-span-3";
          }
        default:
          return "col-span-2";
      }
    });
    const alignTextClass = computed(() => {
      switch (alignText.value) {
        case "left":
          return "text-left";
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-center";
      }
    });
    const imgPositionClass = computed(() => {
      if (positionText.value === "left" && spanText.value === "s") {
        return "col-start-2";
      } else if (positionText.value === "right") {
        return "col-start-1";
      }
    });
    const imgSpanClass = computed(() => {
      if (spanText.value === "l" && positionText.value === "left") {
        return "col-start-4 col-span-1";
      } else if (spanText.value === "l" && positionText.value === "right") {
        return "col-start-1 col-span-1";
      } else if (spanText.value === "s" && positionText.value === "left") {
        return "col-start-2 col-span-3";
      } else if (spanText.value === "s" && positionText.value === "right") {
        return "col-start-1 col-span-3";
      } else {
        return "col-span-2";
      }
    });
    const Status = computed(() => {
      switch (status.value) {
        case "a":
          return config.status.a;
        case "b":
          return config.status.b;
        case "c":
          return config.status.c;
        case "d":
          return config.status.d;
        default:
          return config.status.default;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDC = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(ui).wrapper, Status.value]
      }, _attrs))}>`);
      if (_ctx.urlImage) {
        _push(`<div class="grid grid-cols-4 grid-rows-1 grid-flow-col gap-8 items-center"><img${ssrRenderAttr("src", _ctx.urlImage)}${ssrRenderAttr("alt", _ctx.altImage)} class="${ssrRenderClass([imgPositionClass.value, imgSpanClass.value, unref(ui).image])}"><div class="${ssrRenderClass([positionTextClass.value, spanTextClass.value, alignTextClass.value])}">`);
        if (_ctx.title) {
          _push(ssrRenderComponent(_component_MDC, {
            class: unref(ui).title,
            value: _ctx.title
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.subtitle) {
          _push(ssrRenderComponent(_component_MDC, {
            class: unref(ui).subtitle,
            value: _ctx.subtitle
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(ssrRenderComponent(_component_MDC, {
            class: unref(ui).text,
            value: _ctx.text
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 grid-rows-1"><div class="${ssrRenderClass([alignTextClass.value])}">`);
        if (_ctx.title) {
          _push(ssrRenderComponent(_component_MDC, {
            class: unref(ui).title,
            value: _ctx.title
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.subtitle) {
          _push(ssrRenderComponent(_component_MDC, {
            class: unref(ui).subtitle,
            value: _ctx.subtitle
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(ssrRenderComponent(_component_MDC, {
            class: [unref(ui).text, "items-center"],
            value: _ctx.text
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-text-img.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-text-img-CRi9k8uZ.js.map
