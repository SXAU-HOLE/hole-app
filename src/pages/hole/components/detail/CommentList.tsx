import { useHoleComment } from '@/query/hole'
import { FlatList, View } from 'react-native'
import { CommentItem } from './CommentItem'

export function CommentList() {
  const { flattenData } = useHoleComment()

  return (
    <FlatList
      data={flattenData}
      renderItem={({ item, index }) =>
        item.map((e, i) => <CommentItem key={i} data={e}></CommentItem>)
      }
    ></FlatList>
  )
}
