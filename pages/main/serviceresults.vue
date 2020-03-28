<template>
    <view class="content">
        <view class="top">
            <view>
                <van-button type="info">登记</van-button>
                <van-button type="info">修改</van-button>
            </view>
        </view>
        <view class="numberlist">
            <view @click="getdetail(1)"><van-panel title="工单号:" desc="2578775468x"></van-panel></view>
            <view @click="getdetail(2)"><van-panel title="工单号:" desc="2578775467y"></van-panel></view>
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
            // uni.showLoading({
            //     title: '加载中'
            // });
            // setTimeout(function() {
            //     uni.hideLoading();
            //     uni.navigateTo({
            //         url: '/pages/order/orderdetail?nid='+nid
            //     })
            // }, 500)
        }
    }
}
</script>

<style scoped>
    .content {
        width: 100%;
        height: 100%;
    }
    .top {
        width: 80%;
        margin: 80upx auto;
    }
    .top view {
        width: 50%;
        margin: 10upx auto;
    }
    .top view van-button {
        padding-left: 20upx;
    }
    .numberlist {
        width: 95%;
        margin: 80upx auto;
    }
</style>