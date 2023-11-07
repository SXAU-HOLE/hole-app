import { User } from '@/pages/user/User'
import { TopTabs } from '@/router/TopTabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabBar } from '@/components/router/BottomTabBar'

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
      <Tab.Screen name={'user'} component={User} options={{}}></Tab.Screen>
    </Tab.Navigator>
  )
}
