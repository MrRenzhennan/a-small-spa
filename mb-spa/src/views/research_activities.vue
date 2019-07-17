<!-- 研学活动 -->
<template>
  <div>
    <CardItem :data_arr="data" mode='research_activities'/>
  </div>
</template>

<script>
import CardItem from "@/components/card_item";
export default {
  data() {
    return {
      data: [
        {
          title: "07月13 - 07月14",
          type: 1,
          src: require("../assets/item2.png")
        },
        {
          title: "07月13 - 07月14",
          type: 1,
          src: require("../assets/item2.png")
        },
        {
          title: "07月13 - 07月14",
          type: 2,
          src: require("../assets/item2.png")
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
</style>