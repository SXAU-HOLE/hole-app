import { request } from '@/utils/request'

export function LoginRequest(data: any) {
  return request({
    url: '/auth/login',
    method: 'POST',
    data,
  })
}
