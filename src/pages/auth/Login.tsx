import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('register')
  }

  return (
    <View className="flex items-center">
      <Text>Login</Text>
      <Button onPress={handleNavigation} title="注册"></Button>
    </View>
  )
}

export default Login
