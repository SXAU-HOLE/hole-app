import { Text, TextProps, useTheme } from 'react-native-paper'

export function SecondaryText(props: TextProps<any>) {
  const theme = useTheme()

  return (
    <Text
      className={`${props.className} color-surfaceVariant`}
      {...props}
    ></Text>
  )
}
