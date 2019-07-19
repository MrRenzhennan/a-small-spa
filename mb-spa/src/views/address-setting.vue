<!-- 设置地址 -->
<template>
  <div>
    <div>
      <div>
        <NavBar title="设置地址" />
      </div>
    </div>
    <div class="split"></div>
    <div class="formgroup">
      <div class="input-item ignore">
        <van-field v-model="name" placeholder="名字" label="联系人">
          <span slot="button">
            <van-image
              class="img-box"
              :width="42 / 2"
              :height="41 / 2"
              :src="require('../assets/name.jpg')"
            />
          </span>
        </van-field>
      </div>
      <div class="input-item ignore">
        <van-field v-model="phone" placeholder="11位手机号码" label="验证码:"></van-field>
      </div>
      <div class="input-item ignore" @click="GetArea">
        <van-field v-model="address" placeholder="地区信息" label="选择地区">
          <span slot="button">
            <van-image
              class="img-box"
              :width="35 / 2"
              :height="43 / 2"
              :src="require('../assets/address.png')"
            />
          </span>
        </van-field>
      </div>
      <div class="input-item ignore">
        <van-field v-model="addressAll" placeholder="街道门牌号信息" label="详细地址" />
      </div>
    </div>
    <div class="btn-box">
      <van-button type="info" @click="registered">完成</van-button>
    </div>
    <van-popup v-model="GetAreaShow" position="bottom">
      <van-area
        :area-list="province_list"
        @cancel="GetAreaShow = false"
        @confirm="GetAreaShow = false"
      />
    </van-popup>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
import province_list from "@/unit/area.js";
export default {
  components: { NavBar },
  name: "",
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      addressAll: "",
      GetAreaShow: false,
      province_list: province_list
    };
  },
  methods: {
    registered() {
      this.$router.push("/address-my");
    },
    GetArea() {
      this.GetAreaShow = true;
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
.formgroup {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0px 0 20px;
  .input-item.ignore {
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
    /deep/ .van-cell {
      padding: 0px 5px;
      height: 40px;
      display: flex;
      align-items: center;
      /deep/ .van-cell__title {
        width: 90px;
      }
    }
    /deep/ .van-cell__title.van-field__label {
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 2px;
    }
    /deep/ input {
      font-size: 16px;
    }
    /deep/ .van-field__button {
      color: #00a0e9;
    }
    /deep/ .van-field__button {
      padding: 0 10px;
    }
  }
}
.btn-box {
  width: 100%;
  text-align: center;
  /deep/ .van-button {
    width: 80%;
    border-radius: 30px;
    margin-top: 45px;
    background: linear-gradient(to right, #59caff, #00a0e9);
    border: none;
  }
}
</style>
