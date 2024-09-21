import { c as useUI, e as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './MDC-T9lPa9WT.mjs';
import { defineComponent, toRef, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext, renderSlot as renderSlot$1 } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/server-renderer/index.mjs';
import { s as ssrRenderSlot } from './ssrSlot-BmDQgCP9.mjs';
import { f as flatUnwrap } from './node-B5VQLu6X.mjs';
import { twMerge, twJoin } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/h3/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/devalue/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/ufo/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/destr/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/hookable/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/klona/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/scule/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/defu/dist/defu.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/ohash/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unstorage/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/pathe/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/shiki/dist/core.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unified/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/mdast-util-to-string/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/micromark/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/micromark-util-character/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/micromark-util-chunked/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/slugify/slugify.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-parse/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-rehype/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/hast-util-to-string/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/github-slugger/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/detab/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-emoji/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-gfm/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-external-links/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-raw/index.js';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unhead/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unctx/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@yeger/vue-masonry-wall/dist/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@vueuse/core/index.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/cookie-es/dist/index.mjs';
import './MDCRenderer-Da3FR2NX.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/property-information/index.js';

const config = {
  wrapper: "align-middle m-1 hover:saturate-150",
  inner: "text-center not-prose mx-auto",
  styleButton: {
    solid: "bg-{colorButton}-500 dark:bg-{colorButton}-400 text-white dark:text-gray-900 no-underline",
    outline: "text-{colorButton}-500 dark:text-{colorButton}-400 ring-1 ring-inset ring-{colorButton}-500 dark:ring-{colorButton}-400 no-underline",
    link: "text-{colorButton}-500 hover:text-{colorButton}-600 disabled:text-{colorButton}-500 dark:text-{colorButton}-400 dark:hover:text-{colorButton}-500 dark:disabled:text-{colorButton}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{colorButton}-500 dark:focus-visible:ring-{colorButton}-400"
  },
  fullWidth: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  rounded: "rounded-md",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl"
  },
  padding: {
    "2xs": "px-1 py-1",
    xs: "px-1.5 py-1.5",
    sm: "px-2 py-2",
    md: "px-2.5 py-2.5",
    base: "px-3 py-3",
    lg: "px-7 py-6",
    xl: "px-8 py-7",
    "2xl": "px-9 py-8",
    "3xl": "px-10 py-9",
    "4xl": "px-11 py-10",
    "5xl": "px-12 py-11"
  },
  default: {
    size: "base",
    styleButton: "solid",
    colorButton: "primary",
    target: "_blank"
  }
};
const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-button",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    description: { default: "" },
    urlButton: { default: () => "" },
    target: { default: () => config.default.target },
    colorButton: { default: () => config.default.colorButton },
    size: { default: () => config.default.size },
    disabled: { type: Boolean, default: () => false },
    styleButton: { default: () => config.default.styleButton },
    fullWidth: { type: Boolean, default: false },
    labelButton: { default: "" },
    class: { default: () => "" }
  },
  setup(__props) {
    const props = __props;
    const { ui, attrs } = useUI(
      "sh-button",
      toRef(props, "ui"),
      config
    );
    const buttonClass = computed(() => {
      var _a, _b;
      const textSize = ui.value.size[props.size];
      const padding = ui.value.padding[props.size];
      const styleButton = ((_b = (_a = ui.value.colorButton) == null ? void 0 : _a[props.colorButton]) == null ? void 0 : _b[props.styleButton]) || ui.value.styleButton[props.styleButton];
      return twMerge(
        twJoin(
          ui.value.rounded,
          padding,
          props.fullWidth ? ui.value.fullWidth : ui.value.inline,
          textSize,
          styleButton.replaceAll("{colorButton}", props.colorButton),
          ui.value.wrapper
        ),
        props.class
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULink = __nuxt_component_0;
      const _component_MDC = _sfc_main$1;
      _push(ssrRenderComponent(_component_ULink, mergeProps({
        class: unref(buttonClass),
        type: "button",
        disabled: props.disabled,
        to: props.urlButton,
        target: props.target
      }, { ...unref(attrs) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).inner)}"${_scopeId}>`);
            if (_ctx.labelButton) {
              _push2(`<span${_scopeId}>`);
              _push2(ssrRenderComponent(_component_MDC, { value: _ctx.labelButton }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              ssrRenderSlot(_ctx.$slots, "default", { unwrap: "" }, null, _push2, _parent2, _scopeId);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).inner
              }, [
                _ctx.labelButton ? (openBlock(), createBlock("span", { key: 0 }, [
                  createVNode(_component_MDC, { value: _ctx.labelButton }, null, 8, ["value"])
                ])) : renderSlot(_ctx.$slots, "default", {
                  key: 1,
                  unwrap: ""
                })
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sh-button-BTDesT9_.mjs.map
