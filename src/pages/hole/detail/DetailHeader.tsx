import { Text } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useHoleDetail } from '@/query/hole'
import { useCommentContext } from '@/shared/context/CommentContext'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import TimeText from '@/components/Text/TimeText'
import { Loading } from '@/components/Loading'

export function HoleDetailHeader() {
  const navigation = useNavigation()
  const { data, isSuccess } = useHoleDetail()
  const params = useRoute().params as any
  const { isShowHeader } = useCommentContext()

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(isShowHeader ? 0 : -50) }],
    }
  }, [isShowHeader])

  return (
    <Appbar
      className={
        'w-screen overflow-hidden bg-white flex flex-row space-between h-12 border-b-[1px] border-black/5 items-center'
      }
    >
      <Appbar.BackAction
        onPress={() => navigation.goBack()}
      ></Appbar.BackAction>
      {params.id ? (
        isSuccess ? (
          <>
            <Text className={'text-xl color-primary font-medium'}>
              #{data?.id}
            </Text>
            <Animated.View
              style={animatedStyle}
              className={'flex flex-col ml-2'}
            >
              <Text>{data?.user.username}</Text>
              <TimeText time={data?.createAt} />
            </Animated.View>
          </>
        ) : (
          <Loading />
        )
      ) : (
        <Text className={'text-lg font-medium'}>全部回复</Text>
      )}
    </Appbar>
  )
}
