import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot.vue'
import mixin from 'js/mixin.js'

new Vue({
  el: '#app',
  data: {
    topLists: null,
    topIndex: 0,
    subData: null,
    rankData: null
  },
  created() {
    this.getTopList()
    this.getSubList(0,0)
  },
  methods: {
    getTopList() {
      axios.get(url.topList).then(res => {
        this.topLists = res.data.lists
      }).catch(res => {

      })
    },
    // 这里传入的参数 id 和 index 可交换位置，相应的 html 中也要交换位置，然后上面 created 时只用传(0)而不是(0,0)
    getSubList(id,index) {
      this.topIndex = index
      if(index === 0) {
        this.getRank()
      }else {
        axios.get(url.subList, {id}).then(res => {
        this.subData = res.data.data
        })
      }
    },
    getRank() {
      axios.get(url.rank).then(res => {
        this.rankData = res.data.data
      })
    },
    toSearch(list) {
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  components: {
    Foot
  },
  mixins: [mixin]
})