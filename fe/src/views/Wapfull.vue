<template>
	<div>
	<div class="cover">
		<p class="line">
			[科幻小说]
			<a class="blue">末日之英雄悲歌</a>
			/醉言辞
		</p>
		<p class="line">
			[其他小说]
			<a class="blue">盛世书香</a>
			/阿琐
		</p>
	</div>
	
	<div class="page">
		<a>下页</a>
		<a>尾页</a>
	</div>
	
	<div class="page">
		输入页数
		<input id="pageinput" size="4" />
		<input type="button" value="跳转" onclick="page()" />
		<br>
		(第1/20页)当前20条/页
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
	export default{
		name:'wapfull'
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
