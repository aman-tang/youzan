let mixin = {
  filters: {
    currency(price) {
      // 如何让价格没有小数点的有小数点后2位，1位的也有2位，价格超过3位有个逗号也可以处理
      let priceStr = '' + price
      if(priceStr.indexOf('.') > -1) {
        let arr = priceStr.split('.')
        return arr[0] + '.' + (arr[1] + '0').substr(0,2)
      }else {
        return priceStr + '.00'
      }
    }
  }
}

export default mixin