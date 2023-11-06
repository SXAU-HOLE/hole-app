import { FullPage } from '@/components/Page'
import { useSearchResultQuery } from '@/query/hole'
import HoleList from '@/pages/hole/components/list'

export function HoleSearchResult() {
  const query = useSearchResultQuery()

  return (
    <FullPage>
      <HoleList {...query} />
    </FullPage>
  )
}
