<!-- 已预约活动 -->
<template>
  <div>
    <NavBar left_text="预约确认信息" />
    <div class="card">
      <div class="card-item" v-for="item in 5" :key="item">
        <div class="top">
          <div class="top-line"></div>
          <div class="top-text">
            <div class="item">
              <span class="label">预约单号:</span>
              <span class="detail">1234567890</span>
            </div>
            <div class="item">
              <span class="label">实验主题:</span>
              <span class="detail">反冲小车</span>
            </div>
            <div class="item">
              <span class="label">预约时间:</span>
              <span class="detail">2019年09月07日 8:00-9:00</span>
            </div>
            <div class="item mg">
              <span class="label">预约实验室:</span>
              <span class="detail">2石家庄某某实验室</span>
            </div>
            <div class="detailsAddress">
              <span class="label">详细地址:</span>
              <span class="detail">2石家庄某某实验室2石家庄某某实验室2石家庄某某实验室2石家庄某某实验室</span>
            </div>
            <div class="item">
              <span class="label">预约电话:</span>
              <span class="detail">13333333333</span>
            </div>
            <div class="item">
              <span class="label">学院姓名:</span>
              <span class="detail">张三</span>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="btm">
          <div class="left">已预约</div>
          <div class="right" @click="cancel">取消课程</div>
        </div>
      </div>
    </div>
    <van-dialog
      v-model="failShow"
      showCancelButton
      cancelButtonText="返回"
      confirmButtonText="确认取消"
      confirmButtonColor="#0085d0"
    >
      <div class="failShow">
        <div class="img-box">
          <img :src="require('../assets/reservation-fail.png')" alt />
          <span class="h4">温馨提示</span>
        </div>
        <div class="h3 mg">取消之后将失去一次探索之旅哦</div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  data() {
    return {
      failShow: false
    };
  },

  components: {
    NavBar
  },

  computed: {},

  methods: {
    cancel() {
      this.failShow = true;
    }
  }
};
</script>
<style lang='scss' scoped>
/deep/ .van-nav-bar {
  background: #0085d0;
  .van-icon {
    color: #fff;
  }
}
/deep/ .van-nav-bar__text {
  color: #fff;
}
.failShow {
  width: 100%;
  text-align: center;
  .img-box {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .h4 {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #212121;
  }
  .h3 {
    font-size: 14px;
    letter-spacing: 1px;
    color: #757575;
    margin-bottom: 10px;
  }
  .mg {
    margin-bottom: 20px;
  }
  img {
    width: (50px / 2);
    height: (51px / 2);
    margin-right: 10px;
  }
}
.card {
  width: 100%;
  padding-top: 15px;
  .card-item {
    // height: 290px;
    width: 340px;
    margin: 0 auto;
    margin-bottom: 15px;
    box-shadow: 0 0px 8px rgba(117, 117, 117, 0.4);
    border-radius: 10px;
  }
  .top {
    width: 100%;
    box-sizing: border-box;
    padding: 15px 10px 0px 10px;
    .top-line {
      width: 100%;
      height: 1px;
      border-top: 2px dashed #cdd4e8;
      margin-bottom: 10px;
    }
    .top-text {
      box-sizing: border-box;
      width: 100%;
      padding: 0 5px;
      .item {
        display: flex;
        margin-bottom: 5px;
        .label {
          font-size: 15px;
          color: #212121;
          font-weight: 600;
          letter-spacing: 1px;
          margin-right: 5px;
        }
        .detail {
          font-size: 15px;
          color: #9a9898;
        }
      }
      .mg {
        margin-bottom: 0px;
      }
      .detailsAddress {
        font-size: 14px;
        color: #9a9898;
        margin-bottom: 8px;
        .label {
          margin-right: 5px;
        }
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    border-top: 2px dashed #cdd4e8;
    position: relative;
    margin-top: 15px;
    &::after {
      content: "";
      position: absolute;
      top: -12px;
      left: 0px;
      width: 10px;
      height: 20px;
      background: #fff;
      border-radius: 0 100% 100% 0/50%;
      border-left: none;
      box-shadow: inset -2px 0px 3px -1px rgba(117, 117, 117, 0.58);
    }
    &::before {
      content: "";
      position: absolute;
      top: -12px;
      right: 0px;
      width: 10px;
      height: 20px;
      background: #fff;
      border-radius: 100% 0 0 100%/50%;
      border-right: none;
      box-shadow: inset 2px 0px 3px -1px rgba(117, 117, 117, 0.58);
    }
  }
  .btm {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      color: #0085d0;
    }
    .right {
      padding: 2px 8px;
      color: #fff;
      background: #fe5563;
      border-radius: 20px;
    }
  }
}
</style>