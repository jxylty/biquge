import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sort from './views/Sort.vue'
// import Text from './views/Text.vue'
import Top from './views/Top.vue'
import Wapfull from './views/Wapfull.vue'
import Postdate from './views/Postdate.vue'
import Bookcase from './views/Bookcase.vue'
import Login from './views/Login.vue'
import Regsiter from './views/Regsiter.vue'
import W1001 from './views/W1001.vue'
import X1 from './components/X1.vue';
import X2 from './components/X2.vue';
import X3 from './components/X3.vue';
import X4 from './components/X4.vue';
import X5 from './components/X5.vue';
import X6 from './components/X6.vue';
import X7 from './components/X7.vue';
import Y1 from './components/Y1.vue';
import Y2 from './components/Y2.vue';
import Y3 from './components/Y3.vue';


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
		component: Sort,
		children: [
			{
				path: '/x1',
				name: 'x1',
				component: X1
			},{
				path: '/x2',
				name: 'x2',
				component: X2
			},{
				path: '/x3',
				name: 'x3',
				component: X3
			},{
				path: '/x4',
				name: 'x4',
				component: X4
			},{
				path: '/x5',
				name: 'x5',
				component: X5
			},{
				path: '/x6',
				name: 'x6',
				component: X6
			},{
				path: '/x7',
				name: 'x7',
				component: X7
			}
		]
	},{
		path:'/text',
		name:'/text',
		component:Text
	},{
		path: '/top',
		name: 'top',
		component: Top,
		children:[
			{
				path: '/y1',
				name: 'y1',
				component: Y1
			},{
				path: '/y2',
				name: 'y2',
				component: Y2
			},{
				path: '/y3',
				name: 'y3',
				component: Y3
			}
		]
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
	},{
		path: '/w1001',
		name:'w1001',
		component: W1001
	}
	
	

  ]
})


router.beforeEach( (to, from, next)=>{
	const navName = ['login','regsiter','w1001'];
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

