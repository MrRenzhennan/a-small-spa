<template>
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
      <label class="btn btn-orange" for="uploads">选择图片</label>
      <div @click="changeScale(1)">放大</div>
      <div @click="changeScale(-1)">缩小</div>
      <div @click="rotateLeft">左旋转</div>
      <div @click="rotateRight">右旋转</div>
      <div @click="down('blob')">下载</div>
    </div>
    <div class="ok-none">
      <van-button type="primary" @click="finish('blob')">确认</van-button>
      <van-button type="default">取消</van-button>
    </div>
    <div class="review">
      <van-image class="heard-img" :src="headImg" />
      <div class="review-image">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
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
        @realTime="realTime"
        @imgLoad="imgLoad"
      ></vueCropper>
    </div>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
//   import Api from '@/js/api.js' //接口url配置文件

export default {
  data() {
    return {
      headImg: "",
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
      },
      previews: {}
    };
  },
  components: {
    VueCropper
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
    // 实时预览函数
    realTime(data) {
      this.previews = data;
    },
    //选择图片后触发
    imgLoad(msg) {
      console.log("imgLoad");
      console.log(msg);
    },
    //放大/缩小
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    //坐旋转
    rotateLeft() {
      console.log("rotateLeft");
      this.$refs.cropper.rotateLeft();
    },
    //右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    //下载图片
    down(type) {
      let aLink = document.createElement("a");
      aLink.download = "author-img";
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          this.downImg = window.URL.createObjectURL(data);
          aLink.href = window.URL.createObjectURL(data);
          aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          this.downImg = data;
          aLink.href = data;
          aLink.click();
        });
      }
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
          console.log(formData.get('file'));
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
.vue-cropper {
  width: 100%;
  //   height: 100vh;
  #uploads {
    display: none;
    clip: rect(0 0 0 0);
  }
  .opaction {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .ok-none {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    margin-top: 20px;
  }
  .review {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    .heard-img {
      width: 61px;
      height: 61px;
      border-radius: 50%;
      overflow: hidden;
      img {
        border-radius: 50%;
      }
    }
    .review-image {
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  .cropper {
    width: 100%;
    margin-top: 10px;
    height: calc(100vh - 234px - 61px);
  }
}
</style>