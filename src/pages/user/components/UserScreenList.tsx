import React, { ReactComponentElement } from 'react'
import { Svg } from '@/components/Svg/Svg'
import Message from '@/assets/svg/Message.svg'
import Like from '@/assets/svg/Like.svg'
import { ArrowBar } from '@/pages/user/components/ArrowBar'
import { useUserProfileRoute } from '@/hooks/route/useUserProfileRoute'

interface Screen {
  icon: ReactComponentElement<any>
  text: string
  onPress?: () => any
}

export function UserScreenList() {
  const route = useUserProfileRoute()
  const ScreenList: Screen[] = [
    // {
    //   icon: <Svg SvgComponent={Edit} size={24} />,
    //   text: '我发布的',
    // },
    {
      icon: <Svg SvgComponent={Message} size={24} />,
      text: '我评论的',
      onPress: route.goCommentScreen,
    },
    {
      icon: <Svg SvgComponent={Like} size={24} />,
      text: '我点赞的',
      onPress: route.goLikedScreen,
    },
  ]

  return (
    <>
      {ScreenList.map((screen, index) => (
        <ArrowBar key={index} {...screen} />
      ))}
    </>
  )
}
