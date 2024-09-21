import { s as useState, c as useUI, a as __nuxt_component_0, g as __nuxt_component_1 } from "../server.mjs";
import { _ as _sfc_main$1 } from "./MDC-T9lPa9WT.js";
import { defineComponent, toRef, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
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
import "./MDCRenderer-Da3FR2NX.js";
import "scule";
import "property-information";
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
const config = {
  wrapper: "grid grid-row-3 grid-flow-row rounded-2xl max-w-lg max-h-lg p-4 mx-auto justify-items-center text-center hover:scale-105 duration-300 bg-white border-2 border-primary-50 dark:bg-zinc-800 hover:border-primary-200 dark:border-neutral-500 dark:hover:border-primary",
  image: "relative mt-4 w-full h-auto flex shrink mx-auto",
  icon: "relative mt-4 w-full h-auto flex shrink mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-400 dark:text-oma-blue-200",
  title: "text-xl font-medium text-black dark:text-white",
  subtitle: "text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3",
  text: "font-light text-md text-gray-400 dark:text-gray-600 mt-7",
  // Default Tailwind CSS values
  default: {}
};
function useToast() {
  const notifications = useState("notifications", () => []);
  function add(notification) {
    const body = {
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      ...notification
    };
    const index = notifications.value.findIndex((n) => n.id === body.id);
    if (index === -1) {
      notifications.value.push(body);
    }
    return body;
  }
  function remove(id) {
    notifications.value = notifications.value.filter((n) => n.id !== id);
  }
  return {
    add,
    remove
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-micro-card",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    urlWrapper: { default: "" },
    urlImage: { default: "" },
    altImage: { default: "" },
    icon: { default: "" },
    altIcon: { default: "" },
    title: { default: "" },
    subtitle: { default: "" },
    text: { default: "" },
    clipboard: { type: Boolean, default: false },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-micro-card",
      toRef(props, "ui"),
      config
    );
    const toast = useToast();
    const colorName = ref(props.title);
    const copyToClipboard = () => {
      (void 0).clipboard.writeText(colorName.value);
    };
    function onClick() {
      alert("Currently copied: " + colorName.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1;
      const _component_MDC = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.urlWrapper,
        class: "not-prose"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative group"${_scopeId}>`);
            if (_ctx.urlImage) {
              _push2(`<img${ssrRenderAttr("src", _ctx.urlImage)} class="${ssrRenderClass(unref(ui).image)}"${ssrRenderAttr("alt", _ctx.altImage)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: _ctx.icon,
                alt: _ctx.altIcon,
                dynamic: "",
                class: unref(ui).icon
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="relative"${_scopeId}>`);
            if (_ctx.title) {
              _push2(ssrRenderComponent(_component_MDC, {
                class: [unref(ui).title, "transition-opacity duration-300", { "group-hover:text-transparent": _ctx.clipboard === true }],
                value: _ctx.title
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.subtitle) {
              _push2(ssrRenderComponent(_component_MDC, {
                class: [unref(ui).subtitle, "transition-opacity duration-300"],
                value: _ctx.subtitle
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.text) {
              _push2(ssrRenderComponent(_component_MDC, {
                class: [unref(ui).text, "transition-opacity duration-300"],
                value: _ctx.text
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.clipboard) {
              _push2(`<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300"${_scopeId}><button${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                onClick: copyToClipboard,
                name: "i-line-md:clipboard-arrow",
                alt: "cliboard-icon",
                dynamic: "",
                class: "text-5xl text-black"
              }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative group" }, [
                _ctx.urlImage ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: _ctx.urlImage,
                  class: unref(ui).image,
                  alt: _ctx.altImage
                }, null, 10, ["src", "alt"])) : createCommentVNode("", true),
                _ctx.icon ? (openBlock(), createBlock(_component_UIcon, {
                  key: 1,
                  name: _ctx.icon,
                  alt: _ctx.altIcon,
                  dynamic: "",
                  class: unref(ui).icon
                }, null, 8, ["name", "alt", "class"])) : createCommentVNode("", true),
                createVNode("div", { class: "relative" }, [
                  _ctx.title ? (openBlock(), createBlock(_component_MDC, {
                    key: 0,
                    class: [unref(ui).title, "transition-opacity duration-300", { "group-hover:text-transparent": _ctx.clipboard === true }],
                    value: _ctx.title
                  }, null, 8, ["class", "value"])) : createCommentVNode("", true),
                  _ctx.subtitle ? (openBlock(), createBlock(_component_MDC, {
                    key: 1,
                    class: [unref(ui).subtitle, "transition-opacity duration-300"],
                    value: _ctx.subtitle
                  }, null, 8, ["class", "value"])) : createCommentVNode("", true),
                  _ctx.text ? (openBlock(), createBlock(_component_MDC, {
                    key: 2,
                    class: [unref(ui).text, "transition-opacity duration-300"],
                    value: _ctx.text
                  }, null, 8, ["class", "value"])) : createCommentVNode("", true)
                ]),
                _ctx.clipboard ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300"
                }, [
                  createVNode("button", {
                    onClick: ($event) => unref(toast).add({ title: "Copied! Click here to check clipboard!", click: onClick })
                  }, [
                    createVNode(_component_UIcon, {
                      onClick: copyToClipboard,
                      name: "i-line-md:clipboard-arrow",
                      alt: "cliboard-icon",
                      dynamic: "",
                      class: "text-5xl text-black"
                    })
                  ], 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-micro-card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-micro-card-D2cNDghX.js.map
