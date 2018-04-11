<template>
  <header :style="styleObject">
    <div class="backImg" @click="back">
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </header>
</template>
<script>
export default {
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
  @include border($color: #c7c7c7);
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
}
</style>

