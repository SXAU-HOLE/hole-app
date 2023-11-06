import { IsString, Length } from 'class-validator'

export class SearchValidator {
  @Length(1, 100, { message: '搜索的正文内容字数限制为1-100' })
  @IsString()
  keywords: string
}
