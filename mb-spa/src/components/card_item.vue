<template>
  <div>
    <div class="card-item" v-for="(item,index) in itemArray" :key="index">
      <div class="image-box" v-bind:style="{'background-image':'url('+item.src+')'}"></div>
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
  width: 680px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  position: relative;
  .image-box {
    width: 100%;
    height: 320px;
    background-size: 100% 100%;
  }
  .btm-operation {
    width: 100%;
    box-sizing: border-box;
    padding: 0 35px;
    height: calc(100% - 320px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 25px;
      letter-spacing: 2px;
      color: #333;
      font-weight: 600;
    }
    .operation {
      width: 100px;
      height: 40px;
      background-size: 100% 100%;
      &.sign_up_btn {
        background-image: url(../assets/sign_up_btn.png);
      }
      &.sign_down_btn {
        background-image: url(../assets/sign_up_btn.png);
      }
      &.schedule_classes_up_btn {
        background-image: url(../assets/schedule_classes_up_btn.png);
      }
      &.schedule_classes_down_btn {
        background-image: url(../assets/schedule_classes_up_btn.png);
      }
    }
  }
  .sign {
    width: 137px;
    height: 138px;
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
