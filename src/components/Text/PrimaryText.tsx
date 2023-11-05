import { Text, TextProps, useTheme } from 'react-native-paper'

export function PrimaryText(props: TextProps<any>) {
  const theme = useTheme()

  return (
    <Text
      {...props}
      className={props.className}
      style={{ color: theme.colors.primary, ...(props.style as object) }}
    ></Text>
  )
}
