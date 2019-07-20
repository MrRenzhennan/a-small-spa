<!-- 我的 -->
<template>
  <div class="my">
    <div>
      <NavBar title="我的" />
    </div>
    <div class="my-bg">
      <div class="heard-logo">
        <van-image class="heard-logo-img" :src="require('../assets/heard-logo.png')" />
        <p class>ID：xxx</p>
      </div>
      <div class="user-info">
        <p class="user-name">
          <span @click="goLogin">点击登录/注册</span>
          <van-image width="33" height="13" :src="require('../assets/vip.png')" />
        </p>
        <p class="time">注册时间：2019-06-06</p>
        <p class="time">会员有效期时间：2019-06-06</p>
      </div>
      <div class="setting">
        <router-link to="/setting">
          <van-image class="setting-img" :src="require('../assets/setting.png')" />
        </router-link>
      </div>
    </div>
    <div class="my-main">
      <div class="main-box">
        <van-nav-bar>
          <div class="bar-left" slot="left">
            <van-image class="bar-left-img" :src="require('../assets/my-icon-1.png')" />
            <span class="item-title">我的收益</span>
          </div>
          <div class="bar-right" slot="right"  @click="MyIncome">
            <van-icon name="arrow" />
          </div>
        </van-nav-bar>
        <div class="item-main">
          <div class="item">
            <p class="t color-ff5267">
              8888
              <span>分</span>
            </p>
            <p class="b">总收入</p>
          </div>
          <div class="item">
            <p class="t color-ff5267">
              8888
              <span>分</span>
            </p>
            <p class="b">已提现</p>
          </div>
          <div class="item">
            <p class="t color-ff5267">
              8888
              <span>分</span>
            </p>
            <p class="b">待提现</p>
          </div>
        </div>
      </div>
      <div class="main-box">
        <van-nav-bar>
          <div class="bar-left" slot="left">
            <van-image class="bar-left-img" :src="require('../assets/my-icon-2.png')" />
            <span class="item-title">我的推荐</span>
          </div>
          <div class="bar-right" slot="right">
            <!-- <van-icon name="arrow" /> -->
          </div>
        </van-nav-bar>
        <div class="item-main">
          <div class="item">
            <p class="t color-f6ce7e">
              8888
              <span>人</span>
            </p>
            <p class="b">总计</p>
          </div>
          <div class="item" @click="GoMyLink">
            <van-image class="my-link-img" :src="require('../assets/my-link.png')" />
            <p class="b">推荐链接</p>
          </div>
          <div class="item" @click="GoMyCode">
            <van-image class="my-code-img" :src="require('../assets/my-code.png')" />
            <p class="b">专属二维码</p>
          </div>
        </div>
      </div>
      <div class="main-box">
        <van-nav-bar>
          <div class="bar-left" slot="left">
            <van-image class="bar-left-img" :src="require('../assets/my-icon-3.png')" />
            <span class="item-title">我的活动</span>
          </div>
          <div class="bar-right" slot="right">
            <!-- <van-icon name="arrow" /> -->
          </div>
        </van-nav-bar>
        <div class="item-main">
          <div class="item">
            <p class="t color-c874ff">
              66
              <span>次</span>
            </p>
            <p class="b">已预约</p>
          </div>
          <div class="item">
            <p class="t color-c874ff">
              38
              <span>次</span>
            </p>
            <p class="b">已兑换</p>
          </div>
        </div>
      </div>
      <div class="main-box">
        <van-nav-bar>
          <div class="bar-left" slot="left">
            <van-image class="bar-left-img" :src="require('../assets/my-icon-4.png')" />
            <span class="item-title">我的授课</span>
          </div>
          <div class="bar-right" slot="right">
            <van-icon name="arrow" />
          </div>
        </van-nav-bar>
        <div class="item-main">
          <div class="item">
            <p class="t color-08d5c3">
              38
              <span>次</span>
            </p>
            <p class="b">待授课</p>
          </div>
          <div class="item">
            <p class="t color-08d5c3">
              68
              <span>次</span>
            </p>
            <p class="b">已授课</p>
          </div>
          <div class="item">
            <p class="t color-08d5c3">
              328
              <span>元</span>
            </p>
            <p class="b">授课收入</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  components: {
    NavBar
  },
  name: "",
  data() {
    return {};
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    //跳转我的收益
    MyIncome(){
      this.$router.push("/my-income");
    },
    //跳转推荐链接
    GoMyLink(){
      this.$router.push("/my-link");
    },
    //跳转专属二维码
    GoMyCode(){
      this.$router.push("/my-code");
    }
  }
};
</script>

<style lang='scss' scoped>
.my {
  background: #f5f5f5;
  height: 110vh;
}
.my-bg {
  width: 100%;
  height: 145px;
  background: url(../assets/mybg.png);
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 20px 0px 20px;
  color: #fff;
  .heard-logo {
    margin-right: 20px;
    .heard-logo-img{
      width:61px;
      height:61px; 
    }
    p {
      font-size: 14px;
      text-align: center;
    }
  }
  .user-info {
    text-align: left;
    flex-grow: 1;
    .user-name {
      display: flex;
      align-items: center;
      margin-top: 20px;
      font-size: 16px;
      letter-spacing: 2px;
      margin-bottom: 10px;
      span {
        max-width: 200px;
        overflow: hidden;
      }
    }
    .time {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 5px;
    }
  }
  .setting{
    .setting-img{
       width:20px;
       height:20px;
    }
  }
  
}
.my-main {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: -40px;
  .main-box {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
    /deep/ .van-nav-bar {
      height: 40px;
      line-height: 40px;
    }
    .bar-left {
      .item-title {
        margin-left: 5px;
        letter-spacing: 1px;
        font-weight: 600;
        color: #333;
      }
      .bar-left-img{
         width:13px;
         height:13px;
      }
    }
    .bar-right {
      /deep/ .van-icon {
        color: #333;
      }
    }
    .item-main {
      display: flex;
      justify-content: space-around;
      .color-ff5267 {
        color: #ff5267;
      }
      .color-f6ce7e {
        color: #f6ce7e;
      }
      .color-c874ff {
        color: #c874ff;
      }
      .color-08d5c3 {
        color: #08d5c3;
      }
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .my-link-img{
           width:30px;
           height:30px;
        }
        .my-code-img{
           width:27px;
           height:27px;
        }
        .t {
          font-size: 20px;
          margin-top: 15px;
          span {
            font-size: 12px;
          }
        }
        .b {
          font-size: 12px;
          margin-top: 5px;
          margin-bottom: 10px;
          color: #333;
          letter-spacing: 1px;
        }
        /deep/ .van-image {
          margin-top: 8px;
          margin-bottom: 2px;
        }
      }
    }
  }
}
</style>
