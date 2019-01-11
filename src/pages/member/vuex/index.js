// 使用 vuex 插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Address from 'js/addressService.js'

// 创建 Store 实例
const store = new Vuex.Store({
  // 对数据进行定义的地方
  state: {
    lists: null
  },
  // 对数据进行修改的地方，mutations 对事件进行同步管理的
  mutations:{
    init(state,lists) {
      state.lists = lists
    },
    add(state, instance) {
      state.lists.push(instance)
    },
    remove(state, id) {
      let lists = state.lists
      let index = lists.findIndex(item => {
        return item.id = id
      })
      lists.splice(index, 1)
    },
    update(state, instance) {
      let lists = JSON.parse(JSON.stringify(state.lists))
      let index = lists.findIndex(item => {
        return item.id = instance.id
      })
      lists[index] = instance
      state.lists = lists
    },
    setDefault(state, id) {
      let lists = state.lists
      lists.forEach(item => {
        item.isDefault = item.id == id ? true : false
      })
    }
  },
  // 异步的操作都在 actions 中
  actions: {
    getLists({commit}) {
      Address.list().then(res => {
        // this.lists = res.data.lists
        commit('init', res.data.lists)
      })
    },
    addAction({commit}, instance) {
      Address.add(instance).then(res => {
        // 模拟添加 id，instance 最好后台返回
        // instance.id = 112343
        commit('add', res.data.data)
      })
    },
    removeAction({commit}, id) {
      Address.remove(id).then(res => {
        commit('remove', id)
      })
    },
    updateAction({commit}, instance) {
      Address.update(instance).then(res => {
        // 实际开发使用
        commit('update', instance)
        // 测试使用
        // let data = res.data.data
        // data.id = instance.id
        // data.isDefault = instance.isDefault
        // commit('update', data)
      })
    },
    setDefaultAction({commit}, id) {
      Address.setDefault(id).then(res => {
        commit('setDefault', id)
      })
    }
  }
})

export default store