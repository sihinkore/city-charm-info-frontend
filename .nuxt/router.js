import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63ac6df0 = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _13a1fcd7 = () => interopDefault(import('../pages/article_goout.vue' /* webpackChunkName: "pages/article_goout" */))
const _3f400a30 = () => interopDefault(import('../pages/article_gourmet.vue' /* webpackChunkName: "pages/article_gourmet" */))
const _1bff3d58 = () => interopDefault(import('../pages/article_location.vue' /* webpackChunkName: "pages/article_location" */))
const _7a15587c = () => interopDefault(import('../pages/article_others.vue' /* webpackChunkName: "pages/article_others" */))
const _d11abcf2 = () => interopDefault(import('../pages/article_shopping.vue' /* webpackChunkName: "pages/article_shopping" */))
const _4fc6e03d = () => interopDefault(import('../pages/article_sightseeing.vue' /* webpackChunkName: "pages/article_sightseeing" */))
const _779afc58 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _e38594c0 = () => interopDefault(import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */))
const _2640c13e = () => interopDefault(import('../pages/sign_in.vue' /* webpackChunkName: "pages/sign_in" */))
const _0175f5d7 = () => interopDefault(import('../pages/sign_up.vue' /* webpackChunkName: "pages/sign_up" */))
const _8ee8153e = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _1c9b7dcb = () => interopDefault(import('../pages/articles/_id/edit.vue' /* webpackChunkName: "pages/articles/_id/edit" */))
const _1e706c4c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _63ac6df0,
    name: "article"
  }, {
    path: "/article_goout",
    component: _13a1fcd7,
    name: "article_goout"
  }, {
    path: "/article_gourmet",
    component: _3f400a30,
    name: "article_gourmet"
  }, {
    path: "/article_location",
    component: _1bff3d58,
    name: "article_location"
  }, {
    path: "/article_others",
    component: _7a15587c,
    name: "article_others"
  }, {
    path: "/article_shopping",
    component: _d11abcf2,
    name: "article_shopping"
  }, {
    path: "/article_sightseeing",
    component: _4fc6e03d,
    name: "article_sightseeing"
  }, {
    path: "/inspire",
    component: _779afc58,
    name: "inspire"
  }, {
    path: "/sample",
    component: _e38594c0,
    name: "sample"
  }, {
    path: "/sign_in",
    component: _2640c13e,
    name: "sign_in"
  }, {
    path: "/sign_up",
    component: _0175f5d7,
    name: "sign_up"
  }, {
    path: "/articles/:id",
    component: _8ee8153e,
    name: "articles-id"
  }, {
    path: "/articles/:id?/edit",
    component: _1c9b7dcb,
    name: "articles-id-edit"
  }, {
    path: "/",
    component: _1e706c4c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
