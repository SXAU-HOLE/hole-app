import { SearchHeader } from '@/components/search/header'
import { SearchValidator } from '@/shared/validators/hole/search'
import { useHoleSearchRoute } from '@/hooks/route/useHoleSearchRoute'
import { useAppDispatch } from '@/store'
import { changeHoleSearchData } from '@/store/reducer/search'
import { SafeAreaView } from 'react-native-safe-area-context'

export function HoleSearchHeader() {
  const dispatch = useAppDispatch()
  const { goResult } = useHoleSearchRoute()

  const onSubmit = (data: SearchValidator) => {
    dispatch(
      changeHoleSearchData((draft) => {
        draft.unshift(data.keywords)
      }),
    )
    goResult(data.keywords)
  }

  return (
    <>
      <SearchHeader
        onSubmit={onSubmit}
        placeholder={'搜索正文内容、#标签、#帖子号'}
      />
    </>
  )
}
