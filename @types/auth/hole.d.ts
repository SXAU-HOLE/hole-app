declare interface IHoleListResponse {
  items: IHole[]
  meta: IPage
}

declare interface IHole {
  tags: any[]
  id: string
  createAt: string
  title: string
  body: string
  imgs: string[]
  favoriteCount: number
  user: IUser
  isLiked: boolean
  commentCounts: number
}

interface IUser {
  id: number
  createAt: string
  username: string
  role: string
  avatar: string
  studentId: string
}

interface IPage {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}
