/*  说明：
 *  插件文件：createVue.js
 *  作者：林祺泰  QQ：514917919
 * */
export default {
  install: function (Vue, options) {
    Vue.prototype.seekClass = (obj, sClass) => {
      var aClass = obj.className.split(' ')
      if (!obj.className) {
        return false
      }
      for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
          return true
        }
      }
    }
    Vue.prototype.addClass = function (obj, sClass) {
      var aClass = obj.className.split(' ')
      if (!obj.className) {
        return void (obj.className = sClass)
      }
      for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
          return
        }
      }
      obj.className += ' ' + sClass
    }
    Vue.prototype.removeClass = function (obj, sClass) {
      var aClass = obj.className.split(' ')
      if (obj.className) {
        for (var i = 0; i < aClass.length; i++) {
          if (aClass[i] === sClass) {
            aClass.splice(i, 1)
            obj.className = aClass.join(' ')
            break
          }
        }
      }
    }
  }
}
