
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BoostrapVue from 'bootstrap-vue'
import { ApiService } from './services/api.service.js'
import { TokenService } from './services/storage.service.js'

Vue.use(BoostrapVue);
Vue.config.productionTip = false

// set base url of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// if token exists set headers
if (TokenService.getToken()) {
  ApiService.setHeaders()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
