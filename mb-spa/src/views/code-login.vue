<!-- 验证码登陆 -->
<template>
  <div>
    <NavBar title="登录" right_text="注册" @onClickRight="onClickRight" />
    <div class="login">
      <van-image class="img-box" :src="require('../assets/login_logo.png')" />
    </div>
    <div class="formgroup">
      <div class="input-item ignore">
        <van-field
          v-model="phone"
          placeholder="请输入手机号码"
          left-icon="manager-o"
          label="|"
          label-width="20px"
        />
      </div>
      <div class="input-item ignore">
        <van-field
          v-model="code"
          placeholder="请输入验证码"
          left-icon="phone-o"
          label="|"
          label-width="20px"
        >
          <span slot="button">获取验证码</span>
        </van-field>
      </div>
      <van-button type="info">登陆</van-button>
      <div class="forget-password">
        <span @click="ForgetPassword">忘记密码？</span>
        <span @click="CodeLogin">密码登陆</span>
      </div>
      <van-divider>其他方式登陆</van-divider>
      <div class="wixi_icon">
        <van-image class="wixi_icon-img" :src="require('../assets/wixi_icon.png')" />
        <p class="weixin">微信</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  data() {
    return {
      phone: "",
      code: ""
    };
  },

  components: {
    NavBar
  },

  methods: {
    onClickRight() {
      this.$router.push("/registered");
    },
    ForgetPassword() {
      this.$router.push("/forget_password");
    },
    CodeLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang='scss' scoped>
.login {
  display: flex;
  justify-content: center;
  /deep/ .img-box {
    margin-top: 65px;
    width: 196px;
    height: 64px;
  }
}
.formgroup {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  margin-top: 60px;
  .input-item.ignore {
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
    /deep/ .van-cell {
      padding: 0px 6px;
      height: 40px;
      display: flex;
      align-items: center;
    }
    /deep/ .van-icon {
      font-size: 20px;
    }
    /deep/ .van-cell__title.van-field__label {
      font-weight: 200;
      margin-left: 6px;
    }
    /deep/ input {
      font-size: 16px;
    }
    /deep/ .van-field__button {
      color: #00a0e9;
    }
  }
  .forget-password {
    font-size: 12px;
    color: #5d5c5c;
    letter-spacing: 1px;
    margin-top: 2px;
    margin-bottom: 50px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /deep/ .van-button {
    width: 100%;
    border-radius: 30px;
    margin-top: 45px;
    margin-bottom: 10px;
    background: linear-gradient(to right, #59caff, #00a0e9);
    border: none;
  }
  .wixi_icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    /deep/ .wixi_icon-img {
      width: 40px;
      height: 40px;
    }
    .weixin {
      font-size: 15px;
      color: #5d5c5c;
      margin-top: 5px;
    }
  }
}
</style>