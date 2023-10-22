import { useHoleComment } from '@/query/hole'
import { FlatList, View } from 'react-native'
import { DetialContent } from '@/pages/hole/components/DetailContent'
import { LoadMore } from '@/components/LoadMore'
import { CommentItem } from '@/pages/hole/components/detail/CommentItem'

export function DetailComment() {
  const { flattenData } = useHoleComment()

  return (
    <View className={'bg-white'}>
      <FlatList
        data={flattenData}
        ListHeaderComponent={<DetialContent />}
        ListFooterComponent={<LoadMore text={''} />}
        // @ts-ignore
        renderItem={({ item, index }) =>
          item.map((e, i) => <CommentItem key={i} data={e}></CommentItem>)
        }
      ></FlatList>
    </View>
  )
}
