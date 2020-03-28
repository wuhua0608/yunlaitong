import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(VueRouter);

const app = new Vue({
  ...App
})
app.$mount()
