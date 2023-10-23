import { View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { Loading } from '@/components/Loading'

interface Props {
  text?: string
  hasNextPage?: boolean
  style?: object
}

export function LoadMore({ hasNextPage, text, style }: Props) {
  const theme = useTheme()

  return (
    <View
      className={
        'w-screen px-5 flex flex-row items-center py-10 justify-center'
      }
      style={style}
    >
      {hasNextPage ? (
        <Loading />
      ) : (
        <Text style={{ color: theme.colors.surfaceVariant }}>
          {text ? text : '没有更多了哦'}
        </Text>
      )}
    </View>
  )
}
