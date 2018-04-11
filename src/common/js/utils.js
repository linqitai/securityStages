/*  说明：
 *  插件文件：utils.js
 *  作者：林祺泰  QQ：514917919
 * */
// 判断参数中是否存在空值
export const isObjectHaveNull = (params) => {
  var isNull = false
  for (let key in params) {
    if (params[key] === '') {
      isNull = true
    }
  }
  return isNull
}
export const getFullDate = (t) => {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
}
// 获取完整的时间2
export const getFullDateTime = (t) => {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mi = time.getMinutes()
  // var s = time.getSeconds()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (mi < 10 ? '0' + mi : mi)
}
export const currency = (v) => {
  var regStrs = [
    ['^0(\\d+)$', '$1'], // 禁止录入整数部分两位以上，但首位为0
    ['[^\\d\\.]+$', ''], // 禁止录入任何非数字和点
    ['\\.(\\d?)\\.+', '.$1'], // 禁止录入两个以上的点
    ['^(\\d+\\.\\d{2}).+', '$1'] // 禁止录入小数点后两位以上
  ]
  let i
  for (i = 0; i < regStrs.length; i++) {
    let reg = new RegExp(regStrs[i][0])
    v = v.replace(reg, regStrs[i][1])
  }
  console.log('v:' + v)
  return v
}
// 字符串首尾去空格
export const trim = (str) => {
  return str.replace(/(^\s+)|(\s+$)/g, '')
}
export const dataURLtoBlob = (dataurl) => {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {
    type: mime
  })
}
// 图片上传时的字符流转化
export const convertBase64UrlToBlob = (urlData) => {
  var bytes = window.atob(urlData.split(',')[1])
  var ab = new ArrayBuffer(bytes.length)
  var ia = new Uint8Array(ab)
  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  return new Blob([ab], {
    type: 'image/png'
  })
}