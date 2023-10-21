import { useHoleComment } from '@/query/hole'
import { View } from 'react-native'
import { CommentList } from './detail/CommentList'

export function DetailComment() {
  return (
    <View className={'mt-5 bg-white'}>
      <CommentList></CommentList>
    </View>
  )
}
