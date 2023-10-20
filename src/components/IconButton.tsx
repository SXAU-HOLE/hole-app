import {
  ActivityIndicator,
  IconButton as RNPIconButton,
  IconButtonProps,
  useTheme,
} from 'react-native-paper'
import { View } from 'react-native'

export function IconButton(
  props: IconButtonProps & { transparent?: boolean; loading?: boolean },
) {
  const theme = useTheme()

  return (
    <View>
      <RNPIconButton
        iconColor={theme.colors.surfaceVariant}
        {...props}
        icon={
          props.loading
            ? () => <ActivityIndicator color={'white'} />
            : props.icon
        }
      />
    </View>
  )
}
