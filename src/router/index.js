// 路由
import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

// const router = new VueRouter({
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
		movieRouter,
		mineRouter,
		cinemaRouter,
		// 重定项设置当找不到路由时默认跳转到movie页面
		{
			path:'/*',
			redirect:'/movie'
		}
	]
})

// export default router
