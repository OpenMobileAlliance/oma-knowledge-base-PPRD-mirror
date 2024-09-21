import { _ as _sfc_main$1 } from "./MDC-T9lPa9WT.js";
import { c as useUI } from "../server.mjs";
import { defineComponent, toRef, computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
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
  header: {
    wrapper: "mt-10",
    title: "text-2xl font-bold"
  },
  wrapper: "border rounded-xl",
  inner: "mx-3 cursor-pointer",
  question: "grid grid-cols-2 flex-row font-bold",
  q: "w-full hover:scale-105 duration-300 hover:text-primary dark:text-white mx-4",
  answer: "ml-1",
  a: "mx-6 dark:text-white font-light",
  divider: "border-b",
  icon: "place-self-end self-center text-2xl i-icons8-chevron-right-round",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-faq",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    qas: {},
    title: { default: "FAQs" },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-faq",
      toRef(props, "ui"),
      config
    );
    const faqs = computed(() => {
      return props.qas.map((item) => ({
        q: item.q,
        a: item.a
      }));
    });
    computed(() => {
      return config.icon;
    });
    const visibleAnswers = ref(faqs.value.map(() => false));
    const answerHeights = ref(faqs.value.map(() => "0"));
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDC = _sfc_main$1;
      _push(`<!--[--><p class="${ssrRenderClass(unref(ui).header.wrapper)}">`);
      if (_ctx.title) {
        _push(ssrRenderComponent(_component_MDC, {
          class: unref(ui).header.title,
          value: _ctx.title
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</p><div class="${ssrRenderClass(unref(ui).wrapper)}"><!--[-->`);
      ssrRenderList(faqs.value, (faq, index) => {
        _push(`<div class="${ssrRenderClass(unref(ui).inner)}"><p class="${ssrRenderClass(unref(ui).question)}">`);
        if (faq.q) {
          _push(ssrRenderComponent(_component_MDC, {
            class: ["not-prose", unref(ui).q],
            value: "Q: " + faq.q
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="${ssrRenderClass([unref(ui).icon, visibleAnswers.value[index] ? "rotate-90" : "rotate-0", "transition-transform duration-300"])}"></span></p><p class="${ssrRenderClass([unref(ui).answer, "transition-max-height duration-500 ease-in-out overflow-hidden"])}" style="${ssrRenderStyle({ maxHeight: visibleAnswers.value[index] ? answerHeights.value[index] : "0" })}">`);
        if (faq.a) {
          _push(ssrRenderComponent(_component_MDC, {
            class: unref(ui).a,
            value: faq.a
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
        if (index < faqs.value.length - 1) {
          _push(`<div class="${ssrRenderClass(unref(ui).divider)}"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-faq-DgAqUcTG.js.map
