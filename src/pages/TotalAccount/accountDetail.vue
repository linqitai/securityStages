<template>
  <div>
    <m-header>详情</m-header>
    <div class="border-bg mt42"></div>
    <div class="applydetail">
      <!-- 1：提交中，2：初审中，3：初审驳回，4：已终止，5复审中 6：复审驳回，20：分期中，22：已分期，27：已过期 -->
      <div class="first-other">
        <div class="title" v-if="detailList.status">{{detailList.status | getStatusText}}</div>
        <div class="center" v-if="detailList.failReason">{{detailList.failReason}}</div>
        <div class="btn" v-if="employeeType === 1" @click="apply">重新申请</div>
      </div>
      <div class="border-bg"></div>
      <div class="content-thir" v-if="detailList.employeeName">
        <div class="comfont">业务员</div>
        <span class="comcolor">{{detailList.employeeName}}</span>
      </div>
      <div class="content-thir-b" v-if="detailList.employeeMobile">
        <div class="comfont">手机号</div>
        <span class="comcolor">{{detailList.employeeMobile}}</span>
      </div>
      <div class="border-bg"></div>
      <div class="content-thir" v-if="detailList.employee2Name">
        <div class="comfont">审核员</div>
        <span class="comcolor">{{detailList.employee2Name}}</span>
      </div>
      <div class="content-thir-b" v-if="detailList.employee2Mobile">
        <div class="comfont">手机号</div>
        <span class="comcolor">{{detailList.employee2Mobile}}</span>
      </div>
      <div class="border-bg"></div>
      <div class="content-thir" v-if="detailList.name">
        <div class="comfont">用户姓名</div>
        <span class="comcolor">{{detailList.name}}</span>
      </div>
      <div class="content-thir-b" v-if="detailList.idNo">
        <div class="comfont">身份证号</div>
        <span class="comcolor">{{detailList.idNo}}</span>
      </div>
      <div class="content-thir-b" v-if="detailList.mobile">
        <div class="comfont">用户手机号</div>
        <span class="comcolor">{{detailList.mobile}}</span>
      </div>
      <div class="border-bg"></div>
      <div class="content-thir" v-if="detailList.productNoFinal === '1'">
        <div class="comfont">门头店名</div>
        <span class="comcolor">{{detailList.shopName}}</span>
      </div>
      <div class="content-thir-b">
        <div class="comfont">所在地区</div>
        <span class="comcolor">{{detailList.provinceName}}{{detailList.cityName}}{{detailList.areaName}}</span>
      </div>
      <!-- <div class="content-thir-b" v-if="detailList.address">
        <div class="comfont">具体地址</div>
        <span class="comcolor">{{detailList.address}}</span>
      </div> -->
      <div style="margin-left:15px;margin-bottom:15px;" v-if="detailList.address">
        <div class="comfont" style="float:left;width:60px;">具体地址</div>
        <span class="comcolor" style="display:block;padding-left:60px;line-height:16px;text-align:right;margin-right:15px;">{{detailList.address}}</span>
      </div>
      <!-- <div class="content-thir-b" v-if="detailList.address">
        <div class="comfont"></div>
        <span class="comcolor">{{detailList.address}}</span>
      </div> -->
      <div class="border-bg"></div>
      <div class="content-thir" v-if="detailList.productName">
        <div class="comfont">安保商品</div>
        <span class="comcolor">{{detailList.productName}}</span>
      </div>
      <div class="content-thir-b" v-if="detailList.orderNo">
        <div class="comfont">订单编号</div>
        <span class="comcolor">{{detailList.orderNo}}</span>
      </div>
      <div class="content-thir-b" v-if="detailList.startDate">
        <div class="comfont">安保金额（元）</div>
        <span class="comcolor">{{detailList.amount /100}}</span>
      </div>
      <div class="border-bg"></div>
      <div class="content-thir" v-show="detailList.repayTotalTimes">
        <div class="comfont">分期期数</div>
        <span class="comcolor">{{detailList.repayTotalTimes}}</span>
      </div>
      <div class="content-thir-b" v-show="detailList.placeName">
        <div class="comfont">使用场景</div>
        <span class="comcolor">{{detailList.placeName }}</span>
      </div>
      <div class="content-thir-b" v-show="detailList.contractNo">
        <div class="comfont">合同编号</div>
        <span class="comcolor">{{detailList.contractNo }}</span>
      </div>
      <div class="content-thir-b" v-if="detailList.productNoFinal === '1'">
        <div class="comfont">安保期限</div>
        <span class="comcolor">{{detailList.startDate | getFullDate}}至{{detailList.endDate | getFullDate}}</span>
      </div>
      <div class="content-thir-b" v-show="detailList.applyTime">
        <div class="comfont">申请时间</div>
        <span class="comcolor">{{detailList.applyTime | getFullDateTime }}</span>
      </div>
      <div class="content-thir-b" v-show="detailList.firstCheckTime">
        <div class="comfont">初审时间</div>
        <span class="comcolor">{{detailList.firstCheckTime | getFullDateTime }}</span>
      </div>
      <div class="content-thir-b"  v-show="detailList.secondCheckTime">
        <div class="comfont">复审时间</div>
        <span class="comcolor">{{detailList.secondCheckTime | getFullDateTime }}</span>
      </div>
      <div class="content-thir-b" v-show="detailList.dealTime">
        <div class="comfont">成交时间</div>
        <span class="comcolor">{{detailList.dealTime | getFullDateTime }}</span>
      </div>
      <div v-if="placeId !== 2 && placeId !== 1">
        <div class="border-bg"></div>
      <div class="img" @click="flogDoorHeader">
        <p>门头照</p>
        <img class="preview-img" v-for="(item, index) in listDoorHeadPhoto" :src="item.src" :key="index" height="100" @click="$preview.open(index, listDoorHeadPhoto)" v-show="false">
        <div></div>
      </div>
      </div>
      <div v-if="placeId !== 2 && placeId !== 1">
        <div class="border-bg"></div>
      <div class="img" @click="flogDoorIn">
        <p>店内照</p>
        <img class="preview-img" v-for="(item, index) in listDoorInPhoto" :src="item.src" :key="index" height="100" @click="$preview.open(index, listDoorInPhoto)" v-show="false">
        <div></div>
      </div>
      </div>
      <div v-if="placeId !== 2 && placeId !== 1">
        <div class="border-bg"></div>
      <div class="img" @click="flog">
        <p>店主与业务员合影</p>
        <img class="preview-img" v-for="(item, index) in list1" :src="item.src" :key="index" height="100" @click="$preview.open(index, list1)" v-show="false">
        <div></div>
      </div>
      </div>
      <div class="border-bg"></div>
      <div class="img" @click="flog1">
        <p>安保合同照片</p>
        <img class="preview-img" v-for="(item, index) in list" :src="item.src" :key="index" height="100" @click="$preview.open(1, list)" v-show="false">
        <div></div>
      </div>
      <div v-if="placeId !== 2 && placeId !== 1">
        <div class="border-bg"></div>
      <div class="img" @click="flog2">
        <p>营业执照照片</p>
        <img class="preview-img" v-for="(item, index) in list2" :src="item.src" :key="index" height="100" @click="$preview.open(1, list2)" v-show="false">
        <div></div>
      </div>
      </div>
      <div class="border-bg"></div>
      <div class="img" @click="flog3">
        <p>身份证照片</p>
        <img class="preview-img" v-for="(item, index) in list3" :src="item.src" :key="index" height="100" @click="$preview.open(1, list3)" v-show="false">
        <div></div>
      </div>
       <div v-if="list4.length>0">
        <div class="border-bg"></div>
        <div class="img" @click="flog4">
          <p>补充照片</p>
          <img class="preview-img" v-for="(item, index) in list4" :src="item.src" :key="index" height="100" @click="$preview.open(index, list4)" v-show="false">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MHeader from 'components/Header'
