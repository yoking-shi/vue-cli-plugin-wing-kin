// 本地存储信息的方法
const data = {
  // 获取本地存储
  getItem: key => {
    return JSON.parse(window.localStorage.getItem(key))
  },

  // 设置本地存储
  setItem: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  // 删除本地存储
  deleteItem: key => {
    window.localStorage.setItem(key, null)
  }
}

export default {
  data
}
