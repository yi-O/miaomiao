<template>
	
	<div class="search_body">
		<div class="search_input">
			<div class="search_input_wrapper">
				<i class="iconfont icon-sousuo"></i>
				<input type="text">
			</div>
		</div>
		<div class="search_result">
			<h3>电影/电视剧/综艺</h3>
			<ul></ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Search'
	}
</script>

<style scoped>
	#content .movie_menu{
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
		z-index: 10
	}

	.movie_menu .city_name{
		margin-left: 20px;
		height: 100%;
		line-height: 45px
	}

	.movie_menu .city_name.active,
	.movie_menu .city_name.router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #ef4238
	}

	.movie_menu .hot_swtich{
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		height: 100%;
		line-height: 45px
	}

	.movie_menu .hot_item{
		font-size: 15px;
		color: #666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700
	}

	.movie_menu .hot_item.active,
	.movie_menu .hot_item.router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #ef4238
	}

	.movie_menu .search_entry{
		margin-right: 20px;
		height: 100%;
		line-height: 45px
	}

	.movie_menu .search_entry.active,
	.movie_menu .search_entry.router-link-active{
		color: #ef4238;
		border-bottom: 2px solid #ef4238
	}

	.movie_menu .search_entry i{
		font-size: 24px;
		color: red
	}

	.slide-enter-active{
		-webkit-animation: detailMove-data-v-717db445 13s;
		animation: detailMove-data-v-717db445 13s
	}

	@-webkit-keyframes detailMove-data-v-717db445 {
		0% {
			-webkit-transform: translateX(100%);
			transform: translateX(100%)
		}

		to {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
	}

	@keyframes detailMove-data-v-717db445 {
		0% {
			-webkit-transform: translateX(100%);
			transform: translateX(100%)
		}

		to {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
	}

	#content .search_body {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		overflow: auto
	}

	.search_body .search_input {
		padding: 8px 10px;
		background-color: #f5f5f5;
		border-bottom: 1px solid #e5e5e5
	}

	.search_body .search_input_wrapper {
		padding: 0 10px;
		border: 1px solid #e6e6e6;
		border-radius: 5px;
		background-color: #fff;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		line-height: 20px
	}

	.search_body .search_input_wrapper i {
		font-size: 16px;
		padding: 4px 0
	}

	.search_body .search_input_wrapper input {
		border: none;
		font-size: 13px;
		color: #333;
		padding: 4px 0;
		outline: none;
		margin-left: 5px;
		width: 100%
	}

	.search_body .search_result h3 {
		font-size: 15px;
		color: #999;
		padding: 9px 15px;
		border-bottom: 1px solid #e6e6e6
	}

	.search_body .search_result li {
		border-bottom: 1px dashed #c9c9c9;
		padding: 10px 15px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex
	}

	.search_body .search_result .img {
		width: 60px;
		float: left
	}

	.search_body .search_result .img img {
		width: 100%
	}

	.search_body .search_result .info {
		float: left;
		margin-left: 15px;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1
	}

	.search_body .search_result .info p {
		height: 22px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		line-height: 22px;
		font-size: 12px
	}

	.search_body .search_result .info p:first-of-type span:first-of-type {
		font-size: 18px;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1
	}

	.search_body .search_result .info p:first-of-type span:nth-of-type(2) {
		font-size: 16px;
		color: #fc7103
	}
</style>
