import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		zzz: true,
		cent: '11',
		dian: [],
		fan: 0,
		tokenName:null
  },
  getters: {
      appType(state){
          if(!state.tokenName) {
            state.tokenName = getSessionStorage("tokenName")
          }
          return state.tokenName
      }
    },
  mutations: {
		fzzz(state, zzz) {
		    state.zzz = false
		},
		tzzz(state, zzz) {
		    state.zzz = true
		},
		setAppType (state, tokenName) {
		       state.tokenName = tokenName
		       setSessionStorage("tokenName",tokenName)
		    }
  },
  actions: {

  }
})
