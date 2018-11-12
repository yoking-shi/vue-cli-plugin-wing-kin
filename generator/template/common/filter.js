// 货币格式化（本地化￥）
const currency = value => {
  return value.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })
}

export default {
  currency
}
