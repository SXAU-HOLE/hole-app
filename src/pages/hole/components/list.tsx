import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  View,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { useTheme } from 'react-native-paper'
import Page from '@/components/Page'
import { HoleInfo } from './HoleInfo'
import { LoadMore } from '@/components/LoadMore'
import { UseInfiniteQueryResult } from '@tanstack/react-query'
import { flatInfiniteQueryData } from '@/utils/utils'
import { useNavigation } from '@react-navigation/native'
import { AnimateHolePost } from '@/pages/hole/components/AnimateHolePost'
import { AnimateToTop } from '@/pages/hole/components/AnimateToTop'
import { SkeletonLoading } from '@/components/Skeleton'
import RefreshingFlatList from '@/components/RefreshingFlatList'
import { Empty } from '@/components/Empty'

type HoleListProps = UseInfiniteQueryResult & {
  invalidateQuery: () => any
}

const HoleList = ({
  isSuccess,
  data,
  hasNextPage,
  fetchNextPage,
  invalidateQuery,
}: HoleListProps) => {
  const theme = useTheme()

  const { data: flatData, isEmpty } = flatInfiniteQueryData<IHole>(data)

  const navigation = useNavigation()
  const go = (id: number | string) => {
    // @ts-ignore
    navigation.navigate('hole', {
      screen: 'detail',
      params: {
        screen: 'index',
        params: {
          id,
        },
      },
    })
  }

  const [PostFABOffset, setPostFABOffset] = useState(0)
  const [isToTopFABVisible, setToTopFABVisible] = useState(false)

  function scrollHandler(event: NativeSyntheticEvent<NativeScrollEvent>) {
    if (event.nativeEvent.contentOffset.y > 500) {
      setPostFABOffset(-70)
      setToTopFABVisible(true)
    } else {
      setToTopFABVisible(false)
      setPostFABOffset(0)
    }
  }

  const listRef = useRef<any>()
  const scrollToTopHandler = () => {
    listRef.current?.scrollToOffset({ offset: 0, animated: true })
  }

  return (
    <Page>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.background}
      />

      <View className={'h-full'}>
        <View className={'absolute z-[1] bottom-32 right-1'}>
          <AnimateHolePost offset={PostFABOffset} />
          <AnimateToTop
            visible={isToTopFABVisible}
            goTop={scrollToTopHandler}
          ></AnimateToTop>
        </View>
        {isSuccess ? (
          <RefreshingFlatList<IHole>
            ref={listRef}
            onScroll={(event) => scrollHandler(event)}
            data={flatData}
            renderItem={({ item }) => (
              <HoleInfo key={item.id} data={item} onPress={() => go(item.id)} />
            )}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            onTopRefresh={invalidateQuery}
            ListEmptyComponent={<Empty />}
            ListFooterComponent={() =>
              isEmpty ? (
                <></>
              ) : (
                <LoadMore text={'没有更多帖子了哦'} hasNextPage={hasNextPage} />
              )
            }
          />
        ) : (
          <SkeletonLoading nums={3}></SkeletonLoading>
        )}
      </View>
    </Page>
  )
}

export default HoleList
