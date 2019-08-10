<!-- 选择场次 -->
<template>
  <div class="box">
    <NavBar left_text="选择场次" />
    <div class="select-seminar">
      <div class="swiper-box">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <van-image
              width="100%"
              class="swiper-title"
              :src="require('../assets/swiper_bg1.png')"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              width="100%"
              class="swiper-title"
              :src="require('../assets/swiper_bg2.jpg')"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="info">
        <div class="l-t">
          <div class="title">啥时候实验室</div>
          <div class="address">
            <img :src="require('../assets/address-icon.png')" alt />
            <span>啊手动阀手动阀阿斯顿发射点发生带授发射点发射点发射点发啊沙发沙发</span>
          </div>
          <div class="phone">
            <img :src="require('../assets/phone-icon.png')" alt />
            13333333333
          </div>
        </div>
        <div class="map">
          <van-image class="map-icon" :src="require('../assets/map-icon.png')" />
          <div>地图导航 ></div>
          <div>1.2km</div>
        </div>
      </div>
      <div class="item-list">
        <div class="item" v-for="(item,index) in itemList" :key="index">
          <div class="item-p" @click="ChildShow(index)">
            <div class="left" :ref="`itemPicon${index}`">
              <span class="t">反冲小车(7-12岁)</span>
              <van-icon name="play" />
            </div>
            <div class="right">
              <span class="t">查看实验室详情</span>
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="item-c" :ref="`itemC${index}`">
            <div class="seminar-list" :ref="`seminar`" v-for="(item,i) in item.subs" :key="i">
              <div class="left">
                <img :src="require('../assets/rl-icon.png')" alt />
                <span class="s1">周六09月07日</span>
                <img :src="require('../assets/sz-icon.png')" alt />
                <span>11:00--12:00</span>
              </div>
              <div class="right">剩余：8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <van-button type="info" @click="GoSelectLaboratory">去预约</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  data() {
    return {
      itemList: [
        {
          label: "反冲小车(7-12岁)",
          subs: [{ time: "周六09月07日" }, { time: "周六09月07日" }]
        },
        {
          label: "反冲小车(7-12岁)",
          subs: [{ time: "周六09月07日" }, { time: "周六09月07日" }]
        },
        {
          label: "反冲小车(7-12岁)",
          subs: [{ time: "周六09月07日" }, { time: "周六09月07日" }]
        },
        {
          label: "反冲小车(7-12岁)",
          subs: [{ time: "周六09月07日" }, { time: "周六09月07日" }]
        },
        {
          label: "反冲小车(7-12岁)",
          subs: [{ time: "周六09月07日" }, { time: "周六09月07日" }]
        }
      ]
    };
  },

  components: {
    NavBar
  },

  computed: {},

  methods: {
    ChildShow(item) {
      this.itemList.forEach((element, index) => {
        this.$refs[`itemC${index}`][0].style.height = "0px";
        this.$refs[`itemPicon${index}`][0].className = "left";
      });
      if (this.$refs[`itemC${item}`][0].offsetHeight == 0) {
        this.$refs[`itemPicon${item}`][0].className = "left deg90";
        this.$refs[`itemC${item}`][0].style.height =
          (this.$refs[`seminar`][0].offsetHeight + 15) *
            this.itemList[item].subs.length +
          "px";
      } else {
        this.$refs[`itemC${item}`][0].style.height = "0px";
        this.$refs[`itemPicon${item}`][0].className = "left";
      }
    },
    GoSelectLaboratory(){
      this.$router.push('/select-laboratory')
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
.box {
  padding-bottom: 44px;
  width: 100%;
}
.select-seminar {
  width: 100%;
  .swiper-box {
    height: 200px;
  }
  .swiper-title {
    width: 100%;
    height: 200px;
  }
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    padding-right: 0px;
    margin-bottom: 15px;
    box-shadow: 0 0px 7px rgba(68, 68, 68, 0.4);
    .l-t {
      flex-grow: 1;
      box-sizing: border-box;
      padding-right: 20px;
      .title {
        font-size: 15px;
        letter-spacing: 1px;
        font-weight: 600;
        color: #212121;
        margin-bottom: 10px;
      }
      .address {
        color: #757575;
        font-size: 12px;
        margin-bottom: 10px;
        img {
          width: (29px / 2);
          height: (22px /2);
          margin-right: 10px;
        }
      }
      .phone {
        color: #757575;
        font-size: 12px;
        img {
          width: (28px / 2);
          height: (17px /2);
          margin-right: 5px;
        }
      }
    }
    .map {
      box-sizing: border-box;
      width: 130px;
      height: 80px;
      padding-top: 5px;
      padding-bottom: 10px;
      border-left: 1px solid #bfbfbf;
      .map-icon {
        width: (51px / 2);
        height: (46px / 2);
      }
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      div {
        font-size: 12px;
        color: #727171;
      }
    }
  }
  .item-list {
    .item {
      box-shadow: 0 0px 8px rgba(117, 117, 117, 0.4);
      padding-bottom: 1px;
      margin-bottom: 15px;
    }
    .item-p {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        color: #212121;
        font-size: 15px;
        display: flex;
        align-items: center;
        &.deg90 {
          i {
            transform: rotate(90deg);
            transition: transform 0.3s ease-in-out;
          }
        }
        .t {
          font-weight: 600;
          letter-spacing: 2px;
        }
        i {
          margin-top: 4px;
          transform: rotate(-90deg);
        }
      }
      .right {
        color: #333;
        font-size: 12px;
        display: flex;
        align-items: center;
        i {
          margin-top: 4px;
          margin-left: 5px;
        }
      }
    }
    .item-c {
      width: 100%;
      box-sizing: border-box;
      padding: 0px 15px;
      transition: height 0.3s ease-in-out;
      will-change: height;
      overflow: hidden;
      height: 0px;
      .seminar-list {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        box-sizing: border-box;
        background: #f5fbfe;
        border-radius: 10px;
        margin-bottom: 15px;
        box-shadow: 0 3px 8px rgba(117, 117, 117, 0.2);
        &:hover {
          background: #fff1f2;
        }
        .left {
          font-size: 12px;
          color: #0085d0;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
          .s1 {
            margin-right: 10px;
          }
        }
        .right {
          font-size: 14px;
          padding: 2px 10px;
          border-radius: 30px;
          background: #ff5462;
          color: #fff;
        }
      }
    }
  }
}
.bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  .van-button {
    width: 100%;
    background: #0085d0;
  }
}
</style>