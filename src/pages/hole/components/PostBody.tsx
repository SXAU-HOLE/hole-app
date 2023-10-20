import { View } from 'react-native'
import { HolePostForm } from '@/pages/hole/components/HolePostForm'

export function PostBody({ height }: { height: number }) {
  return (
    <View>
      <HolePostForm height={height}></HolePostForm>
    </View>
  )
}
