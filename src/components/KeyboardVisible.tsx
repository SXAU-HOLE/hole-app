import useKeyboardHeight from '@/hooks/useKeyboardHeight'
import { View, ViewProps } from 'react-native'

interface Props extends ViewProps {
  children: React.ReactNode
}

export function KeyboardVisible({ children, ...props }: Props) {
  const height = useKeyboardHeight()

  return (
    <View
      className={'flex-1'}
      style={{
        bottom: height,
      }}
      {...props}
    >
      {children}
    </View>
  )
}
