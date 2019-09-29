<template>
	<div class="w1001text">
		<div class="top">
            <div class="ziti">
                <div class="zt">字</div>
                <div :class="{done:ys}" @click="gb" class="da">大</div>
                <div :class="{done:ys2}" @click="gb2" class="zhong">中</div>
                <div :class="{done:ys3}" @click="gb3" class="xiao">小</div>
            </div>
            <dir class="gn">
                <div :class="{donel:yy}" @click="gb4" class="hy">护眼</div>
                <div @click="gb5" class="gd">{{gb51}}</div>
            </dir>
        </div>
         <div class="zwxz">
                <div class="zwxz-left" @click="goleft('name')">上一章</div>
                <div class="zwxz-center" @click="goback">回目录</div>
                <div class="zwxz-right" @click="goright('name')">下一章</div>
                <div class="zwxz-book" @click="goxq('name')">进书架</div>
        </div>
        <div class="zw">
            <div v-html="text"></div>
            
        </div>
        <div class="zwxz">
                <div class="zwxz-left" @click="goleft('name')">上一章</div>
                <div class="zwxz-center" @click="goback">回目录</div>
                <div class="zwxz-right" @click="goright('name')">下一章</div>
                <div class="zwxz-book" @click="goxq('name')">进书架</div>
        </div>
    </div>
	</div>
</template>

