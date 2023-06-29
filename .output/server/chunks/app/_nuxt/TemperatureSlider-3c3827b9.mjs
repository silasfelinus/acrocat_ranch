import { ref, mergeProps, useSSRContext } from 'vue'
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer'

const _sfc_main = {
  __name: 'TemperatureSlider',
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(0.5)
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            { class: 'flex items-center p-4 bg-indigo-100 rounded shadow-md cursor-move' },
            _attrs
          )
        )}><label for="temperature" class="mr-4">Creativity:</label><input id="temperature"${ssrRenderAttr(
          'value',
          value.value
        )} type="range" min="0.0" max="1.0" step="0.1" class="flex-grow cursor-pointer"><span class="ml-4">${ssrInterpolate(
          value.value
        )}</span></div>`
      )
    }
  }
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/TemperatureSlider.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}

export { _sfc_main as default }
//# sourceMappingURL=TemperatureSlider-3c3827b9.mjs.map
