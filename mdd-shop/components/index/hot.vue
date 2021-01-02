<template>
	<view class="hot">
		<view class="top">
			<image src="../../static/index/hot/kuai.png" mode=""></image>
			<text class="tex1">热销商品</text>
			<text class="many">更多 ></text>

		</view>
		<scroll-view  class="scroll-x1 x" show-scrollbar="false" scroll-x="true">
			<view class="scroll-x">
				<image src="../../static/index/hot/shop1.png" mode="" class="pic"></image>
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
			<view class="scroll-x">
				<image src="../../static/index/hot/shop1.png" mode="" class="pic"></image>
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
			<view class="scroll-x">
				<image src="../../static/index/hot/shop1.png" mode="" class="pic"></image>
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
		</scroll-view>
	</view>
</template>

<script>
</script>

<style>
	@import url("../../common/css/many");
	@import url("../../common/css/shop-list");
	.scroll-x1 {
		width: 100%;
		margin-left: 36rpx;
		height: 420rpx;
	}

	.scroll-x {
		display: inline-block;
		margin-right: 30rpx;
		height: 400rpx;
		width: 315rpx;
		box-shadow: 0 0 20rpx #CCCCCC;
		border-radius: 10rpx;
	}

	.x {
		flex-wrap: nowrap;
		white-space: nowrap;
	}
	.top{
		margin: 30rpx;
	}
	
	
</style>
