import { DetailComment } from './components/DetailComment'
import { useHoleDetail } from '@/query/hole'
import { FullPage } from '@/components/Page'
import { DetailBottom } from '@/pages/hole/components/detail/DetailBottom'

export function HoleDetail() {
  const { isSuccess } = useHoleDetail()

  return (
    <FullPage>
      {isSuccess ? (
        <>
          <DetailComment></DetailComment>
        </>
      ) : (
        <></>
      )}

      <DetailBottom />
    </FullPage>
  )
}
