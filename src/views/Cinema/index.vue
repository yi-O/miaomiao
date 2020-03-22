<template>
	<div id="mian">
		<Header title="喵喵影院" />
		<div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i></div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i></div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i></div>
			</div>
		</div>
		<Clist/>
		<!-- //缓存 -->
		<keep-alive>
			<!-- //渲染 -->
			<router-view />
		</keep-alive>
		<TabBar />
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	import Clist from '@/components/Clist';
	export default {
		name: 'Cinema',
		components: {
			Header,
			TabBar,
			Clist
		}
	}
</script>

<style scoped="scoped">
	#content .cinema_menu {
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #e6e6e6;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		background: #fff;
		margin-top: 50px;
	}
</style>
