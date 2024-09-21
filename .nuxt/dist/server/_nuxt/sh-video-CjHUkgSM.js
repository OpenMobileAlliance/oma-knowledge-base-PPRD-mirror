import { c as useUI } from "../server.mjs";
import { defineComponent, toRef, computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
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
const config = {
  wrapper: "mx-5 ring-4",
  // Default Tailwind CSS values
  default: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sh-video",
  __ssrInlineRender: true,
  props: {
    description: { default: "" },
    src: { default: "" },
    ui: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { ui } = useUI(
      "sh-video",
      toRef(props, "ui"),
      config
    );
    const isYouTubeVideo = computed(() => isYouTubeVideoCheck(props.src));
    const videoType = ref("");
    const videoSource = computed(() => {
      if (isYouTubeVideo.value) {
        videoType.value = "text/html";
        return `https://www.youtube.com/embed/${getYouTubeVideoId(props.src)}`;
      } else {
        videoType.value = "video/mp4";
        return props.src;
      }
    });
    const isYouTubeVideoCheck = (url) => {
      return url.includes("youtube.com") || url.includes("youtu.be");
    };
    const getYouTubeVideoId = (url) => {
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      return match ? match[1] : null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, _attrs))}>`);
      if (!isYouTubeVideo.value) {
        _push(`<video controls><source${ssrRenderAttr("src", videoSource.value)}${ssrRenderAttr("type", videoType.value)}> Your browser does not support the video tag. </video>`);
      } else {
        _push(`<iframe${ssrRenderAttr("src", videoSource.value)} frameborder="0" allowfullscreen width="100%" height="700"></iframe>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/sh-video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sh-video-CjHUkgSM.js.map
