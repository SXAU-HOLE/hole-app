import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { isImageFile } from '@/utils/utils'

interface Props {
  url: string

  size?: number

  mode?: 'sm' | 'md' | 'lg'

  style?: StyleProp<ViewStyle>
}

const UserAvatar = ({ mode = 'sm', ...props }: Props) => {
  const modeSize = mode === 'sm' ? 30 : mode === 'md' ? 40 : 55

  return (
    <Avatar.Image
      size={props.size || modeSize}
      source={{
        uri: isImageFile(props.url) ? `${props.url}` : `${props.url}.png`,
      }}
      {...props}
    />
  )
}

export default UserAvatar
