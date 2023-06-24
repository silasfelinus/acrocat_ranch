import { ref, computed, mergeProps, unref, useSSRContext } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './logo-ec990a7c.mjs';
import '../../renderer.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/devalue/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ofetch/dist/node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/destr/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/hookable/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/scule/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/klona/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/defu/dist/defu.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ohash/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ufo/dist/index.mjs';
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
  __name: "SubmissionForm",
  __ssrInlineRender: true,
  setup(__props) {
    let date = ref((/* @__PURE__ */ new Date()).toISOString().substr(0, 10));
    let clientName = ref("");
    let servicesProvided = ref("");
    let hours = ref("");
    let rate = ref("");
    let productCost = ref("");
    let clientEmail = ref("");
    let totalCost = computed(() => {
      return hours.value * rate.value + Number(productCost.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen flex justify-center items-center" }, _attrs))}><div class="bg-white max-w-md mx-auto rounded-xl shadow-lg p-10 space-y-5"><h1 class="text-4xl font-bold text-center text-indigo-600 mb-10"> Hair by Superkate! </h1><div class="flex justify-center mb-5"><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="h-14 w-auto"></div><form class="space-y-5"><label class="block text-gray-700"> Date <input${ssrRenderAttr("value", unref(date))} type="date" class="input input-bordered w-full" aria-label="Date" required></label><label class="block text-gray-700"> Client&#39;s Name <input${ssrRenderAttr("value", unref(clientName))} type="text" class="input input-bordered w-full" placeholder="Client&#39;s Name" aria-label="Client&#39;s Name" required></label><label class="block text-gray-700"> Services Provided <input${ssrRenderAttr("value", unref(servicesProvided))} type="text" class="input input-bordered w-full" placeholder="Services"></label><div class="card bordered"><div class="card-body space-y-5"><div class="space-y-2"><label class="block text-gray-700"> Number of Hours <input${ssrRenderAttr("value", unref(hours))} type="number" class="input input-bordered w-full" placeholder="Number of hours"></label><label class="block text-gray-700"> Rate per Hour ($) <input${ssrRenderAttr("value", unref(rate))} type="number" class="input input-bordered w-full" placeholder="Rate per hour"></label></div><hr><div class="space-y-2"><label class="block text-gray-700"> Product Cost ($) <input${ssrRenderAttr("value", unref(productCost))} type="number" class="input input-bordered w-full" placeholder="Product cost"></label></div><hr><div class="bg-gray-100 p-2 rounded-md"> Total cost: $${ssrInterpolate(unref(totalCost))}</div><hr><div class="bg-gray-100 p-2 rounded-md"> Calculation: ($${ssrInterpolate(unref(rate))} Rate per hour x ${ssrInterpolate(unref(hours))} hours) + $${ssrInterpolate(unref(productCost))} Product Cost = $${ssrInterpolate(unref(totalCost))}</div></div></div><label class="block text-gray-700"> Client&#39;s Email <div class="relative"><input${ssrRenderAttr("value", unref(clientEmail))} type="email" class="input input-bordered w-full pr-20" placeholder="Client&#39;s Email"><div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"> + superkate@gmail.com </div></div></label><button type="submit" class="btn btn-primary w-full">Send</button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/SubmissionForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SubmissionForm-642748c0.mjs.map
