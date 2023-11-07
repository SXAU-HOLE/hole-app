import { Pressable, View } from 'react-native'
import { useUserProfile } from '@/query/user/profile'
import UserAvatar from '@/components/UserAvatar'
import { Text } from 'react-native-paper'
import { SecondaryText } from '@/components/Text/SecondaryText'
import { RightSvg } from '@/components/Icons'
import { useUserProfileRoute } from '@/hooks/route/useUserProfileRoute'

export function UserCard() {
  const { data, isSuccess } = useUserProfile()

  const { goProfileScreen } = useUserProfileRoute()

  return (
    <View className={'h-48 bg-white'}>
      <View className={'h-14'}></View>
      <Pressable
        className={'pl-5 pr-3 flex flex-row'}
        onPress={goProfileScreen}
      >
        {isSuccess && <UserAvatar url={data!.avatar} size={84} />}
        <View className={'ml-4 flex flex-col justify-around'}>
          <Text variant={'titleLarge'} className={'font-bold'}>
            {data?.username}
          </Text>
          <View className={'flex flex-row items-center justify-between'}>
            <SecondaryText className={'mr-3'}>
              账号：{data?.username}
            </SecondaryText>
            <RightSvg size={14} />
          </View>
        </View>
      </Pressable>
    </View>
  )
}
