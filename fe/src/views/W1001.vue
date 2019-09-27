<template>
	<div class="w1001">
        <div class="headtop">
            <div class="headtop-left" style="border: 0.02rem solid #DEDEDE">
            <img v-bind:src="book1.pic" alt="" >
            </div>
            <div class="headtop-rigth">
                <p class="b-name">{{book1.name}}</p>
                <p>作者:{{book1.auth}}</p>
                <p class="b-type">分类:{{book1.type}}</p>
                <p>{{book1.ztai}}</p>
                <p>{{book1.time}}</p>
                <p class="b-news">更新:{{book1.news}}</p>
            </div>
        </div>
        <div class="kj">
            <div class="ks">开始阅读</div>
            <div class="jr" @click='tianjia'>加入书架</div>
        </div>
        <div class='headbm'>
            <div class="inname">{{book1.name}}小说简介</div>
            <div class="indes">{{book1.des}}</div>
        </div>
        <div class='centers'>
            <div class="inname">{{book1.name}}最新章节&nbsp;&nbsp;&nbsp;更新时间:{{book1.time}}</div>
            <div class="centers-b">
                <ul>
                    <li v-for="v of newzj">{{v}} 都别动</li>
                   
                </ul>
            </div>
        </div>
        <div class='list'>
            <div class="list-inname">正文</div>
            <div class="listb">
                <ul>
                    <li v-for="v of lbzj">{{v}} 都别动</li>
                </ul>
            </div>
        </div>
        <div class="xz">
            <div class="xz-left" @click="back2">上一页</div>
            <div class="xz-middle">
                <select name="pageselect" id="">
                    <option value="/wapbook/10489.html" selected="selected">第1 - 20章</option>
                    <option value="/wapbook/10489-2/">第21 - 40章</option>
                    <option value="/wapbook/10489-3/">第41 - 60章</option>
                    <option value="/wapbook/10489-4/">第61 - 80章</option>
                    <option value="/wapbook/10489-5/">第81 - 100章</option>
                    <option value="/wapbook/10489-6/">第101 - 120章</option>
                    <option value="/wapbook/10489-7/">第121 - 140章</option>
                    <option value="/wapbook/10489-8/">第141 - 160章</option>
                    <option value="/wapbook/10489-9/">第161 - 180章</option>
                    <option value="/wapbook/10489-10/">第181 - 200章</option>
                    <option value="/wapbook/10489-11/">第201 - 220章</option>
                    <option value="/wapbook/10489-12/">第221 - 240章</option>
                    <option value="/wapbook/10489-13/">第241 - 260章</option>
                    <option value="/wapbook/10489-14/">第261 - 280章</option>
                    <option value="/wapbook/10489-15/">第281 - 300章</option>
                    <option value="/wapbook/10489-16/">第301 - 320章</option>
                    <option value="/wapbook/10489-17/">第321 - 340章</option>
                    <option value="/wapbook/10489-18/">第341 - 360章</option>
                    <option value="/wapbook/10489-19/">第361 - 380章</option>
                    <option value="/wapbook/10489-20/">第381 - 400章</option>
                    <option value="/wapbook/10489-21/">第401 - 420章</option>
                    <option value="/wapbook/10489-22/">第421 - 440章</option>
                    <option value="/wapbook/10489-23/">第441 - 460章</option>
                    <option value="/wapbook/10489-24/">第461 - 480章</option>
                    <option value="/wapbook/10489-25/">第481 - 500章</option>
                    <option value="/wapbook/10489-26/">第501 - 520章</option>
                    <option value="/wapbook/10489-27/">第521 - 540章</option>
                    <option value="/wapbook/10489-28/">第541 - 560章</option>
                    <option value="/wapbook/10489-29/">第561 - 580章</option>
                    <option value="/wapbook/10489-30/">第581 - 600章</option>
                    <option value="/wapbook/10489-31/">第601 - 620章</option>
                    <option value="/wapbook/10489-32/">第621 - 640章</option>
                    <option value="/wapbook/10489-33/">第641 - 660章</option>
                    <option value="/wapbook/10489-34/">第661 - 680章</option>
                    <option value="/wapbook/10489-35/">第681 - 700章</option>
                    <option value="/wapbook/10489-36/">第701 - 720章</option>
                    <option value="/wapbook/10489-37/">第721 - 740章</option>
                    <option value="/wapbook/10489-38/">第741 - 760章</option>
                </select>
            </div>
            <div class="xz-right" @click="next()">下一页</div>
        </div>
    </div>
</template>

