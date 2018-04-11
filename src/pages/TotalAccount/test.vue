<template>
  <div>
    <img src="" alt="" id="imgs" style="height:180px;width:260px;">
    <input id='file' type='file' @change="uploads"></div>
</template>
<script>
import 'blueimp-canvas-to-blob'
import axios from 'axios'
// 压缩图片需要的一些元素和对象
var reader = new FileReader()
var img = new Image()
// 选择的文件对象
var file = null
// 缩放图片需要的canvas
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')
img.onload = function() {
  // 图片原始尺寸
  var originWidth = this.width
  var originHeight = this.height
  // 最大尺寸限制
  var maxWidth = 800
  var maxHeight = 800
  // 目标尺寸
  var targetWidth = originWidth
  var targetHeight = originHeight
  // 图片尺寸超过400x400的限制
  if (originWidth > maxWidth || originHeight > maxHeight) {
    if (originWidth / originHeight > maxWidth / maxHeight) {
      // 更宽，按照宽度限定尺寸
      targetWidth = maxWidth
      targetHeight = Math.round(maxWidth * (originHeight / originWidth))
    } else {
      targetHeight = maxHeight
      targetWidth = Math.round(maxHeight * (originWidth / originHeight))
    }
  }
  // canvas对图片进行缩放
  canvas.width = targetWidth
  canvas.height = targetHeight
  // 清除画布
  context.clearRect(0, 0, targetWidth, targetHeight)
  // 图片压缩
  context.drawImage(img, 0, 0, targetWidth, targetHeight)
  // canvas转为blob并上传
}
// 文件base64化，以便获知图片原始尺寸
reader.onload = function(e) {
  img.src = e.target.result
}
export default {
  data() {
    return {
      src: '2544'
    }
  },
  watch: {
    img() {
      console.log(1)
      this.src = neesrc
    }
  },
  methods: {
    uploads() {
      var a = this.src
      file = event.target.files[0]
      // 选择的文件是图片
      if (file.type.indexOf('image') === 0) {
        reader.readAsDataURL(file)
      }
      setTimeout(() => {
        canvas.toBlob(function(blob) {
          var params = new FormData()
          params.append('file', blob)
          params.append('type', a)
          params.append('spplyId', 22)
          console.log(this)
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          } // 添加请求头
          axios.post('http://192.168.18.170:8061/common/upload/idCard.json', params, config).then(res => {
            console.log(res)
            if (res.data.code === 0) {
              document.getElementById('imgs').src = res.data.obj.url
            } else {
            }
          })
        }, file.type || 'image/png')
      }, 100)
    }
  }
}
</script>
