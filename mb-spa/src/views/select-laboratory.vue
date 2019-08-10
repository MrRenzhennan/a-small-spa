<!-- 选择实验室 -->
<template>
  <div>
    <NavBar left_text="选择实验室" />
    <div class="select-laboratory">
      <div class="choose-address">
        <div class="city-top" ref="city-top" @click="GetCityItem">
          <div class="city">
            <span>北京市</span>
            <van-icon name="play" />
          </div>
          <div class="city">
            <span>北京市</span>
            <van-icon name="play" />
          </div>
        </div>
        <div class="city-item" ref="city-item">
          <div class="left item-box">
            <div class="item" v-for="(item,index) in city" :key="index">北京市</div>
          </div>
          <div class="right item-box">
            <div class="item" v-for="(item,index) in city" :key="index">北京市</div>
          </div>
        </div>
      </div>
      <div class="mask" v-if="mask" @click="GetCityItem"></div>

      <div class="laboratory-list">实验室列表</div>

      <div class="card">
        <div class="card-item" v-for="item in 5" :key="item" @click="Gonext">
          <div class="img-box">
            <van-image class="card-img" :src="require('../assets/card-img.png')" />
          </div>
          <div class="line"></div>
          <div class="text">
            <div class="info">
              <div class="left">
                <span class="tit">啥时候实验室</span>
                <van-icon name="arrow" />
              </div>
              <div class="right">
                <van-image class="map-ad-icon" :src="require('../assets/map-ad-icon.png')" />
                <span>1.2km</span>
              </div>
            </div>
            <div class="address-del">地址：阿斯顿发斯蒂芬阿斯顿发斯蒂芬哈收到回复帕努火热爱派克斯戴假发isU盾话费哈收到回复帕努火热爱派克斯戴假发isU盾话费</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  data() {
    return {
      city: [
        "北京市",
        "北京市",
        "北京市",
        "北京市",
        "北京市",
        "北京市",
        "北京市",
        "北京市",
        "北京市"
      ],
      mask: false
    };
  },
  components: {
    NavBar
  },

  computed: {},

  methods: {
    GetCityItem() {
      if (this.$refs[`city-item`].offsetHeight == 0) {
        this.$refs[`city-item`].style.height = "200px";
        this.$refs[`city-top`].className = "city-top deg90";
        this.mask = true;
      } else {
        this.$refs[`city-item`].style.height = "0px";
        this.$refs[`city-top`].className = "city-top";
        this.mask = false;
      }
    },
    Gonext() {
      this.$router.push("./confirm-reservation-information");
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
.select-laboratory {
  position: relative;
  .mask {
    width: 100%;
    height: calc(100vh - 45px - 46px);
    background: rgba(0, 0, 0, 0.2);
    z-index: 9;
    position: absolute;
    top: 45px;
  }
  .choose-address {
    position: relative;
    z-index: 10;
    .city-item {
      position: absolute;
      top: 45px;
      width: 100%;
      height: 0px;
      overflow: hidden;
      transition: height 0.3s ease-in-out;
      will-change: height;
      .item-box {
        width: 50%;
        height: 200px;
        float: left;
        overflow-y: auto;
        .item {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #404040;
          font-size: 15px;
        }
        &.left {
          background: #f7f7f7;
          .item {
            &:hover {
              color: #000;
            }
          }
        }
        &.right {
          background: #fff;
          box-sizing: border-box;
          padding: 0px 10px;
          .item {
            border-bottom: 1px solid #f7f7f7;
            &:hover {
              color: #0085d0;
            }
          }
        }
      }
    }
  }
  .city-top {
    width: 100%;
    height: 45px;
    background: #ebf8ff;
    display: flex;
    .city {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0085d0;
      font-size: 15px;
      font-weight: 600;
    }
    i {
      margin-top: 4px;
      margin-left: 10px;
      transform: rotate(-90deg);
    }
    &.deg90 {
      i {
        transform: rotate(90deg);
        transition: transform 0.3s ease-in-out;
      }
    }
  }
  .laboratory-list {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 15px 0px 5px 0px;
    padding-left: 15px;
    box-sizing: border-box;
    color: #000;
  }
  .card {
    width: 100%;
    height: calc(100vh - 90px - 46px - 5px);
    overflow-y: auto;
    padding-top: 5px;
    .card-item {
      height: 240px;
      width: 340px;
      margin: 0 auto;
      margin-bottom: 15px;
      box-shadow: 0 0px 8px rgba(117, 117, 117, 0.4);
      border-radius: 10px;
      .img-box {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 10px;
        .card-img {
          width: (633px / 2);
          height: (277px / 2);
          border-radius: 10px;
          /deep/ img {
            border-radius: 10px;
          }
        }
      }
      .line {
        width: 100%;
        height: 1px;
        border-top: 2px dashed #cdd4e8;
        position: relative;
        &::after {
          content: '';
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
          content: '';
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
      .text {
        width: (633px / 2);
        margin: 0 auto;
        margin-top: 10px;
        .info {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            font-size: 15px;
            display: flex;
            align-items: center;
            .tit {
              font-weight: 600;
              letter-spacing: 1px;
            }
            .van-icon-arrow {
              margin-left: 5px;
            }
          }
          .right {
            font-size: 15px;
            display: flex;
            align-items: center;
            .map-ad-icon {
              width: (19px / 2);
              height: (27px / 2);
            }
            span {
              margin-left: 10px;
              color: #727171;
            }
          }
        }
        .address-del {
          width: 100%;
          height: 34px;
          font-size: 13px;
          color: #727171;
          margin-top: 5px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>