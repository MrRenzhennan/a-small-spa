<!-- 我的地址 -->
<template>
  <div>
    <div>
      <div>
        <NavBar title="我的地址" />
      </div>
    </div>
    <div class="split"></div>

    <div class="add-address" @click="Address">
      <van-nav-bar>
        <div class slot="left">
          <van-icon name="add-o" />
          <span class>新增地址</span>
        </div>
        <div class slot="right">
          <div>
            <van-icon name="arrow" />
          </div>
        </div>
      </van-nav-bar>
    </div>

    <div class="list">
      <div class="item">
        <div class="i1">
          <p class="user-name">周某某</p>
          <p class="isclick">默认</p>
        </div>
        <div class="i2">
          <p class="phone">13333333333</p>
          <p class="address">北京 北京市 昌平区 十三陵镇 涧头村村委会</p>
        </div>
        <div class="i3">
          <p class="setting">
            <router-link to="/address-setting">编辑</router-link>
          </p>
        </div>
      </div>
      <div class="item">
        <div class="i1">
          <p class="user-name">周某某</p>
        </div>
        <div class="i2">
          <p class="phone">13333333333</p>
          <p class="address">北京 北京市 昌平区 十三陵镇 涧头村村委会</p>
        </div>
        <div class="i3">
          <p class="setting">
            <router-link to="/address-setting">编辑</router-link>
          </p>
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
    return {};
  },
  methods: {
      Address(){
          this.$router.push('/address-setting')
      }
  }
};
</script>

<style lang='scss' scoped>
.split {
  width: 100%;
  height: 10px;
  background: #ececec;
}
.add-address {
  /deep/ .van-icon-add-o {
    font-size: 16px;
    margin-right: 10px;
  }
  /deep/ .van-icon-arrow{
      color: #b9b9b9;
  }
}
.list {
  font-size: 14px;
  .item {
    background: #fff;
    border-bottom: 1px solid #f4f4f4;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .i1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 30px;
      .user-name {
        font-size: 14px;
        margin-top: -10px;
        margin-bottom: 5px;
        letter-spacing: 1px;
        font-weight: 600;
        min-width: 50px;
        text-align: center;
      }
      .isclick {
        width: 50px;
        height: 22px;
        font-size: 12px;
        background: #d6f0fb;
        color: #00a0e9;
        text-align: center;
        line-height: 22px;
      }
    }
    .i2 {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .phone {
        margin-top: 10px;
        font-size: 12px;
        color: #5c5c5c;
        letter-spacing: 1px;
      }
      .address {
        margin-top: 5px;
        font-size: 14px;
        color: #000;
      }
    }
    .i3 {
      width: 100px;
      margin-left: 20px;
      border-left: 1px solid #d4d4d4;
      text-align: right;
      .setting {
        margin-right: 20px;
        letter-spacing: 1px;
        font-size: 14px;
        a {
          color: #5c5c5c;
        }
      }
    }
  }
}
</style>
