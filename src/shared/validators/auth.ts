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

export class RegisterFormValidator extends LoginFormValidator {
  @Length(1, 10, { message: '用户名长度为1-10个字符哦' })
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string

  @Length(6, 30, { message: '密码格式错误，至少是六位' })
  @IsString()
  @IsNotEmpty({ message: '信息门户密码不能为空' })
  sxauPassword: string
}

export class ForgetFormValidator extends LoginFormValidator {
  @Length(6, 30, { message: '密码格式错误，至少是六位' })
  @IsString()
  @IsNotEmpty({ message: '信息门户密码不能为空' })
  sxauPassword: string
}
