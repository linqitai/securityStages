<template>
  <header :style="styleObject">
    <div class="backImg" @click="back">
    </div>
    <div class="text">
      <slot></slot>
    </div>
    <div class="helpIcon" @click="helpEvent" v-show="help!=='2'">
    </div>
  </header>
</template>
<script>
export default {
  props: {
    help: {
      type: String
    }
  },
  data() {
    return {
      styleObject: {
        top: ''
      }
    }
  },
  created() {
    let self = this
    mui.plusReady(function() {
      if (plus.navigator.isImmersedStatusbar()) {
        self.styleObject.top = plus.navigator.getStatusbarHeight() + 'px'
      }
    })
  },
  methods: {
    back() {
      console.log('back')
      var ws = plus.webview.currentWebview()
      plus.webview.close(ws)
      // this.$router.go(-1)
      // let ua = navigator.userAgent.toLowerCase()
      // if (/iphone|ipad|ipod/.test(ua)) {
      //   console.log('iphone')
      //   popToViewController()
      // } else if (/android/.test(ua)) {
      //   console.log('android')
      //   htmlToJava.popToViewController()
      // }
      // console.log('back')
    },
    helpEvent() {
      this.$router.push('/help')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
header {
  // margin-top: 24px;
  @include border($color:#c7c7c7);
  @include topHeader();
  width: 100%;
  height: 44px;
  font-size: 18px;
  color: #323232;
  background-color: #ffffff;
  .text {
    width: 100%;
    line-height: 44px;
    text-align: center;
  }
  .backImg {
    width: 10px;
    height: 17px;
    background-image: url('../common/images/btn_back.png');
    background-size: 100% 100%;
    @include extend-click();
    position: absolute;
    top: 14px;
    left: 15px;
  }
  .helpIcon {
    width: 16px;
    height: 17px;
    background-image: url('../common/images/question.png');
    background-size: 100% 100%;
    @include extend-click();
    position: absolute;
    top: 14px;
    right: 15px;
  }
}
</style>

