import { RequestConfig } from '@/shared/config'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import Toast from 'react-native-toast-message'

export interface ErrorResponse {
  code: number
  message: string
  error: string
  time: string
}

const instance = axios.create({
  baseURL: RequestConfig.baseUrl,
})

instance.interceptors.response.use(
  (data) => {
    return data.data
  },
  (error: AxiosError) => {
    const data = error.response?.data as ErrorResponse
    if (data) {
      const msg = data.message

      Toast.show({
        type: 'error',
        text1: '请求失败了',
        text2: !msg
          ? '可能是服务器出问题啦，请联系管理员'
          : Array.isArray(msg)
          ? msg.map((i) => i).join('\n')
          : msg,
      })
    }

    throw error
  },
)

export function request(config: AxiosRequestConfig) {
  return instance({
    method: 'GET',
    ...config,
    // TODO add Token
  })
}
