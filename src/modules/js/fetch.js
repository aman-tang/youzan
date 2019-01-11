import axios from 'axios'
// 这里已经可以直接自己写一个 ajax 替换 axios 也是可以的

function fetch(url,data) {
  return new Promise((resolve, reject) => {
    axios.post(url,data).then(res => {
      let status = res.data.status
      // if(status === 200) {
      //   resolve(res)
      // }
      // // 根据业务需要判断各个状态码
      // if(status === 300) {
      //   location.href = 'login.html'
      //   resolve(res)
      // }
      // reject(res)
      resolve(res) // 因为接口是模拟的，所以直接走这个过程
    }).catch(error => {
      reject(error)
    })
  })
}

export default fetch