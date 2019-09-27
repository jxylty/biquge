<template>
  <div class="home">
     <div class="tj1">
         <div class="tj-top">
             封面推荐
         </div>
         <div class="tj-bottom" >
             <img src="../../public/img/1.jpg" alt="">
             <div class="js">
                 <h2 class="book">三寸人间</h2>
                 <p class="author">作者:耳根</p>
                 <p class="intro">举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。</p>
             </div>
         </div>
     </div>
     <div class="tj" v-for="book of books.book1">
         <div class="tj-top">
             {{book.type}}     <a class="tja" href="#">更多...</a>
         </div>
         <div class="tj-bottom">
             <img v-bind:src="book.pic" alt="">
             <div class="js">
                 <h2 class="book">{{book.name}}</h2>
                 <p class="author">作者:{{book.auth}}</p>
                 <p class="intro">{{book.des}}</p>
             </div>
         </div>
         <ul class="tj-ul">
             <li v-for="lib of book.books1.libs"><a href="#">{{lib.name}}</a>/{{lib.auth}}</li>
         </ul>
     </div>
  </div>
</template>

<script>



export default {
  name: 'home',
  data(){
      return{
          books:{
                    book1:
                    [
                    {name:'终极斗罗',auth:'唐家三少',pic:'img/2.jpg',des:'一万年后，冰化了。斗罗联邦科考队在极北之地科考时发现了一个有着金银双色花纹的蛋，用仪器探察之后，发现里面居然有生命体征，赶忙将其带回研究所进行孵化。蛋孵化出来了，可孵出来的却是一个婴儿，和人类一模一样的婴儿，一个蛋生的孩子。',type:'玄幻小说',
                        books1:{
                        libs:[{name:'伏天氏',auth:'净无痕'},{name:'仙武帝尊',auth:'六界三道'},{name:'人皇季',auth:'皇甫奇'},{name:'牧神记',auth:'宅猪'},{name:'元尊',auth:'天蚕土豆'}]
                        }},
                    {name:'遮天',auth:'辰东',pic:'img/3.jpg',des:'冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……登天路，踏歌行，弹指遮天。',type:'修真小说',
                        books1:{
                        libs:[{name:'诛仙',auth:'萧鼎'},{name:'三寸人间',auth:'耳根'},{name:'天下第九',auth:'鹅是第九'},{name:'九龙吞珠',auth:'齐家七哥'},{name:'执魔',auth:'我是墨水'}]
                        }},
                    {name:'最佳女婿',auth:'林羽江颜',pic:'img/4.jpg',des:'人死的时候会有意识吗？会，因为我经历过。这个世界上真的有鬼吗？有，因为，我就是。借体重生后，发现他有一个美到窒息的老婆，睡，还是不睡？',type:'都市小说',
                        books1:{
                        libs:[{name:'豪婿',auth:'绝人'},{name:'顶级神豪',auth:'北辰本尊'},{name:'捡漏',auth:'金元宝本尊'},{name:'5188',auth:'宅抚琴的人'},{name:'天降巨富',auth:'陆原居'}]
                        }},
                    {name:'民国谍影',auth:'寻青藤',pic:'img/5.jpg',des:'一个普通平凡的公务员，被一棵菩提树带回到了民国25年，被迫加入军统，凭借着前世的信息和菩提树的神奇力量，寻找地下组织，追查日本间谍，在波澜壮阔的大时代中为祖国，为民族的解放与复兴贡献着自己的一份力量，开始了他传奇的谍海生涯。',type:'穿越小说',
                        books1:{
                        libs:[{name:'庆余年',auth:'猫腻'},{name:'明朝败家子',auth:'上山打老虎额'},{name:'重生之老子是皇帝',auth:'贰蛋'},{name:'寒门崛起',auth:'朱门才尽'},{name:'三国打驯兽师',auth:'虎豹骑'}]
                        }},
                    {name:'九星毒奶',auth:'育',pic:'img/6.jpg',des:'这是一个充满了星力的平行世界。星图、星技、星宠、觉醒者大行其道。魂穿而来的江晓，体内蕴含着一张奇特的内视星图，成为一名稀有的医疗系觉醒者。    他本想成为一只快乐的大奶，但却被众人冠上了毒奶之名。这一切的故事，    从高中入学的前一周开始。 要从......那一巴掌开始说起......**沉重的故事写累了，写点轻松搞笑的。****已完结4本小说，500余万字，量大管饱，点击作者名观看，欢迎品读。**',type:'科幻小说',
                        books1:{
                        libs:[{name:'轮回乐园',auth:'那一只文子'},{name:'暗月纪元',auth:'仐三'},{name:'诸天投影',auth:'裴屠狗'},{name:'纵横诸天的武者',auth:'我叫排云掌'},{name:'诸天万界神龙系统',auth:'维斯特帕列'}]
                        }},
                    {name:'神医凰后',auth:'苏小暖',pic:'img/7.jpg',des:'她，21世纪王牌特工，被家族遗弃的天才少女；他，傲娇腹黑帝国太子，一怒天下变的至高王者；她扮猪吃虎坑他、虐他、刺激他、每次撩完就跑。是个男人就忍不了！他只能猎捕她，宠溺她，诱惑她为他倾心，谁知先动心的人却变成了他。—— 君临天下的少年，凤舞江山的少女，一场棋逢对手，势均力敌的爱情追逐游戏。',type:'其它小说',
                        books1:{
                        libs:[{name:'都市最强赘婿',auth:'小脚冰冷'},{name:'天唐锦绣',auth:'公子許'},{name:'女神的超级赘婿',auth:'黑夜的瞳'},{name:'重生小甜妻：老公，缠上瘾',auth:'简非白'},{name:'最豪赘婿',auth:'今何惜'}]
                        }},
                    ]
                },
      }
  },
  components: {
    
  },methods:{
	  // goxq(){
		 //  this.$router.push({
		 //  	name: 'login',
		 //  	params:{
		 //  		id: 123
		 //  	}
		 //  })
	  // }
  }
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .tj{
        width:7.5rem;
        height:6.12rem;
        margin-top:.2rem;
    }
    .tj1{
        width:7.5rem;
        height:3.44rem;
        margin-top:.2rem;
    }
    .tj-top{
        width:7.4rem;
        height:.72rem;
        font-size:.32rem;
        padding-left:.1rem;
        line-height:.72rem;
        background:#ECF0F0;
        border-bottom:0.02rem solid #007BB1;
    }
    .tj-bottom>img{
        float: left;
        margin-right:.2rem;
        width:1.6rem;
        height:2rem;
    }
    .tj-bottom{
        height:2.4rem;
        padding:.2rem .2rem 0rem .25rem
    }
    .tj-bottom>.js{
        width:5.2rem;
        height:2.4rem;
        float: left;
    }
    .book{
        width:5.2rem;
        height:.4rem;
        font-size:.32rem;
    }
    .author{
        width:5.2rem;
        height:.4rem;
        font-size:.3rem;
        color:#999;
    }
    .intro{
        width:5.2rem;
        height:1.2rem;
        font-size:.3rem;
        display: -webkit-box;
		-webkit-line-clamp:3;
		-webkit-box-orient: vertical;
		overflow: hidden
    }
    .tja{
        text-decoration:none;
        float:right;
        margin-right:.2rem;
    }
    .tja:link {
    color:#000;
    }
    .tja:visited {
    color:#000;
    }
    .tj-ul{
        height:2.4rem;
        padding:0rem .2rem 0rem .25rem;
        float: left;
    }
    .tj-ul>li{
        line-height:.5rem;
        font-size:.32rem;
        list-style:none;
        color:#999;
    }
    .tj-ul>li>a{
        float: left;
        font-size:.36rem;
        text-decoration:none;
    }
    .tj-ul>li>a:visited{
        color:rgba(104,178,209);
    }
</style>
