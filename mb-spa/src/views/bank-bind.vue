<!-- 绑定银行卡 -->
<template>
  <div>
    <div>
      <NavBar title="绑定银行卡" />
    </div>
    <div class="formgroup">
      <div class="input-item ignore">
        <van-field v-model="user" placeholder="持卡人姓名" label="持卡人" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="idcard" placeholder="请输入身份证号" label="身份证号" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="bandrome" placeholder="请输入开户行具体到支行" label="开户行" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="card" placeholder="请输入银行卡号" label="卡号" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="phone" placeholder="请输入银行预留的手机号" label="预留手机号" />
      </div>
      <div class="input-item ignore">
        <van-field v-model="code" placeholder="输入验证啊" label="验证码">
          <span slot="button">获取验证码</span>
        </van-field>
      </div>
      <van-button type="info" @click="GoBinkList">绑定</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  components: { NavBar },
  name: "",
  data() {
    return {
      user: "",
      idcard: "",
      bandrome: "",
      card: "",
      phone: "",
      code: ""
    };
  },
  methods: {
    GoBinkList() {
      this.$router.push("/bank-list");
    }
  }
};
</script>

<style lang='scss' scoped>
.formgroup {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
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
}
</style>
