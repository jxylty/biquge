import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue();

function setCookie(name){
	var exp = new Date();
	      exp.setTime(exp.getTime() - 1);
	      var cval = getCookie(name);
	     if (cval != null)
	     document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		 
		   function getCookie(name) {
		         var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		         if (arr = document.cookie.match(reg)){
		         return true;
		        // return (arr[2]);
		       }else{
		       return false
		      }
		 }
 }
Vue.prototype.$cookieStore = {
	setCookie
}


router.beforeEach((to, from, next) => {
  // console.log(to);
  if(to.name=='bookcase'){
	  
	  if(existCookie('token')){
		  next(true);
	  }else{
		  next('/login');
	  }
  }
  next(true);
});


function existCookie(name) {
        let parts = document.cookie.split('; ');
        for (let part of parts) {
            if (name === part.split('=')[0]) {
                return true
            }
        }
        return false;
    }
// store.commit('fzzz');
// console.log(store.state.zzz);

new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')

