import { View } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import UserAvatar from '@/components/UserAvatar'
import { UserText } from '@/components/Text/UserText'
import ReadMore from 'react-native-read-more-text'
import TimeText from '@/components/Text/TimeText'
import { useCommentContext } from '@/shared/context/CommentContext'

export function ReplyItem({
  data,
  commentId,
}: {
  data: Reply
  commentId: string
}) {
  const { openInput } = useCommentContext()

  return (
    <TouchableRipple
      className="px-3"
      onPress={() => openInput({ ...data, commentId, replyId: data.id })}
    >
      <View
        className={
          'flex flex-row border-b-[1px] border-black/5 py-2 rounded-lg'
        }
      >
        <View>
          <View className={'w-full flex flex-row'}>
            <View className={'w-1/12'}>
              <UserAvatar url={data.user.avatar} size={30} />
            </View>
            <View className={'w-11/12 px-2'}>
              <View>
                <UserText username={data.user.username} />
              </View>
              <View>
                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={(handlePress) => (
                    <Text className={'text-primary'} onPress={handlePress}>
                      展开评论
                    </Text>
                  )}
                  renderRevealedFooter={(handlePress) => (
                    <Text className={'text-primary'} onPress={handlePress}>
                      收起评论
                    </Text>
                  )}
                >
                  {data.replyUser !== null && (
                    <>
                      <Text className={'mx-1'}>回复</Text>
                      <Text className={'text-primary'}>
                        {data.replyUser.username}
                      </Text>
                    </>
                  )}
                  <Text>: {data.body}</Text>
                </ReadMore>
              </View>
              <View className={'my-2 flex flex-row justify-between'}>
                <TimeText time={data.createAt}></TimeText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  )
}
