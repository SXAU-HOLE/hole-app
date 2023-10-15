import { GetHoleListRequest } from '@/apis/hole'
import { HoleListMode } from '@/shared/enum'
import { useQuery } from '@tanstack/react-query'

export function useHoleList() {
  const query = useQuery({
    queryKey: ['hole'],
    queryFn: () =>
      GetHoleListRequest({ limit: 10, page: 1, mode: HoleListMode.hot }),
  })
}
