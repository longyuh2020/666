<template>
	<view class="inde">
		<view class="header">
			<image src="../../static/index/header/serch1.png" mode=""></image>
			<input type="text" value="" class="serch" placeholder="请输入关键字" placeholder-style="fontSize:30rpx;color:#b3b3b3" />
			<image src="../../static/index/header/shaomiao.png" mode=""></image>
		</view>
		<view class="banner">
			<image src="../../static/index/banner/banner1.png" mode=""></image>
			<view class="banner_list">
				<view @click="toGroup">
					<image src="../../static/index/banner/tuan.png" mode=""></image>
					<view>团购专区</view>
				</view>
				<view>
					<image src="../../static/index/banner/xiaof.png" mode=""></image>
					<view>消费专区</view>
				</view>
				<view>
					<image src="../../static/index/banner/tongz.png" mode=""></image>
					<view>通证专区</view>
				</view>
			</view>
		</view>
		<!-- 热销 -->
		<view class="hots">
			<u-hot></u-hot>
		</view>
		<!-- 100元区 -->
		<view class="one">
			<u-oneh></u-oneh>
		</view>
		<!-- 500元区 -->
		<view class="two">
			<uTwoh></uTwoh>
		</view>
		<!-- 1000元区 -->
		<view class="thou">
			<u-thousand></u-thousand>
		</view>
	</view>
</template>

<script>
	import uHot from '../../components/index/hot.vue'
	import uOneh from '../../components/index/oneh.vue'
	import uTwoh from '../../components/index/twoh.vue'
	import uThousand from '../../components/index/thousand.vue'
	export default{
		// ../../static/index/banner/banner1.png
		components:{
			uHot,uOneh,uTwoh,
			uThousand
		},
		data(){
			return{
				arr:[]
			}
		},
		methods:{
			toGroup(){
				uni.navigateTo({
					url:'../group'
				})
			}
		},
		async onLoad() {
			let res = await this.$http({
				url:'/api/index/index',
				method:'post'
			})
			console.log(res.data.data.banner)
			this.arr = res.data.data.banner
			console.log(this.arr)
		}
	}
</script>

<style>
	.inde{
		background: #f5f5f5;
	}
	.serch {
		width: 450rpx;
		height: 80rpx;
		background: #e5e5e5;
	}

	.header {
		background: #e5e5e5;
		width: 670rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 8rpx;
		margin: 0 auto;
	}

	.header image {
		width: 45rpx;
		height: 45rpx;
	}

	.banner {
		height: 530rpx;
		background: #f5f5f5;
		margin: 10rpx 0;
		position: relative;
	}

	.banner>image {
		width: 750rpx;
		height: 400rpx;
	}

	.banner .banner_list image {
		width: 50rpx;
		height: 50rpx;
	}

	.banner_list {
		width: 580rpx;
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		font-size: 28rpx;
		color: #4c4c4c;
		position: absolute;
		top: 340rpx;
		left: 70rpx;
		background: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
	}
	.banner_list>view {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		
	}
	.banner_list>view:nth-child(2) {
		border-left: 1px solid #e1e1e1;
		border-right: 1px solid #e1e1e1;
		width: 192rpx;
	}
	.hots{
		background: linear-gradient(top,#fff,#fafafa);
		height: 555rpx;
		padding-top: 20rpx;
	}
	.one,.two,.thou{
		padding-top: 20rpx;
		background: linear-gradient(top,#fff,#fafafa);
		margin-top: 22rpx;
		padding-bottom: 12rpx;
	}
	
</style>
