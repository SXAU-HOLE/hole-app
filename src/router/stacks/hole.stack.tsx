import HoleList from '@/pages/hole/list'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HoleStack = createNativeStackNavigator()

const HoleStacks = () => {
  return (
    <HoleStack.Navigator screenOptions={{ headerShown: false }}>
      <HoleStack.Screen name="index" component={HoleList}></HoleStack.Screen>
    </HoleStack.Navigator>
  )
}

export default HoleStacks
