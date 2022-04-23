import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from '../views/view-page1.vue'
import page2 from '../views/view-page2.vue'
Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: { name: 'page1' } },
  { path: '/', name: 'page1', component: page1 },
  { path: '/page2', name: 'page2', component: page2 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
