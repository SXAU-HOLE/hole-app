import { Text, View } from 'react-native'
import { SegmentedButtons, useTheme } from 'react-native-paper'
import { useState } from 'react'
import { BarsIcon } from '@/components/Icons'

export function CommentHeader() {
  const [value, setValue] = useState('')

  return (
    <View className={'flex flex-row items-center px-3 justify-between h-14'}>
      <View className={'flex flex-row space-x-3'}>
        <Text>全部回复</Text>
      </View>
      <View className={''}>
        <View className={'flex flex-row items-center'}>
          <BarsIcon size={16} className={'color-surfaceVariant'} />
          <Text className={'color-surfaceVariant ml-1'}>按时间正序</Text>
        </View>
      </View>
    </View>
  )
}
