import {
  default as NativeReadMore,
  ReadMoreProps,
} from 'react-native-read-more-text'
import { Text } from 'react-native-paper'

type Props = {
  body: string
  type: string
} & ReadMoreProps

export function ReadMore({ numberOfLines, body, type }: Props) {
  return (
    <NativeReadMore
      numberOfLines={numberOfLines || 7}
      renderTruncatedFooter={(handlePress) => (
        <Text className={'text-primary'} onPress={handlePress}>
          展开{type}
        </Text>
      )}
      renderRevealedFooter={(handlePress) => (
        <Text className={'text-primary'} onPress={handlePress}>
          收起{type}
        </Text>
      )}
    >
      <Text>{body}</Text>
    </NativeReadMore>
  )
}
