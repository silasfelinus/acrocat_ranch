import { ref, mergeProps, unref, useSSRContext, computed, reactive } from 'vue';
import { hash } from 'ohash';
import { b as useRequestFetch } from '../server.mjs';
import { u as useAsyncData } from './asyncData-7e77e17e.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main = {
  __name: "GameScreen",
  __ssrInlineRender: true,
  setup(__props) {
    const prompt = ref("");
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const imageResponse = ref(null);
    const chatHistory = ref([]);
    const { data: colors } = useFetch("/content/wildcard/color.md", "$XQfi548eJ6");
    const { data: models } = useFetch("/content/wildcard/model.md", "$Osy6f5ltiH");
    const { data: locations } = useFetch("/content/wildcard/location.md", "$DSMKrPZzET");
    const { data: embeddings } = useFetch("/content/wildcard/embedding.md", "$5i5eFrqQcZ");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-screen bg-base-100 text-base-content" }, _attrs))}><div class="m-4"><label for="prompt" class="font-bold text-lg">Prompt:</label><textarea id="prompt" class="textarea textarea-bordered w-full h-20">${ssrInterpolate(unref(prompt))}</textarea></div><div class="flex justify-around m-4"><select class="select select-bordered w-40"><option disabled="disabled" selected="selected">Color</option><!--[-->`);
      ssrRenderList(unref(colors), (option, index) => {
        _push(`<option${ssrRenderAttr("value", option)}>${ssrInterpolate(option)}</option>`);
      });
      _push(`<!--]--></select><select class="select select-bordered w-40"><option disabled="disabled" selected="selected">Model</option><!--[-->`);
      ssrRenderList(unref(models), (option, index) => {
        _push(`<option${ssrRenderAttr("value", option)}>${ssrInterpolate(option)}</option>`);
      });
      _push(`<!--]--></select><select class="select select-bordered w-40"><option disabled="disabled" selected="selected">Location</option><!--[-->`);
      ssrRenderList(unref(locations), (option, index) => {
        _push(`<option${ssrRenderAttr("value", option)}>${ssrInterpolate(option)}</option>`);
      });
      _push(`<!--]--></select><select class="select select-bordered w-40"><option disabled="disabled" selected="selected">Embedding</option><!--[-->`);
      ssrRenderList(unref(embeddings), (option, index) => {
        _push(`<option${ssrRenderAttr("value", option)}>${ssrInterpolate(option)}</option>`);
      });
      _push(`<!--]--></select></div><div class="flex justify-center m-4"><button class="btn btn-primary btn-lg">Make Art</button></div><div class="flex flex-row justify-around m-4"><div class="card bordered w-1/2 p-4"><!--[-->`);
      ssrRenderList(unref(chatHistory), (message, index) => {
        _push(`<p>${ssrInterpolate(message)}</p>`);
      });
      _push(`<!--]--></div><div class="card bordered w-1/2 p-4"><div class="card-body"><img${ssrRenderAttr("src", unref(imageResponse))} alt="Art"></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/GameScreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=GameScreen-af314f45.mjs.map
