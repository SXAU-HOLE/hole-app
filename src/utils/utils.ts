import { formatDistanceToNow, differenceInDays, format } from 'date-fns'
import zhCN from 'date-fns/locale/zh-CN'
import { InfiniteData } from '@tanstack/react-query'
import { Dimensions } from 'react-native'

export function formatDate(time: string) {
  const date = new Date(time)
  const now = new Date()

  const diff = differenceInDays(now, date)

  if (diff < 30) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: zhCN,
    })
      .toString()
      .replace('大约', '')
  } else if (diff < 365) {
    return format(date, 'MM/dd', { locale: zhCN }).toString()
  } else {
    return format(date, 'YYYY/MM/DD', { locale: zhCN }).toString()
  }
}

export function flatInfiniteQueryData<T>(data: InfiniteData<any> | undefined) {
  const isEmpty = data?.pages[0].items?.length === 0

  return {
    isEmpty,
    data: isEmpty ? [] : (data?.pages.map((page) => page.items) as T[]),
  }
}

export function isImageFile(fileName: string) {
  return fileName.endsWith('.png') || fileName.endsWith('.jpg')
}

export const { width: WindowWidth, height: WindowHeight } =
  Dimensions.get('window')
export const { width: ScreenWidth, height: ScreenHeight } =
  Dimensions.get('screen')
