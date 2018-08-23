import Vue from 'vue'

import App from './App.vue'

import './plugins/axios'
import './plugins/vue-chartkick'
import './plugins/vue-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
