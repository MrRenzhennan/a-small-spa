<!-- 购买会员 -->
<template>
  <div class="purchase_member" v-html="html_data"></div>
  <!-- <div class="purchase_member">
    <p>
      <img src="../assets/buy_work.png" alt="图片加载失败" />
    </p>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      html_data: ""
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.html_data = `<p>
      <img src="/img/buy_work.fa1e66d7.png" alt="图片加载失败" />
    </p>`;
  }
};
</script>
<style lang='scss' scoped>
.purchase_member {
  width: 100%;

  p {
    img {
      width: 100%;
    }
  }
}
.purchase_member /deep/ img {
  width: 100%;
  display: block;
}
</style>