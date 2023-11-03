import { Pressable, Text, View } from 'react-native'
import { useReplyListRoute } from '@/hooks/useReplyListRoute'
import { useCommentContext } from '@/shared/context/CommentContext'
import { EmojiableText } from '@/components/Text/EmojiableText'

export function ReplyBody({ data }: { data: IHoleCommentListItem }) {
  const { replies, repliesCount } = data

  const { go } = useReplyListRoute()
  const { setComment } = useCommentContext()

  return (
    <Pressable
      onPress={() => {
        go({ commentId: data.id })
        setComment(data)
      }}
      className={'bg-surfaceVariant/10 rounded-lg p-2'}
    >
      <View className={'flex flex-col'}>
        {replies.slice(0, 3).map((reply) => (
          <Pressable
            key={reply.id}
            onPress={() => {}}
            className={'flex flex-row space-x-1 my-1 items-center'}
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
            <EmojiableText body={`: ${reply.body}`} />
          </Pressable>
        ))}
      </View>
      {replies.length > 3 ? (
        <View>
          <Text className={'text-primary/80 text-xs mt-1'}>
            共{repliesCount}条回复 &gt;
          </Text>
        </View>
      ) : (
        <></>
      )}
    </Pressable>
  )
}
