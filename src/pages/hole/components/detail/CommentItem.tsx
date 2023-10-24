import TimeText from '@/components/Text/TimeText'
import { UserText } from '@/components/Text/UserText'
import UserAvatar from '@/components/UserAvatar'
import { View } from 'react-native'
import { Text, TouchableRipple, useTheme } from 'react-native-paper'
import { useCommentContext } from '@/shared/context/CommentContext'
import { ReplyBody } from '@/pages/hole/components/reply/ReplyBody'
import ReadMore from 'react-native-read-more-text'

export function CommentItem({ data }: { data: IHoleCommentListItem }) {
  const { openInput } = useCommentContext()

  return (
    <TouchableRipple className="px-3" onPress={() => openInput(data)}>
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
                  <Text>{data.body}</Text>
                </ReadMore>
              </View>
              <View className={'my-2 flex flex-row justify-between'}>
                <TimeText time={data.createAt}></TimeText>
              </View>
              {data.replies?.length ? (
                <>
                  <ReplyBody data={data} />
                </>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  )
}
