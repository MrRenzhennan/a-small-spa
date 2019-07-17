<template>
  <div class="home">
    <div class="swiper-title"></div>
    <TabBar />
    <div class="center">
      <transition name="fade">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <Foot />
  </div>
</template>

<script>
import TabBar from "@/components/tab_bar.vue";
import Foot from "@/components/foot.vue";
export default {
  name: "home",
  components: {
    TabBar,
    Foot
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 400px;
  .swiper-title {
    width: 100%;
    height: 400px;
    background: url(../assets/swiper_bg.png);
    background-size: 100% 100%;
    box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.5);
  }
  .center {
    min-height: calc(100vh - 400px - 130px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

