<template>
  <div id="app">
    <div class="head">笔趣阁</div>
	<!-- <div class="nav">分类</div> -->
   <div class="nav">
		<ul>
			<li v-for="nav of navs">  {{nav}}</li>
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
		font-size: 0.4rem;
		/* font-size: 20px; */
	}
	.nav{
		font-size: 0.32rem;
	}
</style>
