<template>
	<div class="books">
		 <div class="top1">会员中心-我的书架</div>
		 <div class="content">
			 <div class="c1"></div>
			 <div class="f1" v-for="book1 of book1" >
				 <div class="c1Left"> <img v-bind:src="book1.pic"></div>
				 <div class="c1C">
					 <div class="uname">{{ book1.name}}</div>
					<div class="auth"> 作者 : {{ book1.auth}}</div>
					<div class="zhuangt"> 更新到 : <span>{{ book1.new}}</span></div>
					<div class="jingdu"> 已读到 : {{ book1.old}}</div>
					<div class="del">删除</div>
				 </div>
			 </div>
		 </div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name: 'bookcase',
		data(){
			return {
				book1:[{
					pic: 'http://localhost:3000/2029s.jpg',
					name: '极品透视',
					auth: '极品'
					
				}]
			}
		},
		mounted(){
			let user= '';
			let parts = document.cookie.split('; ');
			for (let part of parts) {
			    if ('user' === part.split('=')[0]) {
			        
					user = part.split('=')[1]
			    }
			}
			
			axios.post('/bqg/bookcase',{
				name:user
			}).then((result)=>{
				console.log(result.data.result)
				this.book1 = result.data.result;
			}).catch((err)=>{
					console.log(err)
				})
		}
	}
</script>

<style scoped>
	.books{
		width: 100%;height: 100%;
	}
	.top1{
		font-size: .32rem;width: 100%;padding: 0.18rem 0;
		text-align: center;background: rgb(242,242,242);margin-top: .18rem;
	}
	.c1{
		width: 100%;background: rgb(59,168,222);height: .06rem;
		
	}
	.f1{
		height:2.5rem;
		padding: 0.01rem;
	}


	.c1Left{
		float: left;margin: 0.26rem .16rem 0rem .16rem;
		
	}
	.c1Left img{
		width: 1.56rem;height: 1.96rem;
	}
	.c1C{
		font-size: .26rem;color: #a8a8a8;height: 1.96rem;
		margin-top: .32rem;
	}
	.c1C .uname{
		font-size: .32rem;color: #000;font-weight: 800;
	}
	.c1C .auth,.c1C .zhuangt, .c1C .jingdu{
		margin-top: .15rem;
	}
	.zhuangt span{
		color: red;
	}
	.del{
		position: absolute;font-size: 0.26rem;border: .01rem solid red;
		color: red;padding: .10rem .2rem;border-radius:.08rem;
		left:6.1rem;top: 0;
	}
</style>
