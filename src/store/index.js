import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../../utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList:[]
  },
  mutations: {
    setDemoList(state, shopList) {
			state.shopList.push(shopList)
    },
    saveshop(state,shopList){
      state.shopList.push(shopList) 
    }
  },
  actions: {
    getDemoList(state) {
      state.shopList = storage.get("shopList");
      return state.shopList;
}
  },
  getters:{
    getDemoList(state) {
      state.demoList = storage.get("shopList");
      return state.demoList;
}
  },
  modules: {
  }
})
