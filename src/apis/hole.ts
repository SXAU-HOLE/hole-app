import { HoleListMode } from '@/shared/enum'
import { PaginateAble } from '@/shared/types'
import { request } from '@/utils/request'

interface Id {
  id: number
}

/**
 * 获取树洞列表
 */
export function GetHoleListRequest(
  params: PaginateAble<{
    mode: HoleListMode
  }>,
) {
  return request<IHoleListResponse>({
    method: 'GET',
    url: '/hole/list',
    params,
  })
}

/**
 * 点赞
 */
export function PostLikeHole(data: Id) {
  return request<IResponse>({
    method: 'POST',
    url: '/hole/like',
    data,
  })
}
