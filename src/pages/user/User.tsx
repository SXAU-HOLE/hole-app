import { Button } from 'react-native-paper'
import { useAuth } from '@/hooks/auth'
import { FullPage } from '@/components/Page'
import { UserCard } from '@/pages/user/components/UserCard'
import { UserScreenList } from '@/pages/user/components/UserScreenList'
import { View } from 'react-native'

export function User() {
  const { logout } = useAuth()

  return (
    <FullPage>
      <UserCard />

      <View className={'mt-10'}>
        <UserScreenList />
      </View>

      <View className={'mt-10'}>
        <Button onPress={logout}>退出登录</Button>
      </View>
    </FullPage>
  )
}
