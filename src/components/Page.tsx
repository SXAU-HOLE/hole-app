import { View, Text, ViewProps } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'react-native-paper'

export function FullPage(props: ViewProps) {
  const theme = useTheme()

  return (
    <SafeAreaView>
      <View
        className="min-h-full w-full"
        style={{ backgroundColor: theme.colors.background }}
      >
        {props.children}
      </View>
    </SafeAreaView>
  )
}

const Page = (props: ViewProps) => {
  const theme = useTheme()

  return (
    <SafeAreaView>
      <View
        {...props}
        className="min-h-full w-full px-3"
        style={{ backgroundColor: theme.colors.background }}
      ></View>
    </SafeAreaView>
  )
}

export default Page
