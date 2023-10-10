import { request } from '@/utils/request'

export function LoginRequest(data: any) {
  return request<IAuthResponse>({
    url: 'auth/login',
    method: 'POST',
    data,
  })
}
