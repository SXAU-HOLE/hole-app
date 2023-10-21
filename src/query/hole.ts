import { GetHoleDetailRequest, GetHoleListRequest } from '@/apis/hole'
import { HoleListMode } from '@/shared/enum'
import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useRoute } from '@react-navigation/native'
import { useMemo } from 'react'

export function useHoleList() {
  const route = useRoute()

  const mode = useMemo(() => {
    if (route.name === 'latest') {
      return HoleListMode.latest
    } else if (route.name === 'hot') {
      return HoleListMode.hot
    }
  }, [route])

  const queryKey = ['hole.list', mode]

  const query = useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) =>
      GetHoleListRequest({ limit: 10, page: pageParam, mode: mode! }),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.meta.currentPage + 1

        if (
          nextPage > lastPage.meta.totalPages ||
          lastPage.items.length === 0
        ) {
          return
        }

        return nextPage
      },
    },
  )
  const client = useQueryClient()
  const invalidateQuery = async () => {
    client.setQueryData(queryKey, (oldData: any) => {
      oldData.pages = oldData.pages.slice(0, 1)
      return oldData
    })
    await client.invalidateQueries(queryKey, {
      refetchPage: (page, index) => index === 0,
    })
  }

  return { ...query, invalidateQuery }
}

export function useHoleDetail() {
  const params = useRoute().params as { id: number }

  const key = ['hole.detail', params.id]

  const query = useQuery(key, {
    queryFn: () => GetHoleDetailRequest(params),
  })

  const client = useQueryClient()
  const invalidate = async () => {
    await client.invalidateQueries(key)
  }

  const toggleIsLike = async () => {
    client.setQueryData<IHole>(key, (oldData) => {
      oldData!.isLiked = !oldData!.isLiked
      if (oldData!.isLiked) {
        oldData!.favoriteCount++
      } else {
        oldData!.favoriteCount--
      }
      return oldData
    })
  }

  return {
    ...query,
    data: query.data!,
    invalidate,
    toggleIsLike,
  }
}
