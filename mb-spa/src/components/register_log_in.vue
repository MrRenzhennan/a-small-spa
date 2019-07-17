<!-- 登录注册按钮 -->
<template>
  <div class="register_log_in">
    <div class="button-box">
      <router-link to="/login">
        <span>登录</span>
      </router-link>

      <span>|</span>
      <router-link to="/registered">
        <span>注册</span>
      </router-link>
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
  top: 30px;
  right: 30px;
  .button-box {
    width: 140px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    span{
      font-size: 12px;
    }
    a {
      font-size: 12px;
      color: #fff;
      text-decoration: none;
      &.router-link-exact-active {
        color: #f70917;
      }
    }
  }
}
</style>