import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import useKeyboardHeight from '@/hooks/useKeyboardHeight'
import { useState } from 'react'
import {
  Inputting,
  NotInputting,
} from '@/pages/hole/components/detail/Inputting'

export function DetailBottom() {
  const keyboardHeight = useKeyboardHeight()
  const [isInputting, setIsInputting] = useState(false)

  return (
    <View
      className={
        'absolute bottom-0 right-0 left-0 bg-white border-t-[1px] border-black/5'
      }
      style={{
        bottom: keyboardHeight,
      }}
    >
      <View className={'py-1'}>
        {isInputting ? <Inputting /> : <NotInputting />}
      </View>
    </View>
  )
}
