declare interface ISearchHoleResponse {
  items: IHole[]
  meta: Meta
}

interface Meta {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}
