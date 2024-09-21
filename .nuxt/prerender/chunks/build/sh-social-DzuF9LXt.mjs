import { useSSRContext, defineComponent, toRef, computed, mergeProps, unref, withAsyncContext, toValue, reactive } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/index.mjs';
import { hash } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/ohash/dist/index.mjs';
import { c as useUI, v as fetchDefaults, d as useAsyncData, w as useRequestFetch, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/server-renderer/index.mjs';
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

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const config = {
  wrapper: "flex p-4 justify-center",
  facebook: "bg-white dark:bg-white rounded-xl border",
  linkedin: "",
  twitter: "bg-white dark:bg-white",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NuxtTweet",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: true },
    showMedia: { type: Boolean, required: false, default: () => true }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    function decodeHTMLEntities(text) {
      const entities = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#039;": "'"
      };
      return text.replace(
        /&(amp|lt|gt|quot|#039);/g,
        (match) => entities[match]
      );
    }
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/tweets/${props.id}`, "$PFHQbQIy1n")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      if ((_b = (_a = unref(data)) == null ? void 0 : _a.tweet) == null ? void 0 : _b.text) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          target: "_blank",
          class: "tweet"
        }, _attrs))} data-v-bf46795b><div class="tweet-header" data-v-bf46795b><div class="tweet-header-image" data-v-bf46795b><img${ssrRenderAttr("src", unref(data).tweet.user.profile_image_url_https)} data-v-bf46795b></div><div class="tweet-header-name" data-v-bf46795b><p class="tweet-header-name-top" data-v-bf46795b><span data-v-bf46795b>${ssrInterpolate(unref(data).tweet.user.name)}</span>`);
        if (unref(data).tweet.user.is_blue_verified) {
          _push(`<svg viewBox="0 0 22 22" aria-label="Verified account" role="img" class="tweet-header-name-top-badge" data-v-bf46795b><g data-v-bf46795b><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" data-v-bf46795b></path></g></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="tweet-header-name-bottom" data-v-bf46795b> @${ssrInterpolate(unref(data).tweet.user.screen_name)}</p></div><div class="tweet-header-logo" data-v-bf46795b><svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-header-logo-x" data-v-bf46795b><g data-v-bf46795b><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-v-bf46795b></path></g></svg></div></div><div class="tweet-body" data-v-bf46795b>`);
        if (unref(data).sections) {
          _push(`<p class="tweet-body-text" data-v-bf46795b><!--[-->`);
          ssrRenderList(unref(data).sections, (item, index) => {
            var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
            _push(`<span data-v-bf46795b>`);
            if (!item.entityIndice) {
              _push(`<span data-v-bf46795b>${ssrInterpolate(decodeHTMLEntities(item.text))}</span>`);
            } else if ((_a2 = item.entityIndice) == null ? void 0 : _a2.urls) {
              _push(`<a${ssrRenderAttr("href", item.entityIndice.urls.expanded_url)} data-v-bf46795b>${ssrInterpolate(item.entityIndice.urls.display_url)}</a>`);
            } else if ((_b2 = item.entityIndice) == null ? void 0 : _b2.hashtags) {
              _push(`<a${ssrRenderAttr("href", `https://twitter.com/hashtag/${item.entityIndice.hashtags.text}`)} target="_blank" data-v-bf46795b> #${ssrInterpolate(item.entityIndice.hashtags.text)}</a>`);
            } else if ((_c = item.entityIndice) == null ? void 0 : _c.userMentions) {
              _push(`<a${ssrRenderAttr("href", `https://twitter.com/${item.entityIndice.userMentions.screen_name}`)} target="_blank" data-v-bf46795b> @${ssrInterpolate(item.entityIndice.userMentions.screen_name)}</a>`);
            } else if (props.showMedia && ((_d = item.entityIndice) == null ? void 0 : _d.media)) {
              _push(`<img loading="lazy" class="tweet-body-image"${ssrRenderAttr("src", item.entityIndice.media.expanded_url)} style="${ssrRenderStyle({
                width: `${Number(
                  (_h = (_g = (_f = (_e = unref(data).tweet.mediaDetails) == null ? void 0 : _e[0]) == null ? void 0 : _f.sizes) == null ? void 0 : _g.large) == null ? void 0 : _h.w
                )}px`,
                "aspect-ratio": Number((_l = (_k = (_j = (_i = unref(data).tweet.mediaDetails) == null ? void 0 : _i[0]) == null ? void 0 : _j.sizes) == null ? void 0 : _k.large) == null ? void 0 : _l.w) / Number((_p = (_o = (_n = (_m = unref(data).tweet.mediaDetails) == null ? void 0 : _m[0]) == null ? void 0 : _n.sizes) == null ? void 0 : _o.large) == null ? void 0 : _p.h)
              })}" data-v-bf46795b>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          });
          _push(`<!--]--></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-testimonial/dist/runtime/components/NuxtTweet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bf46795b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-social",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    src: { default: "" },
    width: { default: "500" },
    height: { default: "" },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-social",
      toRef(props, "ui"),
      config
    );
    const isFacebook = computed(() => /facebook/i.test(props.src));
    const isLinkedin = computed(() => /linkedin/i.test(props.src));
    const isTwitter = computed(() => /^\d+$/.test(props.src));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtTweet = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}>`);
      if (isFacebook.value) {
        _push(`<div><iframe class="${ssrRenderClass(unref(ui).facebook)}"${ssrRenderAttr("src", _ctx.src)}${ssrRenderAttr("width", _ctx.width)}${ssrRenderAttr("height", 410)} style="${ssrRenderStyle({ "overflow": "hidden" })}" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>`);
      } else if (isLinkedin.value) {
        _push(`<div><iframe class="${ssrRenderClass(unref(ui).linkedin)}"${ssrRenderAttr("src", _ctx.src)}${ssrRenderAttr("width", _ctx.width)}${ssrRenderAttr("height", 650)} frameborder="0" allowfullscreen="true" title="Embedded post"></iframe></div>`);
      } else if (isTwitter.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtTweet, {
          class: unref(ui).twitter,
          id: _ctx.src,
          showMedia: true
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>No supported social media found.</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-social.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sh-social-DzuF9LXt.mjs.map
