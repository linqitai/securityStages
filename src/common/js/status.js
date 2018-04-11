// 1：提交中，2：初审中，3：初审驳回，4：已终止，5复审中：，6：复审驳回，20：商户分期中，22：已分期，27：已过期
export function getStatusText(t) {
  if (t === 1) {
    return '提交中'
  } else if (t === 2) {
    return '初审中'
  } else if (t === 3) {
    return '初审驳回'
  } else if (t === 4) {
    return '已终止'
  } else if (t === 5) {
    return '复审中'
  } else if (t === 6) {
    return '复审驳回'
  } else if (t === 20) {
    return '分期中'
  } else if (t === 22) {
    return '已分期'
  } else if (t === 27) {
    return '已过期'
  }
}
export function getstatus(t) {
  if (t === 1) {
    return '提交中'
  } else if (t === 2) {
    return '初审中'
  } else if (t === 3) {
    return '初审驳回'
  } else if (t === 4) {
    return '已终止'
  } else if (t === 5) {
    return '复审中'
  } else if (t === 6) {
    return '复审驳回'
  } else if (t === 20) {
    return '分期中'
  } else if (t === 22) {
    return '还款中'
  } else if (t === 27) {
    return '已过期'
  }
}
// 1：提交中，2：初审中，3：初审驳回，4：已终止，5复审中：，6：复审驳回，20：商户分期中，22：已分期，27：已过期
// 总账号
export function getstatu(t) {
  if (t === 2) {
    return '初审中'
  } else if (t === 3) {
    return '初审驳回'
  } else if (t === 4) {
    return '已终止'
  } else if (t === 5) {
    return '复审中'
  } else if (t === 6) {
    return '复审驳回'
  } else if (t === 20) {
    return '分期中'
  } else if (t === 22) {
    return '还款中'
  } else if (t === 23) {
    return '有逾期'
  } else if (t === 24) {
    return '需代还'
  } else if (t === 26) {
    return '已分期'
  } else if (t === 27) {
    return '已过期'
  }
}
// 1：提交中，2：初审中，3：初审驳回，4：已终止，5复审中：，6：复审驳回，20：商户分期中，22：已分期，27：已过期
// 审核员列表
export function getReviewStatus(t) {
  if (t === 1) {
    return '提交中'
  } else if (t === 2) {
    return '待审核'
  } else if (t === 3) {
    return '初审驳回'
  } else if (t === 4) {
    return '已终止'
  } else if (t === 5) {
    return '复审中'
  } else if (t === 6) {
    return '复审驳回'
  } else if (t === 20) {
    return '分期中'
  } else if (t === 22) {
    return '还款中'
  } else if (t === 27) {
    return '已过期'
  }
}
// 审核员列表
export function getReviewerItemStatus(t) {
  if (t === 1) {
    return '提交中'
  } else if (t === 2) {
    return '待初审'
  } else if (t === 3) {
    return '初审驳回'
  } else if (t === 4) {
    return '已终止'
  } else if (t === 5) {
    return '复审中'
  } else if (t === 6) {
    return '复审驳回'
  } else if (t === 20) {
    return '分期中'
  } else if (t === 22) {
    return '已分期'
  } else if (t === 27) {
    return '已过期'
  }
}
// 业务员列表
export function getEmployeeStatus(t) {
  if (t === 1) {
    return '提交中'
  } else if (t === 2) {
    return '初审中'
  } else if (t === 3) {
    return '初审驳回'
  } else if (t === 4) {
    return '已终止'
  } else if (t === 5) {
    return '复审中'
  } else if (t === 6) {
    return '复审驳回'
  } else if (t === 20) {
    return '分期中'
  } else if (t === 22) {
    return '已分期'
  } else if (t === 27) {
    return '已过期'
  } else if (t === 0) {
    return '待处理'
  }
}