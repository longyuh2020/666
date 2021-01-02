import baseurl from './config.js'

	
const http = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseurl+options.url,
			method:options.method || 'Get',
			header:options.header || {"content-type":"application/json"},
			data:options.data || {},
			success:resolve,
			fail:reject
		})
	})
}

export default http