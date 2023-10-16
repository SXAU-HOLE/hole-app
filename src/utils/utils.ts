import { formatDistanceToNow, differenceInDays, format } from 'date-fns'
import zhCN from 'date-fns/locale/zh-CN'

export function formatDate(time: string) {
  const date = new Date(time)
  const now = new Date()

  const diff = differenceInDays(now, date)

  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: zhCN,
  }).toString()
}
