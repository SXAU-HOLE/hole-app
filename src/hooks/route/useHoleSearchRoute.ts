import { useNavigation } from '@react-navigation/native'

export function useHoleSearchRoute() {
  const navigation = useNavigation()

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
    // @ts-ignore
    navigation.navigate('Index', {
      screen: 'latest',
    })
  }

  return {
    goResult,
    goHome,
  }
}
