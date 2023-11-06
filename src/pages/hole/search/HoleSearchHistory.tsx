import { Text, View } from 'react-native'
import { useAppSelector } from '@/store'

export function HoleSearchHistory() {
  const data = useAppSelector((state) => state.search.hole)
  console.log(data)

  return (
    <View>
      <Text>HoleSearchHistory</Text>
    </View>
  )
}
