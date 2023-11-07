import { View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TouchableRipple, useTheme } from 'react-native-paper'
import { BottomTabBarIcons, Icons } from '@/components/router/BottomTabBarIcons'

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const theme = useTheme()

  return (
    <View
      className={
        'flex-row bottom-0 bg-white border-t-[1px] border-t-black/5 h-14 items-center justify-around'
      }
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index

        return (
          <TouchableRipple
            key={index}
            onPress={() => navigation.navigate(route)}
            className={'flex-1'}
            rippleColor={theme.colors.onBackground}
          >
            <View
              className={'flex flex-1 items-center justify-center rounded-full'}
            >
              <BottomTabBarIcons
                route={route.name as Icons}
                isFocused={isFocused}
              />
            </View>
          </TouchableRipple>
        )
      })}
    </View>
  )
}
