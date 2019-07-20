<!-- 我的收益 -->
<template>
  <div>
    <div>
      <div class="t-bg">
        <NavBar title="我的收益" />
        <div class="mx">
          <span>明细</span>
          <van-icon name="arrow" />
        </div>
        <div class="d number">
          6868
        </div>
        <div class="d wait">代提现</div>
      </div>
      <div class="card" @click="BankList">
        <div class="card-left">
          <van-image class="card-icon" :src="require('../assets/card-icon.png')" />
          <span>银行卡</span>
        </div>
        <div class="card-right">
          <span>去设置</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="ts">
        <p>提现金额不得低于1000元,每月15日-25日方可提现</p>
        <p>（1积分等同于一元人民币）</p>
      </div>
      <div class="btn-box">
        <van-button class="GoHome" type="info" @click="GoMoney">提现</van-button>
        <van-button class="GoClass" type="info" @click="GoExchange">兑换</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  components: { NavBar },
  name: "",
  data() {
    return {};
  },
  methods: {
    BankList(){
      this.$router.push('/bank-list')
    },
    GoMoney() {
      this.$router.push('/balance-withdrawal')
    },
    GoExchange() {}
  }
};
</script>

<style lang='scss' scoped>
.t-bg {
  background: url(../assets/income-bg.png);
  width: 100%;
  height: (509px / 2);
  background-size: 100% 100%;
  /deep/ .van-nav-bar {
    background: none;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
  .mx{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    font-size: 15px;
    /deep/ .van-icon {
      color: #fff;
      margin-right: 15px;
      margin-left: 8px;
    }
  }
  .d{
    width: 100%;
    text-align: center;
    color: #fff;
    &.number{
      font-size: 45px;
      margin-top: 10px;
      letter-spacing: 1px;
    }
    &.wait{
      font-size: 14px;
      margin-top: 5px;
      font-weight: 300;
    }
  }
}
.card {
  width: 100%;
  height: (115px / 2);
  background: #f9f9f9;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 16px;
    letter-spacing: 1px;
    color: #202020;
  }
  .card-left {
    display: flex;
    align-items: center;
    .card-icon {
      width: 25px;
      height: 16px;
      margin-right: 10px;
    }
  }
  .card-right {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
    /deep/ .van-icon {
      color: #333;
    }
  }
}
.ts {
  width: 100%;
  box-sizing: border-box;
  padding-left: 15px;
  color: #f91313;
  font-size: 11px;
  margin-top: 5px;
}
.btn-box {
  width: 100%;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /deep/ .van-button {
    width: (550px / 2);
    height: 38px;
    line-height: 38px;
    border-radius: 38px;
    border: none;
    &.GoHome {
      background: linear-gradient(to right, #dad9d9, #a1a1a1);
      margin-bottom: 20px;
    }
    &.GoClass {
      background: linear-gradient(to right, #59caff, #01a0e9);
    }
  }
}
</style>
