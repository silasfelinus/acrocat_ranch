import { _ as __nuxt_component_0 } from './nuxt-link-f805a121.mjs';
import { q as queryContent } from '../server.mjs';
import { defineComponent, withAsyncContext, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/index.mjs';
import { u as useAsyncData } from './asyncData-7e77e17e.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ufo/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ofetch/dist/node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/hookable/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unctx/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/destr/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unhead/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ohash/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/cookie-es/dist/index.mjs';
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
  __name: "PageList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { find } = queryContent().where({ $not: { _path: "/" } }).sort({ _id: 1 });
    const { data: pages } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("pages-list", find)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><hr><ul><li><span>\u{1F3E0}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(unref(pages), (page) => {
        _push(`<li><span>\u{1F517}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: page._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (page.gallery) {
          _push(`<span> - ${ssrInterpolate(page.gallery)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><hr></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PageList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PageList-c722c19d.mjs.map
