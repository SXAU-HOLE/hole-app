import React, { ReactNode, useState } from 'react'

import {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated'
import { Actionsheet, Input, KeyboardAvoidingView } from 'native-base'
import Animated from 'react-native-reanimated'
import useKeyboardHeight from '@/hooks/useKeyboardHeight'
import { CommentInputForm } from '@/pages/hole/detail/components/CommentInputForm'
import { Text, View } from 'react-native'
import { CommentBottom } from '@/pages/hole/components/detail/CommentBottom'
import { DetailBottom } from '@/pages/hole/detail/components/DetailBottom'

export interface ReplyProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function ReplyBottomSheet({ isOpen, children, onClose }: ReplyProps) {
  const keyboardHeight = useKeyboardHeight()

  const height = useDerivedValue(() => keyboardHeight + 800, [keyboardHeight])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(height.value),
    }
  })

  return (
    <>
      <KeyboardAvoidingView>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content bg={'#fff'} className={'relative'}>
            <Animated.View style={[animatedStyle]} className={'w-full'}>
              {children}
            </Animated.View>
            <View className={'absolute bottom-0 w-full'}>
              <CommentInputForm></CommentInputForm>
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      </KeyboardAvoidingView>
    </>
  )
}
