import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeChange",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const themes = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-selector" }, _attrs))}><button tabindex="0" aria-haspopup="true" aria-label="Change theme" class="theme-btn bg-base-200 p-4 rounded-full focus:outline-none focus:ring focus:ring-primary shadow-md transform hover:scale-110 transition-all ease-in-out duration-200"><span class="theme-icon w-6 h-6"></span></button><div style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="origin-top-right absolute right-0 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-opacity duration-200"><div class="py-1 theme-list grid grid-cols-3 gap-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"><!--[-->`);
      ssrRenderList(themes, (theme, index) => {
        _push(`<button class="theme-item block w-full text-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md" role="menuitem" tabindex="0">${ssrInterpolate(theme)}</button>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ThemeChange.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ThemeChange-6617d867.mjs.map
