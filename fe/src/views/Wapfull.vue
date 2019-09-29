<template>
	<div>
	<div class="cover">
		
		<div v-for="book of lbzj">
			<p class="line">
				[{{ book.type }}]
				<a class="blue">{{ book.name }}</a>
				/{{ book.auth }}
			</p>
		</div>
		
		
		<!-- <p class="line">
			[科幻小说]
			<a class="blue">末日之英雄悲歌</a>
			/醉言辞
		</p>
		<p class="line">
			[其他小说]
			<a class="blue">盛世书香</a>
			/阿琐
		</p> -->
	</div>
	
	<div class="page">
		<a  @click="back2()">上一页</a>
		<a @click="next()">下一页</a>
	</div>
	
	<div class="page">
		输入页数
		<input v-model="page" id="pageinput" size="4" />
		<input @click="search" type="button" value="跳转"  />
		<br>
		(第1/10页)当前20条/页
	</div>
	
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
	import axios from "axios";
	
	export default{
		name: 'wapfull',
		data(){
			return {
				page:'',
				books:[],
				lbzj:[],
				zero:0,
				ten: 10
			}
		},
		mounted() {
			axios.post('/bqg/books',{
				id:'huanhuan'
			}).then((result)=>{	
				this.books = result.data.xuanhuan;
			this.lbzj = this.books.slice(0,10)
			// console.log(22,this.this.books)
				
			}).catch((err)=>{
					console.log(err)
				})
		},methods:{
			next(){
				this.zero += 10;
				this.ten += 10;
				this.lbzj = this.books.slice(this.zero,this.ten);
			},back2(){
				this.zero -= 10;
				this.ten -= 10;
				this.lbzj = this.books.slice(this.zero,this.ten);
			},
			search(){
				let star = this.ten * this.page-10;
				let end = this.ten * this.page;
				this.lbzj = this.books.slice(star,end);
				console.log(star,end)
				console.log(this.lbzj)
			}
		}
		}
	
	
	
</script>

<style>
	.cover {
		width:98%;
		margin:0.2rem auto 0.2rem auto;
		height:auto;
		overflow: hidden;
	}
	
	.cover p {
		text-indent: 0.16rem;
	}
	
	.line {
		border-bottom:0.02rem solid #efefef;
		padding-bottom: 0.1rem;
		padding-top: 0.1rem;
		color: #999;
	}
	
	.blue {
		color: #007BB1;
		font-size: 0.36rem;
	}
	
	a {
		text-decoration: none;
	}
	
	.page {
		height: auto;
		padding-bottom: 0.2rem;
		padding-top: 0.2rem;
		text-align: center;
	}
	
	.page a {
		text-align: center;
		padding:0.08rem 0.3rem 0.08rem 0.3rem;
		margin-right: 0.1rem;
		border-radius: 0.06rem;
		background:#2A7CE7;
		color: #fff;
	}
	
	input, textarea {
		font-size: 0.24rem;
		font-family: "微软雅黑";
	}
	
	.footer {
		height: 0.6rem;
		background: #ECF0F0;
		padding: 0.06rem 0 0;
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
		font-size: 0.32rem;
	}
	
	li{
		list-style: none;
	}
	
	.footer li a {
		color: #000;
	}
</style>
