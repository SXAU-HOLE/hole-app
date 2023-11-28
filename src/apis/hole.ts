import {
  HoleDetailCommentMode,
  HoleDetailCommentOrderMode,
  HoleListMode,
} from '@/shared/enum'
import { PaginateAble } from '@/shared/types'
import { request } from '@/utils/request'
import { PostHoleValidator } from '@/shared/validators/hole'
import { SearchValidator } from '@/shared/validators/hole/search'

interface Id {
  id: string
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

/*
 *  删除树洞
 * */
export function DeleteHoleRequest(data: { id: string }) {
  return request({
    method: 'DELETE',
    url: '/hole/delete',
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

  return request<any>({
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

/**
 * 创建树洞评论
 */
export function PostHoleDetailCommentRequest(data: {
  body: string
  id: string
  imgs: string[]
}) {
  return request<IResponse>({
    method: 'POST',
    url: '/hole/comment',
    data,
  })
}

export function PostHoleCommentReplyRequest(data: {
  commentId: string
  body: string
  replyId?: string
}) {
  return request({
    method: 'POST',
    url: '/hole/comment/reply',
    data,
  })
}

export function GetReplyListRequest(params: PaginateAble<{ id: string }>) {
  return request({
    method: 'GET',
    url: '/hole/comment/reply',
    params,
  })
}

export function LikeReplyRequest(data: { id: string }) {
  return request({
    method: 'POST',
    url: '/hole/comment/reply/like',
    data,
  })
}

export function DeleteReplyLikeRequest(data: { id: string }) {
  return request({
    method: 'DELETE',
    url: '/hole/comment/reply/like',
    data,
  })
}

export function LikeCommentRequest(data: { id: string }) {
  return request({
    method: 'POST',
    url: '/hole/comment/like',
    data,
  })
}

export function DeleteCommentLikeRequest(data: { id: string }) {
  return request({
    method: 'DELETE',
    url: '/hole/comment/like',
    data,
  })
}

export function GetHotTagsRequest() {
  return request({
    method: 'GET',
    url: '/hole/tags',
  })
}

export function GetSearchRequest(params: PaginateAble<SearchValidator>) {
  return request<ISearchHoleResponse>({
    method: 'GET',
    url: '/hole/search',
    params,
  })
}
