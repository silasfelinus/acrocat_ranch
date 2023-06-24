import { onErrorCaptured, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useBotStore, _ as _sfc_main$1 } from './BotCard-fdfc9d63.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = {
  __name: "BotGallery",
  __ssrInlineRender: true,
  setup(__props) {
    const botStore = useBotStore();
    onErrorCaptured((error) => {
      botStore.error = error.message;
      return true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-10" }, _attrs))} data-v-41fe44fd><h1 class="text-4xl mb-10 text-center" data-v-41fe44fd>Our Chat Bots</h1>`);
      if (unref(botStore).error) {
        _push(`<div class="text-center text-red-600" data-v-41fe44fd><p data-v-41fe44fd>An error occurred while fetching bots: ${ssrInterpolate(unref(botStore).error)}</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-v-41fe44fd><!--[-->`);
        ssrRenderList(unref(botStore).bots, (bot) => {
          _push(`<div class="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transform transition" tabindex="0" data-v-41fe44fd><figure data-v-41fe44fd><img${ssrRenderAttr("src", bot.avatarImage)} alt="bot avatar" class="h-48 w-full object-cover" data-v-41fe44fd></figure><div class="card-body p-4" data-v-41fe44fd><h2 class="card-title text-xl" data-v-41fe44fd>${ssrInterpolate(bot.name)}</h2><p class="text-gray-500 mt-2" data-v-41fe44fd>${ssrInterpolate(bot.description)}</p>`);
          if (unref(botStore).selectedBot && unref(botStore).selectedBot.id === bot.id) {
            _push(ssrRenderComponent(_sfc_main$1, {
              bot: unref(botStore).selectedBot
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/BotGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BotGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41fe44fd"]]);

export { BotGallery as default };
//# sourceMappingURL=BotGallery-bf1a0498.mjs.map
