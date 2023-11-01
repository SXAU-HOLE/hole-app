import { View } from 'react-native'
import { useTheme } from 'react-native-paper'

import React from 'react'

export function Separator() {
  const theme = useTheme()

  return (
    <View
      className={'h-2 w-full'}
      style={{ backgroundColor: theme.colors.background }}
    />
  )
}

export function DashBorderSeparator({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useTheme()

  return (
    <View
      className={'border-b-[1px] border-dashed pb-3'}
      style={{ borderColor: theme.colors.onBackground }}
    >
      {children}
    </View>
  )
}
