<template>
  <div>
    <div class="home">
      <RegisterLogIn />
      <div class="swiper-title"></div>
      <TabBar />
      <Foot />
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/tab_bar.vue";
import Foot from "@/components/foot.vue";
import RegisterLogIn from "@/components/register_log_in.vue";
export default {
  name: "home",
  components: {
    RegisterLogIn,
    TabBar,
    Foot
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 200px;
  .swiper-title {
    width: 100%;
    height: 200px;
    background: url(../assets/swiper_bg.png);
    background-size: 100% 100%;
    box-shadow: 0px 0px 5px rgba(153, 153, 153, 0.5);
  }
}
</style>

