import __nuxt_component_0 from './SiteHeader-0dd64826.mjs';
import __nuxt_component_1 from './SiteFooter-d053401e.mjs';
import { mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './SiteTitle-9888e01c.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'ohash';
import 'cookie-es';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'http-graceful-shutdown';
import './DreamStatus-adae0180.mjs';
import './AmiLink-befcccd1.mjs';
import './SiteLogo-1de238aa.mjs';
import './logo-ec990a7c.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './ThemeChange-6617d867.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_site_header = __nuxt_component_0;
  const _component_site_footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-r from-primary to-secondary flex flex-col" }, _attrs))}><div class="flex-grow p-6 md:p-12 overflow-auto">`);
  _push(ssrRenderComponent(_component_site_header, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "headline", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "headline")
        ];
      }
    }),
    _: 3
  }, _parent));
  ssrRenderSlot(_ctx.$slots, "subheadline", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "main-image", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "main-content", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "additional-content", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_site_footer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "footer")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { welcome as default };
//# sourceMappingURL=welcome-e36e7081.mjs.map
