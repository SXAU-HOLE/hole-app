import { View } from 'react-native'
import { HolePostForm } from '@/pages/hole/post/components/HolePostForm'

export function PostBody({ height }: { height: number }) {
  return (
    <View>
      <HolePostForm height={height}></HolePostForm>
    </View>
  )
}
