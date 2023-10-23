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

  const isReply = false

  const form = useForm<CommentReplyValidator>({
    resolver: classValidatorResolver(CommentReplyValidator),
  })

  const reqFunc = (param: ICommentData) => {
    const params = {
      imgs: param.imgs,
      body: param.body,
    } as ICommentData

    if (isReply) {
      params.commentId = data?.commentId
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

  return {
    ...form,
    showInput,
    reqFunc,
    id,
  }
})
