import { LikeIcon } from '@/components/Icons'
import { AutoSizeImageList } from '@/components/Image/AutoSizeImageList'
import TimeText from '@/components/Text/TimeText'
import UserAvatar from '@/components/UserAvatar'
import { useHoleDetail } from '@/query/hole'
import { View, Image } from 'react-native'
import { IconButton, Text, useTheme } from 'react-native-paper'
import { LikeHole } from './LikeHole'
import { CommentHeader } from '@/pages/hole/components/detail/CommentHeader'
import { Toast } from '@/utils/toast'

export function ContentBottom() {
  return (
    <View className={'py-3 flex flex-row justify-around items-center'}>
      <IconButton
        icon={'share'}
        onPress={() => {
          Toast.info({ text1: '功能正在开发中~~' })
        }}
      ></IconButton>
      <LikeHole></LikeHole>
    </View>
  )
}

export function DetialContent() {
  const { data } = useHoleDetail()
  const theme = useTheme()

  return (
    <View>
      <View className={'flex flex-col bg-white'}>
        <View className={'px-3 py-2'}>
          <View className={'flex flex-row items-center'}>
            <UserAvatar url={data.user?.avatar} size={36}></UserAvatar>
            <View className={'flex flex-col ml-2'}>
              <Text variant={'titleMedium'}>{data.user?.username}</Text>
              <View className={'flex flex-row'}>
                <TimeText time={data.createAt} />
              </View>
            </View>
          </View>
          <View>
            {data.title ? (
              <Text variant={'titleLarge'} className={'font-medium'}>
                {data?.title}
              </Text>
            ) : (
              <></>
            )}
            <Text variant={'bodyMedium'} className={'my-3'}>
              {data.body}
            </Text>
            {data.imgs?.length ? (
              <AutoSizeImageList imgs={data.imgs}></AutoSizeImageList>
            ) : (
              <></>
            )}
          </View>
        </View>
        <ContentBottom></ContentBottom>
      </View>
      {/*  底部距离 */}
      <View
        className={'h-5'}
        style={{ backgroundColor: theme.colors.background }}
      ></View>

      <CommentHeader />
    </View>
  )
}
