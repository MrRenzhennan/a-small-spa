<template>
  <div class="foot">
    <p class="text">
      超级会员
      <span>999</span>元/年
    </p>
    <p class="_btn">
        立即购买
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  name: "",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.foot {
  width: 100%;
  height: 130px;
  background: #fdcd0e;
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .text {
    font-size: 35px;
    font-weight: 600;
    color: #000;
    margin-left: 30px;
    span {
      font-size: 40px;
      font-weight: 700;
    }
  }
  ._btn{
      width: 315px;
      height: 90px;
      border-radius: 90px;
      background: #f12d2c;
      color: #fff;
      font-size: 45px;
      text-align: center;
      line-height: 90px;
      letter-spacing: 4px;
  }
}
</style>
