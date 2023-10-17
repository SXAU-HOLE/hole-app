import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { FAB } from 'react-native-paper'
import React, { useCallback } from 'react'
import { useLinkTo } from '@react-navigation/native'

export function AnimateHolePost({ offset }: { offset: number }) {
  const linkTo = useLinkTo()
  const onPress = useCallback(() => {
    linkTo('/hole/post')
  }, [linkTo])

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
        onPress={onPress}
      ></FAB>
    </Animated.View>
  )
}
