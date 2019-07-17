<!-- 验证码登陆 -->
<template>
  <div>
    <NavBar title="登录" right_text="注册" @onClickRight="onClickRight" />
    <div class="login">
      <van-image
        class="img-box"
        :width="393 / 2"
        :height="128 / 2"
        :src="require('../assets/login_logo.png')"
      />
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
        <van-image
          class="wixi_icon"
          :width="79 / 2"
          :height="79 / 2"
          :src="require('../assets/wixi_icon.png')"
        />
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
  .img-box {
    margin-top: 130px;
  }
}
.formgroup {
  width: 100%;
  box-sizing: border-box;
  padding: 0 60px;
  margin-top: 120px;
  .input-item.ignore {
    border-bottom: 1px solid #ccc;
    margin-top: 20px;
    /deep/ .van-cell {
      padding: 0px 5px;
      height: 40px;
      display: flex;
      align-items: center;
    }
    /deep/ .van-icon {
      font-size: 20px;
    }
    /deep/ .van-cell__title.van-field__label {
      font-weight: 200;
      margin-left: 5px;
    }
    /deep/ input {
      font-size: 16px;
    }
    /deep/ .van-field__button {
      color: #00a0e9;
    }
  }
  .forget-password {
    font-size: 18px;
    color: #5d5c5c;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 100px;
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
    .weixin {
      font-size: 30px;
      color: #5d5c5c;
      margin-top: 10px;
    }
  }
}
</style>