import { Pressable, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '@/store'
import { Text } from 'react-native-paper'
import { Closeable } from '@/components/Closeable'
import { changeHoleSearchData } from '@/store/reducer/search'
import { useHoleSearchRoute } from '@/hooks/route/useHoleSearchRoute'

export function HoleSearchHistory() {
  const data = useAppSelector((state) => state.search.hole)
  const dispatch = useAppDispatch()
  const { goResult } = useHoleSearchRoute()

  const deleteItem = (index: number) => {
    dispatch(
      changeHoleSearchData((draft) => {
        draft.splice(0, 1)
      }),
    )
  }

  const onPressItem = (tag: string) => {
    goResult(tag)
  }

  return (
    <View>
      <Text variant={'titleSmall'} style={{ lineHeight: 30 }}>
        搜索历史
      </Text>
      <View className={'flex flex-row gap-2'}>
        {data.map((tag, index) => (
          <Pressable key={index} onPress={() => onPressItem(tag)}>
            <View className={'relative bg-gray-400/20 rounded-[5px] py-2 px-4'}>
              <Text className={'text-xs'}>{tag}</Text>
              <Closeable
                onPress={() => {
                  deleteItem(index)
                }}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}
