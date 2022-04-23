import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import com2 from '@/components/BasicComponent/com-basic-02.vue'
import comtoolbar from './components/Toolbar/com-toolbar.vue'
Vue.config.productionTip = false
Vue.component('com-basic2', com2)
Vue.component('com-toolbar', comtoolbar)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
