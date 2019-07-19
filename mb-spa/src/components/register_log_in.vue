<!-- 登录注册按钮 -->
<template>
  <div>
    <div class="register_log_in">
      <div class="button-box" v-if="this.$store.state.name">
        <router-link to="/login">
          <span>登录</span>
        </router-link>

        <span>|</span>
        <router-link to="/registered">
          <span>注册</span>
        </router-link>
      </div>
      <div class="my-home" v-if="!this.$store.state.name">
        <van-image class="mycode" :src="require('../assets/heard.png')" />
        <router-link to="/my-home">
          <span class="my">我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register_log_in",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.register_log_in {
  position: absolute;
  top: 15px;
  right: 15px;
  .button-box {
    width: 70px;
    height: 25px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 5px;
    span {
      font-size: 12px;
    }
  }
  .my-home {
     width: 70px;
    height: 25px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    border-radius: 5px;
    .mycode{
      width: 20px;
      height: 20px;
      margin-top: 2px;
    }
    a {
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
  a {
    font-size: 6px;
    color: #fff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #f70917;
    }
  }
}
</style>