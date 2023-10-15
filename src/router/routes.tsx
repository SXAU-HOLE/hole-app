import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AuthStacks from './stacks/auth.stack'
import { useAuth } from '@/hooks/auth'
import HoleStacks from './stacks/hole.stack'

const Stack = createStackNavigator()

export const Routes = () => {
  const { isLogin } = useAuth()

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'auth'} component={AuthStacks}></Stack.Screen>
        <Stack.Screen name={'hole'} component={HoleStacks}></Stack.Screen>
      </Stack.Navigator>
    </>
  )
}
