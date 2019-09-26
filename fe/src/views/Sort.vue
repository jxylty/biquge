<template>
	
	<div>
	<div class="content">
		<ul>
			<li class="prev"><a>玄幻</a></li>
			<li class="prev"><a>仙侠</a></li>
			<li class="prev"><a>都市</a></li>
		</ul>
		<ul>
			<li class="prev"><a>历史</a></li>
			<li class="prev"><a>网游</a></li>
			<li class="prev"><a>科幻</a></li>
		</ul>
		<ul>
			<li class="prev"><a>其他</a></li>
		</ul>
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
		name: 'Sort'
	}
</script>

<style>
	.content {
		width:98%;
		margin-top: 0.2rem;
		color: #000;
	}
	
	.content ul {
		display: -webkit-box;
		margin-bottom: 0.2rem;
	}
	
	.content .prev {
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
		padding:0.2rem 0.1rem;
		background-color: #fff;
		color: #000;
		border: 0.02rem solid #efefef;
		font-size:0.33rem;
	}
	
	a{
		text-decoration: none;
	}
	
	
	.footer{
		height: 0.6rem;
		background: #ECF0F0;
		padding: 0.06rem 0 0;
		border-top:0.02rem solid #f1f1f1;
		line-height: 0.52rem;
		text-align: center;
		padding-top: 0.4rem;
		padding-bottom: 2.4rem;
	}
	
	.footer li{
		float:left;
		text-align: center;
		width: 33%;
		font-size: 0.32rem;
	}
	
	.footer li a{
		color: #000;
	}
	
	
</style>
