import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useAuth } from '@/hooks/auth'

export function User() {
  const { logout } = useAuth()

  return (
    <View>
      <Text>User</Text>
      <Button onPress={logout}>退出登录</Button>
    </View>
  )
}
