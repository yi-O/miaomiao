<template>
	<footer id="footer">
		<ul>
			<!-- router-link——》选项卡切换 -->
			<router-link tag="li" to="/movie" class=""><i class="iconfont icon-dianying"></i>
				<p>电影</p>
			</router-link>
			<router-link tag="li" to="/cinema" class=""><i class="iconfont icon-yingyuan"></i>
				<p>影院</p>
			</router-link>
			<router-link tag="li" to="/mine" class=""><i class="iconfont icon-wode"></i></i>
				<p>我的</p>
			</router-link>
			
		</ul>
	</footer>
	
</template>

<script>
	export default {
		name: 'TabBar'
	}
</script>

<style scoped>
	#footer {
		width: 100%;
		height: 50px;
		background: #fff;
		border-top: 2px solid #ebe8e3;
		position: fixed;
		left: 0;
		bottom: 0;
	}

	#footer ul {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		text-align: center;
		height: 50px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center
	}

	#footer ul li {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 40px;
	}

	#footer ul li.active {
		color: #f03d37;
	}

	#footer ul li.router-link-active {
		color: #f03d37;
	}

	#footer ul i {
		font-size: 20px;
	}

	#footer ul p {
		font-size: 12px;
		line-height: 18px;
	}
</style>
