import { Text, View } from 'react-native'
import { useState } from 'react'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'

export function CommentListHeader() {
  const [order, setOrder] = useState(true)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(order ? 0 : 50) }],
    }
  }, [order])

  return (
    <View
      className={
        'flex flex-row items-center px-3 justify-between h-14 bg-white'
      }
    >
      <View className={'flex flex-row space-x-3'}>
        <Text>全部回复</Text>
      </View>
      <View className={''}>
        <View
          className={
            'w-24 h-8 bg-gray-100 rounded-full flex flex-row items-center relative'
          }
        >
          <Animated.View
            style={animatedStyle}
            className={
              'absolute w-12 h-full bg-white left-0 rounded-full border-[1px] border-gray-200 ' +
              `${!order && 'translate-x-12'} ease-in-out duration-300`
            }
          />
          <View
            className={'flex-1 flex flex-row justify-center rounded-full py-1'}
          >
            <Text
              className={`text-[12px] ${
                !order ? 'text-surface' : 'text-black'
              }`}
              onPress={() => setOrder(true)}
            >
              正序
            </Text>
          </View>
          <View className={'flex-1 flex flex-row justify-center rounded-full'}>
            <Text
              className={`text-[12px] ${order ? 'text-surface' : 'text-black'}`}
              onPress={() => setOrder(false)}
            >
              倒叙
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
