<!-- 购买会员 -->
<template>
<div>
  <div class="purchase_member" v-html="html_data"></div>
  <Foot/>
</div>

  <!-- <div class="purchase_member">
    <p>
      <img src="../assets/buy_work.png" alt="图片加载失败" />
    </p>
  </div> -->
</template>

<script>
import Foot from "@/components/foot.vue";
export default {
  data() {
    return {
      html_data: ""
    };
  },

  components: {
    Foot
  },

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
  padding-bottom: 65px;
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