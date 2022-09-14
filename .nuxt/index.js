import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_b98d26ba from 'nuxt_plugin_plugin_b98d26ba' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_pluginutils_29cd8a6c from 'nuxt_plugin_pluginutils_29cd8a6c' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_3fb63d95 from 'nuxt_plugin_pluginrouting_3fb63d95' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_56c6c40c from 'nuxt_plugin_pluginmain_56c6c40c' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_axios_56e12791 from 'nuxt_plugin_axios_56e12791' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_workbox_b5f40726 from 'nuxt_plugin_workbox_b5f40726' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_0fc68680 from 'nuxt_plugin_metaplugin_0fc68680' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_146e2bf4 from 'nuxt_plugin_iconplugin_146e2bf4' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_vuenear_367e6652 from 'nuxt_plugin_vuenear_367e6652' // Source: ../plugins/vue-near.js (mode: 'client')
import nuxt_plugin_meta_8e6bd716 from 'nuxt_plugin_meta_8e6bd716' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"DeCredify- Decentralized platform for on-chain skill verification","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"author","name":"author","content":"claudiabdm"},{"hid":"google-site-verification","name":"google-site-verification","content":"hMvPTPU_1B3OvsDWBBV0g0ySj9V0sIrZPASB-6BWDmk"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:url","name":"twitter:url","content":"https:\u002F\u002Fcvfy.netlify.app\u002F"},{"hid":"twitter:image","name":"twitter:image","content":"icon.png"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"cvfy"},{"hid":"theme-color","name":"theme-color","content":"#5B21B6"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"cvfy"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"cvfy"}],"htmlAttrs":{"lang":"en"},"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.5f6a36.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.5f6a36.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.af55e916.json","hid":"manifest"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_b98d26ba === 'function') {
    await nuxt_plugin_plugin_b98d26ba(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_29cd8a6c === 'function') {
    await nuxt_plugin_pluginutils_29cd8a6c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_3fb63d95 === 'function') {
    await nuxt_plugin_pluginrouting_3fb63d95(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_56c6c40c === 'function') {
    await nuxt_plugin_pluginmain_56c6c40c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_56e12791 === 'function') {
    await nuxt_plugin_axios_56e12791(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_b5f40726 === 'function') {
    await nuxt_plugin_workbox_b5f40726(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_0fc68680 === 'function') {
    await nuxt_plugin_metaplugin_0fc68680(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_146e2bf4 === 'function') {
    await nuxt_plugin_iconplugin_146e2bf4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuenear_367e6652 === 'function') {
    await nuxt_plugin_vuenear_367e6652(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_8e6bd716 === 'function') {
    await nuxt_plugin_meta_8e6bd716(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
