import { View } from 'react-native'
import { LoadingScreen } from '@/components/LoadingScreen'

export function HoleRely() {
  return (
    <LoadingScreen isLoading={true}>
      <View></View>
    </LoadingScreen>
  )
}
