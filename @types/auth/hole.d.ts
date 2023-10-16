declare interface IHoleListResponse {
  items: IHole[]
  meta: IPage
}

declare interface IHole {
  id: number
  createAt: string
  title: string
  body: string
  imgs: string[]
  favoriteCount: number
  user: IUser
}

interface IUser {
  id: number
  createAt: string
  username: string
  role: string
  avatar: string
}

interface IPage {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}