<script>
   import axios from "axios";
	export default{
        name: 'w1001',
        data(){
            return{
				books: '',
				_id:'',
                book1:'',
                 zj: '',
                  newzj:'',
				  lbzj: '',
				  zero:0,
				  ten:10,
				  user: ''
            }
        },
        methods: {
            cl(){
                this.xx=!this.xx;
            }
        },
		mounted(){
			
			let parts = document.cookie.split('; ');
			for (let part of parts) {
			    if ('user' === part.split('=')[0]) {
			        
					this.user = part.split('=')[1]
			    }
			}
			
			
			this._id = this.$route.params.id;
			
			axios.post('/bqg/books',{
				id:this._id
			}).then((result)=>{
				// console.log(typeof result.data);
				// console.log(this._id)
				// console.log(result.data.name)
				
				for(var k in result.data){
					if(k==this._id)
					this.books = result.data[k]
				}
				console.log(this.books)
				this.book1 = this.books[0];
				this.zj = this.books[1];
				
				// this.book1 = result.data.this._id[0];
				// this.zj = result.data.this._id[1];
				this.lbzj = this.zj.slice(0,10)
				this.newzj = this.zj.slice(this.zj.length-5,this.zj.length).reverse()
				
			}).catch((err)=>{
					console.log(err)
				})
		},methods:{
			next(){
				this.zero += 10;
				this.ten += 10;
				this.lbzj = this.zj.slice(this.zero,this.ten);
			},back2(){
				this.zero -= 10;
				this.ten -= 10;
				this.lbzj = this.zj.slice(this.zero,this.ten);
			},tianjia(){
			axios.post('/bqg/tianjia',{
				user: this.user,
				name:this.book1.name,
				auth:this.book1.auth,
				pic: this.book1.pic,
				old: '无标签',
				new: this.lbzj[9]
			}).then((result)=>{
				console.log(result.data)
				
			}).catch((err)=>{
					console.log(err)
				})
		}
		}
	}
</script>

<style scoped>
    .kj .done{
        background:red;
    }
    .li{
        list-style:none;
    }
    .headtop{
        height:2.8rem;
        width:7.425rem;
        margin:.2rem 0rem 0rem .0rem
    }
    .headtop-left{
        float: left;
        border:0.01rem solid #000;
        width:2.08rem;
        height:2.58rem;
        margin-left:.2rem;
    }
    .headtop-left>img{
        margin:.11rem .15rem .15rem .11rem;
    }
    .headtop-rigth{
        float:right;
        height:2.6rem;
        width:4.8rem;
    }
    .headtop-rigth>p{
        font-size:.33rem;
        color:#999;
    }
    .headtop-rigth .b-name,.headtop-rigth .b-type,.headtop-rigth .b-news{
        color:#000
    }
    .kj{
        width:100%;
        height:1rem;
    }
    .kj>div{
        height:0.7rem;
        width:3.64rem;
        background:#65bbec;
        border-radius:.1rem;
        color:white;
        font-size:.4rem;
        text-align:center;
        padding-top:.1rem
    }
    .ks{
        float: left;
        margin-left:.05rem;
    }
    .jr{
        float:right;
        margin-right:.05rem;
    }
    /* .headbm{
        height:3.22rem;
    } */
    .inname{
        width:7.3rem;
        height:.52rem;
        font-size:.3rem;
        background: #ECF0F0;
        padding-left:.2rem;
        padding-top:.15rem;
    }
    .indes{
        padding-left:.2rem;
        font-size:.30rem;
        color:#999;
        padding-bottom:.3rem;
    }
    .centers-b>ul>li{
        font-size:.32rem;
        padding-left:.2rem;
        height: .8rem;
        line-height:.8rem;
        overflow: hidden;
        border-bottom:.02rem solid #999;
    }
    .list-inname{
        width:7.3rem;
        height:.52rem;
        font-size:.3rem;
        background: #ECF0F0;
        padding-left:.2rem;
        padding-top:.15rem;
    }
    .list-indes{
        padding-left:.2rem;
        font-size:.30rem;
        color:#999;
        padding-bottom:.3rem;
    }
    .listb>ul>li{
        font-size:.32rem;
        padding-left:.2rem;
        height: .8rem;
        line-height:.8rem;
        overflow: hidden;
        border-bottom:.02rem solid #999;
    }
    .xz-middle{
        float: left;
        border: none;
        color: #999;
        font-style: normal;
        height:.68rem;
        width:3.4rem;
        text-align:center;
        margin:.2rem .2rem .1rem .2rem; 
    }
    .xz-middle select{
        float: left;
        height:.68rem;
        width:3.4rem;
        font-size:.32rem;
    }
    .xz-middle select option{
        font-size:.15rem;
    }
    .xz-left{
        float: left;
        width:1.58rem;
        height:.58rem;
        border:.02rem solid #999;
        background:#cecece;
        font-size:.40rem;
        color: white;
        text-align:center;
        padding-top:.1rem;
        margin:.2rem 0rem .1rem .2rem;
    }
    .xz-right{
        float: left;
        width:1.58rem;
        height:.58rem;
        border:.02rem solid #999;
        background: #65bbec;
        font-size:.40rem;
        color:white;
        padding-top:.1rem;
        text-align:center;
        margin:.2rem .2rem .1rem 0rem;
    }
    .xz{
        float: left;
        padding-bottom:1rem;
    }
</style>
