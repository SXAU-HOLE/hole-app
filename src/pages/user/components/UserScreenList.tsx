import React, { ReactComponentElement } from 'react'
import { Svg } from '@/components/Svg/Svg'
import Edit from '@/assets/svg/Interface/Edit.svg'
import Message from '@/assets/svg/Message.svg'
import Like from '@/assets/svg/Like.svg'
import { ArrowBar } from '@/pages/user/components/ArrowBar'

interface Screen {
  icon: ReactComponentElement<any>
  text: string
  onPress?: string
}

const ScreenList: Screen[] = [
  {
    icon: <Svg SvgComponent={Edit} size={24} />,
    text: '我发布的',
  },
  {
    icon: <Svg SvgComponent={Message} size={24} />,
    text: '我评论的',
  },
  {
    icon: <Svg SvgComponent={Like} size={24} />,
    text: '我点赞的',
  },
]

export function UserScreenList() {
  return (
    <>
      {ScreenList.map((screen, index) => (
        <ArrowBar key={index} {...screen} />
      ))}
    </>
  )
}
