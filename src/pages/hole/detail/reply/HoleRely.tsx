import { LoadingScreen } from '@/components/LoadingScreen'
import { FullPage } from '@/components/Page'
import RefreshingFlatList from '@/components/RefreshingFlatList'
import { useReplyListQuery } from '@/query/hole'
import { CommentItem } from '@/pages/hole/detail/components/CommentItem'
import { DeleteReplyLikeRequest, LikeReplyRequest } from '@/apis/hole'
import { LoadMore } from '@/components/LoadMore'
import { HoleReplyHeader } from '@/pages/hole/detail/reply/HoleReplyHeader'

export function HoleRely() {
  const {
    flattenData,
    isEmpty,
    isLoading,
    hasNextPage,
    invalidateQuery,
    fetchNextPage,
  } = useReplyListQuery()

  const onTopRefresh = async () => {
    await invalidateQuery()
  }

  return (
    <LoadingScreen isLoading={isLoading}>
      <FullPage>
        <RefreshingFlatList
          data={flattenData}
          renderItem={({ item }) => (
            <CommentItem
              data={item as IHoleReplyListItem}
              deleteLikeRequest={DeleteReplyLikeRequest}
              postLikeRequest={LikeReplyRequest}
            />
          )}
          refreshing={isLoading}
          onTopRefresh={onTopRefresh}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          ListHeaderComponent={HoleReplyHeader}
          ListFooterComponent={() => (
            <LoadMore
              text={isEmpty ? '没有更多回复了哦' : ''}
              hasNextPage={hasNextPage}
            />
          )}
        />
      </FullPage>
    </LoadingScreen>
  )
}
