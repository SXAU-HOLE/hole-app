import React, { ReactNode, useState } from 'react'

import {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated'
import { Actionsheet, KeyboardAvoidingView } from 'native-base'
import Animated from 'react-native-reanimated'
import useKeyboardHeight from '@/hooks/useKeyboardHeight'

export interface ReplyProps {
  children: ReactNode
}

export function ReplyBottomSheet({ children }: ReplyProps) {
  const keyboardHeight = useKeyboardHeight()
  const [open, setOpen] = useState(true)

  const height = useDerivedValue(() => keyboardHeight + 200, [keyboardHeight])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(height.value),
    }
  })

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <KeyboardAvoidingView>
        <Actionsheet isOpen={open} onClose={closeModal}>
          <Actionsheet.Content bg={'#fff'}>
            <Animated.View style={[animatedStyle]} className={'w-full'}>
              {children}
            </Animated.View>
          </Actionsheet.Content>
        </Actionsheet>
      </KeyboardAvoidingView>
    </>
  )
}
