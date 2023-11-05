import { EmojiList } from '@/assets/emoji'
import { Emoji } from '@/components/components/Emoji'
import { Text } from 'react-native-paper'
import { StyleProp, TextStyle, View } from 'react-native'
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types'

interface Props {
  body: string
  variant?: VariantProp<any>
  secondary?: boolean
  style?: StyleProp<TextStyle>
  numberOfLines?: number
}

export function EmojiableText({
  body,
  numberOfLines,
  style,
  variant,
  secondary,
  ...props
}: Props) {
  const reg = /(\[.*?\])/g
  const parts = body.split(reg)
  const renderBody = () =>
    parts.map((part, index) => {
      const emoji = EmojiList.find((item) => item.name === part)

      if (emoji) {
        return <Emoji asset={emoji.asset} key={index} size={22} />
      } else {
        return (
          <Text
            className={`${secondary && 'text-surfaceVariant'}`}
            variant={variant || 'bodyMedium'}
            key={index}
            numberOfLines={numberOfLines}
            style={style}
          >
            {part}
          </Text>
        )
      }
    })

  return <View className={'flex flex-wrap flex-row'}>{renderBody()}</View>
}
