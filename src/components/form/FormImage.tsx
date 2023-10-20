import { Image, View } from 'react-native'
import { Closeable } from '@/components/Closeable'

interface Props {
  imgs: string[]
  onCloseable: (index: number) => void
}

export function FormImage(props: Props) {
  return (
    <View className={'flex flex-row space-x-2'}>
      {props.imgs.map((img, index) => (
        <View key={index}>
          <Image
            source={{ uri: img }}
            resizeMode={'cover'}
            className={'w-20 h-20 rounded-lg'}
          ></Image>
          <Closeable onPress={() => props.onCloseable(index)}></Closeable>
        </View>
      ))}
    </View>
  )
}
