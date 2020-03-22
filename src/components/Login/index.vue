<template>
	<div class="login_body">
		<div>
			<input type="text" placeholder="账户名/手机号/Email" class="login_text">
		</div>
		<div><input type="password" placeholder="请输入您的密码" class="login_text"></div>
		<div class="login_btn"><input type="submit" value="登录"></div>
		<div class="login_link"><a href="http://h5yjy.com/miaomiao/mine#">立即注册</a><a href="http://h5yjy.com/miaomiao/mine#">找回密码</a></div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
	}
</script>

<style scoped="scoped">
	#content1 .login_body {
		width: 100%;
		height:500px;
		margin-top: 50px;
	}

	.login_body .login_text {
		width: 100%;
		height: 40px;
		border: none;
		border-bottom: 1px solid #ccc;
		margin-bottom: 5px;
		outline: none;
		text-indent: 10px
	}

	.login_body .login_btn {
		height: 50px;
		margin: 10px
	}

	.login_body .login_btn input {
		width: 100%;
		height: 100%;
		background: #e54847;
		border-radius: 3px;
		border: none;
		display: block;
		color: #fff;
		font-size: 20px
	}

	.login_body .login_link {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between
	}

	.login_body .login_link a {
		text-decoration: none;
		margin: 0 5px;
		font-size: 12px;
		color: #e54847
	}
</style>
