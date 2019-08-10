<!-- 会员约课 -->
<template>
  <div class="member_appointment">
    <div class="appointment-top">
      <router-link to="/select-seminar">
      <van-image class="img-box" :src="require('../assets/appointment-logo.png')" />
      </router-link>
    </div>
    <div class="theme">9月课程主题</div>
    <CardItem :data_arr="data" mode="member_appointment" />
  </div>
</template>

<script>
import CardItem from "@/components/card_item";
export default {
  data() {
    return {
      data: [
        {
          title: "中科院演戏时间",
          type: 1,
          src: require("../assets/item1.png"),
          link: "/appointment-course"
        },
        {
          title: "魔术游学营",
          type: 1,
          src: require("../assets/item1.png"),
          link: "/appointment-course"
        },
        {
          title: "魔术游学营",
          type: 2,
          src: require("../assets/item1.png"),
          link: "/"
        }
      ]
    };
  },

  components: {
    CardItem
  },

  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.member_appointment {
  .appointment-top {
    width: 100%;
    width: (680px / 2);
    margin: 0 auto;
    /deep/ .img-box {
      width: (680px / 2);
      height: (360px / 2);
      border-radius: 10px;
      margin-top: 15px;
      box-shadow: 0 8px 14px rgba(117, 117, 117, 0.4);
      img {
        border-radius: 10px;
      }
    }
  }
  .theme {
    width: (680px / 2);
    margin: 0 auto;
    font-size: 12px;
    margin-top: 25px;
    margin-bottom: 15px;
    color: #212121;
    font-weight: 600;
    letter-spacing: 1px;
  }
}
</style>