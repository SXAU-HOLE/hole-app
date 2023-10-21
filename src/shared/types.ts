export interface IPagination {
  page: number
  limit: number
}

export type PaginateAble<T = any> = IPagination & T

export type PlainObject = Record<string, string>

export interface ListResponseAble {
  items: any[]
  meta: {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
}
