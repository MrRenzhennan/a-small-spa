<!-- tabBar组件 -->
<template>
  <div class="tab-bar">
    <van-tabs v-model="active">
      <van-tab title="购买会员" :class="active == 0 ? 'd44' : ''">
        <div class="center">
          <PurchaseMember />
        </div>
      </van-tab>
      <van-tab title="会员约课">
        <div class="center">
          <MemberAppointment />
        </div>
      </van-tab>
      <van-tab title="研学活动">
        <div class="center">
          <ResearchActivities />
        </div>
      </van-tab>
      <van-tab title="本地新闻">
        <div class="center">
          <LocalNews />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PurchaseMember from "@/views/purchase_member.vue";
const MemberAppointment = () => import("@/views/member_appointment.vue");
const ResearchActivities = () => import("@/views/research_activities.vue");
const LocalNews = () => import("@/views/local_news.vue");
export default {
  name: "tab-bar",
  data() {
    return {
      active: 0
    };
  },

  components: {
    PurchaseMember,
    MemberAppointment,
    ResearchActivities,
    LocalNews
  },

  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.center {
  min-height: calc(100vh - 200px - 65px);
}
/deep/ .van-tabs__wrap {
  // height: 40px;
}
.d44{
  .van-ellipsis{
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