<script>
	export default{
        name:'w1001text',
        data() {
            return {
                ys:false,
                ys2:false,
                ys3:false,
                yy:false,
                f1:true,
                text:`&nbsp;&nbsp;&nbsp;&nbsp;亲爱的读者大大们，说心里话，我现在心里既激动，又难过。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;激动的是，你们又可以登上我的小车，在我这个粉嫩帅气00后司机的行驶中，带你们去体验故事里的跌宕起伏，惊心动魄。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;至于难过的是……我的假期没了……我的心好痛，需要安慰。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;不过我也休息够了，感觉全身上下都精力充沛，充满了码字的力量，很多时候一想到新书，就不吐不快。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;更是想念我最最最最亲爱的读者小哥哥，读者小姐姐们，来，抱一下吧。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;然后再向大家汇报一下这几个月我的生活，假期这段时间，我是拼了老命减肥，现在看到镜子里的自己，我都觉得，天啊，此人好帅，他是谁……
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;咳咳，你们想知道我的独门减肥秘诀么？
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;同时，这段日子，我在休息之余，也在完善新书的思路，新书对我来说，是一次很大很大的挑战，我始终在考虑，仙侠小说如何能开出不同的花朵。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;我曾经在之前的多本书里，加入了很多元素，也取得了一些成绩，可心里总是觉得，有些不大满意，我认为仙侠小说，是可以写出更好，更精彩，甚至不同背景的故事。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;背景这两个字，请大家划重点……
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;现在已经准备很充分了，这一次的新书，我觉得很满意，尤其是故事里的主人公，你们明天就会知道，他是如何的与众不同……
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;也会明白，我为了这本书，付出了多大的努力与辛酸，现在想想，为了写这本书，我真是拼了老命啊。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;友情提醒，明天开始，出现高能，请大家系好安全带……
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;我们，明天中午12点，见！
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;最后，一念永恒的外传，我之前是发在了公众微信号里，有读者没看过，我在下面发一下。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;差点忘了喊一句，求收藏啊！！！！减肥秘诀换收藏！！！！！
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;####
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;岁月悠悠，一晃而过。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;永恒灵界星光璀璨，一百零八万族群繁荣昌盛，一代代强者辈出，太古也好，主宰也罢，纷纷如雨后春笋一般，在各自的时代里，成为明亮的而星辰。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;尤其是永恒仙域，更是这无尽星辰中最特殊，也是最明亮的一颗。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;白小纯的故事，已经化作了传说，随着多年后他带着亲人朋友离开了永恒仙域，他曾经的往事，在这永恒灵界内已然成为了神话，哪怕多年过去，也依旧时常别人提起，那一段时光的辉煌，似乎从某种程度上，就已经代表了永恒灵界巅峰的历史。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;没有人知道白小纯去了什么地方，只能从一些当年魁皇朝留下的典籍里找到一些蛛丝马迹，似乎当年的记录者，隐隐的告诉世人，白小纯以及他的亲人，朋友，去了一个没有人知道的地方，在那里过着幸福快乐的生活。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;这段典籍里的内容，被世人认可，接受，在整个永恒灵界内，哪怕到了现在，也都还是被所有人这么认为。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;同时每一代，都有修士试图去寻找白小纯，试图去追寻当年的历史，去亲眼看一看，曾经的最强者。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;只是无论是谁，都无法找到白小纯以及他亲人朋友的痕迹。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;此刻，在永恒灵界之外，那是一片苍茫的星空，存在了无尽的雾气，看不清太远，只能看到在那星空的尘雾内，隐隐有一个身影，正一脸感慨，甚至还带着一些激动，飞速前行。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“我终于……终于逃出来了！！”这身影看起来是个青年，白白嫩嫩，穿着一身白袍，此刻似很振奋，就仿佛从笼子里飞出，拥抱了自由的小鸟……
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“她们太过分了，我就是太实在，太老实了，不然怎么会被这么欺负！”这青年长叹一声，只是他虽看似白嫩，可目中的机灵，使得他看起来虽不是蔫坏，可也绝对不是一个老实人。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;此人，正是白小纯。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;在典籍里，当年他居住在永恒仙域一段岁月后，带着亲人朋友离去，过着幸福快乐的生活，实际上虽也是如此，可时间长了后，白小纯的性子，他有些受不了，尤其是宋君婉、周紫陌、侯小妹、公孙婉儿还有杜凌菲众女对他这里，看管之严，已经到了让白小纯觉得发指的程度……
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“她们不让任何女子和我说话，更不让我一个人外出，居然说我走到哪里，就会祸害到哪里，担心我将家里都祸害崩溃了……这也罢了，就连炼丹，也都不允许！”
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“我白小纯是那种人么！”
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“不让我和女子说话可以，不让我出去玩我也忍了，不让我炼丹我也戒了，可都老夫老妻了，她们居然还时而争吵，尤其是还哄不好，讲不出道理，一个架能抄一千年……”白小纯愤愤，一想到宋君婉等人争论一件事情未果，全部看向自己，让自己选择谁对时的目光，白小纯就要抓狂。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“还是逃出来清净啊……趁着大年三十，她们都在忙，我赶紧逃出去溜达溜达。”白小纯感慨中，飞速前行，他已经想好了，这一次出来，一定要好好散散心。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;感慨中，白小纯速度飞快，每一步落下，都是跨越时空，他的目标已经选好，正是小乌龟的来源之地，未央道域。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;可就在他要踏入未央道域的瞬间，白小纯忽然神色一动，看向右侧，似在那苍茫雾气里，有所发现。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“第四步的气息……不对，这上面还有第五步的道韵！”白小纯眨了眨眼，右手抬起在那苍茫中一抓，瞬间就有一道长虹从雾气内刹那飞来，直接就落在了白小纯的手中。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;那是一个瓶子，准确说的，是一个漂流瓶。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;在这苍茫星空内，不知漂流了多久，直至方才白小纯路过时察觉，将其取来。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“有点意思。”白小纯眨了眨眼，看着手中的漂流瓶，打开后仔细一看，发现里面居然有一张纸条。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;带着好奇，白小纯将这纸条取出，打开一看，顿时乐了。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“这是谁写的啊，要成为有钱人？”白小纯正笑时，忽然神色一动，只见这纸条上竟有一丝丝因果升起，好似要与白小纯连在一起的样子。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;这一幕，让白小纯眼睛睁大，左手掐诀立刻斩断因果。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“这家伙太坏了啊，这是谁啊，他的道居然蕴含了因果，只要碰到这纸条，就会无形之中如给他写下欠条一般，在因果上欠他钱！！”白小纯神色古怪，看了看纸条后，哼了一声。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“想钱想疯了啊！”嘀咕了一句后，白小纯索性大手一挥，在这纸条上，用自己的道，在那句发财字迹的后面，添加了一句。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“发财有什么好的，长生才是最重要的！我要长生！”
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;写完后，正要塞入漂流瓶内，白小纯忽然犹豫了一下，重新打开纸条，在自己那句后面，又加了一句。
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“只找一个道侣！”
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;做完这些，白小纯心满意足，想着以后若是还有人看到这个漂流瓶，听从自己规劝的样子，他就觉得自己也算是将人生经历告诉了后来者，小袖一甩，将这漂流瓶扔入苍茫后，身体一晃，带着得意，直奔未央道域！
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;“有机会遇到那个穷疯了的家伙，一定要好好和他理论一下！居然敢让我欠他钱？我送他一嘴发情致幻丹！”
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;#####
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;再喊一句，求收藏啊！！！！减肥秘诀换收藏！！！！`
            }
        },
        methods: {
            gb(){
                this.ys=true;
                if(this.ys==true){
                  this.ys2=false;
                  this.ys3=false;
                }
                cls1()
            },
            gb2(){
                this.ys2=true;
                if(this.ys2==true){
                  this.ys=false;
                  this.ys3=false;
                }
                cls2()
            },
            gb3(){
                this.ys3=true;
                if(this.ys3==true){
                  this.ys2=false;
                  this.ys=false;
                }
                cls3()
            },
            gb4(){
                this.yy=!this.yy;
                if(this.yy===true){
                    this.f1=false;
                }else{
                    this.f1=true;
                }
                cls4()
            },
            gb5(){
                this.f1=!this.f1;
                if(this.f1===true){
                    this.yy=false;
                }else{
                    this.yy=true;
                }
                cls5()
            },
            goback(){
                this.$router.back();
            },
            goxq(id){
                this.$router.push({
                    name: 'bookcase',
                    params:{
                        id: id
                    }
                })
            },
            goright(id){
                this.$router.push({
                    name: 'w1002text',
                    params:{
                        id: id
                    }
                })
            },
            goleft(id){
                this.$router.push({
                    name: 'w1001',
                    params:{
                        id: id
                    }
                })
	        },
        },
        computed:{
            gb51(){
                if(this.f1){
                    return '关灯'
                }else{
                    return '开灯'
                }
            },
        },
    }
    function cls1(){
       var zw=document.getElementsByClassName("zw")[0];
       zw.style.fontSize='.48rem';
    }
    function cls2(){
       var zw=document.getElementsByClassName("zw")[0];
       zw.style.fontSize='.40rem';
    }
    function cls3(){
       var zw=document.getElementsByClassName("zw")[0];
       zw.style.fontSize='.32rem';
    }
    function cls4(){
       var zwxz=document.getElementsByClassName("zwxz")[0];
       var zw=document.getElementsByClassName("zw")[0];
       var w=document.getElementsByClassName('w1001text')[0]
       console.log(zw.style);
       if (zw.style.background === '') {
           zw.style.background = '#cce2bf';
           zwxz.style.background='#d0e0c7';
            w.style.background='#cce2bf';
       } else {
           zw.style.background='';
           zwxz.style.background='';
           w.style.background='';
       }
    }
    function cls5(){
       var zwxz=document.getElementsByClassName("zwxz")[0];
       var zw=document.getElementsByClassName("zw")[0];
       var w=document.getElementsByClassName('w1001text')[0]
       console.log(zw.style);
       if (zw.style.background === '') {
           zw.style.background = '#3e4245';
           zwxz.style.background='#3e4245';
           w.style.background='#3e4245';
           console.log(w)
           zw.style.color='#999999'
       } else {
           w.style.background="",
           zw.style.background='';
           zwxz.style.background='';
           zw.style.color='#000'
       }
    }
