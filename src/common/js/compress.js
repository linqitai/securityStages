
import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'
export default {
  install(Vue) {
    //  初始化方法
    Vue.prototype.initilize = function (opt) {
      Indicator.open('请等待')
      this.options = opt
      this.resultObj = opt.resultObj
      this.filebase64 = ''
      this.crop(this.options.compressRaTio)
    }
    /**
     * 文件转base64字符串
     * @param file
     * @return
     */
    Vue.prototype.fileToBase64 = function (file) {
      var url = null
      if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file)
      }
      return url
    }
    // 外部接口，用于input['file']对象change时的调用
    Vue.prototype.clip = function (e, opt) {
      this.fileObj = e.srcElement

      let files = e.target.files || e.dataTransfer.files

      if (!files.length) return false  // 不是图片直接返回

      // 获取图片文件资源
      this.picValue = files[0]
      this._fileToBase64(e, files[0])
      // 调用初始化方法
      this.initilize(opt)
    }
    Vue.prototype._fileToBase64 = function (e, file) {
      let self = this
      var reader = new FileReader()
      reader.onload = (function (file) {
        return function (e) {
          self.filebase64 = this.result // 这个就是base64的数据了
          console.log(this.result)
        }
      })(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
    }
    // 点击确定进行裁剪
    Vue.prototype.crop = function (compressRaTio) {
      let self = this
      let image = new Image()
      let imgData = self.filebase64
      setTimeout(function () {
        image.src = imgData
        // 判断图片是否大于300k,不大于直接上传，反之压缩
        if (imgData.length < (1000 * 1024)) {
          console.log(`图片大小${imgData.length},图片小于1M，直接上传`)
          // self.resultObj.src = imgData
          // 图片上传
          self.postImg(imgData)
        } else {
          console.log(`图片大小${(imgData.length / (1000 * 1024))}M,图片大于1M，进行压缩`)
          image.onload = function () {
            // 压缩处理
            let data = self.compress(image, self.Orientation, compressRaTio)
            // self.resultObj.src = data
            // 图片上传
            self.postImg(data)
          }
        }
      }, 20)
    }
    // 销毁原来的对象
    Vue.prototype.destoried = function () {
      Indicator.close()
    }
    Vue.prototype.convertBase64UrlToBlob = (dataurl) => {
      let arr = dataurl.split(',')
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], {
        type: 'image/png'
      })
    }
    // 图片上传
    Vue.prototype.postImg = function (data) {
      let self = this
      // 这边写图片的上传
      let blob = self.convertBase64UrlToBlob(data)
      var params = new FormData()
      params.append('file', blob)
      console.log(params)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      } // 添加请求头
      axios.post('/zyd/common/upload/image.json', params, config).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          console.log('---------pic----------')
          console.log(res.data.obj.url)
          self.resultObj.src = res.data.obj.url
        } else {
          Toast(res.error)
        }
        // 上传完后摧毁对象
        self.destoried()
      }).catch(res => {
        Toast('服务器出错，请重新选择照片试试')
        // 上传完后摧毁对象
        self.destoried()
      })
    }

    // 图片压缩
    Vue.prototype.compress = function (img, Orientation, compressRaTio) {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      // 瓦片canvas
      let tCanvas = document.createElement('canvas')
      let tctx = tCanvas.getContext('2d')
      let initSize = img.src.length
      let width = img.width
      let height = img.height

      //  如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio
      if ((ratio = width * height / 4000000) > 1) {
        ratio = Math.sqrt(ratio)
        width /= ratio
        height /= ratio
      } else {
        ratio = 1
      }
      canvas.width = width
      canvas.height = height
      //         铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      //  如果图片像素大于100万则使用瓦片绘制
      let count
      if ((count = width * height / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1) //  计算要分成多少块瓦片
        //  计算每块瓦片的宽和高
        let nw = ~~(width / count)
        let nh = ~~(height / count)
        tCanvas.width = nw
        tCanvas.height = nh
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh)
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height)
      }
      //  修复ios上传图片的时候 被旋转的问题
      if (Orientation !== '' && Orientation !== 1) {
        switch (Orientation) {
          case 6://  需要顺时针（向左）90度旋转
            this.rotateImg(img, 'left', canvas)
            break
          case 8://  需要逆时针（向右）90度旋转
            this.rotateImg(img, 'right', canvas)
            break
          case 3://  需要180度旋转
            this.rotateImg(img, 'right', canvas)//  转两次
            this.rotateImg(img, 'right', canvas)
            break
        }
      }
      //  进行最小压缩 console.log(`图片大小${(imgData.length / (1000 * 1024))}M,图片小于1M，进行压缩`)
      let ndata = canvas.toDataURL('image/jpeg', compressRaTio)
      console.log('压缩比例:' + compressRaTio)
      console.log('压缩前：' + initSize / (1000 * 1024) + 'M')
      console.log('压缩后：' + ndata.length / (1000 * 1024) + 'M')
      console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + '%')
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0

      return ndata
    }

    //  添加事件
    Vue.prototype.addEvent = function (obj, type, fn) {
      if (obj.addEventListener) {
        obj.addEventListener(type, fn, false)
      } else {
        obj.attachEvent('on' + type, fn)
      }
    }
    //  移除事件
    Vue.prototype.removeEvent = function (obj, type, fn) {
      if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false)
      } else {
        obj.detachEvent('on' + type, fn)
      }
    }
  }
}
