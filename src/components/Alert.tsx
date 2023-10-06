import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

interface IProps {
  title: string
  type: 'success' | 'warning' | 'info' | 'error'
}

const Alert: React.FC<IProps> = ({ title, type }) => {
  return (
    <View
      className={
        'bg-[#38864050] rounded-xl flex flex-row space-x-2 p-3 items-center'
      }
    >
      <Icon name="info" size={25} color={'#116031'} />
      <Text className={`color-[#116031] pr-4`}>{title}</Text>
    </View>
  )
}

export default Alert
