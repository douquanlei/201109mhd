<template>
  <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <slot/>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'
export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    /*eslint-disable*/
    
    
    new Swiper(this.$refs.swiper, {
      // direction: 'vertical', // 垂直切换选项
      loop:this.loop,
      autoplay:this.autoplay?{
        delay: this.autoplay,
      stopOnLastSlide: false,
      disableOnInteraction: true
      }:false,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
      slideChangeTransitionEnd: function(){
        console.log(this.realIndex);//切换结束时，告诉我现在是第几个slide
        },
      },
    })
    /* eslint-enable */
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 180px;
}
</style>
<style lang="scss">
.swiper-pagination-bullet {
  opacity: 1;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.7);
}

.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  background: url("../../assets/icon/dot.png") no-repeat;
  background-size: 100%;
}
</style>
