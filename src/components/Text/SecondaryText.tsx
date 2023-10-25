import { Text, TextProps, useTheme } from 'react-native-paper'

export function SecondaryText(props: TextProps<any>) {
  const theme = useTheme()

  return (
    <Text
      {...props}
      className={props.className}
      style={{
        color: theme.colors.surfaceVariant,
        ...((props.style as object) || {}),
      }}
    ></Text>
  )
}
