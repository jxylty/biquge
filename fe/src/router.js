import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sort from './views/Sort.vue'
import Top from './views/Top.vue'
import Wapfull from './views/Wapfull.vue'
import Postdate from './views/Postdate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
		path: '/sort',
		name: 'sort',
		component: Sort
	},{
		path: '/top',
		name: 'top',
		component: Top
	},{
		path: '/wapfull',
		name: 'wapfull',
		component: Wapfull
	},{
		path: '/postdate',
		name: 'postdate',
		component: Postdate
	}
	

  ]
})
