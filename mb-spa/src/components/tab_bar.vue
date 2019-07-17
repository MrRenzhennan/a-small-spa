<!-- tabBar组件 -->
<template>
  <div class="tab-bar">
    <router-link :to="item.path" v-for="(item,index) in tabs" :key="index">{{item.label}}</router-link>
  </div>
</template>

<script>
export default {
  name: "tab-bar",
  data() {
    return {
      tabs: [
        { label: "购买会员", path: "/purchase_member" },
        { label: "会员约课", path: "/member_appointment" },
        { label: "研学活动", path: "/research_activities" },
        { label: "本地新闻", path: "/local_news" }
      ]
    };
  },

  components: {},

  computed: {},

  //   mounted: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.tab-bar {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  a {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #f70917;
    }
  }
}
</style>