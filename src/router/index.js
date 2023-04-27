import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pages',
    name: 'pages',
    component: () => import(/* webpackChunkName: "pages" */ '../views/Pages.vue')
  },
  {
    path: '/portafolio',
    name: 'portafolio',
    component: () => import(/* webpackChunkName: "portafolio" */ '../views/Portafolio.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/Galeria.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/Blog.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
