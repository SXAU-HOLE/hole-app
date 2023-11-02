import { Image, ImageProps, View } from 'react-native'
import { SecondaryText } from '@/components/Text/SecondaryText'

interface Props extends Partial<ImageProps> {
  text?: string
}

export function Empty({ text }: Props) {
  return (
    <View className={'w-full flex items-center justify-center'}>
      <Image
        source={require('@/assets/imgs/empty.png')}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <SecondaryText>{text ?? '没有更多数据了哦'}</SecondaryText>
    </View>
  )
}
