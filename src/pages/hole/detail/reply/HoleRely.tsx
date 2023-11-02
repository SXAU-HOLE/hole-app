import { LoadingScreen } from '@/components/LoadingScreen'
import { FullPage } from '@/components/Page'
import RefreshingFlatList from '@/components/RefreshingFlatList'
import { useReplyListQuery } from '@/query/hole'
import { CommentItem } from '@/pages/hole/detail/components/CommentItem'
import { DeleteReplyLikeRequest, LikeReplyRequest } from '@/apis/hole'
import { LoadMore } from '@/components/LoadMore'
import { HoleReplyHeader } from '@/pages/hole/detail/reply/HoleReplyHeader'
import { CommentBottomInput } from '@/pages/hole/detail/components/CommentBottomInput'
import { useCommentContext } from '@/shared/context/CommentContext'

export function HoleRely() {
  const {
    flattenData,
    isEmpty,
    isLoading,
    hasNextPage,
    invalidateQuery,
    fetchNextPage,
  } = useReplyListQuery()
  const { comment, openInput } = useCommentContext()
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
              onBodyPress={(data) => {
                openInput({
                  commentId: comment!.id,
                  replyId: item.id,
                  body: data.body,
                  user: data.user,
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
