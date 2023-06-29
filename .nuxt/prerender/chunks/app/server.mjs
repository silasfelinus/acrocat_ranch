import {
  hasInjectionContext,
  getCurrentInstance,
  toRef,
  isRef,
  inject,
  version,
  ref,
  onServerPrefetch,
  defineAsyncComponent,
  computed,
  useSSRContext,
  defineComponent,
  unref,
  watchEffect,
  watch,
  h,
  resolveComponent,
  reactive,
  mergeProps,
  onUnmounted,
  Suspense,
  nextTick,
  Transition,
  provide,
  withAsyncContext,
  withCtx,
  createVNode,
  openBlock,
  createBlock,
  toDisplayString,
  createApp,
  markRaw,
  effectScope,
  isReactive,
  toRaw,
  onErrorCaptured,
  resolveDynamicComponent,
  shallowRef,
  isReadonly,
  getCurrentScope,
  onScopeDispose,
  toRefs,
  isShallow
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/index.mjs'
import { $fetch as $fetch$1 } from 'file:///home/silasfelinus/code/kindrobots/node_modules/ofetch/dist/node.mjs'
import { createHooks } from 'file:///home/silasfelinus/code/kindrobots/node_modules/hookable/dist/index.mjs'
import {
  getContext,
  executeAsync
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/unctx/dist/index.mjs'
import {
  useRoute as useRoute$1,
  createMemoryHistory,
  createRouter,
  START_LOCATION,
  RouterView
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue-router/dist/vue-router.node.mjs'
import {
  createError as createError$1,
  setCookie,
  getCookie,
  deleteCookie,
  sanitizeStatusCode
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs'
import {
  withoutTrailingSlash,
  withLeadingSlash,
  joinURL,
  hasProtocol,
  parseURL,
  parseQuery,
  withBase,
  withTrailingSlash,
  withQuery
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/ufo/dist/index.mjs'
import destr from 'file:///home/silasfelinus/code/kindrobots/node_modules/destr/dist/index.mjs'
import { renderSSRHead } from 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/ssr/dist/index.mjs'
import {
  getActiveHead,
  createServerHead as createServerHead$1
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/unhead/dist/index.mjs'
import { defineHeadPlugin } from 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/shared/dist/index.mjs'
import {
  hash,
  isEqual
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/ohash/dist/index.mjs'
import { parse } from 'file:///home/silasfelinus/code/kindrobots/node_modules/cookie-es/dist/index.mjs'
import {
  ssrRenderAttrs,
  ssrRenderAttr,
  ssrRenderStyle,
  ssrRenderList,
  ssrRenderComponent,
  ssrInterpolate,
  ssrRenderSlot,
  ssrRenderSuspense,
  ssrRenderVNode
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/server-renderer/index.mjs'
import { makeNoise2D } from 'file:///home/silasfelinus/code/kindrobots/node_modules/open-simplex-noise/lib/mod.js'
import { defu } from 'file:///home/silasfelinus/code/kindrobots/node_modules/defu/dist/defu.mjs'
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/node-fetch-native/dist/polyfill.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unenv/runtime/fetch/index.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/scule/dist/index.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/klona/dist/index.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unstorage/dist/index.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unstorage/drivers/fs.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/radix3/dist/index.mjs'
import 'node:fs'
import 'node:url'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/pathe/dist/index.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unified/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdast-util-to-string/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark/lib/preprocess.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark/lib/postprocess.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-stringify-position/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-character/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-chunked/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-resolve-all/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-emoji/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-slug/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-squeeze-paragraphs/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-external-links/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-gfm/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-sort-attribute-values/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-sort-attributes/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-raw/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-mdc/dist/index.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-parse/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-rehype/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdast-util-to-hast/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/detab/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-builder/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdurl/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/slugify/slugify.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-position/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-visit/index.js'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/shiki-es/dist/shiki.node.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unenv/runtime/npm/consola.mjs'

const appConfig = useRuntimeConfig$1().app
const baseURL = () => appConfig.baseURL
const nuxtAppCtx = /* @__PURE__ */ getContext('nuxt-app')
const NuxtPluginIndicator = '__nuxt_plugin'
function createNuxtApp(options) {
  let hydratingCount = 0
  const nuxtApp = {
    provide: void 0,
    globalName: 'nuxt',
    versions: {
      get nuxt() {
        return '3.6.1'
      },
      get vue() {
        return nuxtApp.vueApp.version
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {}
      }
      hydratingCount++
      let called = false
      return () => {
        if (called) {
          return
        }
        called = true
        hydratingCount--
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false
          return nuxtApp.callHook('app:suspense:resolve')
        }
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  }
  nuxtApp.hooks = createHooks()
  nuxtApp.hook = nuxtApp.hooks.hook
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args))
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) =>
      nuxtApp.hooks.callHookWith(contextCaller, name, ...args)
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook
  nuxtApp.provide = (name, value) => {
    const $name = '$' + name
    defineGetter(nuxtApp, $name, value)
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value)
  }
  defineGetter(nuxtApp.vueApp, '$nuxt', nuxtApp)
  defineGetter(nuxtApp.vueApp.config.globalProperties, '$nuxt', nuxtApp)
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp
      nuxtApp.ssrContext._payloadReducers = {}
      nuxtApp.payload.path = nuxtApp.ssrContext.url
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {}
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload)
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    }
  }
  const runtimeConfig = options.ssrContext.runtimeConfig
  nuxtApp.provide('config', runtimeConfig)
  return nuxtApp
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks)
  }
  if (typeof plugin2 === 'function') {
    const { provide: provide2 } = (await nuxtApp.runWithContext(() => plugin2(nuxtApp))) || {}
    if (provide2 && typeof provide2 === 'object') {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key])
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const parallels = []
  const errors = []
  for (const plugin2 of plugins2) {
    const promise = applyPlugin(nuxtApp, plugin2)
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)))
    } else {
      await promise
    }
  }
  await Promise.all(parallels)
  if (errors.length) {
    throw errors[0]
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === 'function') {
    return plugin2
  }
  delete plugin2.name
  return Object.assign(plugin2.setup || (() => {}), plugin2, { [NuxtPluginIndicator]: true })
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => (args ? setup(...args) : setup())
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn))
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function useNuxtApp() {
  var _a
  let nuxtAppInstance
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse()
  if (!nuxtAppInstance) {
    {
      throw new Error('[nuxt] instance unavailable')
    }
  }
  return nuxtAppInstance
}
/*! @__NO_SIDE_EFFECTS__ */
function useRuntimeConfig() {
  return useNuxtApp().$config
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val })
}
function defineAppConfig(config) {
  return config
}
const useStateKeyPrefix = '$s'
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === 'string' ? args.pop() : void 0
  if (typeof args[0] !== 'string') {
    args.unshift(autoKey)
  }
  const [_key, init] = args
  if (!_key || typeof _key !== 'string') {
    throw new TypeError('[nuxt] [useState] key must be a string: ' + _key)
  }
  if (init !== void 0 && typeof init !== 'function') {
    throw new Error('[nuxt] [useState] init must be a function: ' + init)
  }
  const key = useStateKeyPrefix + _key
  const nuxt = useNuxtApp()
  const state = toRef(nuxt.payload.state, key)
  if (state.value === void 0 && init) {
    const initialValue = init()
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue
      return initialValue
    }
    state.value = initialValue
  }
  return state
}
const useRouter = () => {
  var _a
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router
}
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject('_route', useNuxtApp()._route)
  }
  return useNuxtApp()._route
}
/*! @__NO_SIDE_EFFECTS__ */
function defineNuxtRouteMiddleware(middleware) {
  return middleware
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp()
  const global = options.global || typeof name !== 'string'
  const mw = typeof name !== 'string' ? name : middleware
  if (!mw) {
    console.warn('[nuxt] No route middleware passed to `addRouteMiddleware`.', name)
    return
  }
  if (global) {
    nuxtApp._middleware.global.push(mw)
  } else {
    nuxtApp._middleware.named[name] = mw
  }
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true
    }
  } catch {
    return true
  }
  return false
}
const navigateTo = (to, options) => {
  if (!to) {
    to = '/'
  }
  const toPath =
    typeof to === 'string' ? to : withQuery(to.path || '/', to.query || {}) + (to.hash || '')
  if (options == null ? void 0 : options.open) {
    return Promise.resolve()
  }
  const isExternal =
    (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true })
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error(
      'Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.'
    )
  }
  if (isExternal && parseURL(toPath).protocol === 'script:') {
    throw new Error('Cannot navigate to an URL with script protocol.')
  }
  const inMiddleware = isProcessingMiddleware()
  const router = useRouter()
  const nuxtApp = useNuxtApp()
  {
    if (nuxtApp.ssrContext) {
      const fullPath =
        typeof to === 'string' || isExternal ? toPath : router.resolve(to).fullPath || '/'
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath)
      async function redirect(response) {
        await nuxtApp.callHook('app:redirected')
        const encodedLoc = location2.replace(/"/g, '%22')
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(
            (options == null ? void 0 : options.redirectCode) || 302,
            302
          ),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        }
        return response
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => (final.fullPath === fullPath ? redirect(false) : void 0))
        return to
      }
      return redirect(
        !inMiddleware
          ? void 0
          : /* abort route navigation */
            false
      )
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath)
    } else {
      location.href = toPath
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false
      }
      return new Promise(() => {})
    }
    return Promise.resolve()
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to)
}
const useError = () => toRef(useNuxtApp().payload, 'error')
const showError = (_err) => {
  const err = createError(_err)
  try {
    const nuxtApp = useNuxtApp()
    const error = useError()
    if (false);
    error.value = error.value || err
  } catch {
    throw err
  }
  return err
}
const isNuxtError = (err) => !!(err && typeof err === 'object' && '__nuxt_error' in err)
const createError = (err) => {
  const _err = createError$1(err)
  _err.__nuxt_error = true
  return _err
}
const _routes = [
  {
    name: 'slug',
    path: '/:slug(.*)*',
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_...slug_-f2e1196e.mjs').then((m) => m.default || m)
  }
]
const appLayoutTransition = { name: 'default', mode: 'out-in' }
const appHead = {
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' }
  ],
  link: [],
  style: [],
  script: [],
  noscript: []
}
const appPageTransition = false
const appKeepalive = false
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()
    let position = savedPosition || void 0
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 }
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 }
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) }
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition)
    const hookToWait =
      hasTransition(from) && hasTransition(to) ? 'page:transition:finish' : 'page:finish'
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick()
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) }
        }
        resolve(position)
      })
    })
  }
}
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector)
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop)
    }
  } catch {}
  return 0
}
function _isDifferentRoute(from, to) {
  const samePageComponent = to.matched.every((comp, index) => {
    var _a, _b, _c
    return (
      ((_a = comp.components) == null ? void 0 : _a.default) ===
      ((_c = (_b = from.matched[index]) == null ? void 0 : _b.components) == null
        ? void 0
        : _c.default)
    )
  })
  if (!samePageComponent) {
    return true
  }
  if (samePageComponent && JSON.stringify(from.params) !== JSON.stringify(to.params)) {
    return true
  }
  return false
}
const configRouterOptions = {}
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
}
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a
  let __temp, __restore
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return
  }
  useRouter()
  const result =
    (([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to)))),
    (__temp = await __temp),
    __restore(),
    __temp)
  if (result === true) {
    return
  }
  {
    return result
  }
})
const globalMiddleware = [validate]
const namedMiddleware = {}
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:router',
  enforce: 'pre',
  async setup(nuxtApp) {
    var _a, _b
    let __temp, __restore
    let routerBase = useRuntimeConfig().app.baseURL
    if (routerOptions.hashMode && !routerBase.includes('#')) {
      routerBase += '#'
    }
    const history =
      ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ??
      createMemoryHistory(routerBase)
    const routes =
      ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes
    let startPosition
    const initialURL = nuxtApp.ssrContext.url
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2
        if (from === START_LOCATION) {
          startPosition = savedPosition
          return
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior
        return (_a2 = routerOptions.scrollBehavior) == null
          ? void 0
          : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition)
      },
      history,
      routes
    })
    nuxtApp.vueApp.use(router)
    const previousRoute = shallowRef(router.currentRoute.value)
    router.afterEach((_to, from) => {
      previousRoute.value = from
    })
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, 'previousRoute', {
      get: () => previousRoute.value
    })
    const _route = shallowRef(router.resolve(initialURL))
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value
    }
    nuxtApp.hook('page:finish', syncCurrentRoute)
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d
      if (
        ((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null
          ? void 0
          : _b2.default) ===
        ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null
          ? void 0
          : _d.default)
      ) {
        syncCurrentRoute()
      }
    })
    const route = {}
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key])
    }
    nuxtApp._route = reactive(route)
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    }
    useError()
    try {
      if (true) {
        ;([__temp, __restore] = executeAsync(() => router.push(initialURL))),
          await __temp,
          __restore()
      }
      ;([__temp, __restore] = executeAsync(() => router.isReady())), await __temp, __restore()
    } catch (error2) {
      ;([__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2)))),
        await __temp,
        __restore()
    }
    const initialLayout = useState('_layout')
    router.beforeEach(async (to, from) => {
      var _a2, _b2
      to.meta = reactive(to.meta)
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value
      }
      nuxtApp._processingMiddleware = true
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([
          ...globalMiddleware,
          ...nuxtApp._middleware.global
        ])
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware
          if (!componentMiddleware) {
            continue
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2)
            }
          } else {
            middlewareEntries.add(componentMiddleware)
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware =
            typeof entry2 === 'string'
              ? nuxtApp._middleware.named[entry2] ||
                (await ((_b2 = namedMiddleware[entry2]) == null
                  ? void 0
                  : _b2.call(namedMiddleware).then((r) => r.default || r)))
              : entry2
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`)
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from))
          {
            if (result === false || result instanceof Error) {
              const error2 =
                result ||
                createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                })
              await nuxtApp.runWithContext(() => showError(error2))
              return false
            }
          }
          if (result || result === false) {
            return result
          }
        }
      }
    })
    router.onError(() => {
      delete nuxtApp._processingMiddleware
    })
    router.afterEach(async (to, _from, failure) => {
      var _a2
      delete nuxtApp._processingMiddleware
      if ((failure == null ? void 0 : failure.type) === 4) {
        return
      }
      if (
        to.matched.length === 0 &&
        !((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)
      ) {
        await nuxtApp.runWithContext(() =>
          showError(
            createError$1({
              statusCode: 404,
              fatal: false,
              statusMessage: `Page not found: ${to.fullPath}`
            })
          )
        )
      } else if (to.redirectedFrom) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || '/'))
      }
    })
    nuxtApp.hooks.hookOnce('app:created', async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        })
        router.options.scrollBehavior = routerOptions.scrollBehavior
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2))
      }
    })
    return { provide: { router } }
  }
})
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}
const isVue2 = false
/*!
 * pinia v2.1.4
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia
const setActivePinia = (pinia) => (activePinia = pinia)
const piniaSymbol = Symbol('pinia')
function isPlainObject(o) {
  return (
    o &&
    typeof o === 'object' &&
    Object.prototype.toString.call(o) === '[object Object]' &&
    typeof o.toJSON !== 'function'
  )
}
var MutationType
;(function (MutationType2) {
  MutationType2['direct'] = 'direct'
  MutationType2['patchObject'] = 'patch object'
  MutationType2['patchFunction'] = 'patch function'
})(MutationType || (MutationType = {}))
function createPinia() {
  const scope = effectScope(true)
  const state = scope.run(() => ref({}))
  let _p = []
  let toBeInstalled = []
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia)
      {
        pinia._a = app
        app.provide(piniaSymbol, pinia)
        app.config.globalProperties.$pinia = pinia
        toBeInstalled.forEach((plugin2) => _p.push(plugin2))
        toBeInstalled = []
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2)
      } else {
        _p.push(plugin2)
      }
      return this
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  })
  return pinia
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key]
    if (!(key in newState)) {
      continue
    }
    const targetValue = newState[key]
    if (
      isPlainObject(targetValue) &&
      isPlainObject(subPatch) &&
      !isRef(subPatch) &&
      !isReactive(subPatch)
    ) {
      newState[key] = patchObject(targetValue, subPatch)
    } else {
      {
        newState[key] = subPatch
      }
    }
  }
  return newState
}
const noop = () => {}
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback)
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback)
    if (idx > -1) {
      subscriptions.splice(idx, 1)
      onCleanup()
    }
  }
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription)
  }
  return removeSubscription
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args)
  })
}
const fallbackRunWithContext = (fn) => fn()
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value))
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target)
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key)) continue
    const subPatch = patchToApply[key]
    const targetValue = target[key]
    if (
      isPlainObject(targetValue) &&
      isPlainObject(subPatch) &&
      target.hasOwnProperty(key) &&
      !isRef(subPatch) &&
      !isReactive(subPatch)
    ) {
      target[key] = mergeReactiveObjects(targetValue, subPatch)
    } else {
      target[key] = subPatch
    }
  }
  return target
}
const skipHydrateSymbol = Symbol('pinia:skipHydration')
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol)
}
const { assign } = Object
function isComputed(o) {
  return !!(isRef(o) && o.effect)
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options
  const initialState = pinia.state.value[id]
  let store
  function setup() {
    if (!initialState && !hot) {
      {
        pinia.state.value[id] = state ? state() : {}
      }
    }
    const localState = hot
      ? // use ref() to unwrap refs inside state TODO: check if this is still necessary
        toRefs(ref(state ? state() : {}).value)
      : toRefs(pinia.state.value[id])
    return assign(
      localState,
      actions,
      Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(
            `[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`
          )
        }
        computedGetters[name] = markRaw(
          computed(() => {
            setActivePinia(pinia)
            const store2 = pinia._s.get(id)
            return getters[name].call(store2, store2)
          })
        )
        return computedGetters
      }, {})
    )
  }
  store = createSetupStore(id, setup, options, pinia, hot, true)
  return store
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope
  const optionsForPlugin = assign({ actions: {} }, options)
  if (!pinia._e.active) {
    throw new Error('Pinia destroyed')
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  }
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event)
        } else {
          console.error(
            '🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.'
          )
        }
      }
    }
  }
  let isListening
  let isSyncListening
  let subscriptions = []
  let actionSubscriptions = []
  let debuggerEvents
  const initialState = pinia.state.value[$id]
  if (!isOptionsStore && !initialState && !hot) {
    {
      pinia.state.value[$id] = {}
    }
  }
  const hotState = ref({})
  let activeListener
  function $patch(partialStateOrMutator) {
    let subscriptionMutation
    isListening = isSyncListening = false
    {
      debuggerEvents = []
    }
    if (typeof partialStateOrMutator === 'function') {
      partialStateOrMutator(pinia.state.value[$id])
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      }
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator)
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      }
    }
    const myListenerId = (activeListener = Symbol())
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true
      }
    })
    isSyncListening = true
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id])
  }
  const $reset = isOptionsStore
    ? function $reset2() {
        const { state } = options
        const newState = state ? state() : {}
        this.$patch(($state) => {
          assign($state, newState)
        })
      }
    : /* istanbul ignore next */
      () => {
        throw new Error(
          `🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`
        )
      }
  function $dispose() {
    scope.stop()
    subscriptions = []
    actionSubscriptions = []
    pinia._s.delete($id)
  }
  function wrapAction(name, action) {
    return function () {
      setActivePinia(pinia)
      const args = Array.from(arguments)
      const afterCallbackList = []
      const onErrorCallbackList = []
      function after(callback) {
        afterCallbackList.push(callback)
      }
      function onError(callback) {
        onErrorCallbackList.push(callback)
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      })
      let ret
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args)
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error)
        throw error
      }
      if (ret instanceof Promise) {
        return ret
          .then((value) => {
            triggerSubscriptions(afterCallbackList, value)
            return value
          })
          .catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error)
            return Promise.reject(error)
          })
      }
      triggerSubscriptions(afterCallbackList, ret)
      return ret
    }
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  })
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () =>
        stopWatcher()
      )
      const stopWatcher = scope.run(() =>
        watch(
          () => pinia.state.value[$id],
          (state) => {
            if (options2.flush === 'sync' ? isSyncListening : isListening) {
              callback(
                {
                  storeId: $id,
                  type: MutationType.direct,
                  events: debuggerEvents
                },
                state
              )
            }
          },
          assign({}, $subscribeOptions, options2)
        )
      )
      return removeSubscription
    },
    $dispose
  }
  const store = reactive(
    assign(
      {
        _hmrPayload,
        _customProperties: markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    )
  )
  pinia._s.set($id, store)
  const runWithContext = (pinia._a && pinia._a.runWithContext) || fallbackRunWithContext
  const setupStore = pinia._e.run(() => {
    scope = effectScope()
    return runWithContext(() => scope.run(setup))
  })
  for (const key in setupStore) {
    const prop = setupStore[key]
    if ((isRef(prop) && !isComputed(prop)) || isReactive(prop)) {
      if (hot) {
        set(hotState.value, key, toRef(setupStore, key))
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key]
          } else {
            mergeReactiveObjects(prop, initialState[key])
          }
        }
        {
          pinia.state.value[$id][key] = prop
        }
      }
      {
        _hmrPayload.state.push(key)
      }
    } else if (typeof prop === 'function') {
      const actionValue = hot ? prop : wrapAction(key, prop)
      {
        setupStore[key] = actionValue
      }
      {
        _hmrPayload.actions[key] = prop
      }
      optionsForPlugin.actions[key] = prop
    } else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore
          ? // @ts-expect-error
            options.getters[key]
          : prop
      }
    }
  }
  {
    assign(store, setupStore)
    assign(toRaw(store), setupStore)
  }
  Object.defineProperty(store, '$state', {
    get: () => (hot ? hotState.value : pinia.state.value[$id]),
    set: (state) => {
      if (hot) {
        throw new Error('cannot set hotState')
      }
      $patch(($state) => {
        assign($state, state)
      })
    }
  })
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey]
          const oldStateSource = store.$state[stateKey]
          if (
            typeof newStateTarget === 'object' &&
            isPlainObject(newStateTarget) &&
            isPlainObject(oldStateSource)
          ) {
            patchObject(newStateTarget, oldStateSource)
          } else {
            newStore.$state[stateKey] = oldStateSource
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey))
      })
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey)
        }
      })
      isListening = false
      isSyncListening = false
      pinia.state.value[$id] = toRef(newStore._hmrPayload, 'hotState')
      isSyncListening = true
      nextTick().then(() => {
        isListening = true
      })
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName]
        set(store, actionName, wrapAction(actionName, action))
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName]
        const getterValue = isOptionsStore
          ? // special handling of options api
            computed(() => {
              setActivePinia(pinia)
              return getter.call(store, store)
            })
          : getter
        set(store, getterName, getterValue)
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key)
        }
      })
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key)
        }
      })
      store._hmrPayload = newStore._hmrPayload
      store._getters = newStore._getters
      store._hotUpdating = false
    })
  }
  pinia._p.forEach((extender) => {
    {
      assign(
        store,
        scope.run(() =>
          extender({
            store,
            app: pinia._a,
            pinia,
            options: optionsForPlugin
          })
        )
      )
    }
  })
  if (
    store.$state &&
    typeof store.$state === 'object' &&
    typeof store.$state.constructor === 'function' &&
    !store.$state.constructor.toString().includes('[native code]')
  ) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`)
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState)
  }
  isListening = true
  isSyncListening = true
  return store
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id
  let options
  const isSetupStore = typeof setup === 'function'
  if (typeof idOrOptions === 'string') {
    id = idOrOptions
    options = isSetupStore ? setupOptions : setup
  } else {
    options = idOrOptions
    id = idOrOptions.id
    if (typeof id !== 'string') {
      throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`)
    }
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext()
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? inject(piniaSymbol, null) : null)
    if (pinia) setActivePinia(pinia)
    if (!activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`)
    }
    pinia = activePinia
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia)
      } else {
        createOptionsStore(id, options, pinia)
      }
      {
        useStore._pinia = pinia
      }
    }
    const store = pinia._s.get(id)
    if (hot) {
      const hotId = '__hot:' + id
      const newStore = isSetupStore
        ? createSetupStore(hotId, setup, options, pinia, true)
        : createOptionsStore(hotId, assign({}, options), pinia, true)
      hot._hotUpdate(newStore)
      delete pinia.state.value[hotId]
      pinia._s.delete(hotId)
    }
    return store
  }
  useStore.$id = id
  return useStore
}
function resolveUnref(r) {
  return typeof r === 'function' ? r() : unref(r)
}
function resolveUnrefHeadInput(ref2, lastKey = '') {
  if (ref2 instanceof Promise) return ref2
  const root = resolveUnref(ref2)
  if (!ref2 || !root) return root
  if (Array.isArray(root)) return root.map((r) => resolveUnrefHeadInput(r, lastKey))
  if (typeof root === 'object') {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === 'titleTemplate' || k.startsWith('on')) return [k, unref(v)]
        return [k, resolveUnrefHeadInput(v, k)]
      })
    )
  }
  return root
}
const Vue3 = version.startsWith('3')
const headSymbol = 'usehead'
function injectHead() {
  return (getCurrentInstance() && inject(headSymbol)) || getActiveHead()
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head
        app.config.globalProperties.$head = head
        app.provide(headSymbol, head)
      }
    }
  }
  return plugin2.install
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [VueReactiveUseHeadPlugin(), ...((options == null ? void 0 : options.plugins) || [])]
  })
  head.install = vueInstall(head)
  return head
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      'entries:resolve': function (ctx) {
        for (const entry2 of ctx.entries) entry2.resolvedInput = resolveUnrefHeadInput(entry2.input)
      }
    }
  })
}
function clientUseHead(input, options = {}) {
  const head = injectHead()
  const deactivated = ref(false)
  const resolvedInput = ref({})
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input)
  })
  const entry2 = head.push(resolvedInput.value, options)
  watch(resolvedInput, (e) => {
    entry2.patch(e)
  })
  getCurrentInstance()
  return entry2
}
function serverUseHead(input, options = {}) {
  const head = injectHead()
  return head.push(input, options)
}
function useHead(input, options = {}) {
  var _a
  const head = injectHead()
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document)
    if ((options.mode === 'server' && isBrowser) || (options.mode === 'client' && !isBrowser))
      return
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options)
  }
}
const getDefault = () => null
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === 'string' ? args.pop() : void 0
  if (typeof args[0] !== 'string') {
    args.unshift(autoKey)
  }
  let [key, handler, options = {}] = args
  if (typeof key !== 'string') {
    throw new TypeError('[nuxt] [asyncData] key must be a string.')
  }
  if (typeof handler !== 'function') {
    throw new TypeError('[nuxt] [asyncData] handler must be a function.')
  }
  options.server = options.server ?? true
  options.default = options.default ?? getDefault
  options.lazy = options.lazy ?? false
  options.immediate = options.immediate ?? true
  const nuxt = useNuxtApp()
  const getCachedData = () => (nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key])
  const hasCachedData = () => getCachedData() !== void 0
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref('idle')
    }
  }
  const asyncData = { ...nuxt._asyncData[key] }
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key]
      }
      nuxt._asyncDataPromises[key].cancelled = true
    }
    if ((opts._initial || (nuxt.isHydrating && opts._initial !== false)) && hasCachedData()) {
      return getCachedData()
    }
    asyncData.pending.value = true
    asyncData.status.value = 'pending'
    const promise = new Promise((resolve, reject) => {
      try {
        resolve(handler(nuxt))
      } catch (err) {
        reject(err)
      }
    })
      .then((_result) => {
        if (promise.cancelled) {
          return nuxt._asyncDataPromises[key]
        }
        let result = _result
        if (options.transform) {
          result = options.transform(_result)
        }
        if (options.pick) {
          result = pick(result, options.pick)
        }
        asyncData.data.value = result
        asyncData.error.value = null
        asyncData.status.value = 'success'
      })
      .catch((error) => {
        if (promise.cancelled) {
          return nuxt._asyncDataPromises[key]
        }
        asyncData.error.value = error
        asyncData.data.value = unref(options.default())
        asyncData.status.value = 'error'
      })
      .finally(() => {
        if (promise.cancelled) {
          return
        }
        asyncData.pending.value = false
        nuxt.payload.data[key] = asyncData.data.value
        if (asyncData.error.value) {
          nuxt.payload._errors[key] = createError(asyncData.error.value)
        }
        delete nuxt._asyncDataPromises[key]
      })
    nuxt._asyncDataPromises[key] = promise
    return nuxt._asyncDataPromises[key]
  }
  const initialFetch = () => asyncData.refresh({ _initial: true })
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch()
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise)
    } else {
      nuxt.hook('app:created', () => promise)
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData)
  Object.assign(asyncDataPromise, asyncData)
  return asyncDataPromise
}
function pick(obj, keys) {
  const newObj = {}
  for (const key of keys) {
    newObj[key] = obj[key]
  }
  return newObj
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event
}
function useRequestFetch() {
  var _a
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch
}
const CookieDefaults = {
  path: '/',
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === 'string' ? val : JSON.stringify(val))
}
function useCookie(name, _opts) {
  var _a
  const opts = { ...CookieDefaults, ..._opts }
  const cookies = readRawCookies(opts) || {}
  const cookie = ref(cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)))
  {
    const nuxtApp = useNuxtApp()
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts)
      }
    }
    const unhook = nuxtApp.hooks.hookOnce('app:rendered', writeFinalCookieValue)
    nuxtApp.hooks.hookOnce('app:error', () => {
      unhook()
      return writeFinalCookieValue()
    })
  }
  return cookie
}
function readRawCookies(opts = {}) {
  var _a
  {
    return parse(
      ((_a = useRequestEvent()) == null ? void 0 : _a.node.req.headers.cookie) || '',
      opts
    )
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts)
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts)
    }
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0)
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = 'noopener noreferrer'
/*! @__NO_SIDE_EFFECTS__ */
function defineNuxtLink(options) {
  const componentName = options.componentName || 'NuxtLink'
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || (options.trailingSlash !== 'append' && options.trailingSlash !== 'remove')) {
      return to
    }
    const normalizeTrailingSlash =
      options.trailingSlash === 'append' ? withTrailingSlash : withoutTrailingSlash
    if (typeof to === 'string') {
      return normalizeTrailingSlash(to, true)
    }
    const path = 'path' in to ? to.path : resolve(to).path
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    }
  }
  return /* @__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter()
      const to = computed(() => {
        const path = props.to || props.href || ''
        return resolveTrailingSlashBehavior(path, router.resolve)
      })
      const isExternal = computed(() => {
        if (props.external) {
          return true
        }
        if (props.target && props.target !== '_self') {
          return true
        }
        if (typeof to.value === 'object') {
          return false
        }
        return to.value === '' || hasProtocol(to.value, { acceptRelative: true })
      })
      const prefetched = ref(false)
      const el = void 0
      const elRef = void 0
      return () => {
        var _a, _b
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          }
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass
            }
            routerLinkProps.rel = props.rel
          }
          return h(resolveComponent('RouterLink'), routerLinkProps, slots.default)
        }
        const href =
          typeof to.value === 'object'
            ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null
            : to.value || null
        const target = props.target || null
        const rel = props.noRel
          ? null
          : firstNonUndefined(
              props.rel,
              options.externalRelAttribute,
              href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : ''
            ) || null
        const navigate = () => navigateTo(href, { replace: props.replace })
        if (props.custom) {
          if (!slots.default) {
            return null
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0
              }
              const url = parseURL(href)
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search)
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              }
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          })
        }
        return h(
          'a',
          { ref: el, href, rel, target },
          (_b = slots.default) == null ? void 0 : _b.call(slots)
        )
      }
    }
  })
}
const __nuxt_component_0$4 = /* @__PURE__ */ defineNuxtLink({ componentName: 'NuxtLink' })
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
  setActivePinia(pinia)
  {
    nuxtApp.payload.pinia = pinia.state.value
  }
  return {
    provide: {
      pinia
    }
  }
})
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) =>
    isRef(data) &&
    isShallow(data) &&
    !data.value &&
    (typeof data.value === 'bigint' ? '0n' : JSON.stringify(data.value) || '_'),
  EmptyRef: (data) =>
    isRef(data) &&
    !data.value &&
    (typeof data.value === 'bigint' ? '0n' : JSON.stringify(data.value) || '_'),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
}
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:revive-payload:server',
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer])
    }
  }
})
const LazyAmiButterfly = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return AmiButterfly
    })
    .then((r) => r.default)
)
const LazyAmiLink = defineAsyncComponent(() =>
  import('./_nuxt/AmiLink-3223006a.mjs').then((r) => r.default)
)
const LazyAmiLink2 = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return AmiLink2
    })
    .then((r) => r.default)
)
const LazyAmiSwarm = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return AmiSwarm
    })
    .then((r) => r.default)
)
const LazyBotCard = defineAsyncComponent(() =>
  import('./_nuxt/BotCard-731587d3.mjs').then((r) => r.default)
)
const LazyBotGallery = defineAsyncComponent(() =>
  import('./_nuxt/BotGallery-438c0ba4.mjs').then((r) => r.default)
)
const LazyButtonCard = defineAsyncComponent(() =>
  import('./_nuxt/ButtonCard-ce50d422.mjs').then((r) => r.default)
)
const LazyCardNavigation = defineAsyncComponent(() =>
  import('./_nuxt/CardNavigation-e6ee3fe1.mjs').then((r) => r.default)
)
const LazyDreamStatus = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return DreamStatus
    })
    .then((r) => r.default)
)
const LazyGalleryViewer = defineAsyncComponent(() =>
  import('./_nuxt/GalleryViewer-14cec20e.mjs').then((r) => r.default)
)
const LazyGameScreen = defineAsyncComponent(() =>
  import('./_nuxt/GameScreen-dd88c8bc.mjs').then((r) => r.default)
)
const LazyImageNav = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return ImageNav
    })
    .then((r) => r.default)
)
const LazyNuxtLoadingBar = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return NuxtLoadingBar
    })
    .then((r) => r.default)
)
const LazyPageContent = defineAsyncComponent(() =>
  import('./_nuxt/PageContent-039e7dd7.mjs').then((r) => r.default)
)
const LazyPageList = defineAsyncComponent(() =>
  import('./_nuxt/PageList-2f504e00.mjs').then((r) => r.default)
)
const LazySiteFooter = defineAsyncComponent(() =>
  import('./_nuxt/SiteFooter-3db690b0.mjs').then((r) => r.default)
)
const LazySiteHeader = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return SiteHeader
    })
    .then((r) => r.default)
)
const LazySiteLogo = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return SiteLogo
    })
    .then((r) => r.default)
)
const LazySiteTitle = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return SiteTitle
    })
    .then((r) => r.default)
)
const LazySubmissionForm = defineAsyncComponent(() =>
  import('./_nuxt/SubmissionForm-185d834b.mjs').then((r) => r.default)
)
const LazyTemperatureSlider = defineAsyncComponent(() =>
  import('./_nuxt/TemperatureSlider-3c3827b9.mjs').then((r) => r.default)
)
const LazyThemeChange = defineAsyncComponent(() =>
  Promise.resolve()
    .then(function () {
      return ThemeChange
    })
    .then((r) => r.default)
)
const LazyWelcomePage = defineAsyncComponent(() =>
  import('./_nuxt/WelcomePage-da169e6f.mjs').then((r) => r.default)
)
const LazyContentDoc = defineAsyncComponent(() =>
  import('./_nuxt/ContentDoc-bc21a81a.mjs').then((r) => r.default)
)
const LazyContentList = defineAsyncComponent(() =>
  import('./_nuxt/ContentList-21af97ef.mjs').then((r) => r.default)
)
const LazyContentNavigation = defineAsyncComponent(() =>
  import('./_nuxt/ContentNavigation-d0dc80eb.mjs').then((r) => r.default)
)
const LazyContentQuery = defineAsyncComponent(() =>
  import('./_nuxt/ContentQuery-98e82c04.mjs').then((r) => r.default)
)
const LazyContentRenderer = defineAsyncComponent(() =>
  import('./_nuxt/ContentRenderer-ee98c0b5.mjs').then((r) => r.default)
)
const LazyContentRendererMarkdown = defineAsyncComponent(() =>
  import('./_nuxt/ContentRendererMarkdown-25b34784.mjs').then((r) => r.default)
)
const LazyContentSlot = defineAsyncComponent(() =>
  import('./_nuxt/ContentSlot-ca3c7ce1.mjs').then((r) => r.default)
)
const LazyDocumentDrivenEmpty = defineAsyncComponent(() =>
  import('./_nuxt/DocumentDrivenEmpty-e7fcdb87.mjs').then((r) => r.default)
)
const LazyDocumentDrivenNotFound = defineAsyncComponent(() =>
  import('./_nuxt/DocumentDrivenNotFound-84f1d547.mjs').then((r) => r.default)
)
const LazyMarkdown = defineAsyncComponent(() =>
  import('./_nuxt/Markdown-dd4d45b7.mjs').then((r) => r.default)
)
const LazyProseA = defineAsyncComponent(() =>
  import('./_nuxt/ProseA-0f749f81.mjs').then((r) => r.default)
)
const LazyProseBlockquote = defineAsyncComponent(() =>
  import('./_nuxt/ProseBlockquote-c8286ba5.mjs').then((r) => r.default)
)
const LazyProseCode = defineAsyncComponent(() =>
  import('./_nuxt/ProseCode-1eef8b6d.mjs').then((r) => r.default)
)
const LazyProseCodeInline = defineAsyncComponent(() =>
  import('./_nuxt/ProseCodeInline-f5783071.mjs').then((r) => r.default)
)
const LazyProseEm = defineAsyncComponent(() =>
  import('./_nuxt/ProseEm-8febdb9b.mjs').then((r) => r.default)
)
const LazyProseH1 = defineAsyncComponent(() =>
  import('./_nuxt/ProseH1-838b78df.mjs').then((r) => r.default)
)
const LazyProseH2 = defineAsyncComponent(() =>
  import('./_nuxt/ProseH2-cf6028cd.mjs').then((r) => r.default)
)
const LazyProseH3 = defineAsyncComponent(() =>
  import('./_nuxt/ProseH3-2bba5e45.mjs').then((r) => r.default)
)
const LazyProseH4 = defineAsyncComponent(() =>
  import('./_nuxt/ProseH4-08888fbf.mjs').then((r) => r.default)
)
const LazyProseH5 = defineAsyncComponent(() =>
  import('./_nuxt/ProseH5-22e92097.mjs').then((r) => r.default)
)
const LazyProseH6 = defineAsyncComponent(() =>
  import('./_nuxt/ProseH6-45540514.mjs').then((r) => r.default)
)
const LazyProseHr = defineAsyncComponent(() =>
  import('./_nuxt/ProseHr-e4418f11.mjs').then((r) => r.default)
)
const LazyProseImg = defineAsyncComponent(() =>
  import('./_nuxt/ProseImg-dd6ee138.mjs').then((r) => r.default)
)
const LazyProseLi = defineAsyncComponent(() =>
  import('./_nuxt/ProseLi-f088459b.mjs').then((r) => r.default)
)
const LazyProseOl = defineAsyncComponent(() =>
  import('./_nuxt/ProseOl-06f983c2.mjs').then((r) => r.default)
)
const LazyProseP = defineAsyncComponent(() =>
  import('./_nuxt/ProseP-fc98fea5.mjs').then((r) => r.default)
)
const LazyProseStrong = defineAsyncComponent(() =>
  import('./_nuxt/ProseStrong-0a424253.mjs').then((r) => r.default)
)
const LazyProseTable = defineAsyncComponent(() =>
  import('./_nuxt/ProseTable-2faa1e46.mjs').then((r) => r.default)
)
const LazyProseTbody = defineAsyncComponent(() =>
  import('./_nuxt/ProseTbody-2aa15e44.mjs').then((r) => r.default)
)
const LazyProseTd = defineAsyncComponent(() =>
  import('./_nuxt/ProseTd-e0842fd8.mjs').then((r) => r.default)
)
const LazyProseTh = defineAsyncComponent(() =>
  import('./_nuxt/ProseTh-1c20f71b.mjs').then((r) => r.default)
)
const LazyProseThead = defineAsyncComponent(() =>
  import('./_nuxt/ProseThead-8b726384.mjs').then((r) => r.default)
)
const LazyProseTr = defineAsyncComponent(() =>
  import('./_nuxt/ProseTr-9f89f64a.mjs').then((r) => r.default)
)
const LazyProseUl = defineAsyncComponent(() =>
  import('./_nuxt/ProseUl-dd045a03.mjs').then((r) => r.default)
)
const LazyIcon = defineAsyncComponent(() =>
  import('./_nuxt/Icon-f2421a8c.mjs').then((r) => r.default)
)
const LazyIconCSS = defineAsyncComponent(() =>
  import('./_nuxt/IconCSS-5da1c29a.mjs').then((r) => r.default)
)
const lazyGlobalComponents = [
  ['AmiButterfly', LazyAmiButterfly],
  ['AmiLink', LazyAmiLink],
  ['AmiLink2', LazyAmiLink2],
  ['AmiSwarm', LazyAmiSwarm],
  ['BotCard', LazyBotCard],
  ['BotGallery', LazyBotGallery],
  ['ButtonCard', LazyButtonCard],
  ['CardNavigation', LazyCardNavigation],
  ['DreamStatus', LazyDreamStatus],
  ['GalleryViewer', LazyGalleryViewer],
  ['GameScreen', LazyGameScreen],
  ['ImageNav', LazyImageNav],
  ['NuxtLoadingBar', LazyNuxtLoadingBar],
  ['PageContent', LazyPageContent],
  ['PageList', LazyPageList],
  ['SiteFooter', LazySiteFooter],
  ['SiteHeader', LazySiteHeader],
  ['SiteLogo', LazySiteLogo],
  ['SiteTitle', LazySiteTitle],
  ['SubmissionForm', LazySubmissionForm],
  ['TemperatureSlider', LazyTemperatureSlider],
  ['ThemeChange', LazyThemeChange],
  ['WelcomePage', LazyWelcomePage],
  ['ContentDoc', LazyContentDoc],
  ['ContentList', LazyContentList],
  ['ContentNavigation', LazyContentNavigation],
  ['ContentQuery', LazyContentQuery],
  ['ContentRenderer', LazyContentRenderer],
  ['ContentRendererMarkdown', LazyContentRendererMarkdown],
  ['ContentSlot', LazyContentSlot],
  ['DocumentDrivenEmpty', LazyDocumentDrivenEmpty],
  ['DocumentDrivenNotFound', LazyDocumentDrivenNotFound],
  ['Markdown', LazyMarkdown],
  ['ProseA', LazyProseA],
  ['ProseBlockquote', LazyProseBlockquote],
  ['ProseCode', LazyProseCode],
  ['ProseCodeInline', LazyProseCodeInline],
  ['ProseEm', LazyProseEm],
  ['ProseH1', LazyProseH1],
  ['ProseH2', LazyProseH2],
  ['ProseH3', LazyProseH3],
  ['ProseH4', LazyProseH4],
  ['ProseH5', LazyProseH5],
  ['ProseH6', LazyProseH6],
  ['ProseHr', LazyProseHr],
  ['ProseImg', LazyProseImg],
  ['ProseLi', LazyProseLi],
  ['ProseOl', LazyProseOl],
  ['ProseP', LazyProseP],
  ['ProseStrong', LazyProseStrong],
  ['ProseTable', LazyProseTable],
  ['ProseTbody', LazyProseTbody],
  ['ProseTd', LazyProseTd],
  ['ProseTh', LazyProseTh],
  ['ProseThead', LazyProseThead],
  ['ProseTr', LazyProseTr],
  ['ProseUl', LazyProseUl],
  ['Icon', LazyIcon],
  ['IconCSS', LazyIconCSS]
]
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:global-components',
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component)
      nuxtApp.vueApp.component('Lazy' + name, component)
    }
  }
})
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: 'nuxt:head',
  setup(nuxtApp) {
    const createHead = createServerHead
    const head = createHead()
    head.push(appHead)
    nuxtApp.vueApp.use(head)
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head)
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        }
      }
    }
  }
})
const useContentState = () => {
  const pages = useState('dd-pages', () => ({}))
  const surrounds = useState('dd-surrounds', () => ({}))
  const navigation = useState('dd-navigation')
  const globals = useState('dd-globals', () => ({}))
  return {
    pages,
    surrounds,
    navigation,
    globals
  }
}
const useContent = () => {
  const { navigation, pages, surrounds, globals } = useContentState()
  const _path = computed(() => withoutTrailingSlash(useRoute().path))
  const page = computed(() => pages.value[_path.value])
  const surround = computed(() => surrounds.value[_path.value])
  const toc = computed(() => {
    var _a, _b
    return (_b = (_a = page == null ? void 0 : page.value) == null ? void 0 : _a.body) == null
      ? void 0
      : _b.toc
  })
  const type = computed(() => {
    var _a
    return (_a = page.value) == null ? void 0 : _a.type
  })
  const excerpt = computed(() => {
    var _a
    return (_a = page.value) == null ? void 0 : _a.excerpt
  })
  const layout = computed(() => {
    var _a
    return (_a = page.value) == null ? void 0 : _a.layout
  })
  const next = computed(() => {
    var _a
    return (_a = surround.value) == null ? void 0 : _a[1]
  })
  const prev = computed(() => {
    var _a
    return (_a = surround.value) == null ? void 0 : _a[0]
  })
  return {
    // Refs
    globals,
    navigation,
    surround,
    page,
    // From page
    excerpt,
    toc,
    type,
    layout,
    // From surround
    next,
    prev
  }
}
const navBottomLink = (link) => {
  if (!link.children) {
    return link._path
  }
  for (const child of (link == null ? void 0 : link.children) || []) {
    const result = navBottomLink(child)
    if (result) {
      return result
    }
  }
}
const navDirFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path && !file._id) {
      return file.children
    }
    if (file.children) {
      const result = navDirFromPath(path, file.children)
      if (result) {
        return result
      }
    }
  }
}
const navPageFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path) {
      return file
    }
    if (file.children) {
      const result = navPageFromPath(path, file.children)
      if (result) {
        return result
      }
    }
  }
}
const navKeyFromPath = (path, key, tree) => {
  let value
  const goDeep = (path2, tree2) => {
    for (const file of tree2) {
      if (path2 !== '/' && file._path === '/') {
        continue
      }
      if ((path2 == null ? void 0 : path2.startsWith(file._path)) && file[key]) {
        value = file[key]
      }
      if (file._path === path2) {
        return
      }
      if (file.children) {
        goDeep(path2, file.children)
      }
    }
  }
  goDeep(path, tree)
  return value
}
const useContentHelpers = () => {
  return {
    navBottomLink,
    navDirFromPath,
    navPageFromPath,
    navKeyFromPath
  }
}
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer)
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`
  }
  return value
}
const encodeQueryParams = (params) => {
  let encoded = jsonStringify(params)
  encoded = typeof Buffer !== 'undefined' ? Buffer.from(encoded).toString('base64') : btoa(encoded)
  encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  const chunks = encoded.match(/.{1,100}/g) || []
  return chunks.join('/')
}
const TEXT_TAGS = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true
  }
  if (typeof vnode.type === 'object' && vnode.type.tag === tag) {
    return true
  }
  if (vnode.tag === tag) {
    return true
  }
  return false
}
function isText(vnode) {
  return isTag(vnode, 'text') || typeof vnode.children === 'string'
}
function nodeChildren(node) {
  var _a
  if (Array.isArray(node.children) || typeof node.children === 'string') {
    return node.children
  }
  if (typeof ((_a = node.children) == null ? void 0 : _a.default) === 'function') {
    return node.children.default()
  }
  return []
}
function nodeTextContent(node) {
  if (!node) {
    return ''
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join('')
  }
  if (isText(node)) {
    return node.children || node.value
  }
  const children = nodeChildren(node)
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join('')
  }
  return ''
}
function unwrap(vnode, tags = ['p']) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags))
  }
  let result = vnode
  if (tags.some((tag) => tag === '*' || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result]
    }
  }
  return result
}
function flatUnwrap(vnodes, tags = ['p']) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes]
  if (!tags.length) {
    return vnodes
  }
  return vnodes
    .flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1)))
    .filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ''))
}
const useContentPreview = () => {
  const getPreviewToken = () => {
    return useCookie('previewToken').value || false || void 0
  }
  const setPreviewToken = (token) => {
    useCookie('previewToken').value = token
    useRoute().query.preview = token || ''
  }
  const isEnabled = () => {
    const query = useRoute().query
    if (Object.prototype.hasOwnProperty.call(query, 'preview') && !query.preview) {
      return false
    }
    if (query.preview || useCookie('previewToken').value) {
      return true
    }
    return false
  }
  return {
    isEnabled,
    getPreviewToken,
    setPreviewToken
  }
}
const withContentBase = (url) => withBase(url, useRuntimeConfig().public.content.api.baseURL)
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
})
const addPrerenderPath = (path) => {
  const event = useRequestEvent()
  event.node.res.setHeader(
    'x-nitro-prerender',
    [event.node.res.getHeader('x-nitro-prerender'), path].filter(Boolean).join(',')
  )
}
const shouldUseClientDB = () => {
  useRuntimeConfig().public.content
  {
    return false
  }
}
const get = (obj, path) => path.split('.').reduce((acc, part) => acc && acc[part], obj)
const _pick = (obj, condition) =>
  Object.keys(obj)
    .filter(condition)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data)
const detectProperties = (keys) => {
  const prefixes = []
  const properties = []
  for (const key of keys) {
    if (['$', '_'].includes(key)) {
      prefixes.push(key)
    } else {
      properties.push(key)
    }
  }
  return { prefixes, properties }
}
const withoutKeys =
  (keys = []) =>
  (obj) => {
    if (keys.length === 0 || !obj) {
      return obj
    }
    const { prefixes, properties } = detectProperties(keys)
    return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]))
  }
const withKeys =
  (keys = []) =>
  (obj) => {
    if (keys.length === 0 || !obj) {
      return obj
    }
    const { prefixes, properties } = detectProperties(keys)
    return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]))
  }
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  })
  const keys = Object.keys(params).filter((key) => !key.startsWith('$'))
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0
        }
        if (value instanceof Date) {
          return value.toISOString()
        }
        return value
      })
      if (params[key] === -1) {
        values.reverse()
      }
      return comperable.compare(values[0], values[1])
    })
  }
  return data
}
const assertArray = (value, message = 'Expected an array') => {
  if (!Array.isArray(value)) {
    throw new TypeError(message)
  }
}
const ensureArray = (value) => (Array.isArray(value) ? value : value ? [value] : [])
const arrayParams = ['sort', 'where', 'only', 'without']
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  }
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key])
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values)
      return query
    }
  }
  const query = {
    params: () => ({
      ...queryParams,
      ...(queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {}),
      ...(queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {})
    }),
    only: $set('only', ensureArray),
    without: $set('without', ensureArray),
    where: $set('where', (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set('sort', (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set('limit', (v) => parseInt(String(v), 10)),
    skip: $set('skip', (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true
      return fetcher(query)
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options }
      return fetcher(query)
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  }
  return query
}
const createQueryFetch = () => async (query) => {
  const { content } = useRuntimeConfig().public
  const params = query.params()
  const apiPath = content.experimental.stripQueryParameters
    ? withContentBase(
        `/query/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`
      )
    : withContentBase(`/query/${hash(params)}.${content.integrity}.json`)
  {
    addPrerenderPath(apiPath)
  }
  if (shouldUseClientDB()) {
    const db = await import('./_nuxt/client-db-fa2cb608.mjs').then((m) => m.useContentDatabase())
    return db.fetch(query)
  }
  const data = await $fetch(apiPath, {
    method: 'GET',
    responseType: 'json',
    params: content.experimental.stripQueryParameters
      ? void 0
      : {
          _params: jsonStringify(params),
          previewToken: useContentPreview().getPreviewToken()
        }
  })
  if (typeof data === 'string' && data.startsWith('<!DOCTYPE html>')) {
    throw new Error('Not found')
  }
  return data
}
function queryContent(query, ...pathParts) {
  const { content } = useRuntimeConfig().public
  const queryBuilder = createQuery(createQueryFetch(), typeof query !== 'string' ? query : {})
  let path
  if (typeof query === 'string') {
    path = withLeadingSlash(joinURL(query, ...pathParts))
  }
  const originalParamsFn = queryBuilder.params
  queryBuilder.params = () => {
    var _a, _b, _c
    const params = originalParamsFn()
    if (path) {
      params.where = params.where || []
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) })
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, '\\$&')}`) })
      }
    }
    if (!((_a = params.sort) == null ? void 0 : _a.length)) {
      params.sort = [{ _file: 1, $numeric: true }]
    }
    if (content.locales.length) {
      const queryLocale =
        (_c = (_b = params.where) == null ? void 0 : _b.find((w) => w._locale)) == null
          ? void 0
          : _c._locale
      if (!queryLocale) {
        params.where = params.where || []
        params.where.push({ _locale: content.defaultLocale })
      }
    }
    return params
  }
  return queryBuilder
}
const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== 'function') {
    queryBuilder = queryContent(queryBuilder)
  }
  const params = queryBuilder.params()
  const apiPath = content.experimental.stripQueryParameters
    ? withContentBase(
        `/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`
      )
    : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`)
  {
    addPrerenderPath(apiPath)
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./_nuxt/client-db-fa2cb608.mjs').then(
      (m) => m.generateNavigation
    )
    return generateNavigation(params)
  }
  const data = await $fetch(apiPath, {
    method: 'GET',
    responseType: 'json',
    params: content.experimental.stripQueryParameters
      ? void 0
      : {
          _params: jsonStringify(params),
          previewToken: useContentPreview().getPreviewToken()
        }
  })
  if (typeof data === 'string' && data.startsWith('<!DOCTYPE html>')) {
    throw new Error('Not found')
  }
  return data
}
const layouts = {
  default: /* @__PURE__ */ defineAsyncComponent(() =>
    import('./_nuxt/default-cbd29c19.mjs').then((m) => m.default || m)
  ),
  gamescreen: /* @__PURE__ */ defineAsyncComponent(() =>
    import('./_nuxt/gamescreen-984afe9e.mjs').then((m) => m.default || m)
  ),
  welcome: /* @__PURE__ */ defineAsyncComponent(() =>
    import('./_nuxt/welcome-658b8800.mjs').then((m) => m.default || m)
  )
}
const documentDriven_9cX98v59ZY = /* @__PURE__ */ defineNuxtPlugin((nuxt) => {
  var _a, _b, _c, _d
  const moduleOptions =
    (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.public) == null
      ? void 0
      : _b.content.documentDriven
  ;(_d = (_c = useRuntimeConfig()) == null ? void 0 : _c.public) == null
    ? void 0
    : _d.content.experimental.clientDB
  const { navigation, pages, globals, surrounds } = useContentState()
  const findLayout = (to, page, navigation2, globals2) => {
    var _a2
    if (page && (page == null ? void 0 : page.layout)) {
      return page.layout
    }
    if (to.matched.length && ((_a2 = to.matched[0].meta) == null ? void 0 : _a2.layout)) {
      return to.matched[0].meta.layout
    }
    if (navigation2 && page) {
      const { navKeyFromPath: navKeyFromPath2 } = useContentHelpers()
      const layoutFromNav = navKeyFromPath2(page._path, 'layout', navigation2)
      if (layoutFromNav) {
        return layoutFromNav
      }
    }
    if (moduleOptions.layoutFallbacks && globals2) {
      let layoutFallback
      for (const fallback of moduleOptions.layoutFallbacks) {
        if (globals2[fallback] && globals2[fallback].layout) {
          layoutFallback = globals2[fallback].layout
          break
        }
      }
      if (layoutFallback) {
        return layoutFallback
      }
    }
    return 'default'
  }
  const refresh = async (to, dedup = false) => {
    nuxt.callHook('content:document-driven:start', { route: to, dedup })
    const routeConfig = to.meta.documentDriven || {}
    if (to.meta.documentDriven === false) {
      return
    }
    const _path = withoutTrailingSlash(to.path)
    const promises = []
    if (moduleOptions.navigation && routeConfig.navigation !== false) {
      const navigationQuery = () => {
        const { navigation: navigation2 } = useContentState()
        if (navigation2.value && !dedup) {
          return navigation2.value
        }
        return fetchContentNavigation()
          .then((_navigation) => {
            navigation2.value = _navigation
            return _navigation
          })
          .catch(() => null)
      }
      promises.push(navigationQuery)
    } else {
      promises.push(() => Promise.resolve(null))
    }
    if (moduleOptions.globals) {
      const globalsQuery = () => {
        const { globals: globals2 } = useContentState()
        if (typeof moduleOptions.globals === 'object' && Array.isArray(moduleOptions.globals)) {
          console.log('Globals must be a list of keys with QueryBuilderParams as a value.')
          return
        }
        return Promise.all(
          Object.entries(moduleOptions.globals).map(([key, query]) => {
            if (!dedup && globals2.value[key]) {
              return globals2.value[key]
            }
            let type = 'findOne'
            if (query == null ? void 0 : query.type) {
              type = query.type
            }
            return queryContent(query)
              [type]()
              .catch(() => null)
          })
        ).then((values) => {
          return values.reduce((acc, value, index) => {
            const key = Object.keys(moduleOptions.globals)[index]
            acc[key] = value
            return acc
          }, {})
        })
      }
      promises.push(globalsQuery)
    } else {
      promises.push(() => Promise.resolve(null))
    }
    if (moduleOptions.page && routeConfig.page !== false) {
      let where = { _path }
      if (typeof routeConfig.page === 'string') {
        where = { _path: routeConfig.page }
      }
      if (typeof routeConfig.page === 'object') {
        where = routeConfig.page
      }
      const pageQuery = () => {
        const { pages: pages2 } = useContentState()
        if (!dedup && pages2.value[_path] && pages2.value[_path]._path === _path) {
          return pages2.value[_path]
        }
        return queryContent()
          .where(where)
          .findOne()
          .catch(() => null)
      }
      promises.push(pageQuery)
    } else {
      promises.push(() => Promise.resolve(null))
    }
    if (moduleOptions.surround && routeConfig.surround !== false) {
      let surround = _path
      if (['string', 'object'].includes(typeof routeConfig.page)) {
        surround = routeConfig.page
      }
      if (['string', 'object'].includes(typeof routeConfig.surround)) {
        surround = routeConfig.surround
      }
      const surroundQuery = () => {
        const { surrounds: surrounds2 } = useContentState()
        if (!dedup && surrounds2.value[_path]) {
          return surrounds2.value[_path]
        }
        return queryContent()
          .where({
            _partial: { $not: true },
            navigation: { $not: false }
          })
          .without(['body'])
          .findSurround(surround)
          .catch(() => null)
      }
      promises.push(surroundQuery)
    } else {
      promises.push(() => Promise.resolve(null))
    }
    return await Promise.all(promises.map((promise) => promise())).then(
      async ([_navigation, _globals, _page, _surround]) => {
        var _a2, _b2
        if (_navigation) {
          navigation.value = _navigation
        }
        if (_globals) {
          globals.value = _globals
        }
        if (_surround) {
          surrounds.value[_path] = _surround
        }
        const redirectTo =
          (_page == null ? void 0 : _page.redirect) ||
          ((_b2 = (_a2 = _page == null ? void 0 : _page._dir) == null ? void 0 : _a2.navigation) ==
          null
            ? void 0
            : _b2.redirect)
        if (redirectTo) {
          pages.value[_path] = _page
          return redirectTo
        }
        if (_page) {
          const layoutName = findLayout(to, _page, _navigation, _globals)
          const layout = layouts[layoutName]
          if (layout && typeof layout === 'function') {
            await layout()
          }
          to.meta.layout = layoutName
          _page.layout = layoutName
        }
        pages.value[_path] = _page
        await nuxt.callHook('content:document-driven:finish', {
          route: to,
          dedup,
          page: _page,
          navigation: _navigation,
          globals: _globals,
          surround: _surround
        })
      }
    )
  }
  addRouteMiddleware(async (to, from) => {
    if (to.path.includes('favicon.ico')) {
      return
    }
    const redirect = await refresh(to, false)
    if (redirect) {
      if (hasProtocol(redirect)) {
        return callWithNuxt(nuxt, navigateTo, [redirect, { external: true }])
      } else {
        return redirect
      }
    }
  })
  {
    delete nuxt.payload.prerenderedAt
  }
  nuxt.hook('app:data:refresh', async () => false)
})
const plugins = [
  plugin$1,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  documentDriven_9cX98v59ZY
]
const _sfc_main$c = {
  __name: 'NuxtLoadingBar',
  __ssrInlineRender: true,
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props
    const data = reactive({
      percent: 0,
      show: true,
      canSucceed: true
    })
    let _timer = null
    let _throttle = null
    let _cut
    const clear = () => {
      _timer && clearInterval(_timer)
      _throttle && clearTimeout(_throttle)
      _timer = null
    }
    const start = () => {
      clear()
      data.percent = 0
      data.canSucceed = true
      if (props.throttle) {
        _throttle = setTimeout(startTimer, props.throttle)
      } else {
        startTimer()
      }
    }
    const increase = (num) => {
      data.percent = Math.min(100, Math.floor(data.percent + num))
    }
    const finish = () => {
      data.percent = 100
      hide()
    }
    const hide = () => {
      clear()
      setTimeout(() => {
        data.show = false
        setTimeout(() => {
          data.percent = 0
        }, 400)
      }, 500)
    }
    const startTimer = () => {
      data.show = true
      _cut = 1e4 / Math.floor(props.duration)
      _timer = setInterval(() => {
        increase(_cut)
      }, 100)
    }
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', start)
    nuxtApp.hook('page:finish', finish)
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            {
              class: [
                'nuxt-progress',
                {
                  'nuxt-progress-failed': !unref(data).canSucceed
                }
              ],
              style: {
                width: unref(data).percent + '%',
                left: unref(data).left,
                height: props.height + 'px',
                opacity: unref(data).show ? 1 : 0,
                backgroundSize: (100 / unref(data).percent) * 100 + '% auto'
              }
            },
            _attrs
          )
        )}></div>`
      )
    }
  }
}
const _sfc_setup$c = _sfc_main$c.setup
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/NuxtLoadingBar.vue'
  )
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0
}
const NuxtLoadingBar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$c
})
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc
  for (const [key, val] of props) {
    target[key] = val
  }
  return target
}
const _sfc_main$b = {}
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(
    `<h1${ssrRenderAttrs(
      mergeProps(
        {
          class:
            'site-title text-4xl font-bold text-center text-accent-600 bg-secondary p-2 rounded-lg shadow-lg'
        },
        _attrs
      )
    )}> Kind Robots </h1>`
  )
}
const _sfc_setup$b = _sfc_main$b.setup
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/SiteTitle.vue'
  )
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0
}
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [
  ['ssrRender', _sfc_ssrRender$3]
])
const SiteTitle = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$3
})
const useDreamStore = defineStore('dream', () => {
  const dreams = [
    'Walking on a rainbow bridge across the sky',
    'Floating in a bubble through a city in the clouds',
    'Dancing with shadows in a moonlit forest',
    'Sailing on an ocean of stars',
    'Discovering a secret door in your home that leads to another world',
    'Riding a bicycle on a path made of stardust',
    'Having a picnic with talking animals in a meadow of giant flowers',
    'Exploring an underwater city inhabited by mermaids',
    'Flying with a flock of brightly colored birds over a landscape of floating islands',
    'Walking through a forest where the leaves are made of crystal',
    'Finding a magical book that brings any story you write in it to life',
    'Climbing a mountain that grows taller with each step you take',
    'Discovering a garden where every flower sings a different song',
    'Wandering through a maze made of mirrors in the middle of the desert',
    'Attending a grand ball where everyone is wearing masks of the moon and stars',
    'Finding an old map that leads to a hidden kingdom in the clouds',
    'Stumbling upon a city where all the buildings are made of glass',
    'Visiting a market where people trade in dreams and memories',
    'Exploring a castle made of clouds in the sky',
    'Walking on a path that appears in front of you with each step you take',
    'Finding a tree that grows different kinds of fruit each day',
    'Discovering a lake where each drop of water tells a different story',
    'Stumbling upon a carnival that appears only once every hundred years',
    'Finding a field where each blade of grass whispers a secret',
    'Exploring a forest where the trees are made of books',
    'Discovering a river that flows with music instead of water',
    'Climbing an infinite ladder that reaches past the clouds into the stars',
    'Participating in a race with tortoises riding on hares',
    'Landing on a planet where the inhabitants speak in colors rather than sounds',
    'Finding a pocket watch that can turn back time, but only for one minute a day',
    'Exploring an underground cavern where stalactites and stalagmites are musical notes',
    'Wandering through a city where the buildings sway and dance to unseen rhythms',
    'Visiting a zoo where the animals are actually people, and the people are the exhibits',
    'Trapped in a sandcastle with rooms that shift with the tides',
    'Being a part of a choir where each voice contributes a different flavor instead of a note',
    'Finding a hidden valley where the trees are shaped like giant chess pieces',
    'Discovering a mountain peak that touches the northern lights',
    "Traveling in a hot air balloon that's guided by your thoughts",
    'Stumbling upon a beach where each grain of sand holds a different memory',
    'Playing a piano that paints a picture with each note',
    'Exploring an amusement park where the rides are real adventures',
    "Attending a banquet where every dish tells a story from its ingredients' perspectives",
    'Venturing into a forest where the wildlife is made entirely of origami',
    'Landing on an asteroid where gravity is a mere suggestion',
    'Juggling planets in the vast cosmos, each spin generating a new weather pattern',
    'Sliding down a rainbow into a pot of golden ideas instead of gold',
    'Riding a roller coaster with tracks made of laughter and joy',
    'Discovering a playground where the see-saws balance ideas and the swings oscillate between seasons',
    'Visiting a library where books whisper their stories to you',
    'Sailing on a sea of honey, guided by bees to an island of wildflowers',
    'Strolling through a city where street signs sing directions and traffic lights dance in sync',
    'Drawing a door on a wall and stepping through it to find an enchanted garden',
    'Running in a field where the dandelions are tiny suns and the grass blades are emerald dancers',
    'Discovering a world where rainbows are bridges and thunderstorms are orchestras',
    'Blowing soap bubbles that encase entire dreamlike realities within them',
    'Sitting in a theater where the screen projects your thoughts and the popcorn tastes like emotions',
    'Stargazing on a beach where the stars are grains of sand and the sky is the ocean',
    'Drinking from a stream that quenches not just thirst, but the deepest curiosities',
    'Riding a train whose tracks are laid out by your own imagination',
    'Living in a house where each door opens to a different time period',
    'Being a musician in an orchestra where each instrument plays a different scent',
    'Planting a seed that grows into a tree with your favorite childhood memories as fruits',
    'Eating a slice of cloud-pie that tastes like the sky on a crisp morning',
    'Playing hide-and-seek with the shadows in a town where the sun never sets'
  ]
  function randomDream() {
    const randomIndex = Math.floor(Math.random() * dreams.length)
    return dreams[randomIndex]
  }
  return { dreams, randomDream }
})
const _sfc_main$a = {
  __name: 'DreamStatus',
  __ssrInlineRender: true,
  setup(__props) {
    const dreamStore = useDreamStore()
    const dream = ref(dreamStore.randomDream())
    let statusMessage = ref(`Status: ${dream.value}`)
    onUnmounted(() => {})
    watchEffect(() => {
      statusMessage.value = `Status: ${dream.value}`
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            {
              key: unref(dream),
              class:
                'dream-status text-white text-lg font-semibold text-center bg-primary p-4 border-accent shadow-lg transition-all duration-500 hover:scale-105'
            },
            _attrs
          )
        )} data-v-fde0df7d>${ssrInterpolate(unref(statusMessage))}</div>`
      )
    }
  }
}
const _sfc_setup$a = _sfc_main$a.setup
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/DreamStatus.vue'
  )
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0
}
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [
  ['__scopeId', 'data-v-fde0df7d']
])
const DreamStatus = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1
})
const _imports_0 = '' + __publicAssetsURL('logo.png')
const _sfc_main$9 = {}
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(
    `<div${ssrRenderAttrs(
      mergeProps(
        { class: 'site-logo flex items-center justify-center p-2 rounded-lg bg-white shadow-lg' },
        _attrs
      )
    )}><img class="w-16 h-16 object-contain"${ssrRenderAttr(
      'src',
      _imports_0
    )} alt="Site Logo"></div>`
  )
}
const _sfc_setup$9 = _sfc_main$9.setup
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/SiteLogo.vue'
  )
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0
}
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [
  ['ssrRender', _sfc_ssrRender$2]
])
const SiteLogo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$2
})
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: 'AmiButterfly',
  __ssrInlineRender: true,
  setup(__props) {
    const randomColor = () => {
      const h2 = Math.floor(Math.random() * 360)
      const s = Math.floor(Math.random() * 100)
      const l = Math.floor(Math.random() * 100)
      return `hsl(${h2},${s}%,${l}%)`
    }
    const analogousColor = (hsl) => {
      const hslMatch = hsl.match(/\d+/g)
      if (!hslMatch) {
        throw new Error('Invalid color format')
      }
      const [h2, s, l] = hslMatch.map(Number)
      let newH = (h2 + 30) % 360
      return `hsl(${newH},${s}%,${l}%)`
    }
    const complementaryColor = (color) => {
      const [h2, s, l] = color.replace('hsl(', '').replace(')', '').split(',')
      let newH = (parseInt(h2) + 180) % 360
      return `hsl(${newH},${s},${l})`
    }
    const windowSize = reactive({
      width: 0,
      height: 0
    })
    const wingColorType = Math.floor(Math.random() * 3)
    const primaryColor = randomColor()
    let secondaryColor = primaryColor
    if (wingColorType === 1) {
      secondaryColor = complementaryColor(primaryColor)
    } else if (wingColorType === 2) {
      secondaryColor = analogousColor(primaryColor)
    }
    const butterfly = reactive({
      wingTopColor: primaryColor,
      wingBottomColor: secondaryColor,
      rotation: 110,
      // random initial rotation
      speed: Math.random() * 2 + 1,
      // speed between 1 and 3
      status: 'random',
      goal: {
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height
      },
      hasReachedGoal: false,
      sway: false,
      wingSpeed: Math.floor(Math.random() * 3),
      // random initial wing speed
      scale: Math.random() * 0.5 + 0.75,
      // random initial scale between 0.75 and 1.25
      countdown: 0
    })
    makeNoise2D(Date.now())
    onUnmounted(() => {
      window.removeEventListener('resize', () => {
        windowSize.width = window.innerWidth
        windowSize.height = window.innerHeight
      })
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            {
              class: 'butterfly',
              style: {
                left: butterfly.goal.x + 'px',
                top: butterfly.goal.y + 'px',
                transform:
                  'rotate3d(1, 0.5, 0, ' +
                  butterfly.rotation +
                  'deg) scale(' +
                  butterfly.scale +
                  ')'
              }
            },
            _attrs
          )
        )} data-v-c7378028><div class="left-wing" data-v-c7378028><div class="top" style="${ssrRenderStyle(
          { background: butterfly.wingTopColor }
        )}" data-v-c7378028></div><div class="bottom" style="${ssrRenderStyle({
          background: butterfly.wingBottomColor
        })}" data-v-c7378028></div></div><div class="right-wing" data-v-c7378028><div class="top" style="${ssrRenderStyle(
          { background: butterfly.wingTopColor }
        )}" data-v-c7378028></div><div class="bottom" style="${ssrRenderStyle({
          background: butterfly.wingBottomColor
        })}" data-v-c7378028></div></div></div>`
      )
    }
  }
})
const _sfc_setup$8 = _sfc_main$8.setup
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/AmiButterfly.vue'
  )
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0
}
const ButterflySingle = /* @__PURE__ */ _export_sfc(_sfc_main$8, [['__scopeId', 'data-v-c7378028']])
const AmiButterfly = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: ButterflySingle
})
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: 'AmiSwarm',
  __ssrInlineRender: true,
  setup(__props) {
    const butterflies = ref([])
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`)
      ssrRenderList(butterflies.value, (butterfly, index) => {
        _push(
          ssrRenderComponent(
            ButterflySingle,
            {
              key: index,
              x: butterfly.x,
              y: butterfly.y
            },
            null,
            _parent
          )
        )
      })
      _push(`<!--]--></div>`)
    }
  }
})
const _sfc_setup$7 = _sfc_main$7.setup
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/AmiSwarm.vue'
  )
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0
}
const AmiSwarm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$7
})
const _sfc_main$6 = {
  __name: 'AmiLink2',
  __ssrInlineRender: true,
  setup(__props) {
    let isLoading = ref(false)
    let showButterflies = ref(false)
    useRouter()
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteLogo = __nuxt_component_0$2
      const _component_AmiSwarm = _sfc_main$7
      _push(`<div${ssrRenderAttrs(mergeProps({ class: 'flex items-center' }, _attrs))}>`)
      _push(ssrRenderComponent(_component_SiteLogo, null, null, _parent))
      if (!unref(isLoading)) {
        _push(`<button class="ml-4 btn btn-primary"> We are AMIb0t! </button>`)
      } else {
        _push(`<!---->`)
      }
      if (unref(isLoading)) {
        _push(
          `<div class="fixed inset-0 flex items-center justify-center"><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div></div>`
        )
      } else {
        _push(`<!---->`)
      }
      if (unref(showButterflies)) {
        _push(ssrRenderComponent(_component_AmiSwarm, null, null, _parent))
      } else {
        _push(`<!---->`)
      }
      _push(`</div>`)
    }
  }
}
const _sfc_setup$6 = _sfc_main$6.setup
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/AmiLink2.vue'
  )
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0
}
const AmiLink2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$6
})
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: 'ThemeChange',
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false)
    const themes = [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter'
    ]
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'theme-selector' }, _attrs)
        )}><button tabindex="0" aria-haspopup="true" aria-label="Change theme" class="theme-btn bg-base-200 p-4 rounded-full focus:outline-none focus:ring focus:ring-primary shadow-md transform hover:scale-110 transition-all ease-in-out duration-200"><span class="theme-icon w-6 h-6"></span></button><div style="${ssrRenderStyle(
          unref(open) ? null : { display: 'none' }
        )}" class="origin-top-right absolute right-0 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-opacity duration-200"><div class="py-1 theme-list grid grid-cols-3 gap-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"><!--[-->`
      )
      ssrRenderList(themes, (theme, index) => {
        _push(
          `<button class="theme-item block w-full text-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md" role="menuitem" tabindex="0">${ssrInterpolate(
            theme
          )}</button>`
        )
      })
      _push(`<!--]--></div></div></div>`)
    }
  }
})
const _sfc_setup$5 = _sfc_main$5.setup
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/ThemeChange.vue'
  )
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0
}
const ThemeChange = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$5
})
const _sfc_main$4 = {}
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_site_title = __nuxt_component_0$3
  const _component_dream_status = __nuxt_component_1
  const _component_AmiLink2 = _sfc_main$6
  const _component_ThemeChange = _sfc_main$5
  _push(
    `<header${ssrRenderAttrs(
      mergeProps(
        {
          class:
            'site-header w-full bg-gradient-to-r from-primary to-primary-light text-white shadow-md px-4 py-2 sm:px-6 lg:px-8'
        },
        _attrs
      )
    )}><div class="container mx-auto flex items-center justify-between">`
  )
  _push(ssrRenderComponent(_component_site_title, { class: 'text-2xl font-bold' }, null, _parent))
  _push(ssrRenderComponent(_component_dream_status, { class: 'hidden md:block' }, null, _parent))
  _push(`<nav class="space-x-4">`)
  ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent)
  _push(
    ssrRenderComponent(
      _component_AmiLink2,
      { class: 'z-0 fixed bottom-4 right-4 md:relative md:bottom-auto md:right-auto' },
      null,
      _parent
    )
  )
  _push(`</nav><div class="flex items-center justify-end">`)
  _push(ssrRenderComponent(_component_ThemeChange, null, null, _parent))
  _push(`</div></div></header>`)
}
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/SiteHeader.vue'
  )
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [
  ['ssrRender', _sfc_ssrRender$1]
])
const SiteHeader = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$1
})
const interpolatePath = (route, match) => {
  return match.path
    .replace(/(:\w+)\([^)]+\)/g, '$1')
    .replace(/(:\w+)[?+*]/g, '$1')
    .replace(/:\w+/g, (r) => {
      var _a
      return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || ''
    })
}
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type
  })
  const source =
    override ??
    (matchedRoute == null ? void 0 : matchedRoute.meta.key) ??
    (matchedRoute && interpolatePath(routeProps.route, matchedRoute))
  return typeof source === 'function' ? source(routeProps.route) : source
}
const wrapInKeepAlive = (props, children) => {
  return { default: () => children }
}
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props
  return {
    default: () => {
      var _a
      return props
        ? h(component, props, slots)
        : (_a = slots.default) == null
        ? void 0
        : _a.call(slots)
    }
  }
}
const LayoutMetaSymbol = Symbol('layout-meta')
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: 'NuxtLayout',
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp()
    const injectedRoute = inject('_route')
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? 'default')
    const layoutRef = ref()
    context.expose({ layoutRef })
    return () => {
      const done = nuxtApp.deferHydration()
      const hasLayout = layout.value && layout.value in layouts
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () =>
          h(
            Suspense,
            {
              suspensible: true,
              onResolve: () => {
                nextTick(done)
              }
            },
            {
              default: () =>
                _wrapIf(
                  LayoutProvider,
                  hasLayout && {
                    layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
                    key: layout.value,
                    name: layout.value,
                    shouldProvide: !props.name,
                    hasTransition: !!transitionProps
                  },
                  context.slots
                ).default()
            }
          )
      }).default()
    }
  }
})
const LayoutProvider = /* @__PURE__ */ defineComponent({
  name: 'NuxtLayoutProvider',
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    if (props.shouldProvide) {
      const name = props.name
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? 'default')
      })
    }
    return () => {
      return h(layouts[props.name], props.layoutProps, context.slots)
    }
  }
})
const __nuxt_component_2 = /* @__PURE__ */ defineComponent({
  name: 'NuxtPage',
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp()
    const pageRef = ref()
    expose({ pageRef })
    const _layoutMeta = inject(LayoutMetaSymbol, null)
    let vnode
    return () => {
      return h(
        RouterView,
        { name: props.name, route: props.route, ...attrs },
        {
          default: (routeProps) => {
            if (!routeProps.Component) {
              return
            }
            if (vnode && _layoutMeta && !_layoutMeta.isCurrent(routeProps.route)) {
              return vnode
            }
            const key = generateRouteKey(routeProps, props.pageKey)
            const done = nuxtApp.deferHydration()
            const hasTransition = !!(
              props.transition ??
              routeProps.route.meta.pageTransition ??
              appPageTransition
            )
            const transitionProps =
              hasTransition &&
              _mergeTransitionProps(
                [
                  props.transition,
                  routeProps.route.meta.pageTransition,
                  appPageTransition,
                  {
                    onAfterLeave: () => {
                      nuxtApp.callHook('page:transition:finish', routeProps.Component)
                    }
                  }
                ].filter(Boolean)
              )
            vnode = _wrapIf(
              Transition,
              hasTransition && transitionProps,
              wrapInKeepAlive(
                props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
                h(
                  Suspense,
                  {
                    suspensible: true,
                    onPending: () => nuxtApp.callHook('page:start', routeProps.Component),
                    onResolve: () => {
                      nextTick(() =>
                        nuxtApp.callHook('page:finish', routeProps.Component).finally(done)
                      )
                    }
                  },
                  {
                    default: () =>
                      h(RouteProvider, { key, routeProps, pageKey: key, hasTransition, pageRef })
                  }
                )
              )
            ).default()
            return vnode
          }
        }
      )
    }
  }
})
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : []
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }))
  return defu(..._props)
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: 'RouteProvider',
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ['routeProps', 'pageKey', 'hasTransition', 'pageRef'],
  setup(props) {
    const previousKey = props.pageKey
    const previousRoute = props.routeProps.route
    const route = {}
    for (const key in props.routeProps.route) {
      route[key] = computed(() =>
        previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]
      )
    }
    provide('_route', reactive(route))
    return () => {
      return h(props.routeProps.Component, { ref: props.pageRef })
    }
  }
})
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: 'ImageNav',
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore
    const { find } = queryContent()
      .where({ $not: { _path: '/' } })
      .sort({ _id: 1 })
    const { data: pages } =
      (([__temp, __restore] = withAsyncContext(() => useAsyncData('pages-list', find))),
      (__temp = await __temp),
      __restore(),
      __temp)
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4
      _push(
        `<div${ssrRenderAttrs(
          mergeProps(
            { class: 'fixed bottom-0 w-full flex justify-center items-center bg-gray-900 p-2' },
            _attrs
          )
        )}><hr class="w-full"><div class="w-full flex justify-center items-center rounded-box"><!--[-->`
      )
      ssrRenderList(unref(pages), (page) => {
        _push(`<div class="w-full flex flex-col items-center justify-center m-2">`)
        _push(
          ssrRenderComponent(
            _component_NuxtLink,
            {
              to: page._path,
              class: 'flex flex-col items-center justify-center'
            },
            {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(
                    `<div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white transition-all hover:shadow-lg"${_scopeId}>`
                  )
                  if (page.image) {
                    _push2(
                      `<img${ssrRenderAttr(
                        'src',
                        `/images/${page.image}`
                      )} alt="Page Image" class="w-full h-full rounded-full object-cover"${_scopeId}>`
                    )
                  } else {
                    _push2(`<p class="text-center"${_scopeId}>Loading...</p>`)
                  }
                  _push2(
                    `</div><div class="text-white text-center text-sm md:text-base"${_scopeId}>${ssrInterpolate(
                      page.title
                    )}</div>`
                  )
                } else {
                  return [
                    createVNode(
                      'div',
                      {
                        class:
                          'w-24 h-24 md:w-32 md:h-32 rounded-full bg-white transition-all hover:shadow-lg'
                      },
                      [
                        page.image
                          ? (openBlock(),
                            createBlock(
                              'img',
                              {
                                key: 0,
                                src: `/images/${page.image}`,
                                alt: 'Page Image',
                                class: 'w-full h-full rounded-full object-cover'
                              },
                              null,
                              8,
                              ['src']
                            ))
                          : (openBlock(),
                            createBlock(
                              'p',
                              {
                                key: 1,
                                class: 'text-center'
                              },
                              'Loading...'
                            ))
                      ]
                    ),
                    createVNode(
                      'div',
                      { class: 'text-white text-center text-sm md:text-base' },
                      toDisplayString(page.title),
                      1
                    )
                  ]
                }
              }),
              _: 2
            },
            _parent
          )
        )
        _push(`</div>`)
      })
      _push(`<!--]--></div><hr class="w-full"></div>`)
    }
  }
})
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/content/ImageNav.vue'
  )
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const ImageNav = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$3
})
const _sfc_main$2 = {}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingBar = _sfc_main$c
  const _component_site_header = __nuxt_component_0$1
  const _component_NuxtPage = __nuxt_component_2
  const _component_image_nav = _sfc_main$3
  _push(`<div${ssrRenderAttrs(_attrs)}>`)
  _push(ssrRenderComponent(_component_NuxtLoadingBar, null, null, _parent))
  _push(ssrRenderComponent(_component_site_header, null, null, _parent))
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(ssrRenderComponent(_component_image_nav, null, null, _parent))
  _push(`</div>`)
}
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('app.vue')
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [['ssrRender', _sfc_ssrRender]])
const _sfc_main$1 = {
  __name: 'nuxt-error-page',
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props
    const _error = props.error
    ;(_error.stack || '')
      .split('\n')
      .splice(1)
      .map((line) => {
        const text = line.replace('webpack:/', '').replace('.vue', '.js').trim()
        return {
          text,
          internal:
            (line.includes('node_modules') && !line.includes('.cache')) ||
            line.includes('internal') ||
            line.includes('new Promise')
        }
      })
      .map((i) => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`)
      .join('\n')
    const statusCode = Number(_error.statusCode || 500)
    const is404 = statusCode === 404
    const statusMessage =
      _error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
    const description = _error.message || _error.toString()
    const stack = void 0
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() =>
      import('./_nuxt/error-404-2263e302.mjs').then((r) => r.default || r)
    )
    const _Error = /* @__PURE__ */ defineAsyncComponent(() =>
      import('./_nuxt/error-500-689d7da5.mjs').then((r) => r.default || r)
    )
    const ErrorTemplate = is404 ? _Error404 : _Error
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        ssrRenderComponent(
          unref(ErrorTemplate),
          mergeProps(
            {
              statusCode: unref(statusCode),
              statusMessage: unref(statusMessage),
              description: unref(description),
              stack: unref(stack)
            },
            _attrs
          ),
          null,
          _parent
        )
      )
    }
  }
}
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'node_modules/nuxt/dist/app/components/nuxt-error-page.vue'
  )
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const ErrorComponent = _sfc_main$1
const _sfc_main = {
  __name: 'nuxt-root',
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() =>
      import('./_nuxt/island-renderer-d9050c81.mjs').then((r) => r.default || r)
    )
    const nuxtApp = useNuxtApp()
    nuxtApp.deferHydration()
    nuxtApp.ssrContext.url
    const SingleRenderer = false
    provide('_route', useRoute())
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), 'vue:setup')
    const error = useError()
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks
        .callHook('vue:error', err, target, info)
        .catch((hookError) => console.error('[nuxt] Error in `vue:error` hook', hookError))
      {
        const p = nuxtApp.runWithContext(() => showError(err))
        onServerPrefetch(() => p)
        return false
      }
    })
    const { islandContext } = nuxtApp.ssrContext
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent))
          } else if (unref(islandContext)) {
            _push(
              ssrRenderComponent(
                unref(IslandRenderer),
                { context: unref(islandContext) },
                null,
                _parent
              )
            )
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(
              _push,
              createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null),
              _parent
            )
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent))
          }
        },
        _: 1
      })
    }
  }
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'node_modules/nuxt/dist/app/components/nuxt-root.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const RootComponent = _sfc_main
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  })
}
let entry
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent)
    const nuxt = createNuxtApp({ vueApp, ssrContext })
    try {
      await applyPlugins(nuxt, plugins)
      await nuxt.hooks.callHook('app:created', vueApp)
    } catch (err) {
      await nuxt.hooks.callHook('app:error', err)
      nuxt.payload.error = nuxt.payload.error || err
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error('skipping render')
    }
    return vueApp
  }
}
const entry$1 = (ctx) => entry(ctx)

export {
  createQuery as A,
  _export_sfc as _,
  __nuxt_component_0$4 as a,
  __nuxt_component_0 as b,
  createError as c,
  useAsyncData as d,
  entry$1 as default,
  useRequestFetch as e,
  __nuxt_component_0$1 as f,
  useRoute as g,
  useRuntimeConfig as h,
  useContentPreview as i,
  __nuxt_component_0$2 as j,
  useState as k,
  useNuxtApp as l,
  defineAppConfig as m,
  _imports_0 as n,
  useContent as o,
  fetchContentNavigation as p,
  queryContent as q,
  useUnwrap as r,
  get as s,
  assertArray as t,
  useHead as u,
  ensureArray as v,
  sortList as w,
  apply as x,
  withoutKeys as y,
  withKeys as z
}
//# sourceMappingURL=server.mjs.map
