<template>
    <view class="content">
        <view class="logout"><p>系统退出</p></view>
        <view class="main">
            <view class="server" @click="turnFind">
                <p><img style="width: 150upx;height: 150upx;" src="/static/yunlaitong.png" alt=""></p>
                <p class="introduce">设备查询</p>
            </view>
            <view class="server" @click="turnOrder">
                <p><img style="width: 150upx;height: 150upx;" src="/static/yunlaitong.png" alt=""></p>
                <p class="introduce">我的工单</p>
            </view>
            <view class="server" @click="turnInform">
                <p><img style="width: 150upx;height: 150upx;" src="/static/yunlaitong.png" alt=""></p>
                <p class="introduce">服务通知单</p>
            </view>
            <view class="server" @click="turnResults">
                <p><img style="width: 150upx;height: 150upx;" src="/static/yunlaitong.png" alt=""></p>
                <p class="introduce">维修结果</p>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        // 跳转至设备查询页面
        turnFind() {
            uni.navigateTo({
                url: '/pages/main/equipmentquery'
            })
        },
        // 跳转至我的工单页面
        turnOrder() {
            uni.navigateTo({
                url: '/pages/main/workorder'
            })
        },
        // 跳转至服务通知页面
        turnInform() {
            uni.navigateTo({
                url: '/pages/main/serviceinform'
            })
        },
        // 跳转至维修结果页面
        turnResults() {
            uni.navigateTo({
                url: '/pages/main/serviceresults'
            })
        }
    }
}
</script>

<style scoped>
    .main {
        width: 100%;
        height: 100%;
        text-align: center;
        margin-top: 80upx;
    }
    .server {
        width: 47%;
        height: 300upx;
        float: left;
        margin-left: 13upx;
        margin-top: 15upx;
        text-align: center;
    }
    .introduce {
        font-style: initial;
        color: lightskyblue;
        margin: 50upx auto;
    }
    .logout {
        width: 100%;
        height: auto;
        position: relative;
    }
    .logout p {
        top: -30upx;
        position: absolute;
        right: 10upx;
        color: lightskyblue;
    }
</style>