<!-- 我的 -->
<template>
  <div>
      <div>
          <NavBar title="我的" />
      </div>
      <div class="my-bg">

      </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
components:{
    NavBar
},
  name:'',
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang='scss' scoped>
.my-bg{
  width: 100%;
  height: 145px;
  background: url(../assets/mybg.png);
  background-size: 100% 100%;
}
</style>
