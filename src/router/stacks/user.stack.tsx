import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { Header } from '@/components/Header'
import { Profile } from '@/pages/user/profile/profile'
import { UserCommentList } from '@/pages/user/comment/UserCommenList'
import { UserLikedHoleList } from '@/pages/user/like/UserLikedHoleList'
import { useTheme } from 'react-native-paper'
import { EditUsernameScreen } from '@/pages/user/profile/editUsernameScreen'

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
  {
    name: 'edit-username',
    component: EditUsernameScreen,
    options: {
      title: '修改用户昵称',
    },
  },
]

export const UserStacks = () => {
  const theme = useTheme()

  return (
    <UserStack.Navigator
      screenOptions={{
        header: Header,
        statusBarColor: theme.colors.background,
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
