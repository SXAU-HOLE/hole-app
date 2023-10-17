import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { FAB } from 'react-native-paper'
import React from 'react'

export function AnimateHolePost({ offset }: { offset: number }) {
  const animateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(offset) }],
    }
  }, [offset])

  return (
    <Animated.View style={animateStyle}>
      <FAB
        icon={'plus'}
        color={'white'}
        mode={'flat'}
        className={'absolute rounded-full right-0'}
      ></FAB>
    </Animated.View>
  )
}
