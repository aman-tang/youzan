<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" :href="list.clickUrl">
          <img class="goods-main-photo fadeIn" :src="list.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  // swiper 是对 DOM 节点进行操作的，这个 DOM 节点什么时候生成？
  // mounted 阶段已经生成了 DOM 节点
  export default {
    name: 'swipe',
    // props: ['lists']
    props: {
      lists: {
        type: Array, // 指数据的类型
        required: true // 指是否是必须的
      },
      name: {}
    },
    mounted() {
      new Swiper('.swiper-container', {
        loop: true, // true 为自动轮播
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        autoplay: {
          delay: 3000
        }
      })
    }
  }
</script>

