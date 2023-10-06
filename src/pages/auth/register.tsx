import { View } from 'react-native'
import React from 'react'
import AuthView from './AuthView'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterFormValidator } from '@/shared/validators/auth'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import Input from '@/components/form/Input'
import { Button } from 'react-native-paper'
import PasswordInput from '@/components/form/PasswordInput'

const RegisterForm = () => {
  const { control, handleSubmit } = useForm<RegisterFormValidator>({
    resolver: classValidatorResolver(RegisterFormValidator),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<RegisterFormValidator> = (data) => {
    console.log(data)
  }

  return (
    <View className="grid space-y-2">
      <View>
        <Input<RegisterFormValidator>
          control={control}
          name={'username'}
          label={'取一个好听的名字吧≖‿≖✧'}
        />
      </View>
      <View>
        <Input<RegisterFormValidator>
          control={control}
          name={'studentId'}
          label={'学号'}
        />
      </View>

      <View>
        <PasswordInput<RegisterFormValidator>
          control={control}
          name={'password'}
          label={'密码'}
        />
      </View>

      <View>
        <PasswordInput<RegisterFormValidator>
          control={control}
          name={'sxauPassword'}
          label={'请输入信息门户密码'}
        />
      </View>

      <View className={'mt-2'}>
        <Button
          mode={'contained'}
          className={'shadow-none w-full'}
          onPress={handleSubmit(onSubmit)}
        >
          注册
        </Button>
      </View>
    </View>
  )
}

const Register = () => {
  return (
    <AuthView>
      <RegisterForm></RegisterForm>
    </AuthView>
  )
}

export default Register
