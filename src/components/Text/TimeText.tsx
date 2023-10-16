import { View, Text } from 'react-native'
import React from 'react'
import { formatDate } from '@/utils/utils'

interface Props {
  time: string
}

const TimeText = ({ time }: Props) => {
  return (
    <View>
      <Text className="color-surfaceVariant text-xs">{formatDate(time)}</Text>
    </View>
  )
}

export default TimeText
