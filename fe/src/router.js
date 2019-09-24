import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sort from './views/Sort.vue'
import Top from './views/Top.vue'
import Wapfull from './views/Wapfull.vue'
import Postdate from './views/Postdate.vue'
import Bookcase from './views/Bookcase.vue'
import Login from './views/Login.vue'
import Regsiter from './views/Regsiter.vue'

Vue.use(Router)

const router = new Router({
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
	},{
		path: '/bookcase',
		name:'bookcase',
		component: Bookcase
	},{
		path: '/login',
		name:'login',
		component: Login
	},{
		path: '/regsiter',
		name:'regsiter',
		component: Regsiter
	}
	
	

  ]
})


router.beforeEach( (to, from, next)=>{
	const navName = ['bookcase','login','regsiter'];
	const $eventBus = Vue.prototype.$eventBus;
	if(navName.indexOf(to.name) !== -1){
		$eventBus.$emit('navShow',false)
	}else{
		$eventBus.$emit('navShow',true)
	}
	next(true);
	// console.log(to.name)
	// console.log($eventBus)
	
})



export default router;

