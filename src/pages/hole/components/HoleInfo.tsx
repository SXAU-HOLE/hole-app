import { CommentIcon, LikeIcon } from '@/components/Icons'
import TimeText from '@/components/Text/TimeText'
import UserAvatar from '@/components/UserAvatar'
import { Image, View } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import { ImageList } from '@/components/Image/ImageList'

interface Props {
  data: IHole
  onPress?: () => any
}

const HoleInfoHeader = ({ data }: Props) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row space-x-2 items-center">
        <UserAvatar url={data.user.avatar} size={35}></UserAvatar>
        <View>
          <Text className="color-primary font-medium text-xl ">#{data.id}</Text>

          <TimeText time={data.createAt}></TimeText>
        </View>
      </View>
    </View>
  )
}

const HoleInfoBody = ({ data }: Props) => {
  return (
    <View className="flex space-y-2">
      <View>{data.title}</View>
      <View className="overflow-hidden">
        <Text variant={'bodyMedium'}>{data.body}</Text>

        <View className={'flex flex-row flex-wrap w-screen'}>
          {data.imgs.length && <ImageList imgs={data.imgs} />}
        </View>
      </View>
    </View>
  )
}

const HoleInfoBottom = ({ data }: Props) => {
  const iconsList = [
    {
      value: data.favoriteCount,
      element: <LikeIcon size={16} color={'#686E87'} />,
    },
    {
      value: data.favoriteCount,
      element: (
        <CommentIcon name="chat" size={16} color={'#686E87'}></CommentIcon>
      ),
    },
  ]

  return (
    <View className="flex flex-row">
      {iconsList.map((icon, index) => (
        <View key={index} className="flex flex-row items-center space-x-2 mr-4">
          {icon.element}
          <Text className="text-[#686E87]">{icon.value}</Text>
        </View>
      ))}
    </View>
  )
}

export const HoleInfo = ({ data, onPress }: Props) => {
  return (
    <View className="bg-white mt-2 rounded-2xl overflow-hidden">
      <TouchableRipple onPress={onPress}>
        <View className="flex-col space-y-3 px-4 py-2">
          <View>
            <HoleInfoHeader data={data}></HoleInfoHeader>
          </View>

          <View>
            <HoleInfoBody data={data}></HoleInfoBody>
          </View>

          <View>
            <HoleInfoBottom data={data}></HoleInfoBottom>
          </View>
        </View>
      </TouchableRipple>
    </View>
  )
}
