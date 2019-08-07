<!--新闻详情-->
<template>
  <div>
    <div>
      <div>
        <NavBar left_text="返回" />
      </div>
    </div>
    <div class="local_news_details">
        <div class="top-title">教育孩子的王道，是执着的栽培自己!</div>
        <div class="new-time">本地新闻 2018-08-02 16:00:00</div>
        <div class="quotations">
          <div class="quotations-name">
            高兵经典语录
          </div>
          <div class="text">
            父母太爱孩子，却不懂孩子。父母太爱孩子，却不懂孩子。父母太爱孩子，却不懂孩子。父母太爱孩子，却不懂孩子。父母太爱孩子，却不懂孩子。
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  name: "local_news_details",
  components: {NavBar},
  name: "",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
/deep/ .van-nav-bar{
  border-bottom: 1px solid #c6c7c6;
}
/deep/ .van-nav-bar__text{
  color: #333;
}
.local_news_details {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 20px 20px;
  .top-title{
    font-size: 20px;
    letter-spacing: 1px;
    color: #292829;
    line-height: 30px;
  }
  .new-time{
    font-size: 16px;
    color: #7e7d7e;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .quotations{
    width:100%;
    position: relative;
    box-sizing: border-box;
    border-left: 1px solid #c6c7c6;
    border-bottom: 1px solid #c6c7c6;
    padding: 40px 15px 15px 15px;
    &::before{
      content: "";
      position: absolute;
      top:0px;
      left: -5px;
      width: 5px;
      height: 25px;
      background: #ffb694;
    }
    &::after{
      content: "";
      position: absolute;
      bottom:-5px;
      right: 0px;
      width: 20px;
      height: 5px;
      background: #ffb694;
    }
    .quotations-name{
      position: absolute;
      top: 0px;
      left:10px;
      padding: 5px 10px;
      color: #292829;
      background: #ffebde;
      font-size: 15px;
      letter-spacing: 2px;
    }
    .text{
      font-size: 13px;
      color: #302f30;
      letter-spacing: 2px;
      line-height: 20px;
    }
  }
}
</style>
