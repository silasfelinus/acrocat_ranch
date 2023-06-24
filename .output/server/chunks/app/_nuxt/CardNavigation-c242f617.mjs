import { _ as __nuxt_component_0 } from './nuxt-link-f805a121.mjs';
import __nuxt_component_1 from './Icon-328942d0.mjs';
import { ref, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
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
import './config-88e04147.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = {
  __name: "CardNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const navigationTree = ref([]);
    const fetchContentNavigation = async () => {
      const response = await fetch("/botcafe");
      const data = await response.json();
      navigationTree.value = data;
    };
    fetchContentNavigation();
    const cardClass = (state) => {
      let baseClass = "transform transition-all duration-200 hover:scale-105 bg-primary rounded-lg shadow-lg overflow-hidden grid grid-cols-4 gap-4";
      if (state === "collapsed") {
        return `${baseClass} hidden`;
      } else if (state === "icon") {
        return `${baseClass} grid-cols-1`;
      } else if (state === "image") {
        return `${baseClass} grid-cols-2`;
      } else {
        return baseClass;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-y-auto max-w-lg mx-auto p-4" }, _attrs))}><ul class="space-y-4"><!--[-->`);
      ssrRenderList(unref(navigationTree), (item, index) => {
        _push(`<li class="space-y-4"><div class="${ssrRenderClass(cardClass(item.state))}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          class: "block text-center text-2xl font-semibold leading-tight text-black overflow-hidden overflow-ellipsis mb-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.state === "icon") {
                _push2(ssrRenderComponent(_component_icon, {
                  icon: item.icon
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(item.title)}`);
            } else {
              return [
                item.state === "icon" ? (openBlock(), createBlock(_component_icon, {
                  key: 0,
                  icon: item.icon
                }, null, 8, ["icon"])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.state === "image" || item.state === "full") {
          _push(`<!--[--><div class="col-span-1"><img${ssrRenderAttr("src", item.image || item.gallery || "/images/backtree.webp")} alt="Section Image" class="w-full h-full object-cover"></div><div class="col-span-3 p-4 bg-secondary text-black rounded">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.link,
            class: "block text-center text-2xl font-semibold leading-tight text-black overflow-hidden overflow-ellipsis mb-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="text-black">${ssrInterpolate(item.details)}</p></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/CardNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CardNavigation-c242f617.mjs.map
