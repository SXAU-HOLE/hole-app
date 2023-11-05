import { useReplyRoute } from '@/hooks/route/useReplyRoute'
import { CommentItem } from '@/pages/hole/detail/components/CommentItem'
import { DeleteCommentLikeRequest, LikeCommentRequest } from '@/apis/hole'
import { Separator } from '@/components/Separator'
import { View } from 'react-native'
import { SecondaryText } from '@/components/Text/SecondaryText'
import { useCommentContext } from '@/shared/context/CommentContext'

export function HoleReplyHeader() {
  const { comment, commentId, holeId } = useReplyRoute()
  const { openInput } = useCommentContext()

  return (
    <>
      <CommentItem
        data={comment as IHoleCommentListItem}
        onBodyPress={() =>
          openInput({
            commentId: commentId,
            // @ts-ignore
            id: holeId,
            ...comment,
          })
        }
        deleteLikeRequest={DeleteCommentLikeRequest}
        postLikeRequest={LikeCommentRequest}
        isRenderReply={false}
      />
      <Separator />
      <View className={'p-3 bg-white'}>
        <SecondaryText>共有{comment?.replies?.length}条回复</SecondaryText>
      </View>
    </>
  )
}
