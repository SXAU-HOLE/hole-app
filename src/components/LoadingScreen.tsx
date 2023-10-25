import { View } from 'react-native'

interface Props {
  isLoading: boolean
  children: React.ReactNode
}
import LottieView from 'lottie-react-native'
import { SecondaryText } from '@/components/Text/SecondaryText'
export function LoadingScreen(props: Props) {
  return (
    <>
      {props.isLoading ? (
        <View
          className={
            'w-full h-screen bg-white flex flex-row items-center justify-center'
          }
        >
          <View className={'flex items-center'}>
            <LottieView
              source={require('@/assets/lottie/loading.json')}
              style={{
                width: 200,
                height: 200,
              }}
              autoPlay
            ></LottieView>
            <SecondaryText>加载中...</SecondaryText>
          </View>
        </View>
      ) : (
        props.children
      )}
    </>
  )
}
