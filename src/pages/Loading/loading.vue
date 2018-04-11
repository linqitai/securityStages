<template>
  <div class="loading-content">
    <div class="loading">
      <img width="24" height="24" src="./loading.gif" alt="">
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { entrance } from '../../api/index'
import { ERR_OK } from 'common/js/common'
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  },
  created() {
    this._getHome()
  },
  methods: {
    _getHome() {
      // let mobile = this.$route.query.mobile
      // let employeeType = this.$route.query.employeeType
      let params = {
        employeeId: this.$route.query.employeeId,
        companyId: this.$route.query.companyId,
        employeeName: this.$route.query.employeeName,
        mobile: this.$route.query.mobile,
        employeeType: this.$route.query.employeeType
      }
      sessionStorage.setItem('employeeId', params.employeeId)
      sessionStorage.setItem('companyId', params.companyId)
      sessionStorage.setItem('employeeName', params.employeeName)
      sessionStorage.setItem('mobile', params.mobile)
      sessionStorage.setItem('employeeType', params.employeeType)
      entrance(params).then((res) => {
        console.log(params)
        console.log(res)
        if (res.code === ERR_OK) {
          let obj = res.obj
          if (obj.signed) {
            if (obj.employeeType === 3) {
              this.$router.push('/accountSearch?status=' + obj.employeeType)
            } else if (obj.employeeType === 2) {
              this.$router.push('/masterSearch?status=' + obj.employeeType)
            } else if (obj.employeeType === 1) {
              this.$router.push('/employeeSearch?status=' + obj.employeeType)
            }
          } else {
            if (obj.employeeType === 2) {
              this.$router.push('/noReview')
            } else {
              this.$router.push('/noSigned')
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.loading-content {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  .loading {
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    .desc {
      line-height: 20px;
      font-size: 12px;
      color: #353535;
    }
  }
}
</style>

