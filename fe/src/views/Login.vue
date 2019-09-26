<template>
<div class="login">
		<div>
			<div class="in1">
				<span>账号:</span> <input ref='uname'/>
			</div>
			
			<div class="in1">
				<span>密码:</span> <input ref='upass' type="password"/>
			</div>
			
		</div>
	
	<div class="login_btn" @click="login">登录</div>
	<div class="login_btn" @click="goRegsiter" 没有账号，点击登录</div>
	
</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name: 'login',
		data(){
			return {
				books:{
					        book1:[{ name:'三寸人间',auth:'耳根',type:'玄幻小说',id:10488,pic:'../img/1.jpg',des:'举头三永间。'},
							{name:'终极斗罗',auth:'唐家三少',type:'玄幻小说',id:10489,pic:'../img/2.jpg',des:'之地'}],
					        
						}
				}
			},
			
		methods:{
			login(){
				let uname = this.$refs.uname.value;
				let upass = this.$refs.upass.value;
				// name:this.$refs.uname.value,
				// password: this.$refs.upass.value
				
				axios.post('/bqg/login',{
					name: uname,
					password: upass
				}).then((result)=>{
					
					if(result.data==1){
						this.$router.push('/')
					}
				}).catch(console.error)
				
			},goRegsiter(){
				this.$router.push('regsiter')
			}
		},
		mounted(){
			console.log(this.$route) 
		}
	}
	
</script>

<style scoped>
	.in1 {
		height: 1.28rem;line-height: 1.28rem;
		color: #999;font-size: .32rem;margin-left: 0.2rem;
	}
	.in1 > div{
		font-size: 0.32rem;
	}
	.in1 input{
		width:5.76rem;height:0.5rem;
		border: .02rem solid #B7F3F9;
		position: absolute;left: 0.01rem;
		left: .9rem;top: .4rem;font-size: 0.24rem;
		font-family: "微软雅黑";
	}
	.login_btn{
		width: 7.1rem;height: 0.8rem;line-height: .8rem;
		font-size: 0.36rem;color: #fff;
		background: #0080C0;text-align: center;
		margin-left: 0.2rem;margin-top: 0.4rem;
	}
</style>
