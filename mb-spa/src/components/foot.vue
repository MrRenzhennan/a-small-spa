<template>
<div class="foot-box">
  <div class="foot">
    <p class="text">
      超级会员
      <span>999</span>元/年
    </p>
    <p class="_btn" @click="MemberPurchaseInformation">
        立即购买
    </p>
  </div>
</div>

</template>

<script>
export default {
  components: {},
  name: "",
  data() {
    return {};
  },
  methods: {
    MemberPurchaseInformation(){
      this.$router.push('/member-purchase-information')
    }
  }
};
</script>

<style lang='scss' scoped>
.foot-box{
  position: fixed;
  bottom: 0;
  width: 100%;
}
.foot {
  width: 100%;
  height: 65px;
  background: #fdcd0e;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .text {
    font-size: 17.5px;
    font-weight: 600;
    color: #000;
    margin-left: 15px;
    span {
      font-size: 20px;
      font-weight: 700;
    }
  }
  ._btn{
      width: 157.5px;
      height: 45px;
      border-radius: 45px;
      background: #f12d2c;
      color: #fff;
      font-size: 22.5px;
      text-align: center;
      line-height: 45px;
      letter-spacing: 2px;
  }
}
</style>
