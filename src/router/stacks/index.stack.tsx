import HoleIndex from '@/pages/hole'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const IndexStack = createNativeStackNavigator()

export function IndexStacks() {
  return (
    <IndexStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: '#fff',
        statusBarStyle: 'dark',
      }}
    >
      <IndexStack.Screen
        name={'hole'}
        component={HoleIndex}
      ></IndexStack.Screen>
    </IndexStack.Navigator>
  )
}
