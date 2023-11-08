import { User } from '@/pages/user/User'
import { TopTabs } from '@/router/TopTabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabBar } from '@/components/router/BottomTabBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator()
export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name={'home'} component={TopTabs}></Tab.Screen>
      <Tab.Screen name={'user'} component={User} />

      {/*<Tab.Screen name={'user-index'} component={UserScreen} />*/}
    </Tab.Navigator>
  )
}

const UserIndex = createNativeStackNavigator()
function UserScreen() {
  return (
    <UserIndex.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: 'white',
      }}
    >
      <UserIndex.Screen name={'user'} component={User} />
    </UserIndex.Navigator>
  )
}
