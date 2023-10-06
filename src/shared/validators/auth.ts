import { IsNotEmpty, IsString, Length } from 'class-validator'

export class LoginFormValidator {
  @Length(11, 11, {
    message: '学号格式错误',
  })
  @IsString()
  @IsNotEmpty({ message: '学号不能为空' })
  studentId: string

  @Length(6, 20, {
    message: '密码只能为6-20位长度',
  })
  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  password: string
}
