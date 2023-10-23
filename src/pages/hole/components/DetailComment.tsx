import { useHoleComment } from '@/query/hole'
import { FlatList, View } from 'react-native'
import { DetialContent } from '@/pages/hole/components/DetailContent'
import { LoadMore } from '@/components/LoadMore'
import { CommentItem } from '@/pages/hole/components/detail/CommentItem'
import React from 'react'

export function DetailComment() {
  const { flattenData, hasNextPage, fetchNextPage } = useHoleComment()

  const onLoadMore = async () => {
    if (!hasNextPage) return

    await fetchNextPage()
  }

  return (
    <View className={'bg-white'}>
      <FlatList
        data={flattenData}
        ListHeaderComponent={<DetialContent />}
        ListFooterComponent={() => (
          <>
            <LoadMore
              text={'没有更多评论了哦'}
              hasNextPage={hasNextPage}
            ></LoadMore>
            <View className={'mt-20 bg-transparent'}></View>
          </>
        )}
        // @ts-ignore
        renderItem={({ item, index }) =>
          item.map((e, i) => <CommentItem key={i} data={e}></CommentItem>)
        }
        onEndReachedThreshold={0.1}
        onEndReached={onLoadMore}
      ></FlatList>
    </View>
  )
}
