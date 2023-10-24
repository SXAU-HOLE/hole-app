import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  get,
  UseControllerProps,
} from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native'
import { HelperText, useTheme } from 'react-native-paper'

interface Props<T extends FieldValues> extends TextInputProps {
  name: FieldPath<T>
  control: Control<T>
  rules?: UseControllerProps<T>['rules']
  inputRef?: React.MutableRefObject<any>
}

export const AreaInput = <T extends object>({
  name,
  control,
  rules,
  ...props
}: Props<T>) => {
  const theme = useTheme()
  const error = get(control._formState.errors, name)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, onBlur } }) => (
        <>
          <TextInput
            ref={props.inputRef}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            textAlignVertical={'top'}
            cursorColor={theme.colors.primary}
            style={{
              fontSize: 16,
              ...(props.style as object),
            }}
            {...props}
          />
          {error?.message && (
            <HelperText
              type="error"
              visible={error}
              style={{ color: theme.colors.error }}
            >
              {error.message}
            </HelperText>
          )}
        </>
      )}
    ></Controller>
  )
}
