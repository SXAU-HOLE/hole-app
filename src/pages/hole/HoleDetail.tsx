import { DetailComment } from './components/DetailComment'
import { useHoleComment, useHoleDetail } from '@/query/hole'
import { FullPage } from '@/components/Page'
import { CommentContext } from '@/shared/context/CommentContext'
import { CommentInputForm } from '@/pages/hole/components/detail/CommentInputForm'
import { LoadingScreen } from '@/components/LoadingScreen'
export function HoleDetail() {
  const { isSuccess } = useHoleDetail()
  const { isSuccess: isCommentSuccess } = useHoleComment()
  const isAllSuccess = isSuccess && isCommentSuccess

  return (
    <FullPage>
      <LoadingScreen isLoading={!isAllSuccess}>
        <CommentContext>
          {isSuccess ? (
            <>
              <DetailComment></DetailComment>
            </>
          ) : (
            <></>
          )}

          <CommentInputForm></CommentInputForm>
        </CommentContext>
      </LoadingScreen>
    </FullPage>
  )
}
