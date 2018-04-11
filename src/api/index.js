import http from './public'
let root = '/zyd'
// 合同
export const pdfUrl = root + '/m/install/contract/'
// 审核员列表获取接口
export const entrance = (params) => {
  return http.fetchPost(root + '/m/zzg/home.json', params)
}
export const test = (params) => {
  return http.fetchPost(root + '/common/upload/idCard.json', params)
}
// 申请详情
export const applyDetail = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/detail.json', params)
}
// 申请详情
export const auditorDetail = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/auditorDetail.json', params)
}
// 总账号查看申请详情
export const totalDetail = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/totalDetail.json', params)
}
// 总账号-还款列表
export const repatList = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/repaymentList.json', params)
}
// 业务员、审核员查看申请列表
export const getList = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/list.json', params)
}
export const auditorList = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/auditorList.json', params)
}
// 总账号查看申请列表
export const getAccountList = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/totalList.json', params)
}
// 上传身份证接口
export const uploadIdentity = (params) => {
  return http.fetchPostForUpload(root + '/common/upload/idCard.json', params)
}
// 上传图片接口
export const uploadImg = (params) => {
  console.log(params)
  return http.fetchPostForUpload(root + '/common/upload/image.json', params)
}
// 获取省份列表
export const province = (params) => {
  return http.fetchPost(root + '/common/area/province.json', params)
}
// 获取下级地区列表
export const provinceSubList = (params) => {
  return http.fetchPost(root + '/common/area/subList.json', params)
}
// ==========店主信息模块=============
// 查询店主信息
export const shopkeeperInfo = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/idCard.json', params)
}
// 身份证识别OCR
export const identityOCR = (params) => {
  return http.fetchPost(root + '/common/ocr/idCard.json', params)
}
// 店主信息提交接口
export const idCardSubmit = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/idCardSubmit.json', params)
}
// ==========填写资料模块=============
// 查询店铺申请信息
export const searchStoreInfo = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/info.json', params)
}
// 申请资料提交
export const infoSubmit = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/infoSubmit.json', params)
}
// 短信接口
export const sendSmsCode = (params) => {
  return http.fetchPost(root + '/common/sendSmsCode.json', params)
}
// ==========上传照片模块=============
// 查询店铺照片
export const shopPhoto = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/shopPhoto.json', params)
}
// 提交照片
export const uploadShopPhoto = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/uploadShopPhoto.json', params)
}
// 提交照片
export const queryShop = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/queryShop.json', params)
}
// 确认申请
export const confirmApply = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/confirm.json', params)
}
// 审核员审核
export const firstCheck = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/firstCheck.json', params)
}
// 分配业务员
export const assignClerk = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/assignClerk.json', params)
}
// 查询业务员
export const queryClerkInfo = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/queryClerkInfo.json', params)
}
// 申请绑定店铺
export const bandShop = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/bandShop.json', params)
}
// 申请绑定店铺
export const getPendingDetails = (params) => {
  return http.fetchPost(root + '/m/zzg/apply/getPendingDetails.json', params)
}
