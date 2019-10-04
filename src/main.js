import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import Vue2MapboxGL from 'vue2mapbox-gl'
import { config } from './config/framework-config.js'

Vue.use(Vuetify, { iconfont: 'md' })
Vue.prototype.appConfig = config
Vue.use(Vue2MapboxGL)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
