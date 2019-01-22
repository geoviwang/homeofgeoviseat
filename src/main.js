import Vue from 'vue'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
