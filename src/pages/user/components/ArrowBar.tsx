import React, { ReactComponentElement } from 'react'
import { Pressable, View } from 'react-native'
import { Text } from 'react-native-paper'
import { RightSvg } from '@/components/Icons'

interface Props {
  icon?: ReactComponentElement<any>
  text: string
  onPress?: () => any
  children?: React.ReactNode
}
export function ArrowBar({ icon, text, onPress, children }: Props) {
  return (
    <Pressable
      className={
        'bg-white flex flex-row items-center justify-between px-6 py-4'
      }
      onPress={onPress}
    >
      <View className={'flex flex-row items-center'}>
        {icon}
        <Text className={`${icon && 'ml-3'}`}>{text}</Text>
      </View>
      <View className={'flex flex-row '}>
        <View className={'mr-3'}>{children}</View>
        <RightSvg size={18} />
      </View>
    </Pressable>
  )
}
