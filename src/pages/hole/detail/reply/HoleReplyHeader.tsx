import { useCommentContext } from '@/shared/context/CommentContext'
import { CommentItem } from '@/pages/hole/detail/components/CommentItem'
import { DeleteCommentLikeRequest, LikeCommentRequest } from '@/apis/hole'
import { Separator } from '@/components/Separator'
import { SecondaryText } from '@/components/Text/SecondaryText'
import { View } from 'react-native'

export function HoleReplyHeader() {
  const { comment } = useCommentContext()

  return (
    <>
      <CommentItem
        data={comment as IHoleCommentListItem}
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
