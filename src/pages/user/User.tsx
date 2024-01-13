import { FullPage } from '@/components/Page'
import { StatusBar, View } from 'react-native'
import { useAuth } from '@/hooks/auth'
import { UserCard } from '@/pages/user/components/UserCard'
import { UserScreenList } from '@/pages/user/components/UserScreenList'
import { ArrowBar } from '@/pages/user/components/ArrowBar'
import { useIsFocused } from '@react-navigation/native'

export function User() {
  const { logout } = useAuth()
  const isFocused = useIsFocused()

  return (
    <FullPage>
      {isFocused ? (
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'white'}
          animated={true}
          showHideTransition={'slide'}
        />
      ) : null}

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
