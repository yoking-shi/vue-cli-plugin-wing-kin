import axios from 'axios'

const config = {
  // baseURL: process.env.VUE_APP_API,
  timeout: 5000
}

var http = axios.create(config)

// 添加请求拦截器
http.interceptors.request.use(
  config => {
    // config.headers.Authorization = `token ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
