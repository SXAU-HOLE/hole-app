import {
  GetHoleDetailCommentsRequest,
  GetHoleDetailRequest,
  GetHoleListRequest,
  GetReplyListRequest,
  GetSearchRequest,
} from '@/apis/hole'
import { HoleListMode } from '@/shared/enum'
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useRoute } from '@react-navigation/native'
import { useMemo } from 'react'
import { useBaseInfiniteQuery } from '@/hooks/useBaseInfiniteQuery'
import { flatInfiniteQueryData } from '@/utils/utils'
import { HoleReplyListRouteParams } from '@/hooks/useReplyListRoute'
import { SearchValidator } from '@/shared/validators/hole/search'

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

  const refetchQueries = () => {
    client.refetchQueries(queryKey)
  }

  return { ...query, invalidateQuery, refetchQueries }
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

export function useHoleCommentQuery() {
  const params = useRoute().params as { id: string }

  const key = ['hole.comments', params.id]

  const query = useBaseInfiniteQuery<IHoleCommentListResponse>({
    queryKey: key,
    queryFn: ({ pageParam = 1 }) => {
      return GetHoleDetailCommentsRequest({
        limit: 10,
        page: pageParam,
        id: params.id,
      })
    },
  })

  const { data: flattenData } = useMemo(() => {
    return flatInfiniteQueryData<IHoleCommentListItem[]>(query.data)
  }, [query.data])

  const isDataEmpty = flattenData?.length > 0

  return {
    ...query,
    flattenData,
    isDataEmpty,
    id: params.id,
  }
}

export function useReplyListQuery() {
  const params = useRoute().params as HoleReplyListRouteParams

  const queryKey = ['hole.reply', params.commentId, params.replyId]

  const query = useBaseInfiniteQuery<any>({
    queryKey,
    queryFn: ({ pageParam }) =>
      GetReplyListRequest({ id: params.commentId, page: pageParam, limit: 10 }),
  })

  return {
    ...query,
  }
}

export function useSearchResultQuery() {
  const params = useRoute().params as SearchValidator

  const key = [params.keywords]

  const query = useBaseInfiniteQuery({
    queryKey: key,
    queryFn: ({ pageParam }) =>
      GetSearchRequest({
        limit: 10,
        page: pageParam,
        keywords: '123',
      }),
  })

  return {
    ...query,
  }
}
