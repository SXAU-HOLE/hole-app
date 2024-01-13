import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator'
import { Limit } from '@/shared/config'

class VoteItem {
  @MaxLength(Limit.holeVoteItemLength, {
    message: `每个选项最长只能是${Limit.holeVoteItemLength}个字符哦`,
  })
  @MinLength(1, { message: '每个选项长度至少要有一个字符哦' })
  value: string
}

export class HolePostVoteClassValidator {
  @ArrayMaxSize(Limit.holeVoteMaxLength, {
    message: `最多只能创建${Limit.holeVoteMaxLength}个选项哦`,
  })
  @ArrayMinSize(2, { message: '至少要有两个投票哦' })
  @ValidateNested({ each: true })
  @IsArray()
  items: VoteItem[]

  @MaxLength(Limit.holeVoteTitleMaxLength, {
    message: `标题只能是${Limit.holeVoteItemLength}个字符哦`,
  })
  @IsString()
  title: string
}
