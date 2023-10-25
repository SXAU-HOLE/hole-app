import { View } from 'react-native'
import { HolePostForm } from '@/pages/hole/components/post/HolePostForm'

export function PostBody({ height }: { height: number }) {
  return (
    <View>
      <HolePostForm height={height}></HolePostForm>
    </View>
  )
}
