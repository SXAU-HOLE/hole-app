import useKeyboardHeight from '@/hooks/useKeyboardHeight'
import { View } from 'react-native'

interface Props {
  children: React.ReactNode
}

export function KeyboardVisible(props: Props) {
  const height = useKeyboardHeight()

  return (
    <View
      className={'flex-1'}
      style={{
        bottom: height,
      }}
    >
      {props.children}
    </View>
  )
}
