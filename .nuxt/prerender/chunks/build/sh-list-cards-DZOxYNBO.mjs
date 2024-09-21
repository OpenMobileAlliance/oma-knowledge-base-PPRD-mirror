import { c as useUI, b as useRoute, d as useAsyncData, q as queryContent, g as __nuxt_component_1$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './MDC-T9lPa9WT.mjs';
import _sfc_main$2 from './sh-card-CrsQfTKN.mjs';
import { defineComponent, toRef, ref, computed, withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/server-renderer/index.mjs';
import { g as gridSizes } from './sh-grid-sizes-BGxtnISM.mjs';
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
import './ContentRenderer-CCkUA5yA.mjs';
import './ContentRendererMarkdown-CL7dQue1.mjs';

const config = {
  wrapper: "pl-4 pr-4 pb-10 shadow-xl bg-neutral-100 dark:bg-neutral-900/[0.6] rounded-2xl",
  inner: "",
  tags: {
    title: "flex flex-wrap justify-center",
    clear: "mt-3 text-lg px-3 border border-oma-red-500 bg-oma-red-600 hover:bg-oma-red-500 hover:border-oma-red-600 text-white dark:border-oma-red-500 dark:bg-oma-red-600 dark:hover:bg-oma-red-500 dark:hover:border-oma-red-600 dark:text-white rounded-3xl",
    list: "inline-block overflow-hidden hover:scale-105 duration-200 ease-in-out rounded-3xl text-lg cursor-pointer px-3 mx-2 mt-4 hover:shadow-xl hover:shadow-primary/[0.3] border border-primary dark:text-white dark:border-primary dark:shadow-primary/[0.3]"
  },
  header: "",
  title: "pt-6 text-3xl font-extrabold text-center dark:text-gray-200",
  subtitle: "pb-6 text-xl font-semibold text-gray-600 dark:text-gray-400 -mt-8 text-center",
  text: "pb-16 text-center font-light dark:text-gray-400",
  base: "justify-between flex flex-wrap",
  gap: "gap-0",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-list-cards",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) },
    title: { default: "" },
    subtitle: { default: "" },
    text: { default: "" },
    cols: { default: config.default.cols },
    class: { default: void 0 },
    description: { default: "" },
    cardID: {},
    allTags: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { ui, attrs } = useUI(
      "sh-list-cards",
      toRef(props, "ui"),
      config,
      toRef(props, "class")
    );
    const windowWidth = ref(0);
    const gridClass = computed(() => {
      var _a;
      const cols = (_a = props.cols) != null ? _a : config.default.cols;
      if (windowWidth.value >= 1300) {
        return ["grid", gridSizes.gridCols[cols]].join(" ");
      } else if (windowWidth.value < 640) {
        return ["grid", "grid-cols-1"].join(" ");
      } else if (windowWidth.value > 640 && windowWidth.value < 980) {
        return ["grid", "grid-cols-2"].join(" ");
      } else {
        return ["grid", "grid-cols-3"].join(" ");
      }
    });
    const route = useRoute();
    [__temp, __restore] = withAsyncContext(() => useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne())), __temp = await __temp, __restore();
    const cards = ref([]);
    const tags = ref([]);
    const selectedTags = ref([]);
    const getCards = async () => {
      const result = await queryContent("news/articles").where({ cardID: { $in: props.cardID } }).find();
      return result;
    };
    const tagStac = () => {
      if (cards.value.length > 0) {
        const uniqueTags = /* @__PURE__ */ new Set();
        cards.value.forEach((el) => {
          var _a;
          (_a = el.tags) == null ? void 0 : _a.forEach((tag) => {
            if (tag !== null && tag.length > 0) {
              uniqueTags.add(tag);
            }
          });
        });
        tags.value = Array.from(uniqueTags);
      } else {
        tags.value = [];
      }
    };
    const updateData = async () => {
      cards.value = await getCards();
      tagStac();
    };
    const filteredCards = computed(() => {
      if (selectedTags.value.length === 0) {
        return cards.value;
      }
      return cards.value.filter((card) => {
        var _a;
        let belongs = false;
        (_a = card.tags) == null ? void 0 : _a.forEach((tag) => {
          if (tag !== null && tag.length > 0 && selectedTags.value.includes(tag)) {
            belongs = true;
          }
        });
        return belongs;
      });
    });
    updateData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$2;
      const _component_MDC = _sfc_main$1;
      const _component_ShCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}><div class="${ssrRenderClass(unref(ui).inner)}"><h3 class="${ssrRenderClass(unref(ui).tags.title)}">Tags</h3><div class="flex justify-center"><!--[-->`);
      ssrRenderList(unref(tags), (tag) => {
        _push(`<span class="${ssrRenderClass([unref(ui).tags.list, { "bg-primary-300 border-primary-400 text-neutral-600 dark:bg-primary-700 dark:border-primary-600 dark:hover:shadow-primary/[0.1]": unref(selectedTags).includes(tag) }])}">${ssrInterpolate(tag)} `);
        if (unref(selectedTags).includes(tag)) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "i-line-md:close-circle",
            dynamic: "",
            class: "hover:text-gray-500 duration-100"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-5">`);
      if (unref(selectedTags).length) {
        _push(`<button class="${ssrRenderClass(unref(ui).tags.clear)}"> Clear All `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-line-md:filter-remove-twotone",
          dynamic: "",
          class: "animate-pulse"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="${ssrRenderClass(unref(ui).header)}"><div class="${ssrRenderClass(unref(ui).title)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.title }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).subtitle)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.subtitle }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).text)}">`);
      _push(ssrRenderComponent(_component_MDC, { value: _ctx.text }, null, _parent));
      _push(`</div></div><div class="${ssrRenderClass([unref(ui).base, unref(ui).gap, unref(gridClass)])}"><!--[-->`);
      ssrRenderList(unref(filteredCards), (card, index) => {
        _push(ssrRenderComponent(_component_ShCard, {
          title: card.title,
          subtitle: card.subtitle,
          excerpt: card,
          urlImage: card.urlImage,
          urlUpperBase: card._path,
          article: card._path,
          leftLabel: card.leftLabel,
          rightLabel: card.rightLabel,
          centerLabel: card.centerLabel
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-list-cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sh-list-cards-DZOxYNBO.mjs.map
