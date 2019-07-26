<!-- 会员购买信息 -->
<template>
  <div>
    <div>
      <div>
        <NavBar title="会员购买信息" />
      </div>
      <div class="split"></div>
    </div>

    <div class="formgroup">
      <div class="input-item ignore">
        <van-field v-model="name" placeholder="请输入学生姓名" label="学生姓名"></van-field>
      </div>
      <div class="input-item ignore radio-group">
        <div class="label">学生性别</div>
        <div class="input-box">
          <label>
            <input class="radio_type" type="radio" v-model="gender" value="男" />
            <span>小王子</span>
          </label>
          <label>
            <input type="radio" v-model="gender" value="女" />
            <span>小公主</span>
          </label>
        </div>
      </div>

      <div class="input-item ignore" @click="GetBirthday">
        <van-field v-model="age" placeholder="请输入出生日期" label="出生日期" disabled></van-field>
      </div>

      <div class="input-item ignore">
        <van-field v-model="phone" placeholder="请输入手机号码" label="手机"></van-field>
      </div>

      <div class="input-item ignore">
        <van-field v-model="code" placeholder="输入验证码" label="验证码:">
          <span slot="button">获取验证码</span>
        </van-field>
      </div>

      <div class="input-item ignore" @click="GetArea">
        <van-field v-model="address" disabled placeholder="请输入地区" label="地区"></van-field>
      </div>

      <div class="input-item ignore">
        <van-field v-model="addressAll" placeholder="详细地址,如街道、楼层、门牌号" label="详细地址" />
      </div>

      <div class="input-item ignore payment-amount">
        <div class="label">支付金额 ：</div>
        <div class="money">
          合计:
          <span>¥999.0</span>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <van-button type="info" @click="registered">微信支付</van-button>
    </div>

    <van-popup v-model="GetBirthdayshow" position="bottom">
      <van-datetime-picker
        v-model="age"
        type="date"
        :min-date="new Date('1980-01-01')"
        @confirm="confirmBirthday"
        @cancel="cancelBirthday"
      />
    </van-popup>

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
  name: "member-purchase-information",
  components: { NavBar },
  name: "",
  data() {
    return {
      name: "",
      gender: "",
      age: "",
      phone: "",
      code: "",
      address: "",
      addressAll: "",
      GetAreaShow: false,
      GetBirthdayshow: false,
      province_list: province_list
    };
  },
  methods: {
    GetBirthday() {
      this.GetBirthdayshow = true;
    },
    confirmBirthday() {
      this.GetBirthdayshow = false;
    },
    cancelBirthday() {
      this.GetBirthdayshow = false;
    },
    GetArea() {
      this.GetAreaShow = true;
    },
    registered() {
      this.$router.push("/purchase-success");
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
  .radio-group {
    display: flex;
    align-items: center;
    height: 40px;
    .label {
      font-size: 15px;
      letter-spacing: 1px;
      padding-left: 5px;
      box-sizing: border-box;
    }
    .input-box {
      display: flex;
    }
    label {
      display: flex;
      align-items: center;
      color: #212121;
    }
    input {
      width: 16px;
      height: 16px;
      margin-left: 25px;
    }
    span {
      font-size: 15px;
      margin-left: 5px;
      color: #212121;
    }
    input:checked + span {
      color: #21acec;
    }
    // .radio_type {
    //   width: 16px;
    //   height: 16px;
    //   appearance: none;
    //   position: relative;
    // }
    // .radio_type:before {
    //   content: "";
    //   width: 12px;
    //   height: 12px;
    //   border: 2px solid #21acec;
    //   display: inline-block;
    //   border-radius: 50%;
    //   vertical-align: middle;
    // }
    // .radio_type:checked:before {
    //   content: "";
    //   width: 12px;
    //   height: 12px;
    //   border: 2px solid #21acec;
    //   display: inline-block;
    //   border-radius: 50%;
    //   vertical-align: middle;
    // }
    // .radio_type:checked:after {
    //   content: "";
    //   width: 8px;
    //   height: 8px;
    //   text-align: center;
    //   background: #21acec;
    //   border-radius: 50%;
    //   display: block;
    //   position: absolute;
    //   top: calc(50% - 4px);
    //   left: 5px;
    // }
    // .radio_type:checked + label {
    //   color: #edd19d;
    // }
  }

  .input-item.ignore {
    border-bottom: 1px solid #d4d4d4;
    height: 50px;
    display: flex;
    align-items: center;
    /deep/ .van-cell {
      padding: 0px 5px;
      height: 40px;
      display: flex;
      align-items: center;
      /deep/ .van-cell__title {
        width: 90px;
      }
    }
    /deep/ .van-field__control:disabled {
      color: #212121;
    }
    /deep/ .van-cell__title.van-field__label {
      font-size: 15px;
      letter-spacing: 1px;
      color: #212121;
    }
    /deep/ input {
      font-size: 15px;
      color: #212121;
    }
    .img-box-name {
      width: 21px;
      height: 21px;
    }
    .img-box-address {
      width: 18px;
      height: 22px;
    }
    /deep/ .van-field__button {
      color: #00a0e9;
    }
    /deep/ .van-field__button {
      padding: 0 10px;
    }
  }

  .input-item.ignore.payment-amount {
    margin-top: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .label {
      font-size: 12px;
      color: #919191;
    }
    .money {
      font-size: 16px;
      color: #212121;
      letter-spacing: 1px;
      span {
        font-size: 18px;
        letter-spacing: 0px;
        margin-right: 20px;
      }
    }
  }
}
.btn-box {
  width: 100%;
  text-align: center;
  /deep/ .van-button {
    width: 80%;
    border-radius: 30px;
    margin-top: 30px;
    background: linear-gradient(to right, #59caff, #00a0e9);
    border: none;
  }
}
</style>
