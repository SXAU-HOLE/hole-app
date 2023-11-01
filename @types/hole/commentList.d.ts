declare interface IHoleCommentListResponse {
  items: IHoleCommentListItem[]
  meta: Meta
}

declare interface IHoleCommentListItem {
  id: string
  createAt: string
  body: string
  favoriteCount: number
  user: User
  replies: Reply[]
  isLiked: boolean
  imgs: string[]
  repliesCount: number
}

interface User {
  id: number
  createAt: string
  username: string
  avatar: string
}

interface Meta {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

interface Reply {
  id: string
  createAt: string
  body: string
  favoriteCounts: number
  user: User
  replyUser: any
}
