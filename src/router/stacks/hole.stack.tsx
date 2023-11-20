import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HoleDetail } from '@/pages/hole/detail/HoleDetail'
import { HolePost } from '@/pages/hole/post/HolePost'
import { HoleSearchHeader } from '@/pages/hole/search/HoleSearchHeader'
import { HoleDetailHeader } from '@/pages/hole/detail/DetailHeader'
import { CommentContext } from '@/shared/context/CommentContext'
import { HoleRely } from '@/pages/hole/detail/reply/HoleRely'
import { HoleSearchResult } from '@/pages/hole/search/result/result'
import { HoleSearch } from '@/pages/hole/search/HoleSearch'

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
        <HoleStack.Screen
          name={'reply'}
          component={HoleRely}
        ></HoleStack.Screen>
      </HoleStack.Navigator>
    </CommentContext>
  )
}

const HoleSearchStacks = () => {
  return (
    <HoleStack.Navigator
      initialRouteName={'index'}
      screenOptions={{
        header: () => <HoleSearchHeader />,
      }}
    >
      <HoleStack.Screen
        name={'index'}
        component={HoleSearch}
      ></HoleStack.Screen>
      <HoleStack.Screen
        name={'result'}
        component={HoleSearchResult}
      ></HoleStack.Screen>
    </HoleStack.Navigator>
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
      <HoleStack.Screen name={'post'} component={HolePost} />
      <HoleStack.Screen
        name={'search'}
        component={HoleSearchStacks}
      ></HoleStack.Screen>
    </HoleStack.Navigator>
  )
}

export default HoleStacks
