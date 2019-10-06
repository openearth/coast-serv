import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import Vue2MapboxGL from 'vue2mapbox-gl'
import { config } from './config/framework-config.js'

Vue.prototype.appConfig = config
Vue.use(Vue2MapboxGL)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
