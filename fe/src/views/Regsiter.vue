<template>
<div class="regsiter">
		<div>
			<div class="in1">
				<span>账号:</span> <input ref='uname'/>
			</div>
			
			<div class="in1">
				<span>密码:</span> <input ref='upass' type="password"/>
			</div>
			
			<div class="in1">
				<span>邮箱:</span> <input ref='uemall' />
			</div>
		</div>
	
	<div class="login_btn" @click="regsiter">确认注册</div>
	<div class="login_btn" @click='goLogin'>已有账号，点击登录</div>
	
</div>
</template>

<script>
	import axios from 'axios';
	
	export default{
		name: 'regsiter',
		data(){
			return {
				books:{
					book1:[{name:'我是至尊',auth:'风凌天下',pic:'xxx/jpg',des:'一万年后...'}]
				}
			}
		},
		methods:{
			regsiter(){
				let uname = this.$refs.uname.value;
				let upass = this.$refs.upass.value;
				let uemall = this.$refs.uemall.value;
				
				axios.post('/bqg/user',{
					name:this.$refs.uname.value,
					password: this.$refs.upass.value,
					emall: this.$refs.uemall.value,
					count: 500
				}).then((result)=>{
					console.log(result.data)
					if(result.data.ok){
						this.$router.push('login')
					}
				}).catch(console.error)
				
			},goLogin(){
				this.$router.push('login')
			}
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
