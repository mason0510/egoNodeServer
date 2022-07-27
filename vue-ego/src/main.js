// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/iconfont.css'

import api from './api/index.js'
Vue.prototype.$api = api;
import './router/permission'
import './utils/LocalStorage'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI

// develop mode
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>',
  render (createElement, context) {
    return createElement(App)
  },
  store
}).$mount('#app')
