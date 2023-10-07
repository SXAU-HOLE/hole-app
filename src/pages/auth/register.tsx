import { View,TouchableOpacity} from 'react-native'
import React from 'react'
import AuthView from './AuthView'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterFormValidator } from '@/shared/validators/auth'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import Input from '@/components/form/Input'
import { Button } from 'react-native-paper'
import PasswordInput from '@/components/form/PasswordInput'

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValidator>({
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
          keyboardType='numeric'
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

      <TouchableOpacity className={'mt-2'} onPress={handleSubmit(onSubmit)}>
        <Button
          mode={'contained'}
          className={'shadow-none w-full'}
        >
          注册
        </Button>
      </TouchableOpacity>
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
