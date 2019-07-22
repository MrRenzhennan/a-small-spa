<!-- 会员约课 -->
<template>
  <div class="member_appointment">
    <CardItem :data_arr="data"  mode='member_appointment'/>
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
          link:'/appointment-course'
        },
        {
          title: "魔术游学营",
          type: 1,
          src: require("../assets/item1.png"),
          link:'/appointment-course'
        },
        {
          title: "魔术游学营",
          type: 2,
          src: require("../assets/item1.png"),
          link:'/'
        },
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
.member_appointment{
}
</style>