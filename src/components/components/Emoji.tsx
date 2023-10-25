import { Image, ImageSourcePropType } from 'react-native'

interface Props {
  asset: ImageSourcePropType
  size?: number
}

export function Emoji(props: Props) {
  return (
    <Image
      source={props.asset}
      style={{
        width: props.size || 30,
        height: props.size || 30,
      }}
    />
  )
}
