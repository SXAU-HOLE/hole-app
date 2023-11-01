import { Pressable, View } from 'react-native'
import { SecondaryText } from '@/components/Text/SecondaryText'
import { useCommentContext } from '@/shared/context/CommentContext'
import { CameraIcon, EmojiIcon } from '@/components/Icons'

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
          'flex flex-row items-center px-2 bg-[#f3f3f3]  rounded-full space-x-3'
        }
      >
        <SecondaryText className={'flex-1  py-2 px-3 rounded-full'}>
          写下你的想法吧
        </SecondaryText>
        <EmojiIcon size={24} />
        <CameraIcon size={24} />
      </View>
    </Pressable>
  )
}
