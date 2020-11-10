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
    <Swiper>
      <Swiperitem>1 </Swiperitem>
      <Swiperitem>2 </Swiperitem>
      <Swiperitem>3 </Swiperitem>
    </Swiper>
    <Swiper>
      <Swiperitem>1 </Swiperitem>
      <Swiperitem>2 </Swiperitem>
      <Swiperitem>3 </Swiperitem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Swiperitem } from '@/components/Swiper'
export default {
  name: 'Home',
  components: {
    Swiper,
    Swiperitem
  }
}
</script>
<style lang='scss' scoped>
.page-home{
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
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
