import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/utils/request.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    shopList: [],
    detileData: {},
    carList: [],
    title: ""
  },
  getters: { // computedƒ
  },
  mutations: {// methods  同步方法/修改state的方法 
    setShopList(state, payload) {
      state.shopList = payload
    },
    setDetileData(state, payload) {
      state.detileData = payload
    },
    setCarList(state, payload) {
      state.carList.push(payload)
    }
  },
  actions: {// methods  异步方法  可以修改state  不建议在actions里面修改state
    getShopList(context, payload) {
      request.get('/api/shop/list', {
        params: payload
      }).then(res => {
        if (res.data.code == 200) {
          context.commit('setShopList', res.data.data)
        }
      })
    },
    getDetileData(context, payload) {
      request.get('/api/detile/getData', { params: { id: payload } }).then(res => {
        if (res.data.code == 200) {
          let imgList = ['https://img01.yzcdn.cn/vant/apple-1.jpg',
            'https://img01.yzcdn.cn/vant/apple-2.jpg']
          let data = res.data.data
          imgList.unshift(data.thumb)
          data.thumb = imgList
          context.commit('setDetileData', data)
        }
      })
    },
    addCarList(context, payload) {
      context.commit('setCarList', payload)
    }
  },
  modules: {
  }
})
