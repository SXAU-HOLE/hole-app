import React from 'react'
import AuthView from './AuthView'
import { View, TouchableOpacity } from 'react-native'
import Input from '@/components/form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ForgetFormValidator } from '@/shared/validators/auth'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import PasswordInput from '@/components/form/PasswordInput'
import { Button } from 'react-native-paper'
import { ForgetRequest } from '@/apis/auth'

const ForgetForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetFormValidator>({
    resolver: classValidatorResolver(ForgetFormValidator),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<ForgetFormValidator> = async (data) => {
    await ForgetRequest(data)
  }

  return (
    <View className="grid space-y-2">
      <View>
        <Input<ForgetFormValidator>
          control={control}
          name={'studentId'}
          label={'学号'}
          keyboardType="numeric"
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

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Button mode="contained">重置密码</Button>
      </TouchableOpacity>
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
