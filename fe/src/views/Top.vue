<template>
	
	<div class="box">
		<div class="content">
			<ul>
				<li  class="prev" @click="go1" ><a class="aa" >日点击榜</a></li>
				<li class="prev" @click="go2"><a class="aa" >周点击榜</a></li>
				<li class="prev" ><a  class="aa">月点击榜</a></li>
				
			</ul>
			<ul>
				<li class="prev"><a class="aa">总点击榜</a></li>
				<li class="prev"><a class="aa">总收藏榜</a></li>
				<li class="prev"><a class="aa">字数排行</a></li>
			</ul>
			<ul>
				<li class="prev"><a class="aa">日推荐榜</a></li>
				<li class="prev"><a class="aa">周推荐榜</a></li>
				<li class="prev"><a class="aa">月推荐榜</a></li>
			</ul>
			<ul>
				<li class="prev"><a class="aa">总推荐榜</a></li>
				<li class="prev"><a class="aa">最新入库</a></li>
				<li class="prev"><a class="aa">最近更新</a></li>
			</ul>
		</div>

		<router-view></router-view>

		<div class="cover">
			<div class="footer">
				<ul>
					<li><a>首页</a></li>
					<li><a>电脑版</a></li>
					<li><a>书架</a></li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		name:'top',
		data(){
			return {
				
			}
		},computed:{
			dian2(){
				return this.$store.state.dian;
			}
		},
		methods:{
			go1(e){
				bianse()
				e.target.style.background="lightgrey"
				this.$router.push('y1')
				this.$store.state.zzz=false;
				this.$store.state.cent= '玄幻小说';
				if(this.dian2.indexOf('玄幻小说')!=-1){
					
				}else{
					this.dian2.push('玄幻小说');  
				}
				
			},go2(e){
				
				bianse()
				e.target.style.background="lightgrey"
				this.$router.push('y2')
				this.$store.state.zzz=false;
				this.$store.state.cent= '玄幻小说';
				if(this.dian2.indexOf('玄幻小说')!=-1){
					
				}else{
					this.dian2.push('玄幻小说');  
				}
			}
		}
	}

	function bianse(event){
		var li= document.getElementsByClassName('aa');
		for(let i=0;i<li.length;i++){
			li[i].style.background='white'
		}
	}

</script>


<style>
	
	.content .done{
		background:rgb(204,204,204);
		/* background: lightgrey; */
	}
	.content{
		width:98%;
		margin-top:0.2rem;
		color: #000;
	}
	
	.content ul {
		display: -webkit-box;
		margin-bottom: 0.2rem;
	}
	
	.content .prev {
		text-align: left;
		margin-left: 0.14rem;
		background: lightgray;
		
	}
	/* .box .content .prev{
		color: red;
	} */
	
	.content li {
		-webkit-box-flex: 1;
	}
	li{
		list-style: none;
	}
	
	.prev a{
		display: block;
		text-align: center;
		padding: 0.2rem 0.1rem;
		background-color: #FFFFFF;
		color: #000000;
		border: 0.02rem solid #efefef;
	}
	
	.cover {
		width:99%;
		margin:0.2rem auto 0.2rem auto;
		height: auto;
		overflow: hidden;
	}
	
	.footer {
		height: 0.6rem;
		background: #ECF0F0;
		border-top: 0.02rem solid #F1F1F1;
		line-height: 0.52rem;
		text-align: center;
		padding-top: 0.4rem;
		padding-bottom: 2.4rem;
	}
	
	.footer li {
		float: left;
		text-align: center;
		width:33%;
		font-size:0.32rem;
	}
	
	.footer li a {
		color: #000;
	}
	
</style>