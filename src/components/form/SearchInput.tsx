import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'

import { TextInput, TextInputProps } from 'react-native'
import { PlainObject } from '@/shared/types'
import { useTheme } from 'react-native-paper'

type Props<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
  rules?: UseControllerProps<T>['rules']
} & TextInputProps

export function SearchInput<T extends object = PlainObject>({
  name,
  control,
  rules,
  ...props
}: Props<T>) {
  const theme = useTheme()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <>
          <TextInput
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
            cursorColor={theme.colors.primary}
            {...props}
          />
        </>
      )}
    />
  )
}
