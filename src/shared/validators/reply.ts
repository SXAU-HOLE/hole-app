import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class CommentReplyValidator {
  @Length(15, 16)
  @IsString()
  @IsOptional()
  commentId?: string

  @Length(1, 1000, { message: '评论字数限制在1-1000字' })
  @IsNotEmpty({ message: '评论内容不能为空' })
  @IsString()
  body: string

  @IsOptional()
  replyId?: string
}
