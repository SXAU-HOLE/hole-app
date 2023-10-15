export interface IPagination {
  page: number
  limit: number
}

export type PaginateAble<T = any> = IPagination & T
