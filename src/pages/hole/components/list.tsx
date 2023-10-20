import {
  FlatList,
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
import { MyRefreshControl } from '@/components/RefreshControl'
import { UseInfiniteQueryResult } from '@tanstack/react-query'
import { flatInfiniteQueryData } from '@/utils/utils'
import { useNavigation } from '@react-navigation/native'
import { AnimateHolePost } from '@/pages/hole/components/AnimateHolePost'
import { AnimateToTop } from '@/pages/hole/components/AnimateToTop'

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

  const [refreshing, setRefreshing] = useState(false)
  const { data: flatData, isEmpty } = flatInfiniteQueryData(data)

  const onLoadMore = async () => {
    if (!hasNextPage) return

    await fetchNextPage()
  }

  const onRefresh = () => {
    setRefreshing(true)

    invalidateQuery()
    setRefreshing(false)
  }

  const navigation = useNavigation()
  const go = (id: number) => {
    // @ts-ignore
    navigation.navigate('hole', {
      screen: 'detail',
      params: {
        id,
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
  const goTop = () => {
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
            goTop={goTop}
          ></AnimateToTop>
        </View>

        {isSuccess && (
          <FlatList
            ref={listRef}
            data={flatData}
            ListFooterComponent={() => (
              <LoadMore
                text={'没有更多帖子了哦'}
                hasNextPage={false}
              ></LoadMore>
            )}
            renderItem={({ item }) => {
              return item.map((e: any) => (
                <HoleInfo data={e} key={e.id} onPress={() => go(e.id)} />
              ))
            }}
            refreshing={refreshing}
            refreshControl={
              <MyRefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onEndReachedThreshold={0.1}
            onEndReached={onLoadMore}
            onScroll={(event) => {
              scrollHandler(event)
            }}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        )}
      </View>
    </Page>
  )
}

export default HoleList
