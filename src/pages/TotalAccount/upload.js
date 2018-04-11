
// 选择的文件对象
var reader = new FileReader()
var img = new Image()
// 缩放图片需要的canvas
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
  // 图片上传

  // canvas.toBlob = (function(blob) {
  //   console.log(blob)
  //   var params = new FormData()
  //   params.append('file', blob)
  //   params.append('type', 4)
  //   params.append('applyId', 339)
  //   console.log(params)
  //   let config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   } // 添加请求头
  //   axios.post('http://192.168.18.220:8061/common/upload/idCard.json', params, config).then(res => {
  //     console.log(res)
  //     if (res.data.code === 0) {
  //       console.log('---------pic----------')
  //       console.log(res.data.obj.url)
  //       // self.resultObj.src = res.data.obj.url
  //     } else {
  //     }
  //   })
  // })('file.type' || 'image/png')
  // canvas.toBlob(function(blob) {
  //   图片ajax上传
  //   var xhr = new XMLHttpRequest()
  //   // 文件上传成功
  //   xhr.onreadystatechange = function() {
  //     if (xhr.status == 200) {
  //       // xhr.responseText就是返回的数据
  //     }
  //   };
  //   // 开始上传
  //   xhr.open("POST", 'upload.php', true)
  //   xhr.send(blob)
  // }, file.type || 'image/png')
}
// 文件base64化，以便获知图片原始尺寸
reader.onload = function(e) {
  img.src = e.target.result
}