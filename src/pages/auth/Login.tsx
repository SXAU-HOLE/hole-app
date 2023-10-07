import { View,TouchableOpacity } from 'react-native'
import React from 'react'
import AuthView from './AuthView'
import { Button } from 'react-native-paper'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormValidator } from '@/shared/validators/auth'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Link } from '@/components/Link'
import Input from '@/components/form/Input'
import PasswordInput from '@/components/form/PasswordInput'

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValidator>({
    resolver: classValidatorResolver(LoginFormValidator),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<LoginFormValidator> = (data) => {
    console.log(data)
  }

  return (
    <View>
      <View>
        <Input<LoginFormValidator>
          name="studentId"
          control={control}
          label="学号"
          keyboardType='numeric'
        ></Input>
      </View>

      <View className="mt-2">
        <PasswordInput<LoginFormValidator>
          name="password"
          control={control}
          label="密码"
        ></PasswordInput>
      </View>

      <View className="flex items-end mt-3">
        <Link size="xs" to="forget">
          忘记密码？点我找回
        </Link>
      </View>

      <TouchableOpacity className="mt-3" onPress={handleSubmit(onSubmit)}>
        <Button mode="contained">
          登录
        </Button>
      </TouchableOpacity>

      <View className="mt-6">
        <Link size="normal" to="register">
          还没有账号？点我注册
        </Link>
      </View>
    </View>
  )
}

const Login = () => {
  return (
    <AuthView>
      <LoginForm></LoginForm>
    </AuthView>
  )
}

export default Login
