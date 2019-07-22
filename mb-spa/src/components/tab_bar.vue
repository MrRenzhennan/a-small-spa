<!-- tabBar组件 -->
<template>
  <div class="tab-bar">
    <van-tabs v-model="active">
      <van-tab title="购买会员" :class="active == 0 ? 'd44' : ''"></van-tab>
      <van-tab title="会员约课"></van-tab>
      <van-tab title="研学活动"></van-tab>
      <van-tab title="本地新闻"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "tab-bar",
  data() {
    return {
      active: 0
    };
  },
  mounted() {
    console.log(this.$router.currentRoute.path);
    switch (this.$router.currentRoute.path) {
      case "/purchase_member":
        this.active = 0;
        break;
      case "/member_appointment":
        this.active = 1;
        break;
      case "/research_activities":
        this.active = 2;
        break;
      case "/local_news":
        this.active = 3;
        break;

      default:
        break;
    }
  },
  watch: {
    active: function(n) {
      switch (n) {
        case 0:
          this.$router.push("/purchase_member");
          break;
        case 1:
          this.$router.push("/member_appointment");
          break;
        case 2:
          this.$router.push("/research_activities");
          break;
        case 3:
          this.$router.push("/local_news");
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.center {
  min-height: calc(100vh - 200px - 65px);
}
/deep/ .van-tabs__wrap {
  // height: 40px;
}
.d44 {
  .van-ellipsis {
    color: #f44;
  }
}
/deep/ .van-tabs__line {
  width: 60px;
  transform: translateX(60px) translateX(-50%);
  bottom: 23px;
  height: 2px;
}
</style>