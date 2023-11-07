import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AuthStacks from './stacks/auth.stack'
import { IndexStacks } from '@/router/stacks/index.stack'
import { useAppSelector } from '@/store'

const Stack = createStackNavigator()

export const Routes = () => {
  const isLogin = useAppSelector((state) => state.user.isLogin)

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
