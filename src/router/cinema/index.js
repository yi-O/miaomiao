export default{
	path:'/cinema',
	component:()=>import('@/views/Cinema'),
	// 电影中子路由
	children:[
		{
			path:'clist',
			component:() =>import('@/components/Clist')
		},
		// 重定项设置当找不到路由时默认跳转到cinema页面
		{
			path:'/cinema',
			redirect:'/cinema/clist'
		}
	]
}