<template>
	<div class="movie_body">
		<div class="wrapper">
			<ul>
				<li class="pullDown"></li>
				<li>
					<div class="pic_show"><img src="/images/6664cd8c31f1254bc52793a158dc53ff8811971.jpg"></div>
					<div class="info_list">
						<h2>调酒师
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 刘挺,陆莹,张如意</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/6adbe9c365a3aaadfb65910bc279bf6a3385927.jpg"></div>
					<div class="info_list">
						<h2>沉香
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 朱仲春,尹航,梁靖晨</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/115273d73084aa4e54c3401f7457e9fa1185899.jpg"></div>
					<div class="info_list">
						<h2>站住！小偷
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 郑云,梁小龙,尤勇</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/5abd9fa1ab51da3ff81f52c97e6f9f7076364.jpg"></div>
					<div class="info_list">
						<h2>今生只为遇见你
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 田志斌,于苏桐,何海蓝</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/4e0d0e826fded46ec79e1e335b2482be52178.jpg"></div>
					<div class="info_list">
						<h2>北平会馆
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 吴大可,朱梓瑜,刘亦彤</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/31832c7a82d9db4921c55ceab5db30a91720579.jpg"></div>
					<div class="info_list">
						<h2>六人-泰坦尼克上的中国幸存者
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 詹姆斯·卡梅隆,施万克,方国民</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/81fe2197ef930c79624a28cc76c423835264620.png"></div>
					<div class="info_list">
						<h2>小公主艾薇拉与神秘王国2
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: </p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/1d2b4985d0187b437d41a73994ba2e191607376.jpg"></div>
					<div class="info_list">
						<h2>奇妙王国之魔法奇缘
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 卢瑶,张洋,陈新玥</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/174c45cf85694f065224ee38b29282903015976.jpg"></div>
					<div class="info_list">
						<h2>愤怒的心
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 吴琼,阳蕾,王之民</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
				<li>
					<div class="pic_show"><img src="/images/d3f2c33b95e10f54dc402de27bb4bdc11292214.jpg"></div>
					<div class="info_list">
						<h2>麦兜·饭宝奇兵
							<!---->
						</h2>
						<p>观众评 <span class="grade">0</span></p>
						<p>主演: 大汪,孙小妞,张正中</p>
						<p></p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NowPlaying'
	}
</script>

<style scoped>
	#content .movie_body {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		overflow: auto;
	}

	.movie_body ul {
		margin: 0 12px;
		overflow: hidden
	}

	.movie_body ul li {
		margin-top: 12px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		border-bottom: 1px solid #e6e6e6;
		padding-bottom: 10px
	}

	.movie_body .pic_show {
		width: 64px;
		height: 90px
	}

	.movie_body .pic_show img {
		width: 100%
	}

	.movie_body .info_list {
		margin-left: 10px;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		position: relative
	}

	.movie_body .info_list h2 {
		font-size: 17px;
		line-height: 24px;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}

	.movie_body .info_list p {
		font-size: 13px;
		color: #666;
		line-height: 22px;
		width: 200px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}

	.movie_body .info_list .grade {
		font-weight: 700;
		color: #faaf00;
		font-size: 15px
	}

	.movie_body .info_list img {
		width: 50px;
		position: absolute;
		right: 10px;
		top: 5px
	}

	.movie_body .btn_mall,
	.movie_body .btn_pre {
		width: 47px;
		height: 27px;
		line-height: 28px;
		text-align: center;
		background-color: #f03d37;
		color: #fff;
		border-radius: 4px;
		font-size: 12px;
		cursor: pointer
	}

	.movie_body .btn_pre {
		background-color: #3c9fe6
	}

	.movie_body .pullDown {
		margin: 0;
		padding: 0;
		border: none
	}
</style>
