import http from './http.js'

const _getcate = ()=>{
	let options = {
		url:"/api/getcate"
	}
	return http(options)
}

const _getbanner = ()=>{
	let options = {
		url:"/api/getbanner"
	}
	return http(options)
}

const _getseckill = ()=>{
	let options = {
		url:"/api/getseckill"
	}
	return http(options)
}

const _getindexgoods = ()=>{
	let options = {
		url:"/api/getindexgoods"
	}
	return http(options)
}

const _getcategoodPage = (data={})=>{
	let options = {
		url:"/api/getcategoodPage",
		data
	}
	return http(options)
}
const _getcates = ()=>{
	let options = {
		url:"/api/getcates"
	}
	return http(options)
}

const _getgoodsinfo = (data={})=>{
	let options = {
		url:"/api/getgoodsinfo",
		data
	}
	return http(options)
}

const _sms = (data={})=>{
	let options = {
		url:"/api/sms",
		data
	}
	return http(options)
}

const _wxlogin = (data={})=>{
	let options = {
		url:"/api/wxlogin",
		data
	}
	return http(options)
}

const _checktoken = (header={})=>{
	let options = {
		url:"/api/checktoken",
		header
	}
	return http(options)
}

const _cartadd = (data={},header={})=>{
	let options = {
		url:"/api/cartadd",
		header,
		data
	}
	return http(options)
}

const _cartlist = (data={},header={})=>{
	let options = {
		url:"/api/cartlist",
		header,
		data
	}
	return http(options)
}

const _cartedit = (data={},header={})=>{
	let options = {
		url:"/api/cartedit",
		header,
		data
	}
	return http(options)
}

const _cartdelete = (data={},header={})=>{
	let options = {
		url:"/api/cartdelete",
		header,
		data
	}
	return http(options)
}
const _orderadd = (data={},header={})=>{
	let options = {
		url:"/api/orderadd",
		header,
		data
	}
	return http(options)
}

const _search = (data={})=>{
	let options = {
		url:"/api/search",
		data
	}
	return http(options)
}


const _orders = (data={},header={})=>{
	let options = {
		url:"/api/orders",
		header,
		data
	}
	return http(options)
}

export default	{
	_getcate,_getbanner,_getseckill,_getindexgoods,_getcategoodPage,_getcates,_getgoodsinfo,
	_sms,_wxlogin,_checktoken,_cartadd,_cartlist,_cartedit,_cartdelete,_orderadd,_search,
	_orders
	
}