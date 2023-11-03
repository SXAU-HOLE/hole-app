import { FullPage } from '@/components/Page'
import { View } from 'react-native'
import { BottomActions } from '@/pages/hole/post/components/BottomActions'
import { useMemo, useState } from 'react'
import { WindowHeight } from '@/utils/utils'
import useKeyboardHeight from '@/hooks/useKeyboardHeight'
import { HolePostContext } from '@/shared/context/HolePostContext'
import { PostHeader } from '@/pages/hole/post/components/PostHeader'
import { PostBody } from '@/pages/hole/post/components/PostBody'

export function HolePost() {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [bottomHeight, setBottomHeight] = useState(0)
  const keyboardHeight = useKeyboardHeight()
  const inputHeight = useMemo(
    () => WindowHeight - keyboardHeight - headerHeight - bottomHeight,
    [headerHeight, bottomHeight, keyboardHeight],
  )

  return (
    <HolePostContext>
      <FullPage>
        <View
          onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
          className={'px-3'}
        >
          <PostHeader />
        </View>

        <View>
          <PostBody height={inputHeight} />
        </View>

        <View
          className={'bg-white'}
          onLayout={(e) => setBottomHeight(e.nativeEvent.layout.height)}
        >
          <BottomActions></BottomActions>
        </View>
      </FullPage>
    </HolePostContext>
  )
}