import { totalDetail } from '../../api/index'
import { ERR_OK } from 'common/js/common'
import { getstatu } from 'common/js/status'
import { getFullDateTime, getFullDate } from '../../common/js/utils'
export default {
  components: {
    MHeader
  },
  data() {
    return {
      detailList: {},
      status: '',
      placeId: '',
      list: [],
      list4: [],
      employeeType: sessionStorage.getItem('employeeType'),
      listDoorHeadPhoto: [{
        src: '',
        w: 400,
        h: 300
      }],
      listDoorInPhoto: [{
        src: '',
        w: 400,
        h: 300
      }],
      list1: [{
        src: '',
        w: 400,
        h: 300
      }],
      list2: [{
        src: '',
        w: 400,
        h: 300
      }],
      list3: [
        {
          src: '',
          w: 400,
          h: 300
        },
        {
          src: '',
          w: 400,
          h: 300
        }]
    }
  },
  created() {
    let applyId = ''
    this.placeId = parseInt(this.$route.query.placeId)
    applyId = this.$route.query.applyId
    console.log('this.$route.query.applyId:')
    console.log(this.$route.query.applyId)
    this._getdetailList(applyId)
  },
  filters: {
    getStatusText(t) {
      return getstatu(t)
    },
    getFullDateTime(t) {
      return getFullDateTime(t)
    },
    getFullDate(t) {
      return getFullDate(t)
    }
  },
  methods: {
    _getdetailList(applyId) {
      let params = {
        applyId: applyId
      }
      totalDetail(params).then((res) => {
        if (res.code === ERR_OK) {
          this.detailList = res.obj
          this.status = this.detailList.status
          this.listDoorHeadPhoto[0].src = this.detailList.doorHeadPhoto
          this.listDoorInPhoto[0].src = this.detailList.shopInPhoto
          this.list1[0].src = this.detailList.groutPhoto
          this.list2[0].src = this.detailList.businessLicense
          if (this.detailList.idCardFrontUrl) {
            this.list3[0].src = this.detailList.idCardFrontUrl
          }
          if (this.detailList.idCardBackUrl) {
            this.list3[1].src = this.detailList.idCardBackUrl
          }
          let list1 = this.detailList.securityContract
          let list2 = this.detailList.extraPhoto
          let map = {
            item: []
          }
          let map1 = {
            item: []
          }
          if (list1) {
            list1.forEach((val) => {
              map.item.push({
                src: val,
                w: 400,
                h: 300
              })
            })
          }
          if (list2) {
            list2.forEach((val) => {
              map1.item.push({
                src: val,
                w: 400,
                h: 300
              })
            })
          }
          this.list = map.item
          this.list4 = map1.item
        }
      })
    },
    // lookPdf() {
    //   this.$router.push('/showImg')
    // },
    apply() {
      this.$router.push('/shopKeeperInfo?applyId=' + this.appid)
    },
    flogDoorHeader() {
      this.$preview.open(0, this.listDoorHeadPhoto)
    },
    flogDoorIn() {
      this.$preview.open(0, this.listDoorInPhoto)
    },
    flog() {
      this.$preview.open(0, this.list1)
    },
    flog1() {
      this.$preview.open(0, this.list)
    },
    flog2() {
      this.$preview.open(0, this.list2)
    },
    flog3() {
      this.$preview.open(0, this.list3)
    },
    flog4() {
      this.$preview.open(0, this.list4)
    },
    stagedetail() {
      this.$router.push('/accountPayDetail')
    }
  }
}
</script>
<style lang="scss" scoped>
.applydetail {
  .first {
    height: 104px;
    line-height: 104px;
    text-align: center;
    .title {
      color: #FC633D;
      font-family: PingFang-SC-Medium;
      font-size: 20px;
    }
  }
  .content-sec {
    height: 51px;
    .fqhk {
      float: left;
      line-height: 51px;
      margin-left: 15px;
      color: #323232;
      font-family: PingFang-SC-Medium;
      font-size: 15px;
    }
    .fq {
      float: right;
      line-height: 51px;
      margin-right: 15px;
      color: #AAAAAA;
      font-family: PingFang-SC-Regular;
      font-size: 15px;
      overflow: hidden;
      div {
        display: inline-block;
        width: 8px;
        height: 13px;
        background-image: url('./btn_arrow.png');
        background-size: 8px 13px;
        margin: 22px 0 0 0;
      }
    }
  }
  .first-other {
    text-align: center;
    padding: 26px 0;
    .title {
      color: #FC633D;
      font-family: PingFang-SC-Medium;
      font-size: 20px;
    }
    .btn {
      width: 141px;
      height: 39px;
      background-image: url('./btn.png');
      background-size: 141px 39px;
      margin: 0 auto;
      line-height: 39px;
      margin-top: 21px;
      font-size: 16px;
      font-family: PingFang-SC-Medium;
      color: #FFFFFF;
    }
    .center {
      font-family: PingFang-SC-Medium;
      font-size: 15px;
      color: #AAAAAA;
      margin-top: 10px;
    } 
  }
  .content-thir {
    height: 15px;
    margin: 0 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    overflow: hidden;
    div {
      float: left;
    }
    span {
      float: right;
    }
  }
  .content-thir-b {
    height: 15px;
    margin: 0 15px;
    padding-bottom: 15px;
    overflow: hidden;
    div {
      float: left;
    }
    span {
      float: right;
    }
  }
  .last-child {
    margin-bottom: 15px;
  }
  .img {
    height: 51px;
    line-height: 51px;
    p {
      float: left;
      color: #FC633D;
      font-family: PingFang-SC-Medium;
      font-size: 15px;
      margin-left: 15px;
    }
    div {
      float: right;
      width: 8px;
      height: 13px;
      background-image: url('./btn_arrow.png');
      background-size: 8px 13px;
      margin: 20px 15px 0 0;
    }
  }
}
</style>


