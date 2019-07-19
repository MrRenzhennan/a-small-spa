<!-- 我的专属二维码 -->
<template>
  <div>
    <div>
      <div>
        <NavBar title="我的专属二维码" />
      </div>
    </div>
    <van-image class="mycode" :src="require('../assets/my-code-link.png')" />
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
  methods: {}
};
</script>

<style lang='scss' scoped>
.mycode{
  width: 100%;
  height: calc(100vh - 46px);
  display: block;
}
</style>
