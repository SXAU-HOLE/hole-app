import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { FAB } from 'react-native-paper'

export function AnimateToTop({ visible }: { visible: boolean }) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(visible ? 0 : 100) }],
    }
  }, [visible])

  return (
    <Animated.View style={animatedStyle}>
      <FAB
        icon={'arrow-up'}
        color={'white'}
        mode={'flat'}
        className={`absolute rounded-full right-0`}
      />
    </Animated.View>
  )
}
