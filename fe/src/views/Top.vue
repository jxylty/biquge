<template>
	
	<div>
	<div class="content">
		<ul>
			<li class="prev"><a>日点击榜</a></li>
			<li class="prev"><a>周点击榜</a></li>
			<li class="prev"><a>月点击榜</a></li>
		</ul>
		<ul>
			<li class="prev"><a>总点击榜</a></li>
			<li class="prev"><a>总收藏榜</a></li>
			<li class="prev"><a>字数排行</a></li>
		</ul>
		<ul>
			<li class="prev"><a>日推荐榜</a></li>
			<li class="prev"><a>周推荐榜</a></li>
			<li class="prev"><a>月推荐榜</a></li>
		</ul>
		<ul>
			<li class="prev"><a>总推荐榜</a></li>
			<li class="prev"><a>最新入库</a></li>
			<li class="prev"><a>最近更新</a></li>
		</ul>
	</div>

	<div class="cover">
		<div class="footer">
			<ul>
				<li><a>首页</a></li>
				<li><a>电脑版</a></li>
				<li><a>书架</a></li>
			</ul>
		</div>
	</div>

	</div>
</template>

<script>
	

</script>


<style>
	.content{
		width:98%;
		margin-top:0.2rem;
		color: #000;
	}
	
	.content ul {
		display: -webkit-box;
		margin-bottom: 0.2rem;
	}
	
	.content prev {
		text-align: left;
		margin-left: 0.14rem;
	}
	
	.content li {
		-webkit-box-flex: 1;
	}
	li{
		list-style: none;
	}
	
	.prev a{
		display: block;
		text-align: center;
		padding: 0.2rem 0.1rem;
		background-color: #FFFFFF;
		color: #000000;
		border: 0.02rem solid #efefef;
	}
	
	.cover {
		width:99%;
		margin:0.2rem auto 0.2rem auto;
		height: auto;
		overflow: hidden;
	}
	
	.footer {
		height: 0.6rem;
		background: #ECF0F0;
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
		font-size:0.32rem;
	}
	
	.footer li a {
		color: #000;
	}
	
</style>