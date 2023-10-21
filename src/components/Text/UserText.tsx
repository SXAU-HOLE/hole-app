import { Text } from 'react-native-paper'
import React from 'react'

interface Props {
  username: string
}

export function UserText(props: Props) {
  return <Text className={'text-black/60'}>{props.username}</Text>
}
