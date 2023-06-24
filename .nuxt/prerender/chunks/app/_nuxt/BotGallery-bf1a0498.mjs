import { onErrorCaptured, mergeProps, unref, useSSRContext } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/server-renderer/index.mjs';
import { u as useBotStore, _ as _sfc_main$1 } from './BotCard-fdfc9d63.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
