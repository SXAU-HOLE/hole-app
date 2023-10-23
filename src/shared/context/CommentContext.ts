import { createStore } from 'hox'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CommentReplyValidator } from '@/shared/validators/reply'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  PostHoleCommentReplyRequest,
  PostHoleDetailCommentRequest,
} from '@/apis/hole'
import { useRoute } from '@react-navigation/native'
import { useKeyboard } from 'react-native-toast-message/lib/src/hooks'
import { Keyboard, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

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
  const { id } = useRoute().params as { id: string }
  const [isShowHeader, setIsShowHeader] = useState(false)

  const isReply = data !== null && data !== undefined

  const form = useForm<CommentReplyValidator>({
    resolver: classValidatorResolver(CommentReplyValidator),
  })

  const reqFunc = (param: ICommentData) => {
    const params = {
      imgs: param.imgs || [],
      body: param.body,
    } as ICommentData

    if (isReply) {
      params.commentId = data?.id
      if (data?.replyId) {
        params.replyId = data.replyId
      }
    } else {
      params.id = param.id
    }

    const func = isReply
      ? PostHoleCommentReplyRequest
      : PostHoleDetailCommentRequest

    return func(params as any)
  }

  const openInput = (data: ICommentData | null = null) => {
    setData(data)
    setShowInput(true)
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
    id,
    isShowHeader,
  }
})
