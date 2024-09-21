import { _ as __nuxt_component_0, h as htmlTags } from './MDCRenderer-Da3FR2NX.mjs';
import { defineComponent, computed, withAsyncContext, watch, unref, useSSRContext } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/index.mjs';
import { ssrRenderSlot, ssrRenderComponent } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/vue/server-renderer/index.mjs';
import { hash } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/ohash/dist/index.mjs';
import { d as useAsyncData } from './server.mjs';
import { defu } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/defu/dist/defu.mjs';
import { unified } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/unified/index.js';
import remarkParse from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-mdc/dist/index.mjs';
import { toString } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/github-slugger/index.js';
import { detab } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/detab/index.js';
import { kebabCase } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/scule/dist/index.mjs';
import { normalizeUri } from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/micromark-util-sanitize-uri/index.js';
import remarkEmoji from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-emoji/index.js';
import remarkGFM from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///home/dima/Workspace/OMA/github/oma-knowledge-base/node_modules/rehype-raw/index.js';
import { n as nodeTextContent } from './node-B5VQLu6X.mjs';

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};
const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => parseInt(i));
    }
  }
  return props;
};
function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    var _a, _b, _c, _d, _e;
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = (_a = node.children) == null ? void 0 : _a.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if ((_b = node.tagName) == null ? void 0 : _b.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(((_c = node.properties) == null ? void 0 : _c.id) || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && ((_d = node.content) == null ? void 0 : _d.children.length) ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (node.value !== "\n" || ((_e = parent == null ? void 0 : parent.properties) == null ? void 0 : _e.emptyLinePlaceholder)) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => {
      var _a;
      return node.type === "comment" && ((_a = node.value) == null ? void 0 : _a.trim()) === "more";
    });
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    return {
      body,
      excerpt
    };
  };
}
function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function parseThematicBlock(lang) {
  var _a, _b, _c;
  if (!(lang == null ? void 0 : lang.trim())) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace((_a = languageMatches == null ? void 0 : languageMatches[0]) != null ? _a : "", "").replace((_b = highlightTokensMatches == null ? void 0 : highlightTokensMatches[0]) != null ? _b : "", "").replace((_c = filenameMatches == null ? void 0 : filenameMatches[0]) != null ? _c : "", "").trim();
  return {
    language: (languageMatches == null ? void 0 : languageMatches[0]) || void 0,
    highlights: parseHighlightedLines((highlightTokensMatches == null ? void 0 : highlightTokensMatches[1]) || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: (filenameMatches == null ? void 0 : filenameMatches[1].replace(/\\]/g, "]")) || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      // @ts-ignore
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};
function html(state, node) {
  var _a;
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || ((_a = state.options) == null ? void 0 : _a.allowDangerousHtml)) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}
function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function inlineCode(state, node) {
  var _a, _b;
  const language = ((_a = node.attributes) == null ? void 0 : _a.language) || ((_b = node.attributes) == null ? void 0 : _b.lang);
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}
function containerComponent(state, node) {
  var _a;
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...(_a = node.data) == null ? void 0 : _a.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}
const handlers = {
  emphasis,
  code,
  link,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};
const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      // @ts-ignore
      handlers,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};
function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}
const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    var _a;
    if ((_a = header.children) == null ? void 0 : _a.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => {
    var _a;
    return {
      id: (_a = node.props) == null ? void 0 : _a.id,
      depth: getHeaderDepth(node),
      text: flattenNodeText(node)
    };
  });
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}
let moduleOptions;
let generatedMdcConfigs;
const createMarkdownParser = async (inlineOptions = {}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  if (!moduleOptions) {
    moduleOptions = await import(
      './mdc-imports-BgcUvRCj.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await import(
      './mdc-configs-D-mPnyQ5.mjs'
      /* @vite-ignore */
    ).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu(inlineOptions, {
    remark: { plugins: moduleOptions == null ? void 0 : moduleOptions.remarkPlugins },
    rehype: { plugins: moduleOptions == null ? void 0 : moduleOptions.rehypePlugins },
    highlight: moduleOptions == null ? void 0 : moduleOptions.highlight
  }, defaults);
  if ((_b = (_a = options.rehype) == null ? void 0 : _a.plugins) == null ? void 0 : _b.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs) {
    processor = await ((_d = (_c = config.unified) == null ? void 0 : _c.pre) == null ? void 0 : _d.call(_c, processor)) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs) {
    processor = await ((_f = (_e = config.unified) == null ? void 0 : _e.remark) == null ? void 0 : _f.call(_e, processor)) || processor;
  }
  await useProcessorPlugins(processor, (_g = options.remark) == null ? void 0 : _g.plugins);
  processor.use(remark2rehype, (_h = options.rehype) == null ? void 0 : _h.options);
  for (const config of mdcConfigs) {
    processor = await ((_j = (_i = config.unified) == null ? void 0 : _i.rehype) == null ? void 0 : _j.call(_i, processor)) || processor;
  }
  await useProcessorPlugins(processor, (_k = options.rehype) == null ? void 0 : _k.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs) {
    processor = await ((_m = (_l = config.unified) == null ? void 0 : _l.post) == null ? void 0 : _m.call(_l, processor)) || processor;
  }
  return async (md) => {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const processedFile = await processor.process({ value: content, data: frontmatter });
    const result = processedFile.result;
    const data = Object.assign(
      contentHeading(result.body),
      frontmatter,
      (processedFile == null ? void 0 : processedFile.data) || {}
    );
    let toc;
    if (data.toc !== false) {
      const tocOption = defu(data.toc || {}, options.toc);
      toc = generateToc(result.body, tocOption);
    }
    return {
      data,
      body: result.body,
      excerpt: result.excerpt,
      toc
    };
  };
};
const parseMarkdown = async (md, inlineOptions = {}) => {
  const parser = await createMarkdownParser(inlineOptions);
  return parser(md);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MDC",
  __ssrInlineRender: true,
  props: {
    tag: {
      type: [String, Boolean],
      default: "div"
    },
    /**
     * Raw markdown string or parsed markdown object from `parseMarkdown`
     */
    value: {
      type: [String, Object],
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Options for `parseMarkdown`
     */
    parserOptions: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class to be applied to the root element
     */
    class: {
      type: [String, Array, Object],
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const key = computed(() => hash(props.value));
    const { data, refresh, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(key.value, async () => {
      if (typeof props.value !== "string") {
        return props.value;
      }
      return await parseMarkdown(props.value, props.parserOptions);
    }, "$c2vlHSrNA1")), __temp = await __temp, __restore(), __temp);
    const body = computed(() => {
      var _a, _b;
      return props.excerpt ? (_a = data.value) == null ? void 0 : _a.excerpt : (_b = data.value) == null ? void 0 : _b.body;
    });
    watch(() => props.value, () => {
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_MDCRenderer = __nuxt_component_0;
      ssrRenderSlot(_ctx.$slots, "default", {
        data: (_a = unref(data)) == null ? void 0 : _a.data,
        body: (_b = unref(data)) == null ? void 0 : _b.body,
        toc: (_c = unref(data)) == null ? void 0 : _c.toc,
        excerpt: (_d = unref(data)) == null ? void 0 : _d.excerpt,
        error: unref(error)
      }, () => {
        var _a2;
        if (body.value) {
          _push(ssrRenderComponent(_component_MDCRenderer, {
            tag: __props.tag,
            class: props.class,
            body: body.value,
            data: (_a2 = unref(data)) == null ? void 0 : _a2.data
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=MDC-T9lPa9WT.mjs.map
