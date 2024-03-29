import Login from '@/pages/auth/Login'
import Forget from '@/pages/auth/forget'
import Register from '@/pages/auth/register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const AuthStack = createNativeStackNavigator()

const AuthStacks = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="register" component={Register}></AuthStack.Screen>
      <AuthStack.Screen name="forget" component={Forget}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}

export default AuthStacks
