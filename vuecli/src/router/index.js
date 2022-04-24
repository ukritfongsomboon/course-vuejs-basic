import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/view-login.vue'
import home from '@/views/view-home.vue'
import page1 from '../views/home/view-page1.vue'
import page2 from '../views/home/view-page2.vue'
Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: { name: 'login' } },
  { path: '/login', name: 'login', component: login, meta: { requireLogin: false } },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { requireLogin: true },
    redirect: { name: 'page1' },
    children: [
      { path: 'page1', name: 'page1', component: page1, meta: { requireLogin: true } },
      { path: 'page2', name: 'page2', component: page2, meta: { requireLogin: true } },
    ],
  },
  // { path: '/page2', name: 'page2', component: page2 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const ls = localStorage.getItem('credential')
  if (to.matched.some((x) => x.meta.requireLogin)) {
    //TODO ต้องมี credential
    if (ls === undefined || ls === null) next({ name: 'login' })
    else next()
  } else {
    //TODO ไม่ต้องมี credential
    if (ls === undefined || ls === null) next()
    else {
      if (to.name == 'login') next({ name: 'home' })
      else next()
    }
  }
})

export default router
