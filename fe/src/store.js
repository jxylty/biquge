import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		zzz: true,
		cent: '11',
		dian: [],
		fan: 0
  },
  mutations: {
		fzzz(state, zzz) {
		    state.zzz = false
		},
		tzzz(state, zzz) {
		    state.zzz = true
		}
  },
  actions: {

  }
})
