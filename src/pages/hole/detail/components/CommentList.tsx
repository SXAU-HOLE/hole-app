import { useHoleCommentQuery } from '@/query/hole'
import React from 'react'
import RefreshingFlatList from '@/components/RefreshingFlatList'
import { CommentItem } from '@/pages/hole/detail/components/CommentItem'
import { DetailContent } from '@/pages/hole/detail/components/DetailContent'
import { LoadMore } from '@/components/LoadMore'

export function CommentList() {
  const {
    flattenData,
    hasNextPage,
    fetchNextPage,
    invalidateQuery,
    isFetching,
    isDataEmpty,
  } = useHoleCommentQuery()

  const onTopRefresh = async () => {
    await invalidateQuery()
  }

  return (
    <>
      <RefreshingFlatList
        data={flattenData}
        renderItem={({ item }) => <CommentItem key={item.id} data={item} />}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        onTopRefresh={onTopRefresh}
        refreshing={isFetching}
        ListHeaderComponent={DetailContent}
        ListFooterComponent={() => (
          <LoadMore text={isDataEmpty ? '没有更多评论了哦' : ''} />
        )}
        ListFooterComponentStyle={{
          marginBottom: 50,
          backgroundColor: 'white',
        }}
      ></RefreshingFlatList>
    </>
  )
}
