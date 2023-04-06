import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    num: 1
  },
  getters: { // computed
    myNum(state) {
      return state.num + 1
    }
  },
  mutations: {// methods  同步方法/修改state的方法 
    add(state, payload) {
      state.num += 1
    }
  },
  actions: {// methods  异步方法  可以修改state  不建议在actions里面修改state
    addNum(context, payload) {
      context.commit('add')
    },
  },
  modules: {
  }
})
