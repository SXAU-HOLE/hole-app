import { createStore } from 'hox'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CommentReplyValidator } from '@/shared/validators/reply'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  PostHoleCommentReplyRequest,
  PostHoleDetailCommentRequest,
} from '@/apis/hole'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

export type ICommentData = {
  id?: string
  commentId?: string
  replyId?: string
  imgs?: string[]
  body: string
} & Partial<IHoleCommentListItem>

export const [useCommentContext, CommentContext] = createStore(() => {
  const [showInput, setShowInput] = useState(false)
  const [data, setData] = useState<ICommentData | null>(null)
  const [isShowHeader, setIsShowHeader] = useState(false)
  const [selectCommentId, setSelectCommentId] = useState<string | null>(null)
  const [comment, setComment] = useState<ICommentData>()

  const isReply = data === null || data === undefined

  const form = useForm<CommentReplyValidator>({
    resolver: classValidatorResolver(CommentReplyValidator),
  })

  const reqFunc = (param: ICommentData) => {
    const params = {
      imgs: param.imgs || [],
      body: param.body,
    } as ICommentData

    if (!isReply) {
      params.commentId = data?.id
      if (data?.replyId) {
        params.replyId = data?.replyId
      }
    } else {
      params.id = param.id
    }
    console.log('params', params)
    const func = isReply
      ? PostHoleDetailCommentRequest
      : PostHoleCommentReplyRequest

    return func(params as any)
  }

  const openInput = (data: ICommentData | null = null) => {
    setShowInput(true)
    setData(data)

    console.log('openInput', data)
  }

  const closeInput = () => {
    const isInputEmpty = !form.getValues('body')?.length

    setShowInput(false)

    if (isInputEmpty) {
      setData(null)
    }
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y >= 50) {
      setIsShowHeader(true)
    } else {
      setIsShowHeader(false)
    }
  }

  return {
    ...form,
    showInput,
    reqFunc,
    openInput,
    onScroll,
    isShowHeader,
    isReply,
    data,
    closeInput,
    selectCommentId,
    setSelectCommentId,
    comment,
    setComment,
  }
})
