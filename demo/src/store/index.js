import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/utils/request'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booksList: [],//书架列表
    list: []
  },
  getters: {
  },
  mutations: {
    setBooksList(state, payload) {
      payload.isChecked = false
      state.booksList.push(payload)
    },
    setList(state, payload) {
      state.list = payload
    },
    editBooksLists(state, payload) {
      let newList = [...state.booksList]
      newList.forEach(item => {
        if (item.id == payload.id) {
          if (payload.checked) {
            item.isChecked = false
          } else {
            item.isChecked = true
          }
        }
      })
      state.booksList = newList
    },
    delData(state, payload) {
      let newList = [...state.booksList]
      let nowBooksList = []
      newList.forEach(item => {
        if (!item.isChecked) {
          nowBooksList.push(item)
        }
      })
      state.booksList = nowBooksList
    }
  },
  actions: {
    addBooksList(context, payload) {
      context.commit('setBooksList', payload)
    },
    getList(context, payload) {
      request.get('/api/list').then(res => {
        if (res.data.code == 200) {
          context.commit('setList', res.data.data)
        }
      })
    },
    editBooksList(context, payload) {
      context.commit('editBooksLists', payload)
    },
    delCheckedData(context, payload) {
      context.commit('delData')
    }
  },
  modules: {
  }
})
