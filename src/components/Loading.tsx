import { ActivityIndicator, useTheme } from 'react-native-paper'

export function Loading() {
  const theme = useTheme()

  return (
    <ActivityIndicator
      animating={true}
      color={theme.colors.primary}
    ></ActivityIndicator>
  )
}
