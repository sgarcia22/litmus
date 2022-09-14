import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f625a6d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _21cc64a2 = () => interopDefault(import('../pages/resume.vue' /* webpackChunkName: "pages/resume" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'form__btn--active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _7f625a6d,
    name: "index___en"
  }, {
    path: "/es",
    component: _7f625a6d,
    name: "index___es"
  }, {
    path: "/resume",
    component: _21cc64a2,
    name: "resume"
  }, {
    path: "/en/resume",
    component: _21cc64a2,
    name: "resume___en"
  }, {
    path: "/es/resume",
    component: _21cc64a2,
    name: "resume___es"
  }, {
    path: "/",
    component: _7f625a6d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
