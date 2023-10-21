import TimeText from '@/components/Text/TimeText'
import { UserText } from '@/components/Text/UserText'
import UserAvatar from '@/components/UserAvatar'
import { View } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'

export function CommentItem({ data }: { data: IHoleCommentListItem }) {
  return (
    <TouchableRipple className="px-3" onPress={() => {}}>
      <View
        className={
          'flex flex-row border-b-[1px] border-black/5 py-2 rounded-lg'
        }
      >
        <View>
          <View className={'w-full flex flex-row space-x-2'}>
            <View className={'w-1/12'}>
              <UserAvatar url={data.user.avatar} size={30} />
            </View>
            <View className={'flex flex-col justify-between w-11/12 '}>
              <UserText username={data.user.username} />
              <View>
                <Text>{data.body}</Text>
              </View>
              <View className={'mt-2 flex flex-row justify-between'}>
                <TimeText time={data.createAt}></TimeText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  )
}
