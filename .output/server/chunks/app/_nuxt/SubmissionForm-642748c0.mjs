import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-ec990a7c.mjs';
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
