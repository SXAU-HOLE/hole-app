import { CommentList } from './components/CommentList'
import { useHoleComment, useHoleDetail } from '@/query/hole'
import { LoadingScreen } from '@/components/LoadingScreen'
import { CommentMaskModal } from '@/pages/hole/detail/components/CommentMaskModal'
import { CommentBottomInput } from '@/pages/hole/detail/components/CommentBottomInput'

export function HoleDetail() {
  const { isSuccess } = useHoleDetail()
  const { isSuccess: isCommentSuccess } = useHoleComment()
  const isAllSuccess = isSuccess && isCommentSuccess

  return (
    <>
      <LoadingScreen isLoading={!isAllSuccess}>
        <CommentList></CommentList>
        <CommentBottomInput></CommentBottomInput>
      </LoadingScreen>

      <CommentMaskModal></CommentMaskModal>
    </>
  )
}
