declare interface IHoleReplyListItem {
  id: string
  createAt: string
  body: string
  favoriteCounts: number
  user: User
  comment: Comment
  isLiked: boolean
  replyUser: User
  imgs: string[]
}
