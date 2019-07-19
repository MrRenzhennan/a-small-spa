<!-- 注册 -->
<template>
  <div class>
    <NavBar title="注册" />
    <div class="login">
      <van-image class="img-box" :src="require('../assets/login_logo.png')" />
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
        <van-field v-model="pwd" placeholder="设置6-24为密码" label="设置密码:" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="againPwd" placeholder="设置6-24为密码" label="确认密码:" />
      </div>
      <van-button type="info" @click="registered">注册</van-button>
      <div class="operating-btm">
        <p class="t1" @click="onClickRight">
          已有账号,
          <span>直接登陆</span>
        </p>
        <p class="t2">
          <van-checkbox v-model="checked">同意《用户注册须知》</van-checkbox>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  name: "registered",
  data() {
    return {
      phone: "",
      code: "",
      pwd: "",
      againPwd: "",
      checked: true
    };
  },

  components: {
    NavBar
  },

  methods: {
    onClickRight() {
      this.$router.push("/login");
    },
    registered() {
      if (this.phone) {
        this.$dialog
          .confirm({
            title: "提示",
            message: "此手机号已注册，请直接登录",
            confirmButtonText: "去登录",
            showCancelButton: false
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
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
      padding: 0px 5px;
      height: 40px;
      display: flex;
      align-items: center;
      /deep/ .van-cell__title {
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
  .operating-btm {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 600;
    .t1 {
      span {
        color: #00a0e9;
        margin-left: 3px;
      }
    }
    .t2 {
      margin-top: 15px;
    }
    /deep/ .van-checkbox__icon {
      font-size: 16px;
    }
    /deep/ .van-checkbox__label {
      font-size: 10px;
    }
  }
}
</style>