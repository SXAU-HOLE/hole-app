import { FullPage } from '@/components/Page'
import { UserCard } from '@/pages/user/components/UserCard'
import { UserScreenList } from '@/pages/user/components/UserScreenList'
import { View } from 'react-native'
import { ArrowBar } from '@/pages/user/components/ArrowBar'
import { useAuth } from '@/hooks/auth'

export function User() {
  const { logout } = useAuth()

  return (
    <FullPage>
      <UserCard />

      <View className={'mt-3'}>
        <UserScreenList />
      </View>

      <View className={'mt-3'}>
        <ArrowBar text={'退出登录'} center={true} onPress={logout} />
      </View>
    </FullPage>
  )
}
