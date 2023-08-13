import MYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

// 全局Request
const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccess(config) {
      return config
    }
  }
})

export default myRequest
