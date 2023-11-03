import { AutoSizeImageList } from '@/components/Image/AutoSizeImageList'
import TimeText from '@/components/Text/TimeText'
import UserAvatar from '@/components/UserAvatar'
import { useHoleDetail } from '@/query/hole'
import { View } from 'react-native'
import { IconButton, Text, useTheme } from 'react-native-paper'
import { LikeHole } from '../../components/LikeHole'
import { CommentListHeader } from '@/pages/hole/detail/components/CommentListHeader'
import { Toast } from '@/utils/toast'
import { EmojiableText } from '@/components/Text/EmojiableText'

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

export function DetailContent() {
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

            <View className={'my-3'}>
              <EmojiableText body={data.body} />
            </View>

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

      <CommentListHeader />
    </View>
  )
}
