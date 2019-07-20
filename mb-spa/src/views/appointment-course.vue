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
        <div class="detil-adress"></div>
        <div class="split"></div>
        <div class="course">
          <div class="course-item">

          </div>
        </div>
      </div>
    </div>
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
    }
  }
};
</script>

<style lang='scss' scoped>
.appointment-course {
  height: 100vh;
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
  height: calc(100vh - 46px - 47.5px - 10px);
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
  height: calc(100vh - 46px - 47.5px - 10px);
  background: #ececec;
  display: inline-block;
}
.right {
  width: calc(100vw - (270px / 2) - 10px);
  height: calc(100vh - 46px - 47.5px - 10px);
  overflow-y: auto;
  display: inline-block;
  .detil-adress{
    width: 100%;
    height: 100px;
    border-radius: 10px 0px 0px 10px; 
    background: #fff;
  }
  .course{
    width: 100%;
    height: calc(100vh - 46px - 47.5px - 10px);
  }
}
</style>
