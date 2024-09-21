import { _ as _sfc_main$2 } from "./MDC-T9lPa9WT.js";
import { u as useId, _ as __nuxt_component_1$1 } from "./Input-Bfwqw1gk.js";
import { defineComponent, toRef, inject, computed, ref, provide, mergeProps, useSSRContext, unref, withCtx, createVNode } from "vue";
import { _ as _export_sfc, m as mergeConfig, f as appConfig, c as useUI, h as __nuxt_component_5, g as __nuxt_component_1$2 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
import "tailwind-merge";
import "@vueuse/core";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@yeger/vue-masonry-wall";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "cookie-es";
const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config$1, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => ui.value.size[props.size ?? config$1.default.size]);
    const inputId = ref(useId("$K7dDJpdOWE"));
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error || _ctx.$slots.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const config = {
  wrapper: "mt-6 dark:bg-inherit border-2 border-neutral-300 dark:border-neutral-500 mx-auto p-4 rounded-xl bg-no-repeat bg-cover size-full max-w-4xl max-h-3xl",
  image: "col-start-1 col-span-1 size-4/6 self-center place-self-center row-span-2 w-fit h-fit",
  title: "text-2xl text-black dark:text-white text-center font-bold",
  subtitle: "text-lg text-center font-semibold text-gray-400 -mt-8",
  text: "text-md text-center font-light not-prose",
  button: "hover:drop-shadow-xl hover:saturate-200 col-start-3 col-span-1 mx-auto mb-4 not-prose",
  colorButton: "black",
  icon: "self-center place-self-center row-start-1 row-span-2 col-start-5 col-span-1",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-action-card",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    title: { default: "" },
    subtitle: { default: "" },
    text: { default: "" },
    urlImage: { default: "" },
    altImage: { default: "" },
    urlButton: { default: "" },
    labelButton: { default: "" },
    colorButton: { default: "" },
    styleButton: { default: "solid" },
    icon: { default: "" },
    altIcon: { default: "" },
    imageBackground: { default: "" },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-action-card",
      toRef(props, "ui"),
      config
    );
    const backgroundClass = computed(() => {
      if (props.imageBackground) {
        return "background-image: url(" + props.imageBackground + ")";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDC = _sfc_main$2;
      const _component_UFormGroup = __nuxt_component_1;
      const _component_UInput = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_5;
      const _component_UIcon = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper,
        style: backgroundClass.value
      }, _attrs))}><div class="grid grid-cols-5 gap-4">`);
      if (_ctx.urlImage) {
        _push(`<img class="${ssrRenderClass(unref(ui).image)}"${ssrRenderAttr("src", _ctx.urlImage)}${ssrRenderAttr("alt", _ctx.altImage)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-start-2 col-span-3 flex-col">`);
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
      _push(ssrRenderComponent(_component_UFormGroup, {
        class: "pb-4",
        error: "",
        size: "xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              placeholder: "you@example.com",
              icon: "i-heroicons-envelope",
              class: "dark:invert"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                placeholder: "you@example.com",
                icon: "i-heroicons-envelope",
                class: "dark:invert"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: _ctx.urlButton,
        target: "_blank",
        label: _ctx.labelButton,
        color: _ctx.colorButton,
        size: "xl",
        class: unref(ui).button,
        variant: _ctx.styleButton
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.icon,
        dynamic: "",
        size: "lg",
        class: unref(ui).icon,
        alt: _ctx.altIcon
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-action-card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-action-card-CeA6E2SL.js.map
