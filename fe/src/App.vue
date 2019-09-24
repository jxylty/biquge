<template>
  <div id="app">
    <div class="logo">新笔趣阁</div>
	<div class="login">
        <div class="login-left">
            登录
        </div>
        <div class="login-right">
            注册
        </div>
    </div>
   <div class="nav">
		<ul>
			<!-- <li v-for="nav of navs">{{nav}}</li> -->
		</ul>
	</div>
      
    
    <router-view/>
  </div>
</template>

<script>
	export default{
		name: 'app',
		data(){
			return {
				navs: ['分类','排行', '全本', '新书','书架']
			}
		}
	}
</script>


<style>
	#app{
		
		/* font-size: 20px; */
        height:1rem;
        background:rgba(0,125,178);
	}
   .logo{
        float: left;
        font-size: 0.4rem;
        color:white;
        line-height:1rem;
        margin-left:.2rem;
    }
    .login{
        float:right;
        margin-right:.2rem
    }
    .login-left{
        float: left;
        font-size: 0.4rem;
        background:rgba(43,189,237);
        color:white;
    }
    .login-right{
        float: left;
        font-size: 0.4rem;
        background:rgba(43,189,237);
        color:white;
    }
	.nav{
		font-size: 0.32rem;
	}
</style>
