<template>
    <view class="content">
        <view>
            <view>
                <view class="title">服务通知单号: 
                    <van-cell-group>
                        <van-field @change="numberCahnge" placeholder="请输入服务通知单号" center clearable use-icon-slot>
                            <van-icon slot="icon" @click="findInfrom" size="30px" name="search" />
                            <van-icon slot="icon" @click="getCramar" size="30px" name="scan"/>
                        </van-field>
                    </van-cell-group>
                </view>
            </view>
            <view class="title">客户名称: <input v-model="customer" type="text"></view>
            <view class="title">设备编号: <input type="text" v-model="number"></view>
            <view class="title">报修描述: <input type="text" v-model="descript"></view>
            <view class="title">所需配件: <input type="text" v-model="needPeijian"></view>
            <view class="title">是否在保修期内: <input type="text" v-model="guaranteeTime"></view>
            <view class="title">维修款项支付情况: <input type="text" v-model="payNotPay"></view>
        </view>
        <van-button type="primary" class="turn" @click="turnResults">维修结果登记</van-button>
    </view>
</template>

<script>
export default {
    data() {
        return {
            // 服务通知单
            noticeNumber: '',
            // 客户名称
            customer: '',
            // 设备编号
            number: '',
            // 报修描述
            descript: '',
            // 所需配件
            needPeijian: '',
            // 是否在保修期内
            guaranteeTime: '',
            // 维修款项支付情况
            payNotPay: ''
        }
    },
    methods: {
        numberCahnge(event) {
            this.noticeNumber = event.detail;
        },
        // 选择图片或调取摄像头
        getCramar() {
            uni.scanCode({
                success: function (res) {
                    console.log('条码类型：' + res.scanType);
                    console.log('条码内容：' + res.result);
                }
            });
        },
        findInfrom() {
            let that = this;
            if (this.noticeNumber == '') {
                uni.showModal({
                    showCancel: false,
    				title: '提示',
					content: '请输入设备编号!',
					success(res) {
					}
                })
                return;
            }
            if (this.noticeNumber == '123456') {
                uni.showLoading({
                    title: '查询中'
                });
                setTimeout(function () {
                    uni.hideLoading();
                    that.customer = '董事长';
                    that.number = '285254645fg';
                    that.descript = '设备故障';
                    that.needPeijian = '螺丝';
                    that.guaranteeTime = '是';
                    that.payNotPay = '已支付';
                }, 800);
            }
        },
        // 跳转至维修结果登记页面
        turnResults() {
            uni.navigateTo({
                url: '/pages/main/serviceresults'
            })
        }
    }
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
    .btu {
        width: 60%;
        margin: 0 auto;
        text-align: center;
    }
    .btu van-icon {
        padding-left: 70upx;
    }
    .turn {
        float: right;
        padding-right: 50upx;
    }
</style>