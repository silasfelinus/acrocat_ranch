import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/index.mjs';
import _sfc_main$1 from './ContentSlot-978cc076.mjs';
import '../server.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ofetch/dist/node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/hookable/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unctx/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ufo/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/destr/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unhead/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ohash/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/scule/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/klona/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unstorage/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/radix3/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/pathe/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unified/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdast-util-to-string/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark/lib/preprocess.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark/lib/postprocess.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-character/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-chunked/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-emoji/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-slug/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-external-links/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-gfm/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-raw/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-parse/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-rehype/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdast-util-to-hast/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/detab/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-builder/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdurl/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/slugify/slugify.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-position/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-visit/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unenv/runtime/npm/consola.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "Markdown",
  extends: _sfc_main$1,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Markdown-5ef7b4e1.mjs.map
