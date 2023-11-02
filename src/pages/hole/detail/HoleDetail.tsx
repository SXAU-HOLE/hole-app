import { CommentList } from './components/CommentList'
import { useHoleCommentQuery, useHoleDetail } from '@/query/hole'
import { LoadingScreen } from '@/components/LoadingScreen'
import { CommentMaskModal } from '@/pages/hole/detail/components/CommentMaskModal'
import { FullPage } from '@/components/Page'
import { CommentBottomInput } from '@/pages/hole/detail/components/CommentBottomInput'

export function HoleDetail() {
  const { isSuccess } = useHoleDetail()
  const { isSuccess: isCommentSuccess } = useHoleCommentQuery()
  const isAllSuccess = isSuccess && isCommentSuccess

  return (
    <FullPage>
      <LoadingScreen isLoading={!isAllSuccess}>
        <CommentList />
        <CommentBottomInput />
      </LoadingScreen>

      <CommentMaskModal></CommentMaskModal>
    </FullPage>
  )
}
