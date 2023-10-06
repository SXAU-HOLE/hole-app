import React from 'react'
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  get,
} from 'react-hook-form'
import { HelperText, TextInput, TextInputProps } from 'react-native-paper'

type IProps<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
  label: string
} & TextInputProps

const Input = <T extends object>({
  name,
  control,
  label,
  ...props
}: IProps<T>) => {
  const error = get(control._formState.errors, name)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <TextInput
            label={label}
            mode="outlined"
            outlineColor="#CCD6E3"
            error={!!error}
            style={{
              backgroundColor: 'transparent',
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...props}
          ></TextInput>

          {error?.message && (
            <HelperText type="error">{error.message}</HelperText>
          )}
        </>
      )}
    ></Controller>
  )
}

export default Input
