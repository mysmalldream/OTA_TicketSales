<template>
  <div class="img-uploader"
       @drop="handleDrop"
       ref="uploader">
    <!--图片预览列表-->
    <div class="img-uploader-preview-list">
      <div v-for="(data,index) in imageDataList" class="img-uploader-preview">
        <div class="preview-img" @click="showLargerPreview(index)">
          <img :src="data"/>
        </div>
        <!--信息窗-->
        <div class="img-uploader-mask">
          <!-- <p class="img-uploader-file-size">10MB</p> -->
          <p class="img-uploader-file-name">{{fileNameList[index]}}</p>
        </div>
        <!-- 删除 -->
        <div class="img-uploader-delete-btn" @click="deleteImg(index)">x</div>
      </div>
      <div class="img-uploader-preview">
        <p class="img-uploader-placeholder">
          {{ placeholder }}
          <label :for="inputId" class="img-uploader-label"></label>
          <!-- input-->
          <input
            style="display: none;"
            :id="inputId"
            ref="input"
            type="file"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            multiple="multiple"
            @change="handleFileChange"/>
        </p>
      </div>
    </div>
    <!--错误提示-->
    <div class="img-uploader-error" v-if="errorText.length">{{errorText}}</div>
    <!--文件数-->
    <div class="img-uploader-count" v-if="countText.length">{{countText}}</div>
    <!-- 大图预览 -->
    <div ref="largerPreview" v-show="isShowLarger" class="largerPreview">
      <img :src="largerDataList[previewIndex]" alt="">
      <div class="preview-close-btn" @click="closePreview">x</div>
    </div>
  </div>
</template>

<script>
  // import resizeImage from '@/components/resize';
  import resizeImage from './resize';

  export default {
    props: {
      // 占位文字
      placeholder: {
        default: '+',
        type: String
      },
      // 文件更改回调
      onChange: {
        type: Function
      },
      // 图片大小的最大值(KB)
      maxSize: {
        default: 3072,
        type: Number
      }
    },
    data () {
      return {
        // input 的id
        inputId: '',
        //大图地址
        largerDataList: [],
        // 预览图片地址
        imageDataList: [],
        // 文件名
        fileNameList: [],
        // 错误提示
        errorText: '',
        // 图片计数
        countText: '',
        // 是否显示大图预览
        isShowLarger: false,
        // 大图预览索引
        previewIndex: 0
      };
    },
    computed: {
      // 格式化的文件大小，可读的
      sizeFormatted () {
        let result = 0;
        if (this.maxSize < 1024) {
          result = this.maxSize + 'K';
        } else {
          result = (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M';
        }
        return result;
      }
    },
    methods: {
      // change事件
      handleFileChange(){
        let input = this.$refs.input;
        let files = input.files;
        this.handleFile(files);
      },
      // 拖动事件
      handleDrop (e) {
        // 获取文件列表
        let files = e.dataTransfer.files;
        this.handleFile(files);
      },
      // 阻止默认事件
      preventDefaultEvent(eventName){
        document.addEventListener(eventName, function (e) {
          e.preventDefault();
        }, false);
      },
      deleteImg(index){
        this.imageDataList.splice(index, 1);
        this.largerDataList.splice(index, 1);
        this.countText = `${this.imageDataList.length}张图片`;
      },
      // 处理图片
      handleFile (files) {

        // if (files && files.length > 0) {
        //   this.fileNameList.length = 0;
        //   this.imageDataList.length = 0;
        // }

        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          let size = Math.floor(file.size / 1024);
          if (size > this.maxSize) {
            this.errorText = `文件大小不能超过${this.sizeFormatted}`;
            return false;
          }
          this.fileNameList.push(file.name);
        }

        if (files && files.length > 0) {
          this.countText = `${files.length}张图片`;
        }
        // 文件选择事件
        // this.onChange && this.onChange(files)
        this.$emit('onChange', files);

        this.preview(files);
      },
      // 读取图片data
      preview (files) {
        if (!files || !window.FileReader) return;

        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          // readAsDataURL
          // 开始读取指定的Blob对象或File对象中的内容.
          // 当读取操作完成时,readyState属性的值会成为DONE,
          // 如果设置了onloadend事件处理程序,则调用之.
          // 同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.
          reader.onload = (e) => {
            this.largerDataList.push(e.target.result)
            // this.imageDataList.push(e.target.result)
            resizeImage(e.target.result, 110, 110, (result) => {
              this.imageDataList.push(result);
            });
          };
        }
      },
      // 大图预览
      showLargerPreview(index) {
        this.isShowLarger = true
        this.previewIndex = index
      },
      closePreview() {
        this.isShowLarger = false
      }
    },
    mounted () {
      // 防止多个组件互相影响
      this.inputId = this.id || new Date().getTime();

      ['drop', 'dragenter', 'dragover', 'dragleave'].forEach((eventName) => {
        this.preventDefaultEvent(eventName);
      });
      // 大图预览居中
      const screenwidth = document.body.clientWidth;
      this.$refs.largerPreview.style.left = (screenwidth - 800) / 2 + 'px';
    },
  };
</script>

<style scoped>
  svg{
    fill: #fff;
  }
  .img-uploader {
    position: relative;
    /* margin: 100px auto; */
    width: 100%;
    min-height: 300px;
    border-radius: 5px;
    background: #ebebeb;
    box-sizing: border-box;
    padding: 20px;
  }

  .img-uploader-placeholder {
    position: relative;
    margin: 0;
    font-size: 20px;
    width: 110px;
    height: 110px;
    box-sizing: border-box;
    padding: 45px 0;
    color: #aaa;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #c3c3c3;
    background-color: #fff;
  }

  .img-uploader-preview-list {
    display: block;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }

  .img-uploader-preview {
    position: relative;
    float: left;
    display: inline-block;
    z-index: 2;
    height: 110px;
    width: 110px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
    background: #333;
  }

  .img-uploader-preview .preview-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .img-uploader-label {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
    margin-bottom: 0;
  }

  .img-uploader-mask {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 1px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
  }

  .img-uploader-delete-btn {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    width: 20px;
    height: 20px;
    color: red;
    border: 2px solid red;
    font-size: 16px;
    line-height: 20px;
    border-radius: 100%;
    cursor: pointer;
  }

  .img-uploader-file-name {
    color: white;
    font-size: 5px;
    padding-top: 10px;
    margin: 0;
    display: inline-block;
    max-width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
  }

  .img-uploader-error {
    color: #e55;
    font-size: 12px;
    position: absolute;
    bottom: -28px;
    width: 100%;
  }

  .img-uploader-count {
    color: #573e51;
    font-size: 12px;
    position: absolute;
    bottom: -28px;
    width: 100%;
  }
  .largerPreview {
    position: fixed;
    top: 100px;
    left: 0;
    border-radius: 10px;
    width: 800px;
    height: auto;
    overflow: hidden;
    z-index: 10;
  }
  .largerPreview .preview-close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    color: red;
    border: 2px solid red;
    font-size: 16px;
    line-height: 20px;
    border-radius: 100%;
    cursor: pointer;
    text-align: center;
  }
  .largerPreview img {
    width: 100%;
    height: auto;
  }

</style>
