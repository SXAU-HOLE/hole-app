import { Image, Pressable, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'

interface Props {
  img: string
}

export function ImageListItem({ img }: { img: string }) {
  const theme = useTheme()

  return (
    <Pressable className={'w-[95%] h-28'}>
      <Image
        source={{ uri: `${img}` }}
        className={'w-full h-28 rounded-lg'}
        style={{
          resizeMode: 'cover',
          backgroundColor: theme.colors.onBackground,
        }}
      ></Image>
    </Pressable>
  )
}

export function ImageList({ imgs }: { imgs: string[] }) {
  return (
    <View>
      {imgs.length ? (
        <View>
          <View className={'flex flex-row flex-wrap'}>
            {imgs.map((img, index) => (
              <View className={'w-[33%] h-28'} key={index}>
                <ImageListItem img={img}></ImageListItem>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  )
}
