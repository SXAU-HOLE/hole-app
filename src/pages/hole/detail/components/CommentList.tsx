import { useHoleCommentQuery } from '@/query/hole'
import React from 'react'
import RefreshingFlatList from '@/components/RefreshingFlatList'
import { CommentItem } from '@/pages/hole/detail/components/CommentItem'
import { DetailContent } from '@/pages/hole/detail/components/DetailContent'
import { LoadMore } from '@/components/LoadMore'
import { DeleteCommentLikeRequest, LikeCommentRequest } from '@/apis/hole'
import { useCommentContext } from '@/shared/context/CommentContext'

export function CommentList() {
  const {
    flattenData,
    hasNextPage,
    fetchNextPage,
    invalidateQuery,
    isFetching,
    isDataEmpty,
  } = useHoleCommentQuery()
  const { openInput, onScroll } = useCommentContext()

  const onTopRefresh = async () => {
    await invalidateQuery()
  }

  return (
    <>
      <RefreshingFlatList
        data={flattenData}
        renderItem={({ item }) => (
          <CommentItem
            key={item.id}
            data={item}
            postLikeRequest={LikeCommentRequest}
            deleteLikeRequest={DeleteCommentLikeRequest}
            onBodyPress={() => openInput({ commentId: item.id, ...item })}
          />
        )}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        onTopRefresh={onTopRefresh}
        onScroll={onScroll}
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
