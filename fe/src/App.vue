<template>
<div id="app">
	
	<div class="head" v-show="falg">
		<div class="logo">新笔趣阁</div>
		<div class="login">
			<div class="login-left" @click='login'>
				登录
			</div>
			<div class="login-right" @click='regsiter'>
				注册
			</div>
		</div>
	</div>
	<div class="head2" v-show="!falg">

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
        <img class="search-img" src="./img/search.png" alt="">
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
				falg: true,
				qvs:'',
				dian:[],
				fan:0,
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
		mounted(){
			this.$eventBus.$on("navShow",(data)=>{
				this.nav = data
			})
		},
		methods:{
			goRouter(name,ntext){
			    this.$router.push(name);
			    this.qvs = ntext;
			    this.falg=false;
			    this.dian.push(ntext);
			},
			 gohome(){
				 this.falg=true;
				this.$router.push('/');
				this.dian.pop();
			},
			goback(){
                this.$router.back();
                this.dian.pop();
                this.qvs = this.dian[this.dian.length-1];
			    if (this.fan==this.dian.length) {
			        this.falg=true;
			        this.dian=[];
			        this.fan=0;
			    }
				
			},
			login(){
				this.$router.push('login')
				this.falg=false;
				this.qvs="用户登录"
				this.dian.push("x");
            },regsiter(){
				this.falg=false;
				this.$router.push('/regsiter')
				this.qvs="会员注册"
				this.dian.push("x");
				
			},xiaoShi(){
				this.friuts='';
				
			},noxiaoShi(){
				this.friuts='输入书名后搜索，宁可少字不要错字';
			}
                

			
		}
	}

</script>


<style>
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
