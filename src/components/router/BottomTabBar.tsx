import { Text, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TouchableRipple } from 'react-native-paper'

export function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View
      className={
        'flex-row bottom-0 bg-white border-t-[1px] border-t-black/5 h-14 items-center justify-around'
      }
    >
      {state.routes.map((route, index) => {
        return (
          <TouchableRipple
            key={index}
            onPress={() => navigation.navigate(route)}
          >
            <Text>{route.name}</Text>
          </TouchableRipple>
        )
      })}
    </View>
  )
}
