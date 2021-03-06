import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") ||''
  },
  mutations: {
    SET_TOKEN:(state, token) => {
      state.token = token
    }
  },
  actions: {
    setToken(context, token) {
      context.commit('SET_TOKEN', token)
    },
    clearToken(context) {
      context.commit('SET_TOKEN', '')
    }
  },
  modules: {
  }
})
