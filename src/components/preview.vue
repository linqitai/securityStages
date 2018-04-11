<template>
  <div>
    <div>
      <div>123</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
header {
  height: 44px;
  font-size: 18px;
  color: #323232;
  background-color: #ffffff;
  .text {
    width: 100%;
    line-height: 44px;
    text-align: center;
  }
  .back-img {
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

