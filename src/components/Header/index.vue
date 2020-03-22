<template>
	<header id="header">
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
	export default{
		name:'Header',
		props:{
			title:{
				type:String,    //String——》"S"
				default:'喵喵电影'
			}
		}
	}
</script>

<style scoped="">
	/* scoped固定本部分样式阻止样式之间起冲突 */
	#header{
		width: 100%;
		height: 50px;
		color: #fff;
		background: #e54847;
		border-bottom: 1px solid #e54847;
		position: fixed;
		z-index:11111;
	}

	#header h1{
		font-size: 18px;
		text-align: center;
		line-height: 50px;
		font-weight: 400
	}

	#header i{
		position: absolute;
		left: 5px;
		top: 50%;
		margin-top: -13px;
		font-size: 26px
	}
</style>
