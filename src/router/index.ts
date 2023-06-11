// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: { layout: 'MainLayout' },
  },
  {
    path: '/race',
    name: 'Race',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Race.vue'),
    meta: { layout: 'MainLayout' },
  },
  {
    path: '/desktop-login',
    name: 'DesktopLogin',
    component: () => import(/* webpackChunkName: "desktoplogin" */ '@/views/DesktopLogin.vue'),
    meta: { layout: 'DesktopLayout' },
  },
  {
    path: '/desktop-login-success',
    name: 'DesktopLoginSuccess',
    component: () => import(/* webpackChunkName: "desktoploginSuccess" */ '@/views/DesktopLoginSuccess.vue'),
    meta: { layout: 'DesktopLayout' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
