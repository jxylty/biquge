<template>
	<div>
	<div class="cover">
		<p class="line">
			[玄幻小说]
			<a class="blue">盖世青帝</a>
			/山雨苍茫
		</p>
		<p class="line">
			[玄幻小说]
			<a class="blue">山沟皇帝</a>
			/雨天下雨
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
		(第1/10页)当前20条/页
	</div>
	
	</div>
</template>

<script>
	export default{
		name: 'X1'
		}
</script>

<style>
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
