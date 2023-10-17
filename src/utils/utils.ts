import { formatDistanceToNow, differenceInDays, format } from 'date-fns'
import zhCN from 'date-fns/locale/zh-CN'
import {InfiniteData} from "@tanstack/react-query";

export function formatDate(time: string) {
  const date = new Date(time)
  const now = new Date()

  const diff = differenceInDays(now, date)

  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: zhCN,
  }).toString()
}

export function flatInfiniteQueryData(data: InfiniteData<any> | undefined) {
  const isEmpty = data?.pages[0].items.length === 0

  return {
    isEmpty,
    data: isEmpty ? [] : (data?.pages.map(page => page.items))
  }
}
