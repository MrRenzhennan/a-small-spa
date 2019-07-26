<!-- 设置 -->
<template>
  <div>
    <div>
      <NavBar title="设置" />
    </div>
    <div class="split"></div>
    <div class="list">
      <div class="list-item" @click="GetHeard">
        <van-nav-bar>
          <div class slot="left">
            <span class>头像</span>
          </div>
          <div class slot="right">
            <div class="img-box">
              <van-image class="heard-img" :src="require('../assets/heard.png')" />
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item">
        <van-nav-bar>
          <div class slot="left">
            <span class>用户ID</span>
          </div>
          <div class slot="right">
            <div>
              <span>123456</span>
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item" @click="ChangePwd">
        <van-nav-bar>
          <div class slot="left">
            <span class>修改密码</span>
          </div>
          <div class slot="right">
            <div>
              <span class="prompt">修改我的密码</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item" @click="GetName">
        <van-nav-bar>
          <div class slot="left">
            <span class>昵称</span>
          </div>
          <div class slot="right">
            <div>
              <span class="prompt">设置我的昵称</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item" @click="GetBirthday">
        <van-nav-bar>
          <div class slot="left">
            <span class>生日</span>
          </div>
          <div class slot="right">
            <div>
              <span class="prompt">设置我的生日</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item" @click="GetGender">
        <van-nav-bar>
          <div class slot="left">
            <span class>性别</span>
          </div>
          <div class slot="right">
            <div>
              <span class="prompt">去设置</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item" @click="GetAddress">
        <van-nav-bar>
          <div class slot="left">
            <span class>我的地址</span>
          </div>
          <div class slot="right">
            <div>
              <span class="prompt">去设置</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item border-bottom-none" @click="GetCuteBaby">
        <van-nav-bar>
          <div class slot="left">
            <span class>我的萌宝</span>
          </div>
          <div class slot="right">
            <div>
              <span class="prompt">去设置</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
    </div>
    <div class="split"></div>
    <div class="list">
      <div class="list-item" @click="AboutUs">
        <van-nav-bar>
          <div class slot="left">
            <span class>关于我们</span>
          </div>
          <div class slot="right">
            <div>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="list-item" @click="ServiceAgreement">
        <van-nav-bar>
          <div class slot="left">
            <span class>服务协议</span>
          </div>
          <div class slot="right">
            <div>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-nav-bar>
      </div>
      <div class="GoOut" @click="GoOut">退出账号</div>
    </div>
    <van-action-sheet
      v-model="GetHeardshow"
      :actions="GetHeardactions"
      cancel-text="取消"
      :safe-area-inset-bottom="true"
      @select="GetHeardonSelect"
    />
    <van-dialog v-model="GetNameshow" title="编辑昵称" show-cancel-button>
      <div class="id-input">
        <input type="text" />
      </div>
    </van-dialog>
    <van-action-sheet
      v-model="GetGenderdshow"
      :actions="GetGenderdactions"
      cancel-text="取消"
      :safe-area-inset-bottom="true"
      @select="GetGenderdonSelect"
    />
    <van-popup v-model="GetBirthdayshow" position="bottom">
      <van-datetime-picker
        v-model="BirthdayDate"
        type="date"
        :min-date="new Date('1800-01-01')"
        @confirm="confirmBirthday"
        @cancel="cancelBirthday"
      />
    </van-popup>
    <van-dialog v-model="GetCuteBabyshow" title="萌宝卡" show-cancel-button>
      <div class="el-form id-input">
        <van-radio-group v-model="radio">
          <van-radio name="1">小公主</van-radio>
          <van-radio name="2">小王子</van-radio>
        </van-radio-group>
        <div class="input-name">
          <span>姓名</span>
          <input type="text" />
        </div>
        <div class="input-name" @click="GetChildBirthday">
          <span>生日</span>
          <input type="text" disabled />
        </div>
      </div>
    </van-dialog>

    <van-popup v-model="ChildGetBirthdayshow" position="bottom">
      <van-datetime-picker
        v-model="ChildGetBirthday"
        type="date"
        :min-date="new Date('1800-01-01')"
        @confirm="confirmChildBirthday"
        @cancel="cancelChildBirthday"
      />
    </van-popup>

    <vueCropper
      ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
      :info="false"
      :full="option.full"
      :canMove="option.canMove"
      :canMoveBox="option.canMoveBox"
      :fixedBox="option.fixedBox"
      :original="option.original"
      :autoCrop="option.autoCrop"
      :fixed="option.fixed"
      :fixedNumber="option.fixedNumber"
      @realTime="realTime"
    ></vueCropper>
    <div class="btn">
      <a>取消</a>
      <a @click="finish('base64')">确定</a>
    </div>

    <!-- 生成预览图片-->
    <div
      class="show-preview"
      :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}"
    >
      <div :style="previews.div">
        <img :src="previews.url" :style="previews.img" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
