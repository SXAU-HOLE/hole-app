import { useLinkTo, useNavigation } from '@react-navigation/native'

export function useHoleSearchRoute() {
  const navigation = useNavigation()
  const linkTo = useLinkTo()

  const goResult = (keywords: string) => {
    // @ts-ignore
    navigation.navigate('hole', {
      screen: 'search',
      params: {
        screen: 'result',
        params: { keywords },
      },
    })
  }

  const goHome = () => {
    linkTo('/index/home/hot')
    console.log('home')
  }

  return {
    goResult,
    goHome,
  }
}
