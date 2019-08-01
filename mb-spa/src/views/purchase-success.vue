<!-- 购买成功 -->
<template>
  <div>
    <div>
      <div>
        <NavBar title="" />
      </div>
    </div>
    <div class="main">
        <div class="icon-box">
            <van-icon name="success" />
        </div>
        <div class="text-sc">购买成功</div>
        <div class="text-ms">您已成为科学面壁人超级会员</div>
        <van-image class="img-box" :src="require('../assets/code.png')" />
        <div class="ewmT">扫码进群</div>
        <div class="ewmT">面壁人家长交流群</div>
        <div class="btn-box">
            <van-button class="GoHome" type="info" @click="GoHome">去首页</van-button>
            <!-- <van-button class="GoClass" type="info" @click="GoClass">去约课</van-button> -->
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
      GoHome(){
          this.$router.push('/')
      },
      GoClass(){
          this.$router.push('/member_appointment')
      }
  }
};
</script>

<style lang='scss' scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-box{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #1faced;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        /deep/ .van-icon{
            color: #fff;
            font-size: 45px;
        }
    }
    .text-sc{
        color: #373737;
        margin-top: 15px;
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: 600;
    }
    .text-ms{
        color: #575757;
        margin-top: 10px;
        font-size: 18px;
        letter-spacing: 1px;
    }
    .img-box{
        width: 230px;
        height: 230px;
        margin-top: 10px;
        // margin-bottom: 13px;
    }
    .ewmT{
        color: #1faced;
        margin-top: 5px;
        font-size: 18px;
        letter-spacing: 1px;
        margin-top: 5px;
    }
    .btn-box{
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /deep/ .van-button{
            width: 120px;
            height:38px;
            line-height: 38px;
            border-radius: 38px;
            border:none;
            &.GoHome{
                // background: linear-gradient(to right, #dad9d9, #a1a1a1);
                background: linear-gradient(to right, #59caff, #01a0e9);
            }
            &.GoClass{
                background: linear-gradient(to right, #59caff, #01a0e9);
            }
        }
    }
}
</style>