import { VueCropper } from "vue-cropper";
export default {
  components: {
    NavBar,
    vueCropper
  },
  data() {
    return {
      GetHeardshow: false,
      GetHeardactions: [{ name: "拍照" }, { name: "从手机相册选择" }],
      GetNameshow: false,
      GetGenderdshow: false,
      GetBirthdayshow: false,
      BirthdayDate: "",
      GetGenderdactions: [{ name: "保密" }, { name: "男" }, { name: "女" }],
      GetCuteBabyshow: false,
      radio: "",
      ChildGetBirthday: "",
      ChildGetBirthdayshow: false,
      previews: {},
      option: {
        img: "", //裁切图片的地址
        outputSize: 0.6, //裁剪生成图片的质量 0.1-1
        full: false, //是否输出原图比例的截图
        outputType: "png", //裁剪生成图片的格式
        canMove: true, //图片是否允许滚轮缩放
        fixedBox: true, //固定截图框大小 不允许改变
        original: false, //上传图片按照原始比例渲染
        canMoveBox: false, //截图框能否拖动
        canMove: true, // 上传图片是否可以移动
        //              autoCropWidth: 200,
        //              autoCropHeight: 200,
        autoCrop: true, //是否默认生成截图框
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      }
    };
  },

  computed: {},
  created() {
    this.option.img = require("../assets/swiper_bg1.png");
  },
  methods: {
    finish(type) {
      var that = this;
      // 输出
      //          var test = window.open('about:blank')
      //          test.document.body.innerHTML = '图片生成中..'
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          //var test = window.open('')
          //test.location.href = window.URL.createObjectURL(data)
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          //裁切生成的base64图片
          console.log(data);
          this.crap = false;
        });
      }
    },
    realTime(data) {
      this.previews = data;
    },

    GetChildBirthday() {
      this.ChildGetBirthdayshow = true;
    },
    confirmChildBirthday() {
      this.ChildGetBirthdayshow = false;
    },
    cancelChildBirthday() {
      this.ChildGetBirthdayshow = false;
    },
    //头像
    GetHeard() {
      this.GetHeardshow = true;
    },
    GetHeardonSelect(item) {
      console.log(item);
      this.GetHeardshow = false;
    },
    //修改密码
    ChangePwd() {
      this.$router.push("/forget_password");
    },
    //昵称
    GetName() {
      this.GetNameshow = true;
    },
    //生日
    GetBirthday() {
      this.GetBirthdayshow = true;
    },
    confirmBirthday() {
      this.GetBirthdayshow = false;
    },
    cancelBirthday() {
      this.GetBirthdayshow = false;
    },
    //性别
    GetGender() {
      this.GetGenderdshow = true;
    },
    GetGenderdonSelect() {
      this.GetGenderdshow = false;
    },
    //我的地址
    GetAddress() {
      this.$router.push("/address-my");
    },
    //萌宝卡
    GetCuteBaby() {
      this.GetCuteBabyshow = true;
    },
    AboutUs() {
      this.$router.push("/about-us");
    },
    //服务协议
    ServiceAgreement() {
      this.$router.push("/service-agreement");
    },
    //退出登陆
    GoOut() {}
  }
};
</script>
<style lang='scss' scoped>
.wrapper {
  position: fixed;
  width: 100%;
  top: 0;
  height: calc(100% - 50px);
}
.vue-cropper {
  background: black;
  background-image: none !important;
}
.btn {
  height: 50px;
  background: #565656;
  width: 100%;
  padding: 0 15px;
}
.btn a {
  color: white;
  font-size: 0.16rem;
  display: inline-block;
  line-height: 50px;
}
.btn a:nth-of-type(1) {
  float: left;
}
.btn a:nth-of-type(2) {
  float: right;
}

.split {
  width: 100%;
  height: 10px;
  background: #ececec;
}
.id-input {
  width: 250px;
  margin: 10px auto 10px auto;
  input {
    width: 100%;
    height: 30px;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 5px;
    background: #fff;
  }
}
.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  /deep/ .van-radio-group {
    display: flex;
    justify-content: space-around;
    width: 200px;
    margin-top: 10px;
    .van-radio__label {
      margin-left: 3px;
      font-size: 12px;
    }
    .van-icon {
      font-size: 12px;
    }
  }
  .input-name {
    display: flex;
    align-items: center;
    margin-top: 15px;
    span {
      width: 40px;
      font-size: 12px;
    }
    input {
      width: calc(100% - 30px);
      font-size: 12px;
    }
  }
}
.list {
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;

  .prompt {
    color: #b9b9b9;
  }
  /deep/ .van-nav-bar {
    color: #212121;
    // border-bottom: 1px solid #ececec;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    .heard-img {
      width: 35px;
      height: 35px;
    }
    .img-box img {
      margin-top: 13px;
    }
    .van-icon {
      color: #b9b9b9;
      margin-right: -10px;
      margin-left: 5px;
      font-size: 18px;
    }
  }
  .border-bottom-none {
    /deep/ .van-hairline--bottom::after {
      border-bottom-width: 0px;
    }
  }
}

.GoOut {
  width: 100%;
  height: 60px;
  background: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 16px;
}

input[disabled],
input:disabled {
  border: 1px solid #b9b9b9;
  background-color: #fff;
  color: #000;
}
//IE6 Using Javascript to add CSS class "disabled"
* html input.disabled {
  border: 1px solid #b9b9b9;
  background-color: #fff;
  color: #000;
}
</style>