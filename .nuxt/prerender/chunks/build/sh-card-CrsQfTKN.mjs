import { b as useRoute, d as useAsyncData, q as queryContent, c as useUI, a as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './MDC-T9lPa9WT.mjs';
import _sfc_main$2 from './ContentRenderer-CCkUA5yA.mjs';
import { defineComponent, withAsyncContext, toRef, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/server-renderer/index.mjs';
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
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/cookie-es/dist/index.mjs';
import './MDCRenderer-Da3FR2NX.mjs';
import 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/property-information/index.js';
import './node-B5VQLu6X.mjs';
import './ContentRendererMarkdown-CL7dQue1.mjs';

const config = {
  wrapper: "flex flex-col justify-between border-2 dark:border-neutral-700 hover:border-2 hover:border-primary dark:hover:border-2 dark:hover:border-primary rounded-xl mx-auto max-w-lg overflow-hidden bg-inherit shadow-2xl",
  upperBase: "flex items-center justify-center rounded-t-xl",
  image: "h-full w-screen rounded-b-xl overflow-hidden",
  lowerBase: "p-6 rounded-b-xl",
  title: "text-3xl font-extrabold text-primary",
  subtitle: "text-xl font-semibold text-primary-700 -mt-8",
  text: "text-base text-gray-800 dark:text-gray-200 not-prose",
  leftLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  centerLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  rightLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-card",
  __ssrInlineRender: true,
  props: {
    urlUpperBase: { default: "" },
    urlImage: { default: "" },
    altImage: { default: "" },
    title: { default: "" },
    subtitle: { default: "" },
    text: { default: "" },
    excerpt: { default: "" },
    leftLabel: { default: "" },
    centerLabel: { default: "" },
    rightLabel: { default: "" },
    imageBackground: { default: "" },
    article: {},
    description: { default: "" },
    ui: { default: () => ({}) }
  },
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne())), __temp = await __temp, __restore(), __temp);
    const props = __props;
    const { ui } = useUI(
      "sh-card",
      toRef(props, "ui"),
      config
    );
    const backgroundClass = computed(() => {
      if (props.imageBackground) {
        return "background-image: url(" + props.imageBackground + ")";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_MDC = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}><div class="${ssrRenderClass(unref(ui).upperBase)}" style="${ssrRenderStyle(unref(backgroundClass))}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.urlUpperBase,
        target: "_blank",
        class: "not-prose"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-80 w-full flex justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", _ctx.urlImage)} class="${ssrRenderClass(unref(ui).image)}"${ssrRenderAttr("alt", _ctx.altImage)}${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "h-80 w-full flex justify-center items-center" }, [
                createVNode("img", {
                  src: _ctx.urlImage,
                  class: unref(ui).image,
                  alt: _ctx.altImage
                }, null, 10, ["src", "alt"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).lowerBase)}"><div class="${ssrRenderClass(unref(ui).title)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.title }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).subtitle)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.subtitle }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).text)}">`);
      if (_ctx.text) {
        _push(ssrRenderComponent(_component_MDC, { value: _ctx.text }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: _ctx.excerpt,
          excerpt: ""
        }, null, _parent));
      }
      _push(`</div>`);
      if (unref(page)._path === "/news") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.article,
          target: "_blank",
          class: "hover:text-oma-blue-500 not-prose"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read more... `);
            } else {
              return [
                createTextVNode(" Read more... ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border-t mt-16"><div class="grid grid-cols-3"><div class="${ssrRenderClass(unref(ui).leftLabel)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.leftLabel }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).centerLabel)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.centerLabel }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).rightLabel)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.rightLabel }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sh-card-CrsQfTKN.mjs.map
