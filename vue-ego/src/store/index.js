import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './modules/LoginModule'

// @ts-ignore
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginModule
  }
})
