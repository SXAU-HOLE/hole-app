import { View, Text } from 'react-native'
import React from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'
import { TextInputProps } from 'react-native-paper'

type IProps<T extends FieldValues = FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
} & TextInputProps

const Input: React.FC<IProps> = ({ name, control, ...props }) => {
  return <Controller></Controller>
}

export default Input
