<template>
<div id="app">
	
	<div class="head" v-show="allback">
		<div class="logo">新笔趣阁</div>
		
		<div v-if='isLogin2' class="login">
			<div class="login-left" @click='login2'>
				会员中心 
			</div>
			<div class="login-right" @click='regsiter2'>
				退出
			</div>
		</div>
		
		<div v-else class="login">
			<div class="login-left" @click='login'>
				登录
			</div>
			<div class="login-right" @click='regsiter'>
				注册
			</div>
		</div>
		
	</div>
	<div class="head2" v-show="!allback">

		<div class="back" @click="goback()">返回</div>
		<div class="qf">{{ qvs }}</div>
		<div class="toHome" @click="gohome">首页</div>
	</div>
	<div class="nav" v-if="nav">
			<ul>
				<li v-for="nav of navs" @click="goRouter(nav.name,nav.ntext)">  {{nav.text}}</li>
			</ul>
	</div>
     <div class="search" v-if="nav">
        <input v-model="friuts" @blur="noxiaoShi" @focus="xiaoShi" class="search-in" type="text" value="输入书名后搜索，宁可少字不要错字">
        <input type="button" class="search-on">
        <img @click="test" class="search-img" src="../public/img/search.png" alt="">
    </div> 
    
    <router-view/>
</div>
</template>

<script>
	export default{
		name: 'app',
		data(){
			return {
				friuts: '输入书名后搜索，宁可少字不要错字',
				nav: true,
				hy: true,
				isLogin2 : existCookie('token'),
				rout: true,
				// qvs:this.$store.state.cent,
				// dian:[],
				// fan:0,
				falg: true,
				navs: [{
					name: 'sort',
					text:'分类',
					ntext:'分类列表'
				},
				{
					name: 'top',
					text:'排行',
					ntext:'排行分类'
				},
				{
					name: 'wapfull',
					text:'全本',
					ntext:'完本小说'
				},
				{
					name: 'postdate',
					text: '新书',
					ntext:'最新入库'
				},
				{
					name:'bookcase',
					text: '书架',
					ntext:'我的书架'
				}
				]
			}
		},
		computed:{
			isLogin(){
				return existCookie('token')
				// this.isLogin2
			},
			allback(){
				return this.$store.state.zzz;
			},
			qvs(){
				return this.$store.state.cent;
			},
			tokenName(){
				return this.$store.state.tokenName;
			},
			dian2: {
				get(){
					return this.$store.state.dian;
				},
				set(val){
					this.$store.state.dian = val;
				}
			},
			fan2:{
				get(){
					return this.$store.state.fan;
				},
				set(val){
					this.$store.state.fan = val;
				}
			}
		},
		mounted(){
			this.$eventBus.$on("navShow",(data)=>{
				this.nav = data
			})
			
		},
		methods:{
			test(){
				console.log('tokename',this.$store.state.tokenName)
				let parts = document.cookie.split('; ');
				for (let part of parts) {
				    if ('tom' === part.split('=')[0]) {
				        console.log(part.split('=')[1])
				    }
				}
				this.isLogin2 = !this.isLogin2;
			},
			goRouter(name,ntext){
			    
			    this.$store.state.cent= ntext;
				this.falg = false;
			    this.$store.state.zzz= false;
				// console.log(this.$store.state.zzz)
				if(!this.rout){
					this.$router.push({
						name: 'login',
						params:{
							id: 123
						}
					});
					return ;
				}
				this.$router.push(name);
				if(this.dian2.indexOf(ntext)!=-1){
					
				}else{
					this.dian2.push(ntext);  
				}
				  
			},
			 gohome(){
				 this.$store.state.zzz=true;
				this.$router.push('/');
				this.dian2.pop();
			},
			goback(){
                this.$router.back();
                this.dian2.pop();
                this.$store.state.cent = this.dian2[this.dian2.length-1];
			    if (this.fan2==this.dian2.length) {
			        this.falg=true;
			        this.dian2=[];
			        this.fan2=0;
			    }
				if(this.dian2.length==0){
					this.$store.state.zzz=true;
				}
			},
			login(){
				this.$router.push('login')
				this.falg=false;
				this.$store.state.cent="用户登录"
				this.dian2.push("x");
            },regsiter(){
				this.falg=false;
				this.$router.push('/regsiter')
				this.$store.state.cent="会员注册"
				this.dian2.push("x");
				
			},xiaoShi(){
				this.friuts='';
				
			},noxiaoShi(){
				this.friuts='输入书名后搜索，宁可少字不要错字';
			},regsiter2(){
				this.$cookieStore.setCookie('token');
				this.$cookieStore.setCookie('user');
				console.log(this.tokenName)
			},login2(){
				this.$router.push('bookcase')
				
				// this.qvs="用户登录"
				this.dian2.push("x");
            }
                

			
		}
	}


		function existCookie(name) {
			        let parts = document.cookie.split('; ');
			        for (let part of parts) {
			            if (name === part.split('=')[0]) {
			                return true
			            }
			        }
			        return false;
			    }
</script>


<style scoped>
	#app{
		
		/* font-size: 20px; */
        width: 100%;height: 100%;
        
	}
	.head{
		
		height:1rem;background:rgba(0,125,178);
	}
	.head2{
		/* display: none; */
		line-height:.5rem;
		height:1rem;
        background:rgba(0,125,178);
	}
	.head2 > div{
		float: left;
	}
	.head2 .back{
        margin-top:.2rem;
        margin-left:.2rem;
        font-size: 0.28rem;
        color:white;
        text-align: center;
        border-radius:0.06rem;
        padding:.05rem .25rem .05rem .25rem;
        background:rgba(43,189,237);
        }
    .head2 .qf{
        font-size: 0.32rem;
        color:white;
        line-height:1rem;
        margin:0 1.85rem;
    }
	.head2 .toHome{
        margin-top:.2rem;
        margin-right:.2rem;
        font-size: 0.28rem;
        color:white;
        text-align: center;
        border-radius:0.06rem;
        padding-top:0.05rem;
        padding:.05rem .25rem .05rem .25rem;
        background:rgba(43,189,237);
        }
   .logo{
        float: left;
        font-size: 0.4rem;
        color:white;
        line-height:1rem;
        margin-left:.2rem;
		height: 1rem;
    }
    .login{
        float:right;height: 1rem;
        margin-right:.2rem
    }
    .login-left{
        float: left;
        padding: .1rem;
		margin-top: .18rem;
        border-radius:0.06rem ;
        font-size: 0.32rem;
        background:rgba(43,189,237);
        color:white;
    }
    .login-right{
        float: left;
        padding: .1rem;
        margin-left: .2rem;
        margin-top: .18rem;
        font-size: 0.32rem;
        background:rgba(43,189,237);border-radius:0.06rem ;
        color:white;
    }
	.nav{
		
		font-size: 0.32rem;
        height: 0.7rem;
		background: rgb(236,240,240);
        line-height: 0.7rem;
        margin-bottom:.2rem;
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
    .search {
            width: 7.30rem;
            height: .72rem;
            border: 1px solid #999;
            margin-left: .08rem;
        }
        
    .search-in {
            display: block;
            float: left;
            width: 5.92rem;
            height: .54rem;
            margin-top: .08rem;
            border: none;
			font-size: 0.32rem;color: #999;
        }
        
    .search-on {
            display: block;
            float: right;
            width: .72rem;
            height: .72rem;
            background:#0080C0;
        }
    .search-img{
        position: absolute;
        width:.5rem;
        right:.1rem;
        top:.1rem;
    }

</style>
