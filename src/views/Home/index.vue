<template>
  <div class = 'page-home'>
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <Swiper class='my-swiper' v-if='bannerList.length>0' :autoplay='2000'>
      <Swiperitem v-for="item in bannerList" :key='item.id'>
        <img
          :src='item.imageurl'
          alt
         />
      </Swiperitem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Swiperitem } from '@/components/Swiper'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'Home',
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    Swiper,
    Swiperitem
  },
  created () {
    getBanner().then(res => {
      if (res.code === 200) {
        this.bannerList = res.info
      } else {
        alert(res.code_msg)
      }
      console.log(res)
    }).catch((err) => {
      alert('网络异常，请稍后', err)
    })
    // fetch('https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   }),
    // fetch('/migu/today/')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })
  }
}
</script>
<style lang='scss' scoped>
@import "~@/assets/styles/mixins.scss";
.page-home{
  .my-swiper img{
    width: 100%;;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    @include  border-bottom;
    // position: relative;
    // &::after{
    //   content: "";
    //   position: absolute;
    //   width: 100%;
    //   height: 1px;
    //   left: 0px;
    //   bottom: 0px;
    //   background-color: #ededed;
    //   transform:scaleY(0.5)
    // }
    display: flex;
    height: 44px;
    //三者等分平铺
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    .user-btn{
      width: 25px;
      height: 25px;
      background: url(~@/assets/icon/user-btn.png);
      background-size: 100%;
    }
    .header-logo{
      width: 92px;
      height: 28px;
      background: url(~@/assets/logo.png) no-repeat;
      background-size: 100%;
    }
    .header-search{
       width: 25px;
      height: 25px;
      background: url(~@/assets/icon/search.png);
      background-size: 100%;
    }
  }
}
</style>
