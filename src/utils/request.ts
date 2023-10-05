import { RequestConfig } from '@/shared/config'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: RequestConfig.baseUrl,
})

instance.interceptors.response.use(
  (data) => {
    console.log(data)
    return data
  },
  (error: AxiosError) => {
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
