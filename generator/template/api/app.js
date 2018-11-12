import http from '@/common/http'

const app = {
  test: () => {
    return http.get('http://www.baidu.com')
  }
}

export default app
