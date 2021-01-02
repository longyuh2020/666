<template>
	<view class="">
		<view class="header">
			<text class="rt">
				<</text> <text>团购专区
			</text>
		</view>
		<view class="list">
			<view :class="num==0?'actv':''" @click="changeI(0)" >
				<view>
					100元
				</view>
				<image src="../static/gruop/ju11.png" v-show="num==0?true:false"></image>
			</view>
			<view :class="num==1?'actv':''" @click="changeI(1)">
				<view>
					500元
				</view>
				<image src="../static/gruop/ju11.png" v-show="num==1?true:false"></image>
			</view>
			<view :class="num==2?'actv':''" @click="changeI(2)">
				<view>
					1000元
				</view>
				<image src="../static/gruop/ju11.png" v-show="num==2?true:false"></image>
			</view>
		</view>
		
		<view class="shop_list">
			<view class="shop_list_1">
				<view class="con">
					<image src="../static/index/hot/shop1.png" mode="" class="pic"></image>
					<view class="box1">
						<view class="tuan">
							30 人团
						</view>
						【禾本科草本植物麦芽玉米降糖降脂补益脾
					</view>
					<view class="box2">
						不中30人立即瓜分10%
					</view>
					<view class="box3">
						<text>￥99.99</text>
						<text>已拼18件</text>
					</view>
				</view><view class="con">
					<image src="../static/index/hot/shop1.png" mode="" class="pic"></image>
					<view class="box1">
						<view class="tuan">
							30 人团
						</view>
						【禾本科草本植物麦芽玉米降糖降脂补益脾
					</view>
					<view class="box2">
						不中30人立即瓜分10%
					</view>
					<view class="box3">
						<text>￥99.99</text>
						<text>已拼18件</text>
					</view>
				</view><view class="con">
					<image src="../static/index/hot/shop1.png" mode="" class="pic"></image>
					<view class="box1">
						<view class="tuan">
							30 人团
						</view>
						【禾本科草本植物麦芽玉米降糖降脂补益脾
					</view>
					<view class="box2">
						不中30人立即瓜分10%
					</view>
					<view class="box3">
						<text>￥99.99</text>
						<text>已拼18件</text>
					</view>
				</view><view class="con">
					<image src="../static/index/hot/shop1.png" mode="" class="pic"></image>
					<view class="box1">
						<view class="tuan">
							30 人团
						</view>
						【禾本科草本植物麦芽玉米降糖降脂补益脾
					</view>
					<view class="box2">
						不中30人立即瓜分10%
					</view>
					<view class="box3">
						<text>￥99.99</text>
						<text>已拼18件</text>
					</view>
				</view><view class="con">
					<image src="../static/index/hot/shop1.png" mode="" class="pic"></image>
					<view class="box1">
						<view class="tuan">
							30 人团
						</view>
						【禾本科草本植物麦芽玉米降糖降脂补益脾
					</view>
					<view class="box2">
						不中30人立即瓜分10%
					</view>
					<view class="box3">
						<text>￥99.99</text>
						<text>已拼18件</text>
					</view>
				</view><view class="con">
					<image src="../static/index/hot/shop1.png" mode="" class="pic"></image>
					<view class="box1">
						<view class="tuan">
							30 人团
						</view>
						【禾本科草本植物麦芽玉米降糖降脂补益脾
					</view>
					<view class="box2">
						不中30人立即瓜分10%
					</view>
					<view class="box3">
						<text>￥99.99</text>
						<text>已拼18件</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num:0
			}
		},
		methods:{
			changeI(index){
				this.num=index;
			}
		}
	}
	
</script>

<style>
	@import url("../common/css/shop-list");
	.header {
		width: 685rpx;
		height: 80rpx;
		margin: 0 auto;
		line-height: 80rpx;
		font-size: 34rpx;
		font-weight: bold;
	}

	.rt {
		margin: 0 240rpx 0 0;
		font-size: 50rpx;
		font-weight: normal;
	}
	.list{
		width: 642rpx;
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		margin: 10rpx auto 0;
		color: #717171;
	}
	.list image{
		width: 66rpx;
		height: 8rpx;
	}
	.list>view{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.actv{
		font-weight: bold;
		color: #333333;
	}
	.shop_list{
		background: #f3f3f3;
		width: 100%;
		padding-bottom: 20rpx;
	}
	.shop_list_1{
		width: 685rpx;
		margin: 18rpx auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.pic,.con{
		width: 332rpx;
	}
	.con{
		margin-bottom: 2rpx;
	}
</style>
