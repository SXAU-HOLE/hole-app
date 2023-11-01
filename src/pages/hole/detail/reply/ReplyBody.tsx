import { Pressable, Text, View } from 'react-native'
import { useCommentContext } from '@/shared/context/CommentContext'
import { ReplyList } from '@/pages/hole/detail/reply/ReplyList'
import { useState } from 'react'

export function ReplyBody({
  data,
  onPress,
}: {
  data: IHoleCommentListItem
  onPress?: () => any
}) {
  const { replies, repliesCount } = data
  const { openInput, setSelectCommentId } = useCommentContext()

  const [open, setOpen] = useState(false)
  const closeReplyList = () => {
    setSelectCommentId(null)
    setOpen(false)
  }

  const openReplyList = () => {
    setSelectCommentId(data.id)
    setOpen(true)
    openInput(data)
  }

  return (
    <Pressable
      onPress={onPress}
      className={'bg-surfaceVariant/10 rounded-lg p-2'}
    >
      <View className={'flex flex-col'}>
        {replies.slice(0, 3).map((reply) => (
          <Pressable
            key={reply.id}
            onPress={() => {
              openInput({ ...data, commentId: data.id, replyId: reply.id })
            }}
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
        <View>
          <Text
            className={'text-primary/80 text-xs mt-1'}
            onPress={openReplyList}
          >
            共{repliesCount}条回复 &gt;
          </Text>
          {open && (
            <ReplyList
              commentId={data.id}
              open={open}
              onClose={closeReplyList}
            ></ReplyList>
          )}
        </View>
      ) : (
        <></>
      )}
    </Pressable>
  )
}
