import { Limit } from '@/shared/config'
import { IsString, Length } from 'class-validator'

export class EditUsernameValidator {
  @Length(Limit.user.minUsernameLength, Limit.user.maxUsernameLength, {
    message: `用户名长度只能为${Limit.user.minUsernameLength}-${Limit.user.maxUsernameLength}`,
  })
  @IsString()
  username: string
}
