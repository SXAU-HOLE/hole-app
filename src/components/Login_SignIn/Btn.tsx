import React from 'react'
import {
  StyledView,
  StyledText,
  StyledTouchbleOpacity,
} from '@/components/Styled'
import * as COLORS from '@/shared/constants/COLOR'
type prop = {
  title: string
  className: string
  style?: any
  onPress?: any
}
export default function Btn(props: prop) {
  return (
    <StyledTouchbleOpacity
      className={props.className}
      style={props.style}
      onPress={props.onPress}
    >
      <StyledText className="text-white">{props.title}</StyledText>
    </StyledTouchbleOpacity>
  )
}
