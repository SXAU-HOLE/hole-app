import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'
import AuthStacks from './stacks/auth.stack'
import { useAuth } from '@/hooks/auth'
import { IndexStacks } from '@/router/stacks/index.stack'

const Stack = createStackNavigator()

export const Routes = () => {
  const { isLogin } = useAuth()

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <Stack.Screen name={'index'} component={IndexStacks}></Stack.Screen>
        ) : (
          <Stack.Screen name={'auth'} component={AuthStacks}></Stack.Screen>
        )}
      </Stack.Navigator>
    </>
  )
}
