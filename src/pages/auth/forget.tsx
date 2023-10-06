import React from 'react'
import AuthView from './AuthView'
import { View } from 'react-native'
import Input from '@/components/form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ForgetFormValidator } from '@/shared/validators/auth'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import PasswordInput from '@/components/form/PasswordInput'
import { Button } from 'react-native-paper'

const ForgetForm = () => {
  const { control, handleSubmit } = useForm<ForgetFormValidator>({
    resolver: classValidatorResolver(ForgetFormValidator),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<ForgetFormValidator> = (data) => {
    console.log(data)
  }

  return (
    <View className="grid space-y-2">
      <View>
        <Input<ForgetFormValidator>
          control={control}
          name={'studentId'}
          label={'学号'}
        />
      </View>

      <View>
        <PasswordInput<ForgetFormValidator>
          control={control}
          name={'password'}
          label={'密码'}
        />
      </View>

      <View>
        <PasswordInput<ForgetFormValidator>
          control={control}
          name={'sxauPassword'}
          label={'请输入信息门户密码'}
        />
      </View>

      <View>
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          重置密码
        </Button>
      </View>
    </View>
  )
}

const Forget = () => {
  return (
    <AuthView>
      <ForgetForm></ForgetForm>
    </AuthView>
  )
}

export default Forget
