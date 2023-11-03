import { useQuery } from '@tanstack/react-query'
import { GetHotTagsRequest } from '@/apis/hole'

export function useTagsQuery() {
  const key = ['post.tags']

  const query = useQuery({
    queryKey: key,
    queryFn: GetHotTagsRequest,
  })

  return {
    ...query,
  }
}
