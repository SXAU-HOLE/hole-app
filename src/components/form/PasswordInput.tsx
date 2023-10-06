import { TextInputProps } from 'react-native'
import React, { useState } from 'react'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import Input from './Input'
import { TextInput } from 'react-native-paper'

type Props<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
  label: string
} & TextInputProps

const PasswordInput = <T extends object>({
  name,
  control,
  label,
}: Props<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  return (
    <Input<T>
      name={name}
      control={control}
      label={label}
      secureTextEntry={isShowPassword}
      right={
        <TextInput.Icon
          icon="eye"
          onPress={() => setIsShowPassword(!isShowPassword)}
        />
      }
    ></Input>
  )
}

export default PasswordInput
