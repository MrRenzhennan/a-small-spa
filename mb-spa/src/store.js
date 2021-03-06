import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:''
  },
  mutations: {
    changeName(state,name){
      state.name = name
    }
  },
  actions: {
    changeName(context,name){
      context.commit('changeName',name)
    }
  },
  getters:{
    
  }
})
