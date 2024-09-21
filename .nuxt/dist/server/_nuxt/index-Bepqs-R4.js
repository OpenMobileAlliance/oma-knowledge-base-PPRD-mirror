import { c as useUI, a as __nuxt_component_0, g as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, toRef, ref, computed, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "ofetch";
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
const _imports_0 = publicAssetsURL("/logo.png");
const _imports_1 = publicAssetsURL("/logo-dark.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const config = {
      landingHero: {
        wrapper: "relative flex flex-col h-screen items-center w-screen bg-gradient-to-t from-neutral-200",
        image: "absolute inset-0 w-full h-full transition-filter duration-1000 ease-in-out",
        title: "text-center font-serif text-6xl mt-16 text-neutral-700 dark:text-[#333333] opacity-0",
        bookmark: "content-center mt-[15%] ml-[120%] w-[20%] h-[10%] bg-neutral-400 dark:bg-neutral-600 rounded-l-full hover:scale-105 duration-700 delay-0 p-3",
        scroll: "text-6xl text-neutral-700 transition-opacity duration-1000 delay-700 opacity-0 animate-bounce rounded-full hover:cursor-none"
      },
      constructors: {
        wrapper: "h-screen bg-gradient-to-t from-oma-blue-500 p-16"
      }
    };
    const props = __props;
    const { ui, attrs } = useUI(
      "index",
      toRef(props, "ui"),
      config
    );
    const isLogoVisible = ref(false);
    const isGrayscale = ref(true);
    const isTextVisible = ref(false);
    const opacity = computed(() => "sm:opacity-0 lg:opacity-100");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).landingHero.wrapper
      }, _attrs))} data-v-6237daf4><div class="${ssrRenderClass(["mt-44 transition-all duration-1000 ease-in-out", { "translate-y-6": !unref(isTextVisible) }])}" data-v-6237daf4><div class="${ssrRenderClass(["relative w-[300px] h-[300px]", { "opacity-0": !unref(isLogoVisible), "opacity-100": unref(isLogoVisible), "transition-opacity duration-[700ms] ease-in-out": true }])}" data-v-6237daf4><img${ssrRenderAttr("src", _imports_0)} alt="OMA Logo" class="${ssrRenderClass(unref(ui).landingHero.image, { "filter grayscale": unref(isGrayscale), "filter grayscale-0": !unref(isGrayscale) })}" data-v-6237daf4></div></div><div class="${ssrRenderClass([unref(ui).landingHero.title, { "transition-opacity duration-[1700ms] opacity-100 ease-in": !unref(isGrayscale) }])}" data-v-6237daf4> Welcome to OMA KnowledgeBase </div><div class="${ssrRenderClass([unref(ui).landingHero.bookmark, { "transition-all -translate-x-full duration-1000 ease-in-out transform-gpu": unref(isTextVisible) }])}" data-v-6237daf4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/omaspecworks/about/",
        class: "not-prose flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(opacity) !== "sm:opacity-0") {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="OMA Logo" class="${ssrRenderClass(["mx-auto", unref(opacity)])}" data-v-6237daf4${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-line-md:home-twotone",
              dynamic: "",
              class: ["mx-auto text-4xl text-oma-blue-500 mr-6 mb-2 hover:contrast-125", { "w-full h-full": unref(opacity) === "sm:opacity-0" }]
            }, null, _parent2, _scopeId));
          } else {
            return [
              unref(opacity) !== "sm:opacity-0" ? (openBlock(), createBlock("img", {
                key: 0,
                src: _imports_1,
                alt: "OMA Logo",
                class: ["mx-auto", unref(opacity)]
              }, null, 2)) : createCommentVNode("", true),
              createVNode(_component_UIcon, {
                name: "i-line-md:home-twotone",
                dynamic: "",
                class: ["mx-auto text-4xl text-oma-blue-500 mr-6 mb-2 hover:contrast-125", { "w-full h-full": unref(opacity) === "sm:opacity-0" }]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center -mt-16" data-v-6237daf4>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-iconoir:mouse-scroll-wheel",
        dynamic: "",
        class: [unref(ui).landingHero.scroll, { "opacity-100": unref(isTextVisible) }]
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6237daf4"]]);
export {
  index as default
};
//# sourceMappingURL=index-Bepqs-R4.js.map
