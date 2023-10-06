import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AuthStacks from './stacks/auth.stack'

const Stack = createStackNavigator()

export const Routes = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'auth'} component={AuthStacks}></Stack.Screen>
      </Stack.Navigator>
    </>
  )
}
