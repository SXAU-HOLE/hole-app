import { Pressable, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Text, useTheme } from 'react-native-paper'
import { BottomTabBarIcons, Icons } from '@/components/router/BottomTabBarIcons'

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const theme = useTheme()
  const RouteNameMap = {
    home: '树洞',
    user: '我',
  }

  return (
    <View
      className={
        'flex-row bottom-0 bg-white border-t-[1px] border-t-black/5 h-14 items-center justify-around'
      }
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index

        return (
          <Pressable
            key={index}
            onPress={() => navigation.navigate(route)}
            className={'flex-1'}
          >
            <View
              className={'flex flex-1 items-center justify-center rounded-full'}
            >
              <BottomTabBarIcons
                route={route.name as Icons}
                isFocused={isFocused}
              />
              <Text className={`${isFocused && 'color-primary'}`}>
                {RouteNameMap[route.name as Icons]}
              </Text>
            </View>
          </Pressable>
        )
      })}
    </View>
  )
}
