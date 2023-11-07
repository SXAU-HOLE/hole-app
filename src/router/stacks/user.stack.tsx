import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { Header } from '@/components/Header'
import { Profile } from '@/pages/user/profile/profile'
import { UserCommentList } from '@/pages/user/comment/UserCommenList'
import { UserLikedHoleList } from '@/pages/user/like/UserLikedHoleList'

const UserStack = createNativeStackNavigator()

export type UserScreen = {
  name: string
  component: React.FunctionComponent
  options?: NativeStackNavigationOptions
}

const UserScreens: UserScreen[] = [
  {
    name: 'profile',
    component: Profile,
    options: {
      title: '个人信息',
    },
  },
  {
    name: 'comments',
    component: UserCommentList,
    options: {
      title: '我的评论',
    },
  },
  {
    name: 'liked',
    component: UserLikedHoleList,
    options: {
      title: '我的点赞',
    },
  },
]

export const UserStacks = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      {UserScreens.map((screen) => (
        <UserStack.Screen
          key={screen.name}
          name={screen.name}
          options={screen.options}
          component={screen.component}
        />
      ))}
    </UserStack.Navigator>
  )
}
