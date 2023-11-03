import { EmojiItem, EmojiList } from '@/assets/emoji'
import { ScrollView } from 'native-base'
import { FlatList, Pressable, View } from 'react-native'
import { Emoji } from '@/components/components/Emoji'

interface Props {
  onSelect: (emoji: EmojiItem) => any
  expandArea?: boolean
}

export function EmojiArea(props: Props) {
  return (
    <>
      {props.expandArea ? (
        <ScrollView className={'h-56 py-2 bg-background'}>
          <View
            className={'flex-row space-y-4 space-x-1 items-center flex-wrap'}
          >
            {EmojiList.map((emoji) => {
              return (
                <Pressable
                  key={emoji.name}
                  onPress={() => props.onSelect(emoji)}
                >
                  <View className={'flex justify-center items-center'}>
                    <Emoji asset={emoji.asset} />
                  </View>
                </Pressable>
              )
            })}
          </View>
        </ScrollView>
      ) : (
        <View className={'py-2'}>
          <FlatList
            data={EmojiList}
            renderItem={({ item: emoji }) => (
              <Pressable onPress={() => props.onSelect(emoji)}>
                <View className={'flex justify-center items-center mx-3'}>
                  <Emoji asset={emoji.asset} size={28} />
                </View>
              </Pressable>
            )}
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'nowrap' }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}
          />
        </View>
      )}
    </>
  )
}
