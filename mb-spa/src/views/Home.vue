<template>
  <div class="home">
    <div class="swiper-title"></div>
    <TabBar/>
    <router-view />
  </div>
</template>

<script>
import TabBar from "@/components/tab_bar.vue";

export default {
  name: "home",
  components: {
    TabBar
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
}
</style>

