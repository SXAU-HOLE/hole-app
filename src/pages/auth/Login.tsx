import { View } from 'react-native'
import React from 'react'
import AuthView from './AuthView'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormValidator } from '@/shared/validators/auth'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Link } from '@/components/Link'

const LoginForm = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<LoginFormValidator>({
    resolver: classValidatorResolver(LoginFormValidator),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<LoginFormValidator> = (data) => {
    console.log(data)
  }

  return (
    <View>
      <View>
        <Controller
          control={control}
          name="studentId"
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                label={'学号'}
                mode="outlined"
                outlineColor="#CCD6E3"
                error={!!errors.studentId}
                style={{
                  backgroundColor: 'transparent',
                }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              ></TextInput>

              {errors?.studentId && (
                <HelperText type="error">{errors.studentId.message}</HelperText>
              )}
            </>
          )}
        ></Controller>
      </View>

      <View className="mt-2">
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                label={'密码'}
                mode="outlined"
                outlineColor="#CCD6E3"
                error={!!errors.password}
                style={{
                  backgroundColor: 'transparent',
                }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              ></TextInput>

              {errors?.password && (
                <HelperText type="error">{errors.password.message}</HelperText>
              )}
            </>
          )}
        ></Controller>
      </View>

      <View className="flex items-end mt-3">
        <Link size="xs" to="forget">
          忘记密码？点我找回
        </Link>
      </View>

      <View className="mt-3">
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          登录
        </Button>
      </View>

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
