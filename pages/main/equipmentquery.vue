<template>
    <view class="content">
        <view>
            <view>
                <view class="title">设备编号: 
                    <van-cell-group>
                        <van-field @change="numberCahnge" placeholder="请输入设备编号" center clearable use-icon-slot>
                            <van-icon slot="icon" @click="findInfrom" size="30px" name="search" />
                            <van-icon slot="icon" @click="getCramar" size="30px" name="scan"/>
                        </van-field>
                    </van-cell-group>
                </view>
            </view>
            <view class="title">销售时间: <input v-model="soldTime" type="text"></view>
            <view class="title">销售客户: <input type="text" v-model="customer"></view>
            <view class="title">维修次数: <input type="text" v-model="repairTime"></view>
            <view class="title">是否更换过配件: <input type="text" v-model="changeParts"></view>
            <view class="title">是否在保修期内: <input type="text" v-model="guaranteeTime"></view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            // 设备编号
            number: '',
            // 销售时间
            soldTime: '',
            // 销售客户
            customer: '',
            // 维修次数
            repairTime: '',
            // 是否更换过配件
            changeParts: '',
            // 是否在保修期内
            guaranteeTime: ''
        }
    },
    methods: {
        numberCahnge(event) {
            this.number = event.detail;
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
            if (this.number == '') {
                uni.showModal({
                    showCancel: false,
    				title: '提示',
					content: '请输入设备编号!',
					success(res) {
					}
                })
                return;
            }
            if (this.number == '123456') {
                uni.showLoading({
                    title: '查询中'
                });
                setTimeout(function () {
                    uni.hideLoading();
                    that.soldTime = '2019-10-10';
                    that.customer = '董事长';
                    that.repairTime = '2';
                    that.changeParts = '是';
                    that.guaranteeTime = '是';
                }, 800);
            }
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
</style>