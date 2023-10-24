import { Pressable, Text, View } from 'react-native'
import { useCommentContext } from '@/shared/context/CommentContext'
import * as repl from 'repl'

export function ReplyBody({
  data,
  onPress,
}: {
  data: IHoleCommentListItem
  onPress?: () => any
}) {
  const { replies, repliesCount } = data
  const { openInput } = useCommentContext()

  return (
    <Pressable
      onPress={onPress}
      className={'bg-surfaceVariant/10 rounded-lg p-2'}
    >
      <View className={'flex flex-col'}>
        {replies.slice(0, 3).map((reply) => (
          <Pressable
            onPress={() => {
              openInput({ ...data, commentId: data.id, replyId: reply.id })
            }}
            key={reply.id}
            className={'flex flex-row space-x-1 my-1'}
          >
            <Text className={'text-primary'}>{reply.user.username}</Text>
            {reply.replyUser !== null && (
              <>
                <Text className={'mx-1'}>回复</Text>
                <Text className={'text-primary'}>
                  {reply.replyUser.username}
                </Text>
              </>
            )}
            <Text>: {reply.body}</Text>
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
