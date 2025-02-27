import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
