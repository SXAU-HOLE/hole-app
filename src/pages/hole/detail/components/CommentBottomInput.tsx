import { Pressable, View } from 'react-native'
import { SecondaryText } from '@/components/Text/SecondaryText'
import { useCommentContext } from '@/shared/context/CommentContext'

export type IBottomCommentData = {
  id: string
  commentId?: string
  replyId?: string
  imgs?: string
} & IHoleCommentListItem

interface Props {
  data?: IBottomCommentData
}

export function CommentBottomInput({ data }: Props) {
  const { openInput } = useCommentContext()

  return (
    <Pressable
      onPress={() => openInput(data)}
      className={
        'absolute bottom-0 left-0 right-0 bg-white p-2 border-t-[1px] border-t-black/5'
      }
    >
      <View
        className={
          'flex flex-row items-center bg-background py-2 px-3 rounded-full space-x-3'
        }
      >
        <SecondaryText>写下你的想法吧...</SecondaryText>
      </View>
    </Pressable>
  )
}
