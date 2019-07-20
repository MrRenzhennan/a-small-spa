<!-- 银行卡 -->
<template>
  <div>
    <div>
      <div>
        <NavBar title="银行卡" />
      </div>
    </div>
    <div class="card-list">
      <div class="card">
        <div class="card-left">
          <van-image class="bank-icon" :src="require('../assets/bank-icon.png')" />
          <div>
            <span>建设银行</span>
            <p>储蓄卡</p>
          </div>
        </div>
        <div class="card-right">
          <span>****1234</span>
        </div>
      </div>

      <div class="card">
        <div class="card-left">
          <van-image class="bank-icon" :src="require('../assets/bank-icon.png')" />
          <div>
            <span>建设银行</span>
            <p>储蓄卡</p>
          </div>
        </div>
        <div class="card-right">
          <span>****1234</span>
        </div>
      </div>

      <div class="btn-box">
        <van-button class="GoClass" type="info" @click="GoBankBind">+ 添加银行卡</van-button>
        <p>支持储蓄卡信用卡</p>
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
      GoBankBind(){
          this.$router.push('/bank-bind')
      }
  }
};
</script>

<style lang='scss' scoped>
.card-list {
  background: #f4f4f4;
  height: calc(100vh - 46px);
  box-sizing: border-box;
  padding-top: 15px;
}
.card {
  width: 100%;
  height: (115px / 2);
  background: #fff;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  span {
    font-size: 14px;
    letter-spacing: 1px;
  }
  .card-left {
    display: flex;
    align-items: center;
    .bank-icon {
      width: (29px / 2);
      height: (31px / 2);
      margin-right: 10px;
    }
    p {
      font-size: 9px;
      letter-spacing: 1px;
      color: #5a5a5a;
    }
  }
  .card-right {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
  }
}

.btn-box {
  position: fixed;
  bottom: 35px;
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
    &.GoClass {
      background: linear-gradient(to right, #59caff, #01a0e9);
    }
  }
  p{
      font-size: 12px;
      color: #949494;
      margin-top: 5px;
  }
}
</style>
