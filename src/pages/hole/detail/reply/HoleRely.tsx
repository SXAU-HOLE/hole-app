import { LoadingScreen } from '@/components/LoadingScreen'
import { FullPage } from '@/components/Page'
import RefreshingFlatList from '@/components/RefreshingFlatList'
import { useReplyListQuery } from '@/query/hole'
import { CommentItem } from '@/pages/hole/detail/components/CommentItem'
import { DeleteReplyLikeRequest, LikeReplyRequest } from '@/apis/hole'
import { LoadMore } from '@/components/LoadMore'
import { HoleReplyHeader } from '@/pages/hole/detail/reply/HoleReplyHeader'
import { useCommentContext } from '@/shared/context/CommentContext'
import { useReplyRoute } from '@/hooks/route/useReplyRoute'
import { CommentBottomInput } from '@/pages/hole/detail/components/CommentBottomInput'

export function HoleRely() {
  const {
    flattenData,
    isEmpty,
    isLoading,
    hasNextPage,
    invalidateQuery,
    fetchNextPage,
  } = useReplyListQuery()
  const { openInput } = useCommentContext()
  const onTopRefresh = async () => {
    await invalidateQuery()
  }
  const { comment, commentId } = useReplyRoute()

  return (
    <LoadingScreen isLoading={isLoading}>
      <FullPage>
        <RefreshingFlatList
          data={flattenData}
          renderItem={({ item }) => (
            <CommentItem
              data={item}
              deleteLikeRequest={DeleteReplyLikeRequest}
              postLikeRequest={LikeReplyRequest}
              onBodyPress={(data) => {
                openInput({
                  ...data,
                  commentId: commentId,
                  replyId: item?.id,
                  id: commentId,
                })
              }}
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
          ListFooterComponentStyle={{
            marginBottom: 50,
            backgroundColor: 'white',
          }}
        />
        <CommentBottomInput
          // @ts-ignore
          data={{ commentId: comment.id, ...comment }}
        />
      </FullPage>
    </LoadingScreen>
  )
}
