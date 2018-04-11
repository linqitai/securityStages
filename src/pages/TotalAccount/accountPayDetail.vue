<template>
  <div class="paydetail">
    <m-header>还款详情</m-header>
    <div class="bg mt42">
      <div class="left">还款日</div>
      <div class="center">金额</div>
      <div class="bottom">状态</div>
    </div>
    <div class="content-detail" v-for="item in List" :key="item.key">
      <div class="left">{{item.repayDate}}</div>
      <div class="center">{{item.amount/100}}</div>
      <div class="bot">{{item.status |getStatus(item.overDueDays)}}</div>
    </div>
  </div>
</template>
<script>
import MHeader from 'components/Header'
import { repatList } from '../../api/index'
import { ERR_OK } from 'common/js/common'
export default {
  components: {
    MHeader
  },
  data() {
    return {
      List: []
    }
  },
  filters: {
    getStatus(s, d) {
      if (s === 1) {
        return '未还款'
      } else if (s === 2) {
        return '已还款'
      } else if (s === 3) {
        return `已逾期${d}天`
      } else if (s === 4) {
        return '已代还'
      }
    }
  },
  created() {
    this.getDetailList()
  },
  methods: {
    getDetailList() {
      let params = {
        applyId: 1
      }
      repatList(params).then((res) => {
        if (res.code === ERR_OK) {
          this.List = res.list
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/mixin.scss';
.paydetail {
  .bg {
    height: 25px;
    background: #f5f5f5;
    display: flex;
    line-height: 25px;
    font-size: 12px;
    .left {
      flex: 0 0 170px;
      width: 170px;
      font-family: PingFang-SC-Medium;
      margin-left: 15px;
      color: #AAAAAA;
    }
    .center {
      flex: 1;
      font-family: PingFang-SC-Medium;
      color: #AAAAAA;
      text-align: center;
      margin-left: -10px;
    }
    .bottom {
      flex: 1;
      font-family: PingFang-SC-Medium;
      color: #AAAAAA;
      text-align: right;
      margin-right: 15px;
    }
  }
  .content-detail {
    height: 50px;
    display: flex;
    line-height: 50px;
    font-size: 15px;
    @include border(#e6e6e6);
    margin-left: 15px;
    .left {
      flex: 0 0 160px;
      width: 160px;
      font-family: PingFang-SC-Regular;
      color: #323232;
    }
    .center {
      flex: 1;
      font-family: PingFang-SC-Regular;
      color: #323232;
      text-align: center;
    }
    .bot {
      flex: 1;
      font-family: PingFang-SC-Regular;
      color: #323232;
      text-align: right;
      margin-right: 15px;
    }
  }
}
</style>


