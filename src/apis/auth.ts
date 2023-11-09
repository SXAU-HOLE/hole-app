import { request } from '@/utils/request'

export function LoginRequest(data: any) {
  return request<IAuthResponse>({
    url: 'auth/login',
    method: 'POST',
    data,
  })
}

export function RegisterRequest(data: any) {
  return request<IAuthResponse>({
    url: 'auth/register',
    method: 'POST',
    data,
  })
}

export function ForgetRequest(data: any) {
  return request({
    url: 'auth/forget',
    method: 'POST',
    data,
  })
}
