import { _ as _sfc_main$5 } from "./MDC-T9lPa9WT.js";
import { u as useId, _ as __nuxt_component_1$2 } from "./Input-Bfwqw1gk.js";
import { _ as _export_sfc, m as mergeConfig, f as appConfig, k as button, g as __nuxt_component_1, h as __nuxt_component_5, c as useUI, o as omit, l as useInjectButtonGroup } from "../server.mjs";
import { provide, inject, ref, onMounted, watchEffect, cloneVNode, h, Fragment, defineComponent, computed, onUnmounted, toRef, watch, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, withKeys, Transition, openBlock, createBlock, withDirectives, vShow, useSSRContext, mergeModels, useModel, withAsyncContext, unref, renderList, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_1$1 } from "./Avatar-8_f3zp0O.js";
import { twMerge, twJoin } from "tailwind-merge";
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
const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const accordion = {
  wrapper: "w-full flex flex-col",
  container: "w-full flex flex-col",
  item: {
    base: "",
    size: "text-sm",
    color: "text-gray-500 dark:text-gray-400",
    padding: "pt-1.5 pb-3",
    icon: "ms-auto transform transition-transform duration-200"
  },
  transition: {
    enterActiveClass: "overflow-hidden transition-[height] duration-200 ease-out",
    leaveActiveClass: "overflow-hidden transition-[height] duration-200 ease-out"
  },
  default: {
    openIcon: "i-heroicons-chevron-down-20-solid",
    closeIcon: "",
    class: "mb-1.5 w-full",
    variant: "soft"
  }
};
const divider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        xs: "border-t-[2px]",
        sm: "border-t-[3px]",
        md: "border-t-[4px]",
        lg: "border-t-[5px]",
        xl: "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        xs: "border-s-[2px]",
        sm: "border-s-[3px]",
        md: "border-s-[4px]",
        lg: "border-s-[5px]",
        xl: "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs"
  }
};
const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const config$4 = {
  wrapper: "",
  header: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  footer: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  search: "pb-4",
  filter: "",
  table: "min-w-full divide-y divide-gray-300 dark:divide-gray-700",
  tbody: "divide-y divide-gray-300 dark:divide-gray-700",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap text-pretty ",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  pagination: "",
  perPage: [10, 25, 50, 100],
  default: {
    perPage: 10,
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    }
  }
};
let t$1 = Symbol("headlessui.useid"), i$1 = 0;
function I() {
  return inject(t$1, () => `${++i$1}`)();
}
function l$1(e) {
  provide(t$1, e);
}
function o$1(e) {
  var l2;
  if (e == null || e.value == null) return null;
  let n2 = (l2 = e.value.$el) != null ? l2 : e.value;
  return n2 instanceof Node ? n2 : null;
}
function u(r2, n2, ...a) {
  if (r2 in n2) {
    let e = n2[r2];
    return typeof e == "function" ? e(...a) : e;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
function r(t2, e) {
  if (t2) return t2;
  let n2 = e != null ? e : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button") return "button";
}
function s(t2, e) {
  let n2 = ref(r(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$1(e) && o$1(e) instanceof HTMLButtonElement && !((u2 = o$1(e)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var N$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$1 || {}), S = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(S || {});
function A({ visible: r2 = true, features: t2 = 0, ourProps: e, theirProps: o2, ...i2 }) {
  var a;
  let n2 = j(o2, e), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y(l2);
  if (t2 & 1) {
    let d = (a = n2.unmount) == null || a ? 0 : 1;
    return u(d, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l2);
}
function y({ props: r2, attrs: t2, slots: e, slot: o2, name: i2 }) {
  var m, h$1;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a = (m = e.default) == null ? void 0 : m.call(e, o2), d = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p, f] of Object.entries(o2)) typeof f == "boolean" && (u2 = true), f === true && c.push(p);
    u2 && (d["data-headlessui-state"] = c.join(" "));
  }
  if (n2 === "template") {
    if (a = b(a != null ? a : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c] = a != null ? a : [];
      if (!v(u2) || c.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s2) => s2.trim()).filter((s2, g, R) => R.indexOf(s2) === g).sort((s2, g) => s2.localeCompare(g)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p = j((h$1 = u2.props) != null ? h$1 : {}, l2, d), f = cloneVNode(u2, p, true);
      for (let s2 in p) s2.startsWith("on") && (f.props || (f.props = {}), f.props[s2] = p[s2]);
      return f;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h(n2, Object.assign({}, l2, d), { default: () => a });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e[n2] != null || (e[n2] = []), e[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e).map((i2) => [i2, void 0])));
  for (let i2 in e) Object.assign(t2, { [i2](n2, ...l2) {
    let a = e[i2];
    for (let d of a) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d(n2, ...l2);
    }
  } });
  return t2;
}
function T$1(r2, t2 = []) {
  let e = Object.assign({}, r2);
  for (let o2 of t2) o2 in e && delete e[o2];
  return e;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
let n = Symbol("Context");
var i = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(i || {});
function l() {
  return inject(n, null);
}
function t(o2) {
  provide(n, o2);
}
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O(t2) {
  let r2 = inject(T, null);
  if (r2 === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return r2;
}
let k = Symbol("DisclosurePanelContext");
function U() {
  return inject(k, null);
}
let N = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$12, { slots: r2, attrs: o2 }) {
  let s2 = ref(t$12.defaultOpen ? 0 : 1), e = ref(null), i$12 = ref(null), n2 = { buttonId: ref(`headlessui-disclosure-button-${I()}`), panelId: ref(`headlessui-disclosure-panel-${I()}`), disclosureState: s2, panel: e, button: i$12, toggleDisclosure() {
    s2.value = u(s2.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s2.value !== 1 && (s2.value = 1);
  }, close(l2) {
    n2.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o$1(l2) : o$1(n2.button) : o$1(n2.button))();
    a == null || a.focus();
  } };
  return provide(T, n2), t(computed(() => u(s2.value, { [0]: i.Open, [1]: i.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t$12, c = { open: s2.value === 0, close: n2.close };
    return A({ theirProps: a, ourProps: {}, slot: c, slots: r2, attrs: o2, name: "Disclosure" });
  };
} }), Q = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r2, slots: o$2, expose: s$1 }) {
  let e = O("DisclosureButton"), i2 = U(), n2 = computed(() => i2 === null ? false : i2.value === e.panelId.value);
  onMounted(() => {
    n2.value || t2.id !== null && (e.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n2.value || (e.buttonId.value = null);
  });
  let l2 = ref(null);
  s$1({ el: l2, $el: l2 }), n2.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = s(computed(() => ({ as: t2.as, type: r2.type })), l2);
  function c() {
    var u2;
    t2.disabled || (n2.value ? (e.toggleDisclosure(), (u2 = o$1(e.button)) == null || u2.focus()) : e.toggleDisclosure());
  }
  function D(u2) {
    var S2;
    if (!t2.disabled) if (n2.value) switch (u2.key) {
      case o.Space:
      case o.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure(), (S2 = o$1(e.button)) == null || S2.focus();
        break;
    }
    else switch (u2.key) {
      case o.Space:
      case o.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure();
        break;
    }
  }
  function v2(u2) {
    switch (u2.key) {
      case o.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e.disclosureState.value === 0 }, { id: S2, ...K } = t2, M = n2.value ? { ref: l2, type: a.value, onClick: c, onKeydown: D } : { id: (C = e.buttonId.value) != null ? C : S2, ref: l2, type: a.value, "aria-expanded": e.disclosureState.value === 0, "aria-controls": e.disclosureState.value === 0 || o$1(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c, onKeydown: D, onKeyup: v2 };
    return A({ ourProps: M, theirProps: K, slot: u2, attrs: r2, slots: o$2, name: "DisclosureButton" });
  };
} }), V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r2, slots: o2, expose: s2 }) {
  let e = O("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e.panelId.value = t2.id);
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), s2({ el: e.panel, $el: e.panel }), provide(k, e.panelId);
  let i$12 = l(), n2 = computed(() => i$12 !== null ? (i$12.value & i.Open) === i.Open : e.disclosureState.value === 0);
  return () => {
    var v2;
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c } = t2, D = { id: (v2 = e.panelId.value) != null ? v2 : a, ref: e.panel };
    return A({ ourProps: D, theirProps: c, slot: l2, attrs: r2, slots: o2, features: N$1.RenderStrategy | N$1.Static, visible: n2.value, name: "DisclosurePanel" });
  };
} });
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.accordion, accordion);
const configButton = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$4 = defineComponent({
  components: {
    HDisclosure: N,
    HDisclosureButton: Q,
    HDisclosurePanel: V,
    UIcon: __nuxt_component_1,
    UButton: __nuxt_component_5
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    openIcon: {
      type: String,
      default: () => config$3.default.openIcon
    },
    unmount: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: () => config$3.default.closeIcon
    },
    multiple: {
      type: Boolean,
      default: false
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
  emits: ["open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("accordion", toRef(props, "ui"), config$3, toRef(props, "class"));
    const uiButton = computed(() => configButton);
    const buttonRefs = ref([]);
    const openedStates = computed(() => buttonRefs.value.map(({ open }) => open));
    watch(openedStates, (newValue, oldValue) => {
      for (const index in newValue) {
        const isOpenBefore = oldValue[index];
        const isOpenAfter = newValue[index];
        if (!isOpenBefore && isOpenAfter) {
          emit("open", index);
        }
      }
    }, { immediate: true });
    function closeOthers(currentIndex, e) {
      if (!props.items[currentIndex].closeOthers && props.multiple) {
        return;
      }
      buttonRefs.value.forEach((button2) => {
        if (button2.open) {
          button2.close(e.target);
        }
      });
    }
    function onEnter(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.offsetHeight;
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onBeforeLeave(_el) {
      const el = _el;
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
    }
    function onAfterEnter(_el) {
      const el = _el;
      el.style.height = "auto";
    }
    function onLeave(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.addEventListener("transitionend", done, { once: true });
    }
    l$1(() => useId("$SZ7s8siktv"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      uiButton,
      attrs,
      buttonRefs,
      closeOthers,
      omit,
      onEnter,
      onBeforeLeave,
      onAfterEnter,
      onLeave
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HDisclosure = resolveComponent("HDisclosure");
  const _component_HDisclosureButton = resolveComponent("HDisclosureButton");
  const _component_UButton = __nuxt_component_5;
  const _component_UIcon = __nuxt_component_1;
  const _component_HDisclosurePanel = resolveComponent("HDisclosurePanel");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.items, (item, index) => {
    _push(ssrRenderComponent(_component_HDisclosure, {
      key: index,
      as: "div",
      class: _ctx.ui.container,
      "default-open": _ctx.defaultOpen || item.defaultOpen
    }, {
      default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_HDisclosureButton, {
            ref_for: true,
            ref: () => _ctx.buttonRefs[index] = { open, close },
            as: "template",
            disabled: item.disabled,
            onClick: ($event) => _ctx.closeOthers(index, $event),
            onKeydown: [($event) => _ctx.closeOthers(index, $event), ($event) => _ctx.closeOthers(index, $event)]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "default", {
                  item,
                  index,
                  open,
                  close
                }, () => {
                  _push3(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                    trailing: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                            class: [
                              open && !_ctx.closeIcon ? "-rotate-180" : "",
                              _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                              _ctx.ui.item.icon
                            ]
                          }, null, 8, ["name", "class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                }, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "default", {
                    item,
                    index,
                    open,
                    close
                  }, () => [
                    createVNode(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                      trailing: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, 8, ["name", "class"])
                      ]),
                      _: 2
                    }, 1040)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(``);
          if (_ctx.unmount) {
            _push2(ssrRenderComponent(_component_HDisclosurePanel, {
              class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
              unmount: ""
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                    item,
                    index,
                    open,
                    close
                  }, () => {
                    _push3(`${ssrInterpolate(item.content)}`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            _push2(`<div style="${ssrRenderStyle(open ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HDisclosurePanel, {
              class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
              static: ""
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                    item,
                    index,
                    open,
                    close
                  }, () => {
                    _push3(`${ssrInterpolate(item.content)}`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          }
        } else {
          return [
            createVNode(_component_HDisclosureButton, {
              ref_for: true,
              ref: () => _ctx.buttonRefs[index] = { open, close },
              as: "template",
              disabled: item.disabled,
              onClick: ($event) => _ctx.closeOthers(index, $event),
              onKeydown: [
                withKeys(($event) => _ctx.closeOthers(index, $event), ["enter"]),
                withKeys(($event) => _ctx.closeOthers(index, $event), ["space"])
              ]
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  item,
                  index,
                  open,
                  close
                }, () => [
                  createVNode(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }), {
                    trailing: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                        class: [
                          open && !_ctx.closeIcon ? "-rotate-180" : "",
                          _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                          _ctx.ui.item.icon
                        ]
                      }, null, 8, ["name", "class"])
                    ]),
                    _: 2
                  }, 1040)
                ])
              ]),
              _: 2
            }, 1032, ["disabled", "onClick", "onKeydown"]),
            createVNode(Transition, mergeProps({ ref_for: true }, _ctx.ui.transition, {
              onEnter: _ctx.onEnter,
              onAfterEnter: _ctx.onAfterEnter,
              onBeforeLeave: _ctx.onBeforeLeave,
              onLeave: _ctx.onLeave
            }), {
              default: withCtx(() => [
                _ctx.unmount ? (openBlock(), createBlock(_component_HDisclosurePanel, {
                  key: 0,
                  class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
                  unmount: ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      open,
                      close
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"])) : withDirectives((openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_component_HDisclosurePanel, {
                    class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        open,
                        close
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 512)), [
                  [vShow, open]
                ])
              ]),
              _: 2
            }, 1040, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_1,
    UAvatar: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(config$2.border.size.horizontal).includes(value) || Object.keys(config$2.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
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
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config$2);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1;
  const _component_UAvatar = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
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
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config$1);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    return {
      attrs,
      badgeClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.label)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$1 = defineComponent({
  components: {
    UButton: __nuxt_component_5
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    activeButton: {
      type: Object,
      default: () => config.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    divider: {
      type: String,
      default: "…"
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i2) => i2 + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r2 = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r2;
      const r22 = current + r2;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r22 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i2 = 1; i2 <= totalPages; i2++) {
          items.push(i2);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped)
        items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r2 + 2 - totalPages;
        for (let i2 = current - r2 - addedItems; i2 <= current - r2 - 1; i2++) {
          items.push(i2);
        }
      }
      for (let i2 = Math.max(2, r1); i2 <= Math.min(totalPages, r22); i2++) {
        items.push(i2);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r2 - 2);
        for (let i2 = current + r2 + 1; i2 <= current + r2 + addedItems; i2++) {
          items.push(i2);
        }
      }
      if (afterWrapped)
        items.push(props.divider);
      if (r22 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", { onClick: _ctx.onClickFirst }, () => {
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", { onClick: _ctx.onClickPrev }, () => {
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`,
      ref_for: true
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", { onClick: _ctx.onClickNext }, () => {
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", { onClick: _ctx.onClickLast }, () => {
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-dynamic-table",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    dataUrl: { default: "" },
    dataField: { default: () => void 0 },
    columns: { default: () => [] },
    ui: { default: () => ({}) },
    header: { default: "" },
    footer: { default: "" },
    perPage: { default: config$4.default.perPage },
    class: { default: () => void 0 }
  }, {
    "page": { type: Number, default: 1 },
    "pageModifiers": {},
    "q": { type: String, default: "" },
    "qModifiers": {}
  }),
  emits: ["update:page", "update:q"],
  async setup(__props) {
    let __temp, __restore;
    config$4.perPage;
    const props = __props;
    const { ui, attrs } = useUI(
      "sh-dynamic-table",
      toRef(props, "ui"),
      config$4,
      toRef(props, "class")
    );
    const fetchData = async () => {
      const data = await $fetch(props.dataUrl);
      if (props.dataField) {
        return data[props.dataField];
      } else {
        return data;
      }
    };
    const updateData = async () => {
      items.value = await fetchData();
      updateDisplayData();
    };
    const updateDisplayData = async () => {
      displayItems.value = [];
      let filteredData = filterDataByQuery(items.value);
      filteredData = filterDataByQuickFilter(filteredData);
      filteredData = sortDisplayData(filteredData);
      stats.value = getStats(filteredData);
      numberOfItems.value = (filteredData == null ? void 0 : filteredData.length) > 0 ? filteredData.length : 0;
      let startIndex = page.value * perPage.value - perPage.value;
      let endIndex = startIndex + perPage.value > numberOfItems.value ? numberOfItems.value : startIndex + perPage.value;
      for (let index = startIndex; index < endIndex; index++) {
        displayItems.value.push(filteredData[index]);
      }
    };
    const items = toRef([]);
    const displayItems = toRef([]);
    const page = useModel(__props, "page");
    const q = useModel(__props, "q");
    const perPage = toRef(props.perPage);
    const numberOfItems = toRef(0);
    const selectedFilters = toRef([]);
    const stats = toRef([]);
    const accordionItems = toRef([
      {
        label: "Quick Filters",
        icon: "i-heroicons-eye-dropper",
        slot: "quick-filters"
      }
    ]);
    const sortColumn = toRef({});
    const filterDataByQuery = (data) => {
      const fields2Search = props.columns.filter((item) => item.query).map((item) => item.name);
      if (q.value.length > 0) {
        return data.filter((item) => {
          var _a;
          let finded = false;
          for (name of fields2Search) {
            if (name === "Undefined") {
              if (q.value === "") {
                finded = true;
                break;
              }
            } else if ((_a = item[name]) == null ? void 0 : _a.toString().toLowerCase().includes(q.value.toLowerCase())) {
              finded = true;
              break;
            }
          }
          return finded;
        });
      } else {
        return data;
      }
    };
    const filterDataByQuickFilter = (data) => {
      if (selectedFilters.value.length > 0) {
        return selectedFilters.value.reduce((res, el) => {
          if (res.length > 0) {
            res = res.filter((item) => item[el.name] && el.value ? item[el.name].toString() === el.value.toString() : false);
          } else {
            res = data.filter((item) => item[el.name] && el.value ? item[el.name].toString() === el.value.toString() : false);
          }
          return res;
        }, []);
      } else {
        return data;
      }
    };
    const sortDisplayData = (data) => {
      if (Object.keys(sortColumn).length > 0) {
        return data.sort ? data.sort((a, b2) => defaultSort(a[sortColumn.value.name], b2[sortColumn.value.name], sortColumn.value.direction)) : data;
      } else {
        return data;
      }
    };
    const isSelectedFilter = (key, value) => {
      const res = selectedFilters.value.filter((item) => item.name === key && item.value === value);
      return res.length > 0;
    };
    const getColumTitle = (column) => {
      return (column == null ? void 0 : column.title) ? column.title : "";
    };
    const getItemColumValue = (item, column) => {
      return item[column == null ? void 0 : column.name] ? item[column.name] : " ";
    };
    const getSortIcon = (column) => {
      var _a;
      if (((_a = sortColumn.value) == null ? void 0 : _a.name) === column.name) {
        return sortColumn.value.direction === "asc" ? config$4.default.sortAscIcon : config$4.default.sortDescIcon;
      } else {
        return config$4.default.sortButton.icon;
      }
    };
    const getQuickFilterClass = () => {
      const numFilterColumns = props.columns.reduce((res, column) => {
        return column.filter ? res + 1 : res;
      }, 0);
      if (numFilterColumns < 2) {
        return "grid grid-cols-1 gap-4";
      } else if (numFilterColumns < 3) {
        return "grid grid-cols-2 gap-2";
      } else if (numFilterColumns < 4) {
        return "grid grid-cols-3 gap-1";
      } else {
        return "grid grid-cols-4 gap-1";
      }
    };
    const getStats = (data) => {
      const stats2 = {};
      props.columns.forEach((el) => {
        if (el.filter) {
          stats2[el.name] = {};
        }
      });
      if (data.forEach) {
        data.forEach((el) => {
          props.columns.forEach((column) => {
            if (Object.keys(el).includes(column.name) && Object.keys(stats2).includes(column.name)) {
              const label = el[column.name] ? el[column.name] : "Undefined";
              stats2[column.name][label] = stats2[column.name][label] ? stats2[column.name][label] + 1 : 1;
            }
          });
        });
      }
      return stats2;
    };
    const onPageChange = (e) => {
      updateDisplayData();
    };
    const onSearch = (e) => {
      page.value = 1;
      q.value = q.value.trim();
      updateDisplayData();
    };
    const onFilterChange = (e) => {
      const key = e.currentTarget.getAttribute("data-filter-key");
      const value = e.currentTarget.getAttribute("data-filter-value");
      const selected = selectedFilters.value.filter((el) => el.name === key && el.value === value);
      if (selected.length > 0) {
        selectedFilters.value = selectedFilters.value.filter((el) => el != selected[0]);
      } else {
        selectedFilters.value.push({ name: key, value });
      }
      page.value = 1;
      q.value = "";
      updateDisplayData();
    };
    const defaultSort = (a, b2, direction) => {
      if (a == null) {
        a = "";
      }
      if (b2 == null) {
        b2 = "";
      }
      if (a === b2) {
        return 0;
      }
      if (direction === "asc") {
        return a < b2 ? -1 : 1;
      } else {
        return a > b2 ? -1 : 1;
      }
    };
    const onSort = (column) => {
      if (sortColumn.value.name === column.name) {
        sortColumn.value.direction = sortColumn.value.direction === "asc" ? "desc" : "asc";
      } else {
        sortColumn.value = { name: column.name, direction: "asc" };
      }
      updateDisplayData();
    };
    [__temp, __restore] = withAsyncContext(() => updateData()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDC = _sfc_main$5;
      const _component_UInput = __nuxt_component_1$2;
      const _component_UAccordion = __nuxt_component_2;
      const _component_UDivider = __nuxt_component_3;
      const _component_UBadge = __nuxt_component_4;
      const _component_UButton = __nuxt_component_5;
      const _component_UPagination = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(ui).wrapper, props.class]
      }, unref(attrs), _attrs))}>`);
      if (props.header) {
        _push(`<div class="${ssrRenderClass(unref(ui).header)}">`);
        _push(ssrRenderComponent(_component_MDC, {
          value: props.header
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).base)}"><div class="${ssrRenderClass(unref(ui).search)}">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: q.value,
        "onUpdate:modelValue": ($event) => q.value = $event,
        type: "text",
        onKeyup: onSearch,
        placeholder: "type a token to search for"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(ui).filter)}">`);
      _push(ssrRenderComponent(_component_UAccordion, {
        items: unref(accordionItems),
        color: "gray",
        class: "not-prose"
      }, {
        "quick-filters": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(getQuickFilterClass())}"${_scopeId}><!--[-->`);
            ssrRenderList(props.columns, (column) => {
              _push2(`<!--[-->`);
              if (column.filter) {
                _push2(`<div class="rounded-lg border"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UDivider, {
                  label: column.title,
                  class: "py-4"
                }, null, _parent2, _scopeId));
                _push2(`<ul class="max-h-36 overflow-auto"${_scopeId}><!--[-->`);
                ssrRenderList(Object.keys(unref(stats)[column.name]), (label) => {
                  _push2(`<li${ssrRenderAttr("data-filter-key", column.name)}${ssrRenderAttr("data-filter-value", label)} class="${ssrRenderClass([isSelectedFilter(column.name, label) ? unref(ui).tr.selected : "", "list-none flex justify-between p-2 hover:bg-gray-50 hover:dark:bg-gray-800/50 hover:cursor-pointer"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(label)}</span>`);
                  _push2(ssrRenderComponent(_component_UBadge, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(stats)[column.name][label])}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(stats)[column.name][label]), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", {
                class: getQuickFilterClass()
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.columns, (column) => {
                  return openBlock(), createBlock(Fragment, null, [
                    column.filter ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "rounded-lg border"
                    }, [
                      createVNode(_component_UDivider, {
                        label: column.title,
                        class: "py-4"
                      }, null, 8, ["label"]),
                      createVNode("ul", { class: "max-h-36 overflow-auto" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(unref(stats)[column.name]), (label) => {
                          return openBlock(), createBlock("li", {
                            "data-filter-key": column.name,
                            "data-filter-value": label,
                            onClick: onFilterChange,
                            class: ["list-none flex justify-between p-2 hover:bg-gray-50 hover:dark:bg-gray-800/50 hover:cursor-pointer", isSelectedFilter(column.name, label) ? unref(ui).tr.selected : ""]
                          }, [
                            createVNode("span", null, toDisplayString(label), 1),
                            createVNode(_component_UBadge, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(stats)[column.name][label]), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ], 10, ["data-filter-key", "data-filter-value"]);
                        }), 256))
                      ])
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 256))
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><table class="${ssrRenderClass(unref(ui).table)}"><thead${ssrRenderAttr("calss", unref(ui).thead)}><tr${ssrRenderAttr("ui", unref(ui))}><!--[-->`);
      ssrRenderList(props.columns, (column) => {
        _push(`<th class="${ssrRenderClass([unref(ui).th.base, unref(ui).th.padding, unref(ui).th.color, unref(ui).th.font, unref(ui).th.size])}">`);
        if (column.sortable) {
          _push(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ...unref(config$4).default.sortButton }, {
            icon: getSortIcon(column),
            onClick: ($event) => onSort(column)
          }), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_MDC, {
                  value: getColumTitle(column),
                  class: "not-prose"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_MDC, {
                    value: getColumTitle(column),
                    class: "not-prose"
                  }, null, 8, ["value"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_MDC, {
            value: getColumTitle(column),
            class: "not-prose"
          }, null, _parent));
        }
        _push(`</th>`);
      });
      _push(`<!--]--></tr></thead><tbody${ssrRenderAttr("calss", unref(ui).tbody)}><!--[-->`);
      ssrRenderList(unref(displayItems), (row, index) => {
        _push(`<tr${ssrRenderAttr("index", index)}${ssrRenderAttr("calss", unref(ui).tr.base)}><!--[-->`);
        ssrRenderList(props.columns, (column) => {
          _push(`<td class="${ssrRenderClass([[unref(ui).td.base, unref(ui).td.padding, unref(ui).td.color, unref(ui).td.font, unref(ui).td.size], "not-prose"])}">${ssrInterpolate(getItemColumValue(row, column))}</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="${ssrRenderClass(unref(ui).pagination)}">`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        "page-count": unref(perPage),
        total: unref(numberOfItems),
        max: 10,
        onClick: onPageChange,
        "show-last": "",
        "show-first": ""
      }, null, _parent));
      _push(`</div></div>`);
      if (props.footer) {
        _push(`<div class="${ssrRenderClass(unref(ui).footer)}">`);
        _push(ssrRenderComponent(_component_MDC, {
          value: props.footer
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-dynamic-table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-dynamic-table-DlUgl3KQ.js.map