</script>

<style scoped>
    .zw{
        font-size:.48rem;
        background:#FBF6EC;
        float: left;
    }
    .done{
        background:gray;
    }
    .donel{
        background:gray;
    }
    .top{
        font-size:.26rem;
        color:#0065B5;
        height:.9rem;
        background:#ececec;
    }
    .gd,.hy{
        float: left;
        border:0.02rem solid #0065B5;
        padding: 0.06rem 0.1rem;
        margin-left: 8px;
        border-radius:.1rem;
        color: #0065B5;
    }
    .zt,.da,.zhong,.xiao{
        border: 0.02rem solid #0065B5;
        float: left;
        padding: 0.06rem 0.1rem;
        margin-left:.1rem;
        border-radius:.06rem;
        color: #0065B5;
    }
    .ziti{
        float: left;
        margin-top:.2rem;
    }
    .gn{
        float: right;
        margin-top:.2rem;
        margin-right:.2rem;
    }
    .zwxz{
        float: left;
        font-size:.36rem;
        height:.84rem;
        width:7.3rem;
        border:0.02rem solid #999;
        background:rgb(244, 240, 233);
        margin:.2rem 0 .2rem .08rem;
        color:green;
        text-align:center;
    }
    .zwxz-left{
        float: left;
        height:.84rem;
        width:1.82rem;
        line-height:.84rem;
    }
    .zwxz-center{
        float: left;
        height:.84rem;
        width:1.8rem;
        border-left:0.02rem solid #999;
        line-height:.84rem;
    }
    .zwxz-right{
        float: left;
        height:.84rem;
        width:1.8rem;
        border-left:0.02rem solid #999;
        line-height:.84rem;
    }
    .zwxz-book{
        float: left;
        height:.84rem;
        width:1.8rem;
        border-left:0.02rem solid #999;
        line-height:.84rem;
    }
    .w1001text{
        width:100%;
        height:100%;
    }
</style>