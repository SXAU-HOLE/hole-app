import { useRoute } from '@react-navigation/native'
import { ICommentData } from '@/shared/context/CommentContext'

export interface ReplyRouteParams {
  comment: ICommentData
  commentId: string
  holeId: number
}

export function useReplyRoute() {
  const params = useRoute().params as ReplyRouteParams

  return {
    ...params,
  }
}
