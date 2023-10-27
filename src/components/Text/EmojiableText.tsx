import { EmojiList } from '@/assets/emoji'
import { Emoji } from '@/components/components/Emoji'
import { Text } from 'react-native-paper'
import { View } from 'react-native'

interface Props {
  body: string
  numberOfLines?: number
}

export function EmojiableText({ body, numberOfLines }: Props) {
  const reg = /(\[.*?\])/g
  const parts = body.split(reg)

  const renderBody = () =>
    parts.map((part, index) => {
      const emoji = EmojiList.find((item) => item.name === part)

      if (emoji) {
        return <Emoji asset={emoji.asset} key={index} size={24} />
      } else {
        return (
          <Text
            className={`${'text-surfaceVariant'}`}
            variant={'bodyLarge'}
            key={index}
            numberOfLines={numberOfLines || 7}
          >
            {part}
          </Text>
        )
      }
    })

  return <View className={'flex flex-wrap flex-row'}>{renderBody()}</View>
}
