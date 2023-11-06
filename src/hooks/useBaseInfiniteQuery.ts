import { ListResponseAble } from '@/shared/types'
import { flatInfiniteQueryData } from '@/utils/utils'
import {
  InfiniteData,
  SetDataOptions,
  Updater,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQueryClient,
} from '@tanstack/react-query'

interface Options<T extends ListResponseAble>
  extends UseInfiniteQueryOptions<T> {}

export function useBaseInfiniteQuery<T extends ListResponseAble>(
  options: Options<T>,
) {
  const query = useInfiniteQuery(options.queryKey!, options.queryFn!, {
    getNextPageParam: (lastPages) => {
      console.log(lastPages)
      const nextPage = lastPages.meta?.currentPage + 1

      if (
        nextPage > lastPages.meta?.totalPages ||
        lastPages.items?.length === 0
      ) {
        return
      }
      return nextPage
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    ...options,
  })

  const { data: flattenData, isEmpty } = flatInfiniteQueryData<T>(query.data)

  const client = useQueryClient()
  const invalidateQuery = async () => {
    client.setQueryData<InfiniteData<T>>(options.queryKey!, (oldData) => {
      // 确保刷新时只更换第一组数据，其他组的数据全都销毁
      oldData!.pages = oldData!.pages.slice(0, 1)
      return oldData!
    })
    await client.invalidateQueries(options.queryKey, {
      refetchPage: (lastPage, index) => index === 0,
    })
  }
  const setData = <TData extends InfiniteData<T> = InfiniteData<T>>(
    updater: Updater<TData | undefined, TData>,
    setOptions?: SetDataOptions,
  ) => {
    client.setQueryData<TData>(options.queryKey!, updater, setOptions)
  }

  return {
    ...query,
    client,
    flattenData,
    isEmpty,
    invalidateQuery,
    setData,
  }
}
