import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HoleDetail } from '@/pages/hole/HoleDetail'
import { HolePost } from '@/pages/hole/HolePost'
import { HoleSearch } from '@/pages/hole/HoleSearch'
import { HoleDetailHeader } from '@/pages/hole/components/detail/DetailHeader'
import { CommentContext } from '@/shared/context/CommentContext'

const HoleStack = createNativeStackNavigator()

const HoleDetailStacks = () => {
  return (
    <CommentContext>
      <HoleStack.Navigator
        initialRouteName={'index'}
        screenOptions={{
          header: () => <HoleDetailHeader />,
          statusBarColor: 'white',
        }}
      >
        <HoleStack.Screen
          name={'index'}
          component={HoleDetail}
        ></HoleStack.Screen>
      </HoleStack.Navigator>
    </CommentContext>
  )
}

const HoleStacks = () => {
  return (
    <HoleStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
      }}
    >
      <HoleStack.Screen
        name={'detail'}
        component={HoleDetailStacks}
      ></HoleStack.Screen>
      <HoleStack.Screen name={'post'} component={HolePost}></HoleStack.Screen>
      <HoleStack.Screen
        name={'search'}
        component={HoleSearch}
      ></HoleStack.Screen>
    </HoleStack.Navigator>
  )
}

export default HoleStacks
