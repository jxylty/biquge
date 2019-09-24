<template>
  <div id="app">
    <div class="head">笔趣阁</div>
	
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
		font-size: 0.4rem;
		/* font-size: 20px; */
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
