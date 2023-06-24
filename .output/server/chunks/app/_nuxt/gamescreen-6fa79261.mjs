import _sfc_main$1 from './ButtonCard-ce50d422.mjs';
import _sfc_main$2 from './AmiLink-befcccd1.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './SiteLogo-1de238aa.mjs';
import './logo-ec990a7c.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
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
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_button_card = _sfc_main$1;
  const _component_AmiLink = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col bg-gradient-to-r from-primary to-secondary rounded-br-3xl rounded-tr-3xl" }, _attrs))}><div class="flex items-center justify-between px-6 py-4 bg-primary rounded-tl-3xl"></div><div class="flex-grow grid grid-cols-4 gap-4 p-6"><div class="col-span-3 bg-secondary rounded-lg p-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="flex flex-col gap-4 bg-primary rounded-lg p-4">`);
  _push(ssrRenderComponent(_component_button_card, {
    label: "Button 1",
    description: "Button 1 description",
    "color-id": 1
  }, null, _parent));
  _push(ssrRenderComponent(_component_button_card, {
    label: "Button 2",
    description: "Button 2 description",
    "color-id": 2
  }, null, _parent));
  _push(ssrRenderComponent(_component_button_card, {
    label: "Button 3",
    description: "Button 3 description",
    "color-id": 3
  }, null, _parent));
  _push(ssrRenderComponent(_component_button_card, {
    label: "Button 4",
    description: "Button 4 description",
    "color-id": 4
  }, null, _parent));
  _push(`</div></div><div class="flex justify-end px-6 py-4 bg-primary rounded-br-3xl">`);
  _push(ssrRenderComponent(_component_AmiLink, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/gamescreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gamescreen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { gamescreen as default };
//# sourceMappingURL=gamescreen-6fa79261.mjs.map
