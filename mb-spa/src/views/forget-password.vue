<!-- 忘记密码 -->
<template>
  <div>
    <NavBar title="忘记密码" />
    <div class="login">
      <van-image
        class="img-box"
        :src="require('../assets/login_logo.png')"
      />
    </div>
    <div class="formgroup">
      <div class="input-item ignore">
        <van-field v-model="phone" placeholder="请输入手机号码" label="手机号码:" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="code" placeholder="输入验证啊" label="验证码:">
          <span slot="button">获取验证码</span>
        </van-field>
      </div>
      <div class="input-item ignore">
        <van-field v-model="pwd" placeholder="设置6-24为密码" label="新密码:" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="againPwd" placeholder="设置6-24为密码" label="确认密码:"/>
      </div>
      <van-button type="info">确认</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  data() {
    return {
      phone: "",
      code: "",
      pwd: "",
      againPwd: ""
    };
  },

  components: {
    NavBar
  },

  methods: {
    onClickRight() {
      this.$router.push("/registered");
    }
  }
};
</script>
<style lang='scss' scoped>
.login {
  display: flex;
  justify-content: center;
  /deep/ .img-box {
    margin-top: 45px;
    width: (888px / 6);
    height: (722px / 6);
  }
}
.formgroup {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  margin-top: 40px;
  .input-item.ignore {
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
    /deep/ .van-cell {
      padding: 0px 5px;
      height: 40px;
      display: flex;
      align-items: center;
      /deep/ .van-cell__title{
        width: 90px;
      }
    }
    /deep/ .van-cell__title.van-field__label {
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 2px;
    }
    /deep/ input {
      font-size: 16px;
    }
    /deep/ .van-field__button {
      color: #00a0e9;
    }
  }
  /deep/ .van-button {
    width: 100%;
    border-radius: 30px;
    margin-top: 45px;
    margin-bottom: 10px;
    background: linear-gradient(to right, #59caff, #00a0e9);
    border: none;
  }
}
</style>