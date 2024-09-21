import { _ as _sfc_main$1 } from "./MDC-T9lPa9WT.js";
import { c as useUI, a as __nuxt_component_0, g as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, toRef, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
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
  wrapper: "grid grid-cols-2 gap-4 p-4 mx-auto w-fit dark:bg-inherit rounded-md",
  avatar: "grayscale justify-self-end tracking-widest rounded-full size-48 dark:border dark:border-primary/[0.6]",
  base: "",
  name: "text-3xl font-bold grow text-primary bottom-0 dark:primary",
  role: "text-lg font-semibold text-black -mt-4 dark:text-gray-400",
  company: "text-lg text-gray-500 tracking-widest -mt-5 dark:text-gray-300",
  socials: "flex text-5xl -mx-1 -mt-4",
  icon: "transition-transform transform hover:-translate-y-1 duration-400 dark:text-primary/[0.6] hover:text-primary dark:hover:text-primary-400",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-avatar",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    srcAvatar: { default: "" },
    altAvatar: { default: "" },
    name: { default: "" },
    role: { default: "" },
    company: { default: "" },
    twitter: { default: "" },
    linkedin: { default: "" },
    facebook: { default: "" },
    instagram: { default: "" },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-avatar",
      toRef(props, "ui"),
      config
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDC = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}><img${ssrRenderAttr("src", _ctx.srcAvatar)}${ssrRenderAttr("alt", _ctx.altAvatar)} class="${ssrRenderClass(unref(ui).avatar)}"><div class="${ssrRenderClass(unref(ui).base)}"><div>`);
      if (_ctx.name) {
        _push(ssrRenderComponent(_component_MDC, {
          class: unref(ui).name,
          value: _ctx.name
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      if (_ctx.role) {
        _push(ssrRenderComponent(_component_MDC, {
          class: unref(ui).role,
          value: _ctx.role
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      if (_ctx.company) {
        _push(ssrRenderComponent(_component_MDC, {
          class: unref(ui).company,
          value: "@" + _ctx.company
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass(unref(ui).socials)}">`);
      if (_ctx.twitter) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: _ctx.twitter }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-mdi:twitter",
                dynamic: "",
                class: unref(ui).icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-mdi:twitter",
                  dynamic: "",
                  class: unref(ui).icon
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.linkedin) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: _ctx.linkedin }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-mdi:linkedin",
                dynamic: "",
                class: unref(ui).icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-mdi:linkedin",
                  dynamic: "",
                  class: unref(ui).icon
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.facebook) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: _ctx.facebook }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-mdi:facebook",
                dynamic: "",
                class: unref(ui).icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-mdi:facebook",
                  dynamic: "",
                  class: unref(ui).icon
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.instagram) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: _ctx.instagram }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-mdi:instagram",
                dynamic: "",
                class: unref(ui).icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-mdi:instagram",
                  dynamic: "",
                  class: unref(ui).icon
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-avatar-B69L8UgU.js.map
