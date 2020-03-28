<template>
    <view class="content">
        <view class="gongdanhao">工单号: <span>{{number}}</span></view>
        <view class="top">
            <view @click="hover1">报修信息</view> <view @click="hover2">联系方式</view> <view @click="hover3">设备信息</view>
        </view>
        <view class="info" v-if="flag1">
            <view>
                <p>故障级别: <input v-model="level" type="text"> </p>
                <p>申报时间: <input v-model="time" type="text"> </p>
                <p>要求时间: <input v-model="requireTime" type="text"> </p>
                <p>剩余时间: <input v-model="residetime" type="text"> </p>
                <p>报修描述: <input v-model="descript" type="text"> </p>
                <p>维修方式: <input v-model="serviceWay" type="text"> </p>
            </view>
        </view>
        <view class="info" v-if="flag2">
            <view>
                <p>公司名称: <input v-model="company" type="text"> </p>
                <p>联系人: <input v-model="linkman" type="text"> </p>
                <p>联系电话: <input v-model="tel" type="text"> </p>
                <p>维修地址: <input v-model="adress" type="text"> </p>
            </view>
        </view>
        <view class="info" v-if="flag3">
            <view>
                <p>设备编号: <input v-model="shebeinumber" type="text"> </p>
                <p>维修次数: <input v-model="weixiutime" type="text"> </p>
                <p>是否跟换过配件: <input v-model="changeParts" type="text"> </p>
                <p>是否在保修期内: <input v-model="guaranteeTime" type="text"> </p>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            number: '',
            nid: 0,
            flag1: true,
            flag2: false,
            flag3: false,
            // 故障级别
            level: '2',
            // 申报时间
            time: '2020-2-2',
            // 要求时间
            requireTime: '2020-2-3',
            // 剩余时间
            residetime: '14h',
            // 报修描述
            descript: '设备故障',
            // 维修方式
            serviceWay: '维修',
            // 公司名称
            company: 'BOSS',
            // 联系人
            linkman: 'root',
            // 联系电话
            tel: '13232333333',
            // 维修地址
            adress: '厦门',
            // 设备编号
            shebeinumber: '8585888888',
            // 维修次数
            weixiutime: '2',
            // 是否更换过配件
            changeParts: '是',
            // 是否在保修期内
            guaranteeTime: '否',
        }
    },
    onLoad(option) {
        this.nid = option.nid;
        this.number = option.nid;
        console.log(this.nid);
    },
    methods: {
        hover1() {
            this.flag1 = !this.flag1;
            if (this.flag1 == true) {
                this.flag2 = false;
                this.flag3 = false;
            }
        },
        hover2() {
            this.flag2 = !this.flag2;
            if (this.flag2 == true) {
                this.flag1 = false;
                this.flag3 = false;
            }
        },
        hover3() {
            this.flag3 = !this.flag3;
            if (this.flag3 == true) {
                this.flag2 = false;
                this.flag1 = false;
            }
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
        width: 100%;
        height: auto;
        margin: 0upx auto;
        text-align: center;
    }
    .top view {
        width: 200upx;
        height: 70upx;
        border: 2upx solid lightskyblue;
        text-align: center;
        display: inline-block;
        margin-left: 5upx;
        color: lightslategray;
        padding-top: 15upx;
    }
    .gongdanhao {
        width: 600upx;
        margin: 50upx auto;
        color: lightslategray;
        font-size: 30upx;
    }
    .gongdanhao span {
        display: inline-block;
        width: 75%;
        border-bottom: 1upx solid lightskyblue;
        overflow: hidden;
        padding-bottom: 5upx;
        margin-left: 5upx;
    }
    .info {
        width: 80%;
        height: auto;
        margin: 50upx auto;
    }
    .info p {
        padding-top: 20upx;
        color: lightslategray;
        border-bottom: 1upx solid lightskyblue;
    }
    .info p input {
        padding-left: 8upx;
        padding-bottom: 4upx;
    }
    .x {
      background-color: lightskyblue;  
    }
</style>