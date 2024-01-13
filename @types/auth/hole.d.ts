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
  vote: Vote
}

declare enum VoteType {
  // 单选
  single = 'single',

  // 多选
  multiple = 'multiple',
}

declare interface VoteItem {
  id: number
  option: string
  count: number
  isVoted: number
}

declare interface Vote {
  id: string
  type: VoteType
  title: string
  endTime: Date
  users: User[]
  items: VoteItem[]
  totalCount: number
  isExpired: boolean
  isVoted: number
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
