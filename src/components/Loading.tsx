import { ActivityIndicator, useTheme } from 'react-native-paper'
import * as React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { ThemeProp } from 'react-native-paper/src/types'

type Props = React.ComponentPropsWithRef<typeof View> & {
  /**
   * Whether to show the indicator or hide it.
   */
  animating?: boolean
  /**
   * The color of the spinner.
   */
  color?: string
  /**
   * Size of the indicator.
   */
  size?: 'small' | 'large' | number
}

export function Loading(props: Props) {
  const theme = useTheme()

  return (
    <ActivityIndicator
      animating={true}
      color={props.color || theme.colors.primary}
      size={props.size || 'small'}
    ></ActivityIndicator>
  )
}
