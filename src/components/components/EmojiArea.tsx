import { Pressable, View } from 'react-native'
import { EmojiItem, EmojiList } from '@/assets/emoji'
import { Emoji } from '@/components/components/Emoji'
import { ScrollView } from 'native-base'

interface Props {
  onSelect: (emoji: EmojiItem) => any
}

export function EmojiArea(props: Props) {
  return (
    <ScrollView className={'h-56 py-2 bg-background'}>
      <View className={'flex-row space-y-4 space-x-1 items-center flex-wrap'}>
        {EmojiList.map((emoji) => {
          return (
            <Pressable key={emoji.name} onPress={() => props.onSelect(emoji)}>
              <View className={'flex justify-center items-center'}>
                <Emoji asset={emoji.asset} />
              </View>
            </Pressable>
          )
        })}
      </View>
    </ScrollView>
  )
}
