import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useAuth } from '@/hooks/auth'

const HoleIndex = () => {
  const { logout } = useAuth()

  return (
    <View>
      <Text>HoleIndex</Text>
      <Button onPress={logout}>退出登录</Button>
    </View>
  )
}

export default HoleIndex
