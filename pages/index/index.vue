<template>
	<view class="content">
		<img class="logo" src="/static/yunlaitong.png" alt="">
		<view class="loginModal">
			<view class="login">
				<p style="font-size: 38upx;color: lightslategrey">用户登录</p>
				<van-cell-group>
  					<van-field @change="unameChange" label="用户名:" placeholder="请输入用户名"/>
					<van-field @change="upwdChange" label="密码:" type="password" placeholder="请输入密码"/>
					<van-button @click="checkLogin" type="primary" style="margin-top: 10upx;">登录</van-button>
		    	</van-cell-group>
			</view>
		</view>
		<!-- <button @click="login" open-type="getUserInfo">登录</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uname: "",
				upwd: ""
			}
		},
		onLoad() {

		},
		methods: {
			unameChange(event) {
				this.uname = event.detail
			},
			upwdChange(event) {
				this.upwd = event.detail
			},
			checkLogin() {
				let uname = this.uname,
					upwd = this.upwd;
				if (uname == '') {
					uni.showModal({
							showCancel: false,
    						title: '提示',
							content: '请填写用户名',
							success(res) {
							}
					});
					return;
				} else if(upwd == '') {
					uni.showModal({
							showCancel: false,
    						title: '提示',
							content: '请填写密码',
							success(res) {
							}
					});
					return;
				}
				// uni.request({
				// 	url: 'http://localhost:8088/weixiu/login/checkLogin.php',
				// 	data: {
				// 		uname,
				// 		upwd
				// 	},
				// 	success(res) {
				// 		// console.log(res.data);
				// 		if (res.data.code == 200) {
				// 			uni.redirectTo({
    			// 				url: '/pages/main/main'
				// 			});
				// 		} else {
				// 			uni.showModal({
				// 				showCancel: false,
    			// 				title: '提示',
				// 				content: '用户名密码错误!',
				// 				success(res) {
				// 				}
				// 			});
				// 			return;
				// 		}
				// 	}
				// })
				uni.redirectTo({
    				url: '/pages/main/main'
				});
			},
			login() {
				uni.login({
  					provider: 'weixin',
  					success: function (loginRes) {
    					// console.log(loginRes);
    					uni.getUserInfo({
      						provider: 'weixin',
      						success: function (infoRes) {
								// console.log('用户昵称为：' + infoRes.userInfo.nickName);
								console.log(infoRes);
      						}
    					});
  					}
				});
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 50upx;
	}

	template {
		background-color: bisque;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.loginModal {
		width: 90%;
		height: 400upx;
		margin: 20upx auto;
		border: 1upx solid lightslategrey;
	}
	.login {
		width: 520upx;
		margin: 40upx auto;
	}
</style>
