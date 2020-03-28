<template>
    <view class="content">
        <view>
            <view class="title">维修结果单号: <input v-model="customer" type="text"></view>
            <view class="title">源单号: <input type="text" v-model="number"></view>
            <view class="title">设备编号: <input type="text" v-model="descript"></view>
            <view class="title">故障描述: <input type="text" v-model="needPeijian"></view>
            <view class="title">维修结果: <input type="text" v-model="guaranteeTime"></view>
        </view>
    </view>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .title {
        width: 80%;
        height: auto;
        color: lightskyblue;
        margin: 50upx auto;
        border-bottom: 1upx solid lightskyblue;
    }
    .title input {
        padding-left: 10upx;
        padding-bottom: 4upx;
        color: dimgrey;
    }
</style>