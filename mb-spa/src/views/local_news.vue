<!-- 本地新闻 -->
<template>
  <div class="local_news">
    <div class="new-list">
      <router-link to="/local_news_details">
        <div class="item">
          <div class="title">教育孩子是王道，是执着的栽培自己!</div>
          <div class="img-box">
            <van-image class="image" :src="require('../assets/item1.png')" />
          </div>
        </div>
      </router-link>

      <router-link to="/local_news_details">
        <div class="item">
          <div class="title">教育孩子是王道，是执着的栽培自己!</div>
          <div class="img-box">
            <van-image class="image" :src="require('../assets/item1.png')" />
          </div>
        </div>
      </router-link>

      <router-link to="/local_news_details">
        <div class="item">
          <div class="title">教育孩子是王道，是执着的栽培自己!</div>
          <div class="img-box">
            <van-image class="image" :src="require('../assets/item1.png')" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.local_news {
  width: 100%;
  background: #ededed;
  padding-top: 1px;
}
.new-list {
  margin: 0 auto;
  width: 340px;
  box-sizing: border-box;
  background: #fff;
  min-height: calc(100vh - 244px - 8px);
  border-radius: 10px 10px 0 0;
  .item {
    width: 100%;
    height: 75px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 16px;
      height: 75px;
      box-sizing: border-box;
      border-bottom: 1px solid #ededed;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000;
    }
    .img-box {
      margin-left: 10px;
      .image {
        width: 55px;
        height: 55px;
      }
    }
  }
}
</style>