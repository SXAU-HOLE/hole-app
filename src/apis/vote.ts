import { request } from '@/utils/request'

export function PostHoleVoteRequest(data: { id: string; ids: number[] }) {
  return request({
    method: 'POST',
    url: '/hole/vote',
    data,
  })
}
