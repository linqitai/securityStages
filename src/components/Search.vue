<template>
  <div class="searchWrapper">
    <form class="searchBox" @submit="searchEvent($event)">
      <input id="searchText" class="width84" type="text" @keydown="listen" @blur="searchEvent" v-model="businessName" @focus="changeWidthEvent($event)" :placeholder="status===1?'查找用户手机号':'查找业务员'">
    </form>
    <div class="selectIconWrapper" @click="selectBtnEvent"><img class="selectIcon" src="../common/images/select.png" alt=""></div>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      businessName: ''
    }
  },
  methods: {
    searchEvent(e) {
      e.preventDefault()
      console.log('searchEvent')
      this.$emit('listenToChildEvent', document.getElementById('searchText').value)
    },
    selectBtnEvent() {
      this.$emit('listenToChildEvent', 'openPopup')
    },
    changeWidthEvent(e) {
      console.log(e.target)
      e.target.classList.remove('width84')
      e.target.classList.add('width100per')
    },
    listen(e) {
      if (e.keyCode === 13) {
        document.getElementById('searchText').blur()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/index.scss';
.searchWrapper {
  padding: 10px 15px;
  background: $main-bg-color;
  display: flex;
  .searchBox {
    flex: 0 0 88%;
    height: 30px;
    background: #ffffff;
    text-align: center;
    padding-left: 10px;
    border-radius: 4px;
    input {
      height: 30px;
      outline: 0;
      border: none;
      font-size: 13px;
      padding-right: 20px;
      background: url('../common/images/search.png') no-repeat 0 9px;
      padding-left: 18px;
      &.width84 {
        width: 90px
      }
      &.width100per {
        width: 100%;
      }
    }
  }
  .selectIconWrapper {
    flex: 0 0 12%;
    text-align: center;
    .selectIcon {
      margin-top: 4px;
    }
  }
}
</style>

