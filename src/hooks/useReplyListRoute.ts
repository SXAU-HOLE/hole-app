import { useNavigation } from '@react-navigation/native'

export interface HoleReplyListRouteParams {
  id?: string
  commentId: string
  replyId?: string
}

export function useReplyListRoute() {
  const navigation = useNavigation()

  const go = (params: HoleReplyListRouteParams) => {
    // @ts-ignore
    navigation.navigate('hole', {
      screen: 'detail',
      params: {
        screen: 'reply',
        params,
      },
    })
  }

  return {
    go,
  }
}
