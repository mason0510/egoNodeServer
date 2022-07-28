// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/iconfont.css'

import api from './api/index.js'
Vue.prototype.$api = api;
import store from './store'
import './router/permission'
import './utils/localStorage'
Vue.prototype.store = store;


import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI
// develop mode
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')
