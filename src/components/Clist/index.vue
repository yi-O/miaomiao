<template>
	<div class="cinema_body">
		<div class="wrapper">
			<ul>
				<li>
					<div><span>UA电影城（上海梅龙镇广场店）</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>静安区南京西路1038号梅龙镇广场10楼（近江宁路）</span><span>863.4km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>大地影院（大华乐购店）</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>宝山区大华路518号4楼（华润万家4楼）</span><span>858.7km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>AMG海上明珠影城（上海莘庄店）</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>闵行区沪闵路6088号莘庄凯德龙之梦购物中心4楼（近莘建路）</span><span>876.9km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>左岸国际电影城（松江沃尔玛店）</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>松江区松汇中路568号鹿都沃尔玛广场4楼（近庙前街）</span><span>888.8km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>嘉定影剧院</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>嘉定区城中路149号（城中路人民街）</span><span>846.7km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>万达影城（宝山万达广场店）</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>宝山区一二八纪念路936号5楼（万达广场2号门直达电梯可到）</span><span>852.8km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>大地影院（弘基广场店）</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>宝山区聚丰园路57弄3号弘基文化休闲广场1号楼商场3楼（近上海大学）</span><span>853.9km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>黄浦剧场</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>黄浦区北京东路780号（近贵州路）</span><span>862.3km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
					</div>
				</li>
				<li>
					<div><span>万达影城（江桥万达广场店）</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>嘉定区金沙江西路1075号江桥万达商业广场3楼（近金运路）</span><span>862.5km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
						<div class="or">小吃</div>
					</div>
				</li>
				<li>
					<div><span>新光影艺苑</span><span class="q"><span class="price"></span>
							元起</span></div>
					<div class="address"><span>黄浦区宁波路586号（近广西北路）</span><span>862.5km</span></div>
					<div class="card">
						<div class="bl">改签</div>
						<div class="bl">退</div>
						<div class="or">折扣卡</div>
					</div>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Clist'
	}
</script>

<style scoped>
	#content .cinema_body {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		overflow: auto
	}

	.cinema_body ul {
		padding: 20px
	}

	.cinema_body li {
		border-bottom: 1px solid #e6e6e6;
		margin-bottom: 20px
	}

	.cinema_body div {
		margin-bottom: 10px
	}

	.cinema_body .q {
		font-size: 11px;
		color: #f03d37
	}

	.cinema_body .price {
		font-size: 18px
	}

	.cinema_body .address {
		font-size: 13px;
		color: #666
	}

	.cinema_body .address span:nth-of-type(2) {
		float: right
	}

	.cinema_body .card {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex
	}

	.cinema_body .card div {
		padding: 0 3px;
		height: 15px;
		line-height: 15px;
		border-radius: 2px;
		color: #f90;
		border: 1px solid #f90;
		font-size: 13px;
		margin-right: 5px
	}

	.cinema_body .card div.or {
		color: #f90;
		border: 1px solid #f90
	}

	.cinema_body .card div.bl {
		color: #589daf;
		border: 1px solid #589daf
	}

	#content .cinema_menu[data-v-0ced7716] {
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
		background: #fff
	}
</style>
