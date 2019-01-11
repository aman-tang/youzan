let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  rank: '/category/rank',
  subList: '/category/subList',
  searchList: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  cartAdd: '/cart/add',
  cartLists: '/cart/list',
  cartReduce: '/cart/reduce',
  cartRemove: '/cart/remove',
  cartMremove: '/cart/mremove',
  cartUpdate: '/cart/update',
  addressLists: '/address/list',
  addressAdd: '/address/add',
  addressRemove: '/address/remove',
  addressUpdate: '/address/update',
  addressSetDefault: '/address/setDefault'
}


// 开发环境和真实环境的切换，就是有两段，一个是开发环境用的，一个是真实环境用的，用一个时注释另一个，手动切换
// let host = ''
// let host = 'https://easy-mock.com/mock/5c2c95a91d8d3d65c3bf4ed8/youzan'
let host = 'http://rap2api.taobao.org/app/mock/123119'
// let host = 'https://easy-mock.com/mock/5c07a8297f3a33135e52a2d5/youzan-project'


// 这里的处理，是把所有的 url 都加上 host
for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url