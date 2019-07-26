<template>
  <div>
    <div class="home">
      <RegisterLogIn />
      <!-- <div class="swiper-title"></div> -->
      <div class="swiper-box">
        <van-swipe :autoplay="3000" indicator-color="white">
           <van-swipe-item>
             <van-image
              width="100%"
              class="swiper-title"
              :src="require('../assets/swiper_bg1.png')"
            />
           </van-swipe-item>
            <van-swipe-item>
              <van-image
              width="100%"
              class="swiper-title"
              :src="require('../assets/swiper_bg2.jpg')"
            />
            </van-swipe-item>
        </van-swipe>
      </div>
      <TabBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/tab_bar.vue";
import RegisterLogIn from "@/components/register_log_in.vue";
export default {
  name: "home",
  components: {
    RegisterLogIn,
    TabBar,
  },
  data(){
    return{
      images: [
        require('./../assets/swiper_bg1.png'),
        require('./../assets/swiper_bg2.jpg'),
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 200px;
  .swiper-box{
    box-shadow: 0 0px 7px rgba(68, 68, 68, 0.4);
    margin-bottom: 8px;
    height: 200px;
  }
  .swiper-title {
    width: 100%;
    height: 200px;
  }
}
</style>

