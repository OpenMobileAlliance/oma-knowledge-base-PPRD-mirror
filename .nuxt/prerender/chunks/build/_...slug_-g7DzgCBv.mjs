import { m as mergeConfig, f as appConfig, g as __nuxt_component_1$2, h as __nuxt_component_5, c as useUI, b as useRoute, d as useAsyncData, q as queryContent, i as fetchContentNavigation, j as useAppConfig, a as __nuxt_component_0$2, e as __nuxt_component_0, _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, toRef, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, ref, createTextVNode, openBlock, createBlock, createCommentVNode } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/server-renderer/index.mjs';
import _sfc_main$5 from './ContentRenderer-CCkUA5yA.mjs';
import { _ as __nuxt_component_1 } from './Avatar-8_f3zp0O.mjs';
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
import './ContentRendererMarkdown-CL7dQue1.mjs';
import './MDCRenderer-Da3FR2NX.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/property-information/index.js';

const alert = {
  wrapper: "w-full relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium",
  description: "mt-1 text-sm leading-4 opacity-90",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  shadow: "",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  color: {
    white: {
      solid: "text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  default: {
    color: "white",
    variant: "solid",
    icon: null,
    closeButton: null,
    actionButton: {
      size: "xs",
      color: "primary",
      variant: "link"
    }
  }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "side-menu",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    class: { default: void 0 },
    items: { default: void 0 }
  },
  setup(__props) {
    const route = useRoute();
    const config2 = {
      wrapper: "",
      shadow: "hover:bg-primary-200/[0.7] dark:hover:bg-primary-600",
      active: "block border-l-4 dark:border-oma-blue-400 border-oma-blue-400 bg-primary-200 dark:bg-primary-600/[0.7]",
      normal: "block border-l-2 dark:border-neutral-700 border-gray-100-ml-px w-full",
      link: {
        active: "text-oma-blue-500 dark:text-oma-blue-400 font-bold",
        normal: "w-full block text-black dark:text-golden hover:text-black dark:hover:text-golden"
      }
    };
    const addMenuItems = (list, depth, prevEl, outList) => {
      if (list.length > 0 && depth < 4) {
        list.forEach((el) => {
          var _a, _b;
          if (prevEl != el._path) {
            outList.push({
              to: el._path,
              title: el.title,
              depth,
              children: ((_a = el.children) == null ? void 0 : _a.length) > 0
            });
          }
          if (((_b = el.children) == null ? void 0 : _b.length) > 0) {
            addMenuItems(el.children, depth + 1, el._path, outList);
          }
        });
      }
    };
    const sideMenuItems = computed(() => {
      var _a;
      const menuItems = [];
      if (((_a = props.items) == null ? void 0 : _a.length) > 0) {
        addMenuItems(props.items, 0, null, menuItems);
      }
      return menuItems;
    });
    const props = __props;
    const { ui, attrs } = useUI(
      "SideMenu",
      toRef(props, "ui"),
      config2,
      toRef(props, "class"),
      true
    );
    const isActive = (path) => {
      return route.path === path;
    };
    const CONST_INDENT = ["pl-2", "pl-4", "pl-8", "pl-12"];
    const getIndent = (depth) => {
      return CONST_INDENT[depth];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}><aside class="not-prose text-wrap">`);
      if (unref(sideMenuItems)) {
        _push(`<nav class=""><ul class=""><!--[-->`);
        ssrRenderList(unref(sideMenuItems), (link, index) => {
          _push(`<li><div class="${ssrRenderClass([unref(ui).shadow, isActive(link.to) ? unref(ui).active : unref(ui).normal])}">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.to,
            class: isActive(link.to) ? unref(ui).link.active : unref(ui).link.normal
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="${ssrRenderClass([getIndent(link.depth), "text-nowrap w-full"])}"${_scopeId}>${ssrInterpolate(link.title)}</span>`);
              } else {
                return [
                  createVNode("span", {
                    class: [getIndent(link.depth), "text-nowrap w-full"]
                  }, toDisplayString(link.title), 3)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/side-menu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "toc",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) }
  },
  async setup(__props) {
    let __temp, __restore;
    const config2 = {
      shadow: "hover:bg-primary-200/[0.7] dark:hover:bg-primary-600",
      active: "bg-primary-200 dark:bg-primary-600 p-2",
      normal: "w-full p-2",
      link: {
        active: "text-oma-blue-500 dark:text-oma-blue-400 font-bold",
        normal: "w-full block text-black dark:text-golden hover:text-black dark:hover:text-golden"
      }
    };
    const props = __props;
    const { ui } = useUI("toc", toRef(props, "ui"), config2);
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => queryContent(route.path).findOne(), "$mRaHnBkTJj")), __temp = await __temp, __restore(), __temp);
    const activeSection = ref(null);
    const isActive = (id) => {
      return activeSection.value === id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_ULink = __nuxt_component_0;
      if (((_c = (_b = (_a = unref(page).body) == null ? void 0 : _a.toc) == null ? void 0 : _b.links) == null ? void 0 : _c.length) > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-64 right-8 w-64 h-[calc(100vh-20rem)] overflow-auto" }, _attrs))}><nav><button class="flex sticky top-0 backdrop-blur items-center gap-1.5 lg:cursor-text lg:select-text w-full group"><span class="font-semibold text-sm/6 truncate dark:text-white/80"> Table of Contents <hr class="dark:text-white/80 mt-0 mb-1"></span></button><ul class="space-y-1 lg:block -ml-2"><!--[-->`);
        ssrRenderList(unref(page).body.toc.links, (link, index) => {
          var _a2;
          _push(`<li class="${ssrRenderClass([[isActive(link.id) ? unref(ui).active : unref(ui).normal], "space-y-1 lg:block"])}">`);
          _push(ssrRenderComponent(_component_ULink, {
            id: `toc-${link.id}`,
            to: `${unref(page)._path}#${link.id}`,
            class: [[unref(ui).shadow, isActive(link.id) ? unref(ui).link.active : unref(ui).link.normal], "not-prose truncate pl-1 pr-1 text-black dark:text-golden"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (((_a2 = link.children) == null ? void 0 : _a2.length) > 0) {
            _push(`<ul class="space-y-1 hidden lg:block"><!--[-->`);
            ssrRenderList(link.children, (subLink, subIndex) => {
              _push(`<li class="${ssrRenderClass([[isActive(subLink.id) ? unref(ui).active : unref(ui).normal], "space-y-1 lg:block"])}">`);
              _push(ssrRenderComponent(_component_ULink, {
                id: `toc-${subLink.id}`,
                to: `${unref(page)._path}#${subLink.id}`,
                class: [[unref(ui).shadow, isActive(subLink.id) ? unref(ui).link.active : unref(ui).link.normal], "not-prose pl-1 pr-1 text-black dark:text-golden"]
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(subLink.text)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(subLink.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/toc.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.alert, alert);
const _sfc_main$2 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$2,
    UAvatar: __nuxt_component_1,
    UButton: __nuxt_component_5
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config.default.closeButton
    },
    actions: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close"],
  setup(props) {
    const { ui, attrs } = useUI("alert", toRef(props, "ui"), config);
    const alertClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.rounded,
        ui.value.shadow,
        ui.value.padding,
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    function onAction(action) {
      if (action.click) {
        action.click();
      }
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      alertClass,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$2;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UButton = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.alertClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([[_ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  ssrRenderSlot(_ctx.$slots, "icon", { icon: _ctx.icon }, () => {
    if (_ctx.icon) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.icon,
        ui: _ctx.ui.icon.base
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "avatar", { avatar: _ctx.avatar }, () => {
    if (_ctx.avatar) {
      _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
        class: _ctx.ui.avatar.base
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !(_ctx.title && _ctx.$slots.title) && "mt-0 leading-5"))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        key: index,
        ref_for: true
      }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
        onClick: ($event) => _ctx.onAction(action)
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({
          key: index,
          ref_for: true
        }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, {
        onClick: ($event) => _ctx.$emit("close")
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Alert.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "prev-next-page",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) }
  },
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const [prev, next] = ([__temp, __restore] = withAsyncContext(() => queryContent().findSurround(route.path)), __temp = await __temp, __restore(), __temp);
    const config2 = {
      button: "grid grid-rows-3 border p-4 rounded-xl hover:border hover:border-primary/[0.6] dark:hover:border-primary/[0.8] hover:bg-primary/[0.3] dark:hover:bg-primary/[0.2] transition-colors",
      icon: "text-3xl hover:scale-105 hover:text-primary text-black hover:text-primary dark:text-golden dark:hover:text-primary",
      title: "text-3xl font-semibold mt-2 text-black hover:text-primary dark:text-golden dark:hover:text-primary",
      description: "text-lg font-normal mt-2 text-gray-700 hover:text-primary dark:text-golden/[0.4] dark:hover:text-primary"
    };
    const props = __props;
    const { ui } = useUI(
      "prev-next-page",
      toRef(props, "ui"),
      config2
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = __nuxt_component_1$2;
      _push(`<!--[--><hr><div class="grid grid-cols-2 mt-10 mx-auto max-w-max min-w-full not-prose">`);
      if (unref(prev)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(prev)._path,
          class: ["justify-items-start lg:mr-20 sm:mr-5", unref(ui).button]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-vaadin:chevron-circle-left-o",
                dynamic: "",
                class: unref(ui).icon
              }, null, _parent2, _scopeId));
              _push2(`<div class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>${ssrInterpolate(unref(prev).title)}</div>`);
              if (unref(prev).description) {
                _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>${ssrInterpolate(unref(prev).description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-vaadin:chevron-circle-left-o",
                  dynamic: "",
                  class: unref(ui).icon
                }, null, 8, ["class"]),
                createVNode("div", {
                  class: unref(ui).title
                }, toDisplayString(unref(prev).title), 3),
                unref(prev).description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).description
                }, toDisplayString(unref(prev).description), 3)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(next)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(next)._path,
          class: ["justify-items-end lg:ml-20 sm:ml-5", unref(ui).button]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-vaadin:chevron-circle-right-o",
                dynamic: "",
                class: unref(ui).icon
              }, null, _parent2, _scopeId));
              _push2(`<div class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>${ssrInterpolate(unref(next).title)}</div>`);
              if (unref(next).description) {
                _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>${ssrInterpolate(unref(next).description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-vaadin:chevron-circle-right-o",
                  dynamic: "",
                  class: unref(ui).icon
                }, null, 8, ["class"]),
                createVNode("div", {
                  class: unref(ui).title
                }, toDisplayString(unref(next).title), 3),
                unref(next).description ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).description
                }, toDisplayString(unref(next).description), 3)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/prev-next-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) }
  },
  async setup(__props) {
    let __temp, __restore;
    const config2 = {
      shadow: "hover:bg-primary-500 focus:bg-primary-200/[0.6] hover:focus:bg-primary-100 dark:hover:bg-neutral-500 dark:focus:bg-primary-600[0.6] dark:hover:focus:bg-neutral-500 rounded-lg"
    };
    const props = __props;
    useUI(
      "[...slug]",
      toRef(props, "ui"),
      config2
    );
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne())), __temp = await __temp, __restore(), __temp);
    const { data: navigation } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("navigation", () => fetchContentNavigation())), __temp = await __temp, __restore(), __temp);
    const main = useAppConfig().main;
    const routeDepth = route.path.split("/").length;
    const minDepth = routeDepth - 4 > 0 ? routeDepth - 4 : 0;
    const contentClass = computed(() => {
      var _a, _b, _c;
      if ((page == null ? void 0 : page.value.layout) === "doc") {
        return ((_c = (_b = (_a = page.value.body) == null ? void 0 : _a.toc) == null ? void 0 : _b.links) == null ? void 0 : _c.length) > 0 ? "mr-64" : "";
      } else {
        return "";
      }
    });
    const comparePathsForBranch = (path1, path2) => {
      const path1Parts = path1.split("/");
      const path2Parts = path2.split("/");
      if (path1Parts.length < path2Parts.length) {
        return false;
      }
      for (let i = 0; i < path2Parts.length; i++) {
        if (path1Parts[i] !== path2Parts[i]) {
          return false;
        }
      }
      return true;
    };
    const filterNavigation = (list, path) => {
      if ((list == null ? void 0 : list.length) > 0) {
        const branchList = list.reduce((prev, curr) => {
          if (comparePathsForBranch(path, curr._path)) {
            prev.push(curr);
          }
          return prev;
        }, []);
        return branchList;
      } else {
        return list;
      }
    };
    const displayNavigation = computed(() => {
      var _a;
      let res = filterNavigation(navigation.value, page.value._path);
      if (minDepth > 0) {
        let depth = minDepth;
        while (depth > 0) {
          let childResult = [];
          depth -= 1;
          if (((_a = res[0].children) == null ? void 0 : _a.length) > 0) {
            childResult = filterNavigation(res[0].children, page.value._path);
            childResult = childResult.filter((item) => {
              const itemDepth = item._path.split("/");
              return itemDepth.length >= routeDepth - 1;
            });
            res = childResult.length > 0 ? childResult : res;
          }
        }
      }
      return res;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_AppSideMenu = _sfc_main$4;
      const _component_AppToc = _sfc_main$3;
      const _component_ContentRenderer = _sfc_main$5;
      const _component_UAlert = __nuxt_component_3;
      const _component_PrevNextPage = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><article class="prose w-full max-w-full mt-16">`);
      if (((_a = unref(page)) == null ? void 0 : _a.layout) === "doc") {
        _push(`<div class="">`);
        _push(ssrRenderComponent(_component_AppSideMenu, {
          items: unref(displayNavigation),
          class: "fixed top-56 left-8 w-64 h-[calc(100vh-20rem)] overflow-auto"
        }, null, _parent));
        _push(ssrRenderComponent(_component_AppToc, { class: "top-56" }, null, _parent));
        _push(`<section class="${ssrRenderClass([unref(contentClass), "ml-64 pl-8 pr-8"])}"><h1 class="capitalize hover:uppercase">${ssrInterpolate(unref(page).title)}</h1>`);
        if (unref(page).body) {
          _push(ssrRenderComponent(_component_ContentRenderer, {
            value: unref(page),
            style: { fontSize: unref(main).font.size },
            class: "mt-8 pb-10"
          }, {
            "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UAlert, {
                  title: "File not found!",
                  description: "The requested resource cannot be found.",
                  icon: "i-heroicons-exclamation-triangle"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UAlert, {
                    title: "File not found!",
                    description: "The requested resource cannot be found.",
                    icon: "i-heroicons-exclamation-triangle"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$route.path !== "/") {
          _push(ssrRenderComponent(_component_PrevNextPage, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</section></div>`);
      } else if (((_b = unref(page)) == null ? void 0 : _b.layout) === "articles") {
        _push(`<div class="-mt-16 mx-64"><div class="container flex mx-auto">`);
        if (unref(page).urlImage) {
          _push(`<img${ssrRenderAttr("src", unref(page).urlImage)} alt="Image" class="mx-auto object-contain h-fit w-screen">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="text-center"><h2 class="text-oma-300 text-start text-4xl text-primary dark:text-primary">${ssrInterpolate(unref(page).title)}</h2>`);
        if (unref(page).subtitle) {
          _push(`<h3 class="text-start text-3xl text-primary-700 dark:text-primary-700">${ssrInterpolate(unref(page).subtitle)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(page).tags && unref(page).tags.length) {
          _push(`<div class="text-center text-2xl"> Tags: <!--[-->`);
          ssrRenderList(unref(page).tags, (tag) => {
            _push(`<span class="border rounded-3xl p-2 mx-2 text-white bg-primary border-primary-600 dark:bg-primary dark:border-primary-400 text-xl">${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center justify-center">`);
        if (unref(page).rightLabel) {
          _push(`<p class="mr-2 text-2xl">${ssrInterpolate("By:")}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(page).rightLabel) {
          _push(`<p class="text-end text-gray-500 dark:text-gray-400 text-2xl">${ssrInterpolate(unref(page).rightLabel)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(page).leftLabel) {
          _push(`<p class="mx-2 text-2xl">${ssrInterpolate("|")}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(page).leftLabel) {
          _push(`<p class="text-start text-gray-500 text-2xl dark:text-gray-400">${ssrInterpolate(unref(page).leftLabel)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(page).body) {
          _push(ssrRenderComponent(_component_ContentRenderer, {
            value: unref(page),
            style: { fontSize: unref(main).font.size },
            class: "text-left dark:text-white"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<br></div></div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(page),
          style: { fontSize: unref(main).font.size },
          class: "mt-8 pb-24"
        }, {
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UAlert, {
                title: "File not found!",
                description: "The requested resource cannot be found.",
                icon: "i-heroicons-exclamation-triangle"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UAlert, {
                  title: "File not found!",
                  description: "The requested resource cannot be found.",
                  icon: "i-heroicons-exclamation-triangle"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(route).path !== "/") {
          _push(ssrRenderComponent(_component_PrevNextPage, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</article></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-g7DzgCBv.mjs.map
