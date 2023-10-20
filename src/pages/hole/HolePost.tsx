import { FullPage } from '@/components/Page'
import { View } from 'react-native'
import { BottomActions } from '@/pages/hole/components/BottomActions'
import { useEffect, useMemo, useState } from 'react'
import { WindowHeight } from '@/utils/utils'
import useKeyboardHeight from '@/hooks/useKeyboardHeight'
import { HolePostContext, PostContext } from '@/shared/context/HolePostContext'
import { PostHeader } from '@/pages/hole/components/PostHeader'
import { PostBody } from '@/pages/hole/components/PostBody'
import { UploadHoleImgRequest } from '@/apis/hole'

export function HolePost() {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [bottomHeight, setBottomHeight] = useState(0)
  const keyboardHeight = useKeyboardHeight()
  const inputHeight = useMemo(
    () => WindowHeight - keyboardHeight - headerHeight - bottomHeight,
    [headerHeight, bottomHeight, keyboardHeight],
  )

  return (
    <PostContext.Provider value={HolePostContext()}>
      <FullPage>
        <View onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}>
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
    </PostContext.Provider>
  )
}
