<template>
	<div>
	<div class="cover">
		<div v-for="book of lbzj">
			<p class="line">
				[修真小说]
				<a class="blue">{{ book.name }}</a>
				/{{ book.auth }}
			</p>
		</div>
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
	
	</div>
</template>

<script>
	import axios from "axios";
	
	export default{
		name: 'X2',
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
	
	
		
	
	#pageinput{
		border: gray .02rem solid;margin-right: 0.08rem;
	}
		.cover {
		width: 99%;
		margin:0.2rem auto 0.2rem auto;
		height:auto;
		overflow: hidden;
		font-size:0.32rem;
	}
	
	.cover p {
		text-indent: 0.16rem;
		font-size:0.32rem;
	}
	
	.line {
		border-bottom: 0.02rem solid #efefef;
		padding-bottom: 0.1rem;
		padding-top: 0.1rem;
		color: #999;
		font-size:0.36rem;
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
		padding-top:0.2rem;
		text-align: center;
		font-size:0.32rem;
	}

	.page a {
		text-align: center;
		padding:0.08rem 0.3rem 0.08rem 0.3rem;
		margin-right: 0.1rem;
		border-radius: 0.06rem;
		background:#2A7CE7;
		color: #fff;
	}
	
	
	input , textarea{
		font-size: 0.28rem;
		font-family: "微软雅黑";
	}
	
	
</style>
