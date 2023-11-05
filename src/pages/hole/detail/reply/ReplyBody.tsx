import { Pressable, Text, View } from 'react-native'
import { EmojiableText } from '@/components/Text/EmojiableText'
import { PrimaryText } from '@/components/Text/PrimaryText'
import { useNavigation } from '@react-navigation/native'
import { useHoleDetailId } from '@/hooks/route/useHoleId'
import { useCommentContext } from '@/shared/context/CommentContext'

export function ReplyBody({ data }: { data: IHoleCommentListItem }) {
  const { replies, repliesCount } = data
  const holeId = useHoleDetailId()
  const navigation = useNavigation()
  const { openInput } = useCommentContext()
  const navigateToReply = () => {
    // @ts-ignore
    navigation.navigate('reply', {
      commentId: data.id,
      holeId: holeId,
      comment: data,
    })
  }

  return (
    <Pressable
      onPress={() => {
        navigateToReply()
      }}
      className={'bg-surfaceVariant/10 rounded-lg p-2'}
    >
      <View className={'flex flex-col'}>
        {replies.slice(0, 3).map((reply) => (
          <Pressable
            key={reply.id}
            onPress={() =>
              openInput({
                ...data,
                replyId: reply.id,
                id: data.id,
              })
            }
            className={'flex flex-row flex-wrap space-x-1 my-1 items-start'}
          >
            <PrimaryText>{reply.user.username}</PrimaryText>

            {reply.replyUser !== null && (
              <>
                <Text className={'mx-1'}>回复</Text>
                <Text className={'text-primary'}>
                  {reply.replyUser.username}
                </Text>
              </>
            )}
            <EmojiableText body={`: ${reply.body}`} />
          </Pressable>
        ))}
      </View>
      {replies.length > 3 ? (
        <Text className={'text-primary/80 text-xs mt-1'}>
          共{repliesCount}条回复 &gt;
        </Text>
      ) : (
        <></>
      )}
    </Pressable>
  )
}
