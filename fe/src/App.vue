<template>
<div id="app">
	
	<div class="head">
		<div class="logo">新笔趣阁</div>
		<div class="login">
			<div class="login-left">
				登录
			</div>
			<div class="login-right">
				注册
			</div>
		</div>
	</div>
	
	<div class="nav">
			<ul>
				<li v-for="nav of navs" @click="goRouter(nav.name)">  {{nav.text}}</li>
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
				navs: [{
					name: 'sort',
					text:'分类'
				},
				{
					name: 'top',
					text:'排行'
				},
				{
					name: 'wapfull',
					text:'全本'
				},
				{
					name: 'postdate',
					text: '新书'
				}
				]
			}
		},
		methods:{
			goRouter(name){
				this.$router.push(name)
			}
		}
	}
</script>


<style>
	#app{
		
		/* font-size: 20px; */
        width: 100%;height: 100%;
        
	}
	.head{
		height:1rem;background:rgba(0,125,178);
	}
   .logo{
        float: left;
        font-size: 0.4rem;
        color:white;
        line-height:1rem;
        margin-left:.2rem;
		height: 1rem;
    }
    .login{
        float:right;height: 1rem;
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
		font-size: 0.32rem;height: 0.7rem;
		background: rgb(236,240,240);line-height: 0.7rem;
	}
	.nav ul li{
		list-style: none; float: left;
		    color: #333;
		    display: block;
		    width: 20%;
		    height: 0.52rem;
		    overflow: hidden;
		    float: left;
		    text-align: center;
	}
</style>
