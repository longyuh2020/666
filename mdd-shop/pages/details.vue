<template>
	<view class="">
		<view class="header">
			<text class="rt">
				<</text> <text>商品详情
			</text>
		</view>
		<view class="cont">
			<view class="im">
				<image src="../static/details/shop_de.png" mode=""></image>
			</view>
			<view class="times">
				<view class="times_left">
					<view class="box_1">
						<text>团购价</text>
						<text>34件已售</text>
					</view>
					<view class="box_2">
						<view class="">
							<text>￥</text>
							99.00
						</view>
						<view class="">
							还差6人成团
						</view>
					</view>
				</view>
				<!-- <view class="triangle_border_left">
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
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

	.cont .im image {
		width: 750rpx;
		height: 570rpx;
	}

	/* 三角形 */
	.triangle_border_left {
		width: 0;
		height: 0;
		border-width: 80rpx 20rpx 80rpx 0;
		border-style: solid;
		border-color: transparent #fda649 transparent transparent;
		/*透明 灰 透明 透明 */
	}
	.times{
		height: 148rpx;
	}
	.times .times_left{
		width: 530rpx;
		height: 148rpx;
		background: #fb1135;
		color: #fff;
		padding-left: 32rpx;
		overflow: hidden;
		
	}
	.times_left .box_1{
		margin: 16rpx 0;
	}
	.times_left .box_1 text:nth-child(1){
		font-size: 28rpx;
		
	}.times_left .box_1 text:nth-child(2){
		font-size: 20rpx;
		display: inline-block;
		width: 132rpx;
		height: 32rpx;
		background: #f12645;
		border-radius: 10rpx;
		line-height: 32rpx;
		text-align: center;
		margin-left: 10rpx;
	}
	.times_left .box_2{
		height: 48rpx;
	}
	.times_left .box_2 view:nth-child(1){
		font-size: 36rpx;
		float: left;
	}
	.times_left .box_2 view:nth-child(1) text{
		font-size: 22rpx;
	}
	.times_left .box_2 view:nth-child(2){
		float: left;
		width: 212rpx;
		height: 48rpx;
		border-radius: 20rpx;
		background: #fecfd7;
		color: #e73131;
		font-size: 28rpx;
		line-height: 48rpx;
		text-align: center;
		margin-left: 20rpx;
	}
</style>
