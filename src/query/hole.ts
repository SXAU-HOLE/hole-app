import {GetHoleListRequest} from '@/apis/hole'
import {HoleListMode} from '@/shared/enum'
import {useInfiniteQuery} from '@tanstack/react-query'
import {useRoute} from "@react-navigation/native";
import {useMemo} from "react";

export function useHoleList() {
    const route = useRoute()

    const mode = useMemo(() => {
        if (route.name === 'latest') {
            return HoleListMode.latest
        } else if (route.name === 'hot') {
            return HoleListMode.hot
        }
    }, [route])

    const query = useInfiniteQuery(
        ['hole.list', mode],
        ({pageParam = 1}) => GetHoleListRequest({limit: 10, page: pageParam, mode: mode!}),
        {
          getNextPageParam: (lastPage) => {
            const nextPage = lastPage.meta.currentPage + 1

            if(nextPage > lastPage.meta.totalPages || lastPage.items.length === 0) {
              return
            }

            return nextPage
          }
        }
    )

    return {...query}
}
