<template>
	
	<div>
	<div class="content">
		<ul>
			<li class="prev" @click="go1"><a :class="{done:ys}">玄幻</a></li>
			<li class="prev" @click="go2"><a :class="{done:ys2}">仙侠</a></li>
			<li class="prev" @click="go3"><a :class="{done:ys3}">都市</a></li>
		</ul>
		<ul>
			<li class="prev" @click="go4"><a :class="{done:ys4}">历史</a></li>
			<li class="prev" @click="go5"><a :class="{done:ys5}">网游</a></li>
			<li class="prev" @click="go6"><a :class="{done:ys6}">科幻</a></li>
		</ul>
		<ul>
			<li class="prev" @click="go7"><a :class="{done:ys7}">其他</a></li>
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
		data(){
			return {
				ys:false,
				ys2:false,
				ys3:false,
				ys4:false,
				ys5:false,
				ys6:false,
				ys7:false,
			}
		},
		methods:{
			go1(){
				this.ys=true
				if(this.ys==true){
					this.ys2=false;
					this.ys3=false;
					this.ys4=false;
					this.ys5=false;
					this.ys6=false;
					this.ys7=false;
				}
				this.$router.push('x1')
				// this.$store.state.zzz=false;
				this.$store.state.cent= '玄幻小说';
				if(this.dian2.indexOf('玄幻小说')!=-1){
					
				}else{
					this.dian2.push('玄幻小说');  
				}
				console.log("")
			},go2(){
				this.ys2=true
				if(this.ys2==true){
					this.ys=false;
					this.ys3=false;
					this.ys4=false;
					this.ys5=false;
					this.ys6=false;
					this.ys7=false;
				}
				this.$router.push('x2')
				this.$store.state.zzz=false;
				this.$store.state.cent= '仙侠小说';
				if(this.dian2.indexOf('仙侠小说')!=-1){
					
				}else{
					this.dian2.push('仙侠小说');  
				}
			},go3(){
				this.ys3=true
				if(this.ys3==true){
					this.ys1=false;
					this.ys2=false;
					this.ys4=false;
					this.ys5=false;
					this.ys6=false;
					this.ys7=false;
				}
				this.$router.push('x3')
				this.$store.state.zzz=false;
				this.$store.state.cent = '都市小说';
				if(this.dian2.indexOf('都市小说')!=-1){
					
				}else{
					this.dian2.push('都市小说')
				}
			},go4(){
				this.ys4=true
				if(this.ys4==true){
					this.ys=false;
					this.ys3=false;
					this.ys2=false;
					this.ys5=false;
					this.ys6=false;
					this.ys7=false;
				}
				this.$router.push('x4')
				this.$store.state.zzz=false;
				this.$store.state.cent = '历史小说';
				if(this.dian2.indexOf('历史小说')!=-1){
					
				}else{
					this.dian2.push('历史小说')
				}
			},go5(){
				this.ys5=true
				if(this.ys5==true){
					this.ys=false;
					this.ys3=false;
					this.ys4=false;
					this.ys2=false;
					this.ys6=false;
					this.ys7=false;
				}
				this.$router.push('x5')
				this.$store.state.zzz=false;
				this.$store.state.cent = '网游小说';
				if(this.dian2.indexOf('网游小说')!=-1){
					
				}else{
					this.dian2.push('网游小说')
				}
			},go6(){
				this.ys6=true
				if(this.ys6==true){
					this.ys=false;
					this.ys3=false;
					this.ys4=false;
					this.ys5=false;
					this.ys2=false;
					this.ys7=false;
				}
				this.$router.push('x6')
				this.$store.state.zzz=false;
				this.$store.state.cent = '科幻小说';
				if(this.dian2.indexOf('科幻小说')!=-1){
					
				}else{
					this.dian2.push('科幻小说')
				}
			},go7(){
				this.ys7=true
				if(this.ys7==true){
					this.ys=false;
					this.ys3=false;
					this.ys4=false;
					this.ys5=false;
					this.ys6=false;
					this.ys2=false;
				}
				this.$router.push('x7')
				this.$store.state.zzz=false;
				this.$store.state.cent = '其他小说';
				if(this.dian2.indexOf('其他小说')!=-1){
					
				}else{
					this.dian2.push('其他小说')
				}
			}
		},computed:{
			dian2(){
				return this.$store.state.dian;
			}
		}
	}
</script>

<style>
	 .content .done{
		background:rgb(204,204,204);
	}
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
