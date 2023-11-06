import { IsNotEmpty, Length } from 'class-validator'

export class SearchValidator {
  @Length(1, 100, { message: '搜索的正文内容字数限制为1-100' })
  @IsNotEmpty({ message: '搜索内容不能为空哦~' })
  keywords: string
}
