let baseurl = null
if (process.env.NODE_ENV === 'development') {
	//做开发操作配置设置
	baseurl = "http://pin.cqmeiduoduo.com"
} else {
	// 做生产环境配置设置
	baseurl = "https://uapi.xqb.ink"
}
export default baseurl
