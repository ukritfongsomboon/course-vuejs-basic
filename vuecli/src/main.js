import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import com2 from '@/components/BasicComponent/com-basic-02.vue'
import comtoolbar from './components/Toolbar/com-toolbar.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.component('com-basic2', com2)
Vue.component('com-toolbar', comtoolbar)
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
