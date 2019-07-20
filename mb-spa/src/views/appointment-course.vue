<!-- 预约场次 -->
<template>
  <div>
    <div class="appointment-course">
      <NavBar title="选择场次" />
      <div class="city">北京市 ></div>
      <div class="split"></div>
      <div class="left">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="海淀区" name="1">
            <div
              class="collapse-item"
              :class="collapseactive == '1' ?'isActive' : '' "
              @click="CollapseActive('1')"
            >海淀区某某某实验室</div>
            <div
              class="collapse-item"
              :class="collapseactive == '2' ?'isActive' : '' "
              @click="CollapseActive('2')"
            >海淀区某某某实验室</div>
          </van-collapse-item>
          <van-collapse-item title="海淀区" name="2">
            <div class="collapse-item">海淀区某某某实验室</div>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="split-y"></div>
      <div class="right">
        <div class="detil-adress">海淀区某某某实验室海淀区某某某实验室海淀区某某某实验室海淀区某某某实验室海淀区某某某实验室海淀区某某某实验室</div>
        <div class="split"></div>
        <div class="course">
          <div class="item isActive">
            <div class="item-left">
              <p class="t">周日 6月16日</p>
              <p class="b">9.30 - 10.30</p>
            </div>
            <div class="item-right">
              <p class="t">少儿</p>
              <p class="b">剩余：5</p>
            </div>
          </div>
          <div class="item">
            <div class="item-left">
              <p class="t">周日 6月16日</p>
              <p class="b">9.30 - 10.30</p>
            </div>
            <div class="item-right">
              <p class="t">少儿</p>
              <p class="b">剩余：5</p>
            </div>
          </div>
          <div class="item">
            <div class="item-left">
              <p class="t">周日 6月16日</p>
              <p class="b">9.30 - 10.30</p>
            </div>
            <div class="item-right">
              <p class="t">少儿</p>
              <p class="b none">剩余：0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bott-btn" @click="Appointmen">预约</div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  components: { NavBar },
  name: "",
  data() {
    return {
      activeNames: ["1"],
      collapseactive: "1"
    };
  },
  methods: {
    CollapseActive(val) {
      this.collapseactive = val;
    },
    Appointmen() {
      this.$dialog
        .confirm({
          title: "预约提示",
          message: "场次预约成功",
          confirmButtonText: "去主页",
          showCancelButton:false
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.appointment-course {
  height: calc(100vh - 50px);
  overflow: hidden;
  background: #ececec;
}
.city {
  width: 100%;
  height: (95px / 2);
  background: #1d95d4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
}
.split {
  width: 100%;
  height: 10px;
  background: #ececec;
}
.left {
  width: (270px / 2);
  height: calc(100vh - 46px - 47.5px - 10px - 50px);
  overflow-y: auto;
  display: inline-block;
  background: #fff;
  /deep/ .van-collapse-item {
    border-bottom: 1px solid #d2eaf6a1;
    .van-collapse-item__wrapper {
      .van-collapse-item__content {
        padding: 0;
        .collapse-item {
          padding: 15px 4px;
          text-align: center;
          position: relative;
          border-bottom: 1px solid #f7f7f7;
        }
      }
    }
  }
  /deep/ .van-cell {
    background: #d2eaf6;
    color: #2e323e;
    .van-cell__title {
      text-align: center;
    }
    .van-icon {
      color: #1d95d4;
    }
  }
}
.split-y {
  width: 10px;
  height: calc(100vh - 46px - 47.5px - 10px - 50px);
  background: #ececec;
  display: inline-block;
}
.isActive::after {
  content: "";
  position: absolute;
  width: 4px;
  background: #1d95d4;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0 4px 4px 0;
}
.right {
  width: calc(100vw - (270px / 2) - 10px);
  height: calc(100vh - 46px - 47.5px - 10px - 50px);
  overflow-y: auto;
  display: inline-block;
  .detil-adress {
    width: 100%;
    height: 100px;
    border-radius: 10px 0px 0px 10px;
    background: #fff;
    overflow-y: auto;
    padding: 10px;
    box-sizing: border-box;
    letter-spacing: 1px;
    font-size: 14px;
    color: #2e323e;
  }
  .course {
    width: 100%;
    height: calc(100vh - 46px - 47.5px - 10px - 100px - 10px - 50px);
    overflow-y: auto;
    .item {
      width: 100%;
      height: (135px / 2);
      background: #fff;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      position: relative;
      .item-left {
        margin-left: 20px;
        color: #a8a8a8;
        .t {
          margin-bottom: 5px;
        }
      }
      .item-right {
        font-size: 12px;
        .t {
          width: 50px;
          height: (35px / 2);
          background: #d2eaf6;
          border-radius: (35px / 2) 0 0 (35px / 2);
          text-align: center;
          color: #329bdc;
          letter-spacing: 1px;
        }
        .b {
          margin-left: -10px;
          margin-top: 8px;
          color: #f02c2d;
        }
        .none {
          color: #a8a8a8;
        }
      }
    }
    .isActive {
      .item-left {
        color: #1d95d4;
      }
    }
  }
}
.bott-btn {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  background: #1d95d4;
}
</style>
