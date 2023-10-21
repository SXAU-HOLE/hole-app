import {
  HoleDetailCommentMode,
  HoleDetailCommentOrderMode,
  HoleListMode,
} from '@/shared/enum'
import { PaginateAble } from '@/shared/types'
import { request } from '@/utils/request'
import { PostHoleValidator } from '@/shared/validators/hole'

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
 * 创建树洞
 */
export function PostHoleRequest(data: PostHoleValidator) {
  return request<IResponse>({
    method: 'POST',
    url: '/hole/create',
    data,
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
/**
 * 取消点赞
 */
export function DeleteLikeHole(data: Id) {
  return request<IResponse>({
    method: 'DELETE',
    url: '/hole/like',
    data,
  })
}

/**
 * 上传图片
 */
export function UploadHoleImgRequest(imgs: string[]) {
  const data = new FormData()

  for (const img of imgs) {
    // @ts-ignore
    data.append('files', {
      uri: img,
      type: 'image/jpeg',
      name: 'photo.jpg',
    })
  }

  return request<IResponse>({
    method: 'POST',
    url: '/oss/upload',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: data,
  })
}

/**
 * 获取树洞详细
 */
export function GetHoleDetailRequest(params: { id: number }) {
  return request<IHole>({
    method: 'GET',
    url: '/hole/detail',
    params,
  })
}

/**
 * 获取评论
 */
export function GetHoleDetailCommentsRequest(
  params: PaginateAble<{
    mode?: HoleDetailCommentMode
    order?: HoleDetailCommentOrderMode
  }> &
    Id,
) {
  return request<IHoleCommentListResponse>({
    method: 'GET',
    url: '/hole/comment',
    params,
  })
}
