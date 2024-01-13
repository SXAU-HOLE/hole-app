import { RequestConfig } from '@/shared/config'
import { store } from '@/store'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import Toast from 'react-native-toast-message'
import { useAuth } from '@/hooks/auth'

export interface ErrorResponse {
  code: number
  message: string
  error: string
  time: string
}

const instance = axios.create({
  baseURL: RequestConfig.baseUrl,
  timeout: 5000,
})

instance.interceptors.response.use(
  (data) => {
    if (data.data.data) {
      return data.data.data
    } else {
      return data.data
    }
  },
  (error: AxiosError) => {
    const data = error.response?.data as ErrorResponse

    const { logout } = useAuth()
    if (error.response?.status == 401) {
      logout()
    }

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
  },
)

export function request<T = any>(config: AxiosRequestConfig) {
  return instance<T>({
    method: 'GET',
    ...config,
    headers: {
      Authorization: 'Bearer ' + store.getState().user?.tooken,
      ...config.headers,
    },
  }) as Promise<T>
}
