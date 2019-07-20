<!-- 余额提现 -->
<template>
  <div>
    <div>
      <div>
        <NavBar title="余额提现" />
      </div>
      <div class="balance-withdrawal">
        <div class="t" @click="GoBankList">
          <div class="t-back">
            <span>到账银行卡</span>
            <van-image class="bank-icon" :src="require('../assets/bank-icon.png')" />
            <span>建设银行(8861)</span>
            <van-icon name="arrow" />
          </div>
          <p class="tx">提现金额不得低于1000元,每月15日-25日方可提现</p>
        </div>
        <div class="center">
          <p class="title">余额提现</p>
          <div class="input-box">
            <span>￥</span>
            <input type="text" />
          </div>
          <p class="ye">
            <span>余额￥88.88,</span>
            <span>全部提现</span>
          </p>
          <van-button type="info" @click="GoMoney">提现</van-button>
        </div>
      </div>
    </div>
    <van-dialog v-model="show" :show-cancel-button="false" :showConfirmButton="false" :closeOnClickOverlay="true">
      <img :src="require('../assets/balance.png')" />
      <div class="dialo-msg">
        <div class="title">提现收费规则须知</div>
        <div class="msg">
          按提现金额的0.1%收取服务费最低0.1元/笔<br>
          提现至民生银行卡，将在0.1%服务费基础上增加0.05%附加费，共收取0.15%服务费，单笔服务费不足0.15元，将按0.15元收取。<br>
          温馨提示：<br>
          免费额度用完或者零钱余额不足以支付服务费使用‘全部提现’功能，可提取和扣除服务费后的最大可提现金额。
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  components: { NavBar },
  name: "",
  data() {
    return {
      show: false
    };
  },
  methods: {
    GoBankList() {
      this.$router.push("/bank-list");
    },
    GoMoney() {
      this.$router.push("/balance-withdrawal-success");
    }
  },
  mounted() {
    setTimeout(()=>{
      this.show = true
    },500)
  }
};
</script>

<style lang='scss' scoped>
/deep/ .van-dialog {
  width: (620px / 2);
  .van-dialog__content {
    img {
      width: (620px / 2);
      height: (870px / 2);
    }
  }
  .dialo-msg{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    .title{
      width: 100%;
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: #fff;
      font-size: 16px;
      letter-spacing: 1px;
    }
    .msg{
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      text-indent: 2em;
      color: #a2a2a2;
      font-size: 15px;
      letter-spacing: 2px;
      line-height:23px;
    }
  }
}
.balance-withdrawal {
  width: 100%;
  height: calc(100vh - 46px);
  background: #f4f4f4;
  box-sizing: border-box;
  padding: 20px;
  .t {
    padding: 15px;
    box-sizing: border-box;
    background: #fcfcfc;
    .t-back {
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        letter-spacing: 1px;
      }
      .bank-icon {
        width: (29px / 2);
        height: (31px / 2);
        margin: 0 10px 0 25px;
      }
      /deep/ .van-icon {
        color: #dadada;
        font-size: 16px;
        margin-left: 30px;
      }
    }
    .tx {
      font-size: 10px;
      color: #999;
      margin-top: 5px;
    }
  }
  .center {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    background: #fff;
    .title {
      font-size: 14px;
      letter-spacing: 1px;
    }
    .input-box {
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      align-items: center;
      span {
        font-size: 40px;
      }
      input {
        padding: 10px 0;
        border: none;
      }
    }
    .ye {
      font-size: 14px;
      margin-top: 10px;
      & span:nth-child(1) {
        color: #999;
        margin-right: 5px;
      }
      & span:nth-child(2) {
        color: #03a1ea;
      }
    }
    /deep/ .van-button {
      width: 100%;
      border-radius: 30px;
      margin-top: 40px;
      margin-bottom: 30px;
      background: linear-gradient(to right, #59caff, #00a0e9);
      border: none;
    }
  }
}
</style>
