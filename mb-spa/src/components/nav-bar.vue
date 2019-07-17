<!-- 导航 -->
<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="left_text"
      :right-text="right_text"
      :left-arrow="left_arrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    left_text: {
      type: String,
      default: ""
    },
    left_arrow: {
      type: Boolean,
      default: true
    },
    right_text: {
      type: String,
      default: ""
    }
  },

  components: {},

  computed: {},

  methods: {
    onClickLeft() {
        this.$router.go(-1)
    },
    onClickRight() {
        this.$emit('onClickRight')
    //   Toast("按钮");
    }
  }
};
</script>
<style lang='scss' scoped>
.van-nav-bar .van-icon {
  color: #333;
}
.van-hairline--bottom:after{
    border-bottom-width:0px;
}
</style>