import { DetailComment } from './components/DetailComment'
import { useHoleDetail } from '@/query/hole'
import { FullPage } from '@/components/Page'
import { DetailBottom } from '@/pages/hole/components/detail/DetailBottom'
import { CommentContext } from '@/shared/context/CommentContext'

export function HoleDetail() {
  const { isSuccess } = useHoleDetail()

  return (
    <FullPage>
      <CommentContext>
        {isSuccess ? (
          <>
            <DetailComment></DetailComment>
          </>
        ) : (
          <></>
        )}

        <DetailBottom />
      </CommentContext>
    </FullPage>
  )
}
