export default {
	path:'/movie',
	component:() => import('@/views/Movie'),
	// 电影中子路由
	children:[
		{
			path:'city',
			component:() =>import('@/components/City')
		},
		{
			path:'nowplaying',
			component:() =>import('@/components/NowPlaying')
		},
		{
			path:'comingsoon',
			component:() =>import('@/components/ComingSoon')
		},
		{
			path:'search',
			component:() =>import('@/components/Search')
		},
		// 重定项设置当找不到路由时默认跳转到movie页面
		{
			path:'/movie',
			redirect:'/movie/nowplaying'
		}
	]
}
