<template>
  <div>
    <div class="card-item" v-for="(item,index) in itemArray" :key="index">
      <router-link :to="item.link" class="item-a">
        <!-- <div class="image-box" v-bind:style="{'background-image':'url('+item.src+')'}"></div> -->
        <div class="image-box">
          <van-image class="image" :src="item.src" />
        </div>
        <div class="btm-operation">
          <p class="title">{{item.title}}</p>
          <p
            class="operation"
            v-if="mode == 'member_appointment'"
            :class="item.type == 1 ? 'sign_up_btn' : 'sign_down_btn'"
          ></p>
          <p
            class="operation"
            v-if="mode == 'research_activities'"
            :class="item.type == 1 ? 'schedule_classes_up_btn' : 'schedule_classes_down_btn'"
          ></p>
        </div>
        <div
          class="sign"
          v-if="mode == 'member_appointment'"
          :class="item.type == 1 ? 'sign_up_logo' : 'sign_down_logo'"
        ></div>
        <div
          class="sign"
          v-if="mode == 'research_activities'"
          :class="item.type == 1 ? 'schedule_classes_up_logo' : 'schedule_classes_down_logo'"
        ></div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "card_item",
  props: {
    data_arr: {
      type: Array,
      default: []
    },
    mode: {
      type: String
    }
  },
  data() {
    return {
      itemArray: this.data_arr
    };
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.card-item {
  width: 340px;
  // height: 200px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 7.5px;
  position: relative;
  .item-a {
    // display: flex;
    // flex-direction: column;
    // align-content: space-between;
    // height: 100%;
  }
  .image-box {
    display: flex;
    justify-content: center;
    .image {
      width: (680px / 2);
      height: (360px / 2);
    }
    /deep/ .van-image__img {
      border-radius: 10px;
      box-shadow: 0 8px 14px rgba(117, 117, 117, 0.4);
    }
  }
  .btm-operation {
    width: 100%;
    box-sizing: border-box;
    padding: 0 17.5px;
    height: calc(100% - 160px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    .title {
      font-size: 12.5px;
      letter-spacing: 1px;
      color: #333;
      font-weight: 600;
    }
    .operation {
      width: 50px;
      height: 20px;
      background-size: 100% 100%;
      &.sign_up_btn {
        background-image: url(../assets/sign_up_btn.png);
      }
      &.sign_down_btn {
        width: (176px / 2);
        height: 25px;
        background-image: url(../assets/see_details.png);
      }
      &.schedule_classes_up_btn {
        background-image: url(../assets/schedule_classes_up_btn.png);
      }
      &.schedule_classes_down_btn {
        width: (176px / 2);
        height: 25px;
        background-image: url(../assets/see_details.png);
      }
    }
  }
  .sign {
    width: 68.5px;
    height: 69px;
    background-size: 100% 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    &.sign_up_logo {
      background-image: url(../assets/sign_up_logo.png);
    }
    &.sign_down_logo {
      background-image: url(../assets/sign_down_logo.png);
    }
    &.schedule_classes_up_logo {
      background-image: url(../assets/schedule_classes_up_logo.png);
    }
    &.schedule_classes_down_logo {
      background-image: url(../assets/schedule_classes_down_logo.png);
    }
  }
}
</style>
