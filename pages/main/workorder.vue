<template>
    <view class="content">
        <view class="logo">
            <img class="logo" src="/static/yunlaitong.png" alt="">
        </view>
        <view class="numberlist">
            <view @click="getdetail(1)"><van-panel title="工单号:" desc="2578775468x"></van-panel></view>
            <view @click="getdetail(2)"><van-panel title="工单号:" desc="2578775467y"></van-panel></view>
            <view @click="getdetail(3)"><van-panel title="工单号:" desc="2578775469z"></van-panel></view>
            <view @click="getdetail(4)"><van-panel title="工单号:" desc="2578775460u"></van-panel></view>
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
        getdetail(nid) {
            uni.showLoading({
                title: '加载中'
            });
            setTimeout(function() {
                uni.hideLoading();
                uni.navigateTo({
                    url: '/pages/order/orderdetail?nid='+nid
                })
            }, 500)
        }
    }
}
</script>

<style scoped>
    .logo {
        width: 200upx;
        height: 200upx;
        margin: 10upx auto;
    }
    .numberlist {
        width: 95%;
        margin: 80upx auto;
    }
</style>