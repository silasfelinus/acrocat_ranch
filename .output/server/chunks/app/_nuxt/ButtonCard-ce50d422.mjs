import { computed, mergeProps, unref, useSSRContext } from 'vue'
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer'

const _sfc_main = {
  __name: 'ButtonCard',
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    colorId: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      default: ''
    }
  },
  setup(__props) {
    const props = __props
    const cardColor = computed(() => {
      const baseColors = ['bg-accent', 'bg-secondary', 'bg-accent', 'bg-warning']
      return baseColors[props.colorId - 1] || baseColors[0]
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            {
              class: [
                'flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer',
                unref(cardColor)
              ]
            },
            _attrs
          )
        )}>`
      )
      if (__props.label) {
        _push(`<div class="text-lg font-semibold mb-2">${ssrInterpolate(__props.label)}</div>`)
      } else {
        _push(`<!---->`)
      }
      _push(`<div class="flex items-center justify-center">`)
      if (__props.image) {
        _push(`<img${ssrRenderAttr('src', __props.image)} class="h-16 w-16 mr-2">`)
      } else {
        _push(`<!---->`)
      }
      _push(`<div>${ssrInterpolate(__props.description)}</div></div></div>`)
    }
  }
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/ButtonCard.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}

export { _sfc_main as default }
//# sourceMappingURL=ButtonCard-ce50d422.mjs.map
