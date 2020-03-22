<template>
	<div id="mian">
		<Header title="喵喵电影" />
		<div id="content">
			<div class="movie_menu">
				<router-link tag="div" to='/movie/City' class="city_name"><span>成都</span><i class="iconfont icon-lower-triangle"></i></router-link>
				<div class="hot_swtich">
					<router-link tag="div" to='/movie/NowPlaying' class="hot_item ">正在热映</router-link>
					<router-link tag="div" to='/movie/ComingSoon' class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/Search" class="search_entry"><i class="iconfont icon-sousuo"></i></router-link>
			</div>
		</div>
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
	export default {
		name: 'Movie',
		components: {
			Header,
			TabBar
		}
	}
</script>

<style scoped>
	#content .movie_menu {
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #e6e6e6;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		background: #fff;
		z-index: 1;
		position: fixed;
		top: 50px;
	}

	.movie_menu .city_name {
		margin-left: 20px;
		height: 100%;
		line-height: 45px
	}

	.movie_menu .city_name.active,
	.movie_menu .city_name.router-link-active {
		color: #ef4238;
		border-bottom: 2px solid #ef4238
	}

	.movie_menu .hot_swtich {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		height: 100%;
		line-height: 45px
	}

	.movie_menu .hot_item {
		font-size: 15px;
		color: #666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700
	}

	.movie_menu .hot_item.active {
		color: #ef4238;
		border-bottom: 2px solid #ef4238
	}

	.movie_menu .hot_item.router-link-active {
		color: #ef4238;
		border-bottom: 2px solid #ef4238
	}

	.movie_menu .search_entry {
		margin-right: 20px;
		height: 100%;
		line-height: 45px
	}

	.movie_menu .search_entry.active,
	.movie_menu .search_entry.router-link-active {
		color: #ef4238;
		border-bottom: 2px solid #ef4238
	}

	.movie_menu .search_entry i {
		font-size: 24px;
		color: red
	}
</style>
