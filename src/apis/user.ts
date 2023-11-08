import { request } from '@/utils/request'

export function PostUserProfileRequest(data: {
  avatar?: string
  username?: string
}) {
  return request<IResponse>({
    method: 'POST',
    url: '/user/profile',
    data,
  })
}

export function GetUserProfileRequest() {
  return request<IUser>({
    method: 'GET',
    url: 'user/profile',
  })
}
