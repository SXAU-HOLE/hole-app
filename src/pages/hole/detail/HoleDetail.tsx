import { CommentList } from './components/CommentList'
import { useHoleComment, useHoleDetail } from '@/query/hole'
import { FullPage } from '@/components/Page'
import { CommentContext } from '@/shared/context/CommentContext'
import { CommentInputForm } from '@/pages/hole/detail/components/CommentInputForm'
import { LoadingScreen } from '@/components/LoadingScreen'
import { Modal } from 'native-base'
import { CommentMaskModal } from '@/pages/hole/detail/components/CommentMaskModal'
import { CommentBottomInput } from '@/pages/hole/detail/components/CommentBottomInput'
export function HoleDetail() {
  const { isSuccess } = useHoleDetail()
  const { isSuccess: isCommentSuccess } = useHoleComment()
  const isAllSuccess = isSuccess && isCommentSuccess

  return (
    <CommentContext>
      <LoadingScreen isLoading={!isAllSuccess}>
        <CommentList></CommentList>
        <CommentBottomInput></CommentBottomInput>
      </LoadingScreen>

      <CommentMaskModal></CommentMaskModal>
    </CommentContext>
  )
}
