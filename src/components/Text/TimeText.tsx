import { Text, View } from 'react-native'
import React from 'react'
import { formatDate } from '@/utils/utils'

interface Props {
  time: string
  isDay?: boolean
}

const TimeText = ({ time, isDay }: Props) => {
  return (
    <View>
      <Text className="color-surfaceVariant text-xs">
        {formatDate(time, isDay)}
      </Text>
    </View>
  )
}

export default TimeText
