import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HoleStacks from '@/router/stacks/hole.stack'
import { BottomTabs } from '@/router/BottomTabs'
import { UserStacks } from '@/router/stacks/user.stack'

const IndexStack = createNativeStackNavigator()

export function IndexStacks() {
  return (
    <IndexStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        animation: 'slide_from_right',
      }}
    >
      <IndexStack.Screen name={'main'} component={BottomTabs} />
      <IndexStack.Screen name={'hole'} component={HoleStacks} />
      <IndexStack.Screen name={'user-nested'} component={UserStacks} />
    </IndexStack.Navigator>
  )
}
