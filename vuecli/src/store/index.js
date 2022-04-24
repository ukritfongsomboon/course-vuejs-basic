import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // TODO data
    counter: 0,
  },
  getters: {
    //TODO computed
    count(state) {
      var parts = state.counter.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    },
  },
  mutations: {
    addCounter(state, val) {
      state.counter += val
    },
    subCounter(state, val) {
      state.counter -= val
    },
  },
  actions: {
    // TODO method
    add(contex, val) {
      contex.commit('addCounter', val)
    },
    sub(contex, val) {
      contex.commit('subCounter', val)
    },
  },
  modules: {},
})
