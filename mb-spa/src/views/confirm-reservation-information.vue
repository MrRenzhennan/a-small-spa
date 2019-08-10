<!-- 预约确认信息 -->
<template>
  <div>
    <NavBar left_text="预约确认信息" />
    <div class="info">
      <div class="item">
        <div class="label">预约单号</div>
        <div class="detail">1234567890</div>
      </div>
      <div class="item">
        <div class="label">实验主题</div>
        <div class="detail">反冲小车</div>
      </div>
      <div class="item">
        <div class="label">预约时间</div>
        <div class="detail">2019年09月09日 8:00-9:00</div>
      </div>
      <div class="item">
        <div class="label">预约实验室</div>
        <div class="detail">石家庄实验室</div>
      </div>
      <div class="item column">
        <div class="label">预约地址</div>
        <div class="detail">石家庄实验室石家庄实验室石家庄实验室石家庄实验室石家庄实验室石家庄实验室</div>
      </div>
      <div class="item">
        <div class="label">预约电话</div>
        <div class="detail">13333333333</div>
      </div>
      <div class="item bom-none">
        <div class="label">学生姓名</div>
        <div class="detail">添加学员</div>
      </div>
      <div class="student-list">
        <div class="list">
          <div class="name">张三</div>
          <div class="choose-box"></div>
        </div>
        <div class="list">
          <div class="name">张三</div>
          <div class="choose-box"></div>
        </div>
        <div class="list">
          <div class="name">张三</div>
          <div class="choose-box"></div>
        </div>
      </div>
    </div>
    <div class="argee">
      <van-checkbox v-model="checked" icon-size="15px">同意服务协议</van-checkbox>
    </div>
    <div class="btn">
      <van-button type="info" @click="OkSelectLaboratory">确认预约</van-button>
    </div>

    <van-dialog v-model="successShow" @confirm="go">
      <div class="successShow">
        <img :src="require('../assets/reservation-ok.png')" alt />
        <div class="h4">恭喜您！</div>
        <div class="h3">您已预约成功</div>
      </div>
    </van-dialog>
    <van-dialog
      v-model="failShow"
      showCancelButton
      cancelButtonText="返回"
      confirmButtonText="购买年卡"
      confirmButtonColor="#0085d0"
      @confirm="confirm"
    >
      <div class="failShow">
        <div class="img-box">
          <img :src="require('../assets/reservation-fail.png')" alt />
          <span class="h4">温馨提示</span>
        </div>
        <div class="h3">当前账户不可预约</div>
        <div class="h3 mg">您可以选择购买学院年卡</div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  data() {
    return {
      checked: true,
      successShow: false,
      failShow: false
    };
  },

  components: {
    NavBar
  },

  computed: {},

  methods: {
    OkSelectLaboratory() {
      this.failShow = true;
    },
    confirm(){
        this.successShow = true;
    },
    go(){
        this.$router.push('./scheduled-activities')
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
.successShow {
  width: 100%;
  text-align: center;
  .h4 {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #212121;
  }
  .h3 {
    font-size: 15px;
    letter-spacing: 1px;
    color: #757575;
    margin-bottom: 10px;
  }
  img {
    width: (244px / 2);
    height: (146px / 2);
    margin-top: 20px;
  }
}
.info {
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
}
.item {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  .label {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #212121;
  }
  .detail {
    font-size: 15px;
    letter-spacing: 1px;
    color: #9a9898;
  }
}
.column {
  flex-direction: column;
  padding: 15px 0px;
  .label {
    align-self: flex-start;
    margin-bottom: 5px;
  }
  .detail {
    align-self: flex-end;
  }
}
.bom-none {
  border-bottom: none;
  .detail {
    color: #0085d0;
  }
}
.student-list {
  width: 100%;
  .list {
    width: 100%;
    height: 30px;
    font-size: 14px;
    color: #212121;
    display: flex;
    align-items: center;
    .name {
      width: 80px;
    }
    .choose-box {
      width: 13px;
      height: 13px;
      box-sizing: border-box;
      border: 2px solid #212121;
      margin-left: 60px;
      &:hover {
        background: #212121;
      }
    }
  }
}
.argee {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  /deep/ .van-checkbox__label {
    font-size: 14px;
  }
}
.btn {
  width: 100%;
  .van-button {
    width: 100%;
    background: #0085d0;
  }
}
</style>