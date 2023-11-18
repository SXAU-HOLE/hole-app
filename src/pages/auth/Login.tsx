import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AuthView from './AuthView'
import { Button } from 'react-native-paper'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormValidator } from '@/shared/validators/auth'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Link } from '@/components/Link'
import Input from '@/components/form/Input'
import PasswordInput from '@/components/form/PasswordInput'
import { LoginRequest } from '@/apis/auth'
import { useAuth } from '@/hooks/auth'

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValidator>({
    resolver: classValidatorResolver(LoginFormValidator),
    mode: 'onBlur',
  })

  const { login } = useAuth()
  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<LoginFormValidator> = async (data) => {
    setLoading(true)
    const res = await LoginRequest(data)
    setLoading(false)

    if (res?.access_token) {
      login(res?.access_token)
    }
  }

  return (
    <View>
      <View>
        <Input<LoginFormValidator>
          name="studentId"
          control={control}
          label="学号"
          keyboardType="numeric"
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
        <Button mode="contained" loading={loading}>
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
