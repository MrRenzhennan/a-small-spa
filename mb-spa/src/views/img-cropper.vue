<template>
  <div class="img-cropper">
    <NavBar title left_text="返回" />
    <div class="vue-cropper">
      <input
        type="file"
        id="uploads"
        :value="imgFile"
        style
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event)"
      />
      <div class="opaction">
        <div class="btn b1">
          <label for="uploads">选择图片</label>
        </div>
        <div class="btn b2" @click="finish('blob')">确认</div>
      </div>

      <div class="cropper">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="true"
          :full="option.full"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixedBox="option.fixedBox"
        ></vueCropper>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
import { VueCropper } from "vue-cropper";
//   import Api from '@/js/api.js' //接口url配置文件

export default {
  data() {
    return {
      fileName: "", //上传图片名称
      imgFile: "",
      option: {
        img: "", //图片对象
        outputSize: 1, //剪切后的图片质量（0.1-1）
        full: false, //输出原图比例截图 props名full
        outputType: "png",
        canMove: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 150,
        autoCropHeight: 150,
        fixedBox: true
      }
    };
  },
  components: {
    VueCropper,
    NavBar
  },
  methods: {
    //选择本地图片
    uploadImg(e, num) {
      //上传图片
      var file = e.target.files[0];
      this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        this.$toast("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        this.option.img = data;
      };
      // 转化为base64
      //   reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },

    //上传图片
    finish(type) {
      let _this = this;
      let formData = new FormData();
      // 输出
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          console.log(data);
          let img = window.URL.createObjectURL(data);
          this.model = true;
          this.modelSrc = img;
          formData.append("file", data, this.fileName);
          //这里调用接口
          console.log(formData.get("file"));
          // this.$http.post(Api.uploadSysHeadImg.url, formData, {contentType: false, processData: false, headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
          // .then((response)=>{
          //   var res = response.data;
          //   if(res.success == 1){
          //     $('#btn1').val('');
          //     this.imgFile = '';
          //     this.headImg = res.realPathList[0];  //完整路径
          //     this.uploadImgRelaPath = res.relaPathList[0];  //非完整路径
          //     this.$message({　　//element-ui的消息Message消息提示组件
          //       type: 'success',
          //       message: '上传成功'
          //     });
          //   }
          // })
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          this.model = true;
          this.modelSrc = data;
        });
      }
    }
  }
};
</script>

<style lang="scss">
.img-cropper {
  /deep/ .van-nav-bar__text {
    color: #333;
  }
}

.vue-cropper {
  width: 100%;
  #uploads {
    display: none;
    clip: rect(0 0 0 0);
  }
  .opaction {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    margin-top: 10px;
    box-sizing: border-box;
    .btn {
      width: 100px;
      height: 35px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.b1 {
        color: #323233;
        background-color: #fff;
        border: 1px solid #ebedf0;
      }
      &.b2 {
        color: #07c160;
        border: 1px solid #07c160;
      }
    }
  }
  .cropper {
    width: 100%;
    margin-top: 10px;
    height: calc(100vh - 50px - 55px);
  }
}
</style>