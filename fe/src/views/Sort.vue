<template>
	
	<div>
	<div class="content">
		<ul>
			
			<li class="prev" @click="go1"><a>玄幻</a></li>
			<li class="prev" @click="go2"><a>仙侠</a></li>
			<li class="prev"@click="go3"><a>都市</a></li>
		</ul>
		<ul>
			<li class="prev" @click="go4"><a>历史</a></li>
			<li class="prev" @click="go5"><a>网游</a></li>
			<li class="prev" @click="go6"><a>科幻</a></li>
		</ul>
		<ul>
			<li class="prev" @click="go7"><a>其他</a></li>
		</ul>
	</div>
	
		<router-view></router-view>
	

		<div class="footer">
			<ul>
				<li><a>首页</a></li>
				<li><a>电脑版</a></li>
				<li><a>书架</a></li>
			</ul>
		</div>
	
	</div>
	
	
</template>

<script>
	export default{
		name: 'Sort',
		methods:{
			go1(){
				this.$router.push('x1')
				this.$store.state.zzz=false;
				this.$store.state.cent= '玄幻小说';
				if(this.dian2.indexOf('玄幻小说')!=-1){
					
				}else{
					this.dian2.push('玄幻小说');  
				}
			},go2(){
				this.$router.push('x2')
				this.$store.state.zzz=false;
				this.$store.state.cent= '仙侠小说';
				if(this.dian2.indexOf('玄幻小说')!=-1){
					
				}else{
					this.dian2.push('仙侠小说');  
				}
			},go3(){
				this.$router.push('x3')
				this.$store.state.zzz=false;
			},go4(){
				this.$router.push('x4')
			},go5(){
				this.$router.push('x5')
			},go6(){
				this.$router.push('x6')
			},go7(){
				this.$router.push('x7')
			}
		},computed:{
			dian2(){
				return this.$store.state.dian;
			}
		}
	}
</script>

<style>
	.content {
		width:98%;
		margin-top: 0.2rem;
		color: #000;
	}
	
	.content ul {
		display: -webkit-box;
		margin-bottom: 0.2rem;
	}
	
	.content .prev {
		text-align: left;
		margin-left: 0.14rem;
	}
	
	.content li {
		-webkit-box-flex: 1;
		
	}
	
	li{
		list-style: none;
	}
	
	.prev a{
		display: block;
		text-align: center;
		padding:0.2rem 0.1rem;
		background-color: #fff;
		color: #000;
		border: 0.02rem solid #efefef;
		font-size:0.33rem;
	}
	
	a{
		text-decoration: none;
	}
	
	
	.footer{
		height: 0.6rem;
		background: #ECF0F0;
		padding: 0.06rem 0 0;
		border-top:0.02rem solid #f1f1f1;
		line-height: 0.52rem;
		text-align: center;
		padding-top: 0.4rem;
		padding-bottom: 2.4rem;
	}
	
	.footer li{
		float:left;
		text-align: center;
		width: 33%;
		font-size: 0.32rem;
	}
	
	.footer li a{
		color: #000;
	}
	
	
</style>